"use client";
import { stopPolling } from "@/utils/helpers";
import { useEffect, useState, useRef } from "react";
import { getSession } from "@/utils/cookies";
import { useCheckoutStore } from "@/api/store/checkout";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

const PollingComponent = ({ paymentReference, setHasPaid }: { paymentReference: string, setHasPaid: (value: boolean) => void }) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const CompleteCheckout = useCheckoutStore((state) => state.CompleteCheckout);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const modalObserverRef = useRef<{ disconnect: () => void } | null>(null);

  // Detect Paystack modal close
  const detectPaystackModalClose = (onClose: () => void) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const removedNodes = Array.from(mutation.removedNodes);
          const paystackModal = removedNodes.find((node: any) => 
            node.classList?.contains('paystack-form') || 
            node.id?.includes('paystack') ||
            node.querySelector?.('[class*="paystack"]') ||
            node.querySelector?.('[id*="paystack"]')
          );
          
          if (paystackModal) {
            console.log('Paystack modal closed - checking status immediately');
            onClose();
          }
        }
      });
    });

    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'id']
    });

    return {
      disconnect: () => observer.disconnect()
    };
  };

  // Immediate status check when modal closes
  const checkTransactionStatusImmediately = async () => {
    try {
      if (!paymentReference) return;
      
      console.log('Immediate status check for reference:', paymentReference);
      const result = await CompleteCheckout(paymentReference);
      
      if (result) {
        setHasPaid(true);
        setIsSuccessOpen(true);
        setLoading(false);
        stopPolling(pollingIntervalRef.current);
        toast.success('Payment completed successfully!');
      } else {
        console.log('Payment still pending...');
      }
    } catch (error) {
      console.error('Immediate status check error:', error);
    }
  };

  const startPolling = () => {
    // Clear any existing polling
    stopPolling(pollingIntervalRef.current);
    
    // Set up modal close detection
    modalObserverRef.current = detectPaystackModalClose(checkTransactionStatusImmediately);

    pollingIntervalRef.current = setInterval(async () => {
      try {

        if(paymentReference){
          const result = await CompleteCheckout(paymentReference);
          
          if (result == true) {
            setHasPaid(true);
            setIsSuccessOpen(true);
            setLoading(false);
            stopPolling(pollingIntervalRef.current);
            if (modalObserverRef.current) {
              modalObserverRef.current.disconnect();
            }
            toast.success('Payment completed successfully!');
          } else {
            console.log('Payment still pending...');
          }
        } else {
          console.log('Payment still pending...');
        }
        
      } catch (error) {
        setLoading(false);
        console.error("Error occurred during polling:", error);
        toast.error('Error checking payment status');
      }
    }, 5000); // Poll every 5 seconds

    // Auto-stop after 30 minutes
    setTimeout(() => {
      if (pollingIntervalRef.current) {
        stopPolling(pollingIntervalRef.current);
        setLoading(false);
        if (modalObserverRef.current) {
          modalObserverRef.current.disconnect();
        }
        toast.info('Payment verification timeout. Please check your email for confirmation.');
      }
    }, 30 * 60 * 1000); // 30 minutes
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    startPolling();
    
    return () => {
      stopPolling(pollingIntervalRef.current);
      if (modalObserverRef.current) {
        modalObserverRef.current.disconnect();
      }
    };
  }, [paymentReference]);

  return (  
    <div>  
      {loading ? <Spinner /> :
        null
      }
    </div>
  );
};

export default PollingComponent;