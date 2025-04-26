import Navbar from "@/components/useraccount/Navbar";

import Sidebar from "@/components/useraccount/Sidebar";


import "./main.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      <div>
        {children}
        
      </div>
    </div>
  );
};

export default layout;
