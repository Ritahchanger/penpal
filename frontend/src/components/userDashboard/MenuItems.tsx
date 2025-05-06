import {
  ShoppingBag,
  Clock,
  FileSearch,
  Edit,
  XCircle,
  Wallet,
  UserCircle,
} from "lucide-react";

const menuItems = [
  {
    href: "/user/dashboard/orders/getorders",
    label: "UNBID ORDERS",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    href: "/user/dashboard/orders/mybids",
    label: "MY BIDS",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    href: "/user/dashboard/orders/inprogress",
    label: "IN PROGRESS",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    href: "/user/dashboard/orders/inreview",
    label: "IN REVIEW",
    icon: <FileSearch className="w-5 h-5" />,
  },
  {
    href: "/user/dashboard/orders/inrevision",
    label: "IN REVISION",
    icon: <Edit className="w-5 h-5" />,
  },
  {
    href: "/user/dashboard/orders/cancelled",
    label: "CANCELLED",
    icon: <XCircle className="w-5 h-5" />,
  },
  {
    href: "/user/dashboard/withdrawals",
    label: "WITHDRAWALS",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    href: "/user/dashboard/profile",
    label: "PROFILE",
    icon: <UserCircle className="w-5 h-5" />,
  },
];

export { menuItems };
