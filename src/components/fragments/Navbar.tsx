"use client";

import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaHouseFloodWater } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";

const navItems = [
  { title: "Information", href: "/information", icon: <BsFillInfoCircleFill className="text-black text-xl" /> },
  { title: "Input gallon", href: "/gallon", icon: <FaHouseFloodWater className="text-black text-xl" /> },
  { title: "Spending", href: "/spending", icon: <MdOutlineAttachMoney className="text-black text-xl" /> },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      {navItems.map((item) => (
        <Link key={item.title} href={item.href}>
          <Button className={`w-full ${pathname === item.href ? "bg-yellow-500" : "bg-white"} hover:bg-yellow-500 p-1`}>
            {item.icon}
            <div className="ml-2 text-black font-semibold text-lg hidden sm:flex">{item.title}</div>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
