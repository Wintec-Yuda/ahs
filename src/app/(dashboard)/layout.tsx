"use client";

import { confirmAlert } from "@/utils/sweetalert";
import { SessionProvider, signOut } from "next-auth/react";
import { TbLogout } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/fragments/Navbar";
import { Provider } from "react-redux";
import store from "@/store";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const handleSignOut = async () => {
    const confirmed: boolean = await confirmAlert("Are you sure you want to sign out?");
    if (confirmed) signOut();
  };

  return (
    <section className="flex flex-col">
      <aside className="fixed w-12 sm:w-48 h-screen bg-white bg-opacity-5 backdrop-blur-sm flex flex-col items-center justify-center sm:justify-normal py-4 px-2">
        <div className="flex flex-col justify-between w-full h-screen mt-32">
          <Navbar />
          <Button variant="destructive" onClick={handleSignOut} className="p-1">
            <TbLogout className="text-black text-xl cursor-pointer" />
            <label className="ml-2 text-black font-semibold text-lg hidden sm:flex">Logout</label>
          </Button>
        </div>
      </aside>
      <main className="overflow-hidden bg-city">
        <div className="w-[calc(100vw-3rem)] sm:w-[calc(100vw-12rem)] relative left-12 sm:left-48 bg-slate-900">
          <SessionProvider>
            <Provider store={store}>{children}</Provider>
          </SessionProvider>
        </div>
      </main>
    </section>
  );
};

export default DashboardLayout;
