import {
 
  TrendingUp,
  ShoppingBag,
  Clock,
  FileSearch,
  Edit,
  Eye,
  Wallet,
  UserCircle,
  Banknote,
  XCircle,
  FilePlus,
  Users,
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
  {
    href: "/user/dashboard/profile_progress",
    label: "WORK PROGRESS",
    icon: <TrendingUp className="w-5 h-5" />,
  },
];


const adminMenuItems = [
  {
    href: "/admin/dashboard/add-work",
    label: "Add Work",
    icon: <FilePlus className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/writers",
    label: "Writers",
    icon: <Users className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/unassigned",
    label: "Unassigned",
    icon: <Users className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/in-progress",
    label: "In Progress",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/orders-adjustment",
    label: "Orders Adjustment",
    icon: <FileSearch className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/drafts",
    label: "Drafts",
    icon: <Edit className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/in-review",
    label: "In Review",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/completed",
    label: "Completed",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/in-revision",
    label: "In Revision",
    icon: <UserCircle className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/withdrawals",
    label: "Withdrawals",
    icon: <Banknote className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/cancelled",
    label: "Cancelled",
    icon: <XCircle className="w-5 h-5" />,
  },
  {
    href: "/admin/dashboard/application",
    label: "Applications",
    icon: <FileSearch className="w-5 h-5" />,
  },
];





export { menuItems,adminMenuItems };
