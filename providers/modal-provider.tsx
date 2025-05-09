"use client";

import { StoreModal } from "@/components/modals/user-data-modal";
import { useEffect, useState } from "react";



export const UserDetailsProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
}