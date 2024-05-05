"use client";

import { Button } from "@/components/ui/button";
import { confirmAlert } from "@/utils/sweetalert";
import { signOut } from "next-auth/react";
import React from "react";

const DashboardPage = () => {
  const handleSignOut = async () => {
    const confirmed: boolean = await confirmAlert("Are you sure you want to sign out?");
    if (confirmed) signOut();
  };

  return (
    <>
      <h1 className="text-3xl">DashboardPage</h1>
      <Button variant="destructive" onClick={handleSignOut}>
        Logout
      </Button>
    </>
  );
};

export default DashboardPage;
