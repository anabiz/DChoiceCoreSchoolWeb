"use client";

import dynamic from 'next/dynamic' 
const SeminarDashboard = dynamic(() => import('@/components/Seminar/SeminarDashboard'),{ ssr: false })
import { useEffect, useState } from "react";

const CheckoutPage = () => {

  return (
    <> 
      <SeminarDashboard />
    </>
  );
};

export default CheckoutPage;
