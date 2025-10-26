import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from 'zustand/middleware';
import { toast } from "react-toastify";
import axiosInstance from "@/services/axiosApi";
import ToastComponent from "@/components/Common/ToastComponent";

interface ICheckoutStore{
    hydrated: boolean,

    setHydrated(): void;
    initiateCheckoutV2(request: any, isGuest: boolean): Promise<any>;
    CompleteCheckout(paymentReference: string): Promise<any>;
}

export const useCheckoutStore = create<ICheckoutStore>()(
    persist(
        immer((set) => ({
            hydrated: false,

            setHydrated(){
                set({hydrated: true})
            },

            async initiateCheckoutV2(request: any, isGuest: boolean = false) {
                try {
                    const res = await axiosInstance.post(`/v2/Checkout/seminar-initiate`, request as any);
                    if(res.data.success){
                        return res.data.data;
                    }
                } catch (error:any) {
                    toast.error(
                        <ToastComponent
                          title="Error!"
                          body={error?.response?.data?.message || "Unable to initiate checout"}
                        />,
                        {
                          progress: undefined,
                        }
                    );
                    console.log(error);
                } 
                return null;               
            },

            async CompleteCheckout(paymentReference) {
                try {
                    const res = await axiosInstance.get(`/v2/checkout/confirm-seminar-payment?paymentRef=${paymentReference}`);
                    if(res.data.success){
                        return res.data.data;
                    }
                } catch (error:any) {
                    console.log(error);
                } 
                return null;               
            },
            
        })),
        {
            name: "checkout",
            onRehydrateStorage(){
                return (state, error) => {
                    if(!error) state?.setHydrated()
                } 
            }
        }
    )
)