import { useState } from "react";
import Header from "./Header";
import { client } from "@/shopify/client";

function Layout({ children, showBanner }) {


  return (
    <div>
      <Header showBanner={showBanner}/>
      <main>{children}</main>
    </div>
  );
}


export default Layout;