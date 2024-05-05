import Link from "next/link";
import { Button } from "../ui/button";

type AuthLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <section className="bg-slate-800 p-4 min-h-screen flex justify-center items-center flex-col text-white">
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      {children}
    </section>
  );
};

export default AuthLayout;
