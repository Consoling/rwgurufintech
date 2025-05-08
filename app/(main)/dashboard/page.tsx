"use client";

import { AppSidebar } from "@/components/dashboard/sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SignOutButton, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

const Dashboard = () => {
  // const [isMounted, setIsMounted] = React.useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  const { user } = useUser();

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader user={user} />
        <div className="bg-black "></div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
