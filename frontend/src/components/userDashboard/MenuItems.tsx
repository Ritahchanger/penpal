
import {
    ShoppingBag,
    Clock,
    FileSearch,
    Edit,
    XCircle,
    Wallet,
  } from "lucide-react";
  
const menuItems = [
    {
      href: "",
      label: "GET ORDERS",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    { href: "", label: "IN PROGRESS", icon: <Clock className="w-5 h-5" /> },
    { href: "", label: "IN REVIEW", icon: <FileSearch className="w-5 h-5" /> },
    { href: "", label: "IN REVISION", icon: <Edit className="w-5 h-5" /> },
    { href: "", label: "CANCELLED", icon: <XCircle className="w-5 h-5" /> },
    { href: "", label: "WITHDRAWALS", icon: <Wallet className="w-5 h-5" /> },
  ];



  export  { menuItems }