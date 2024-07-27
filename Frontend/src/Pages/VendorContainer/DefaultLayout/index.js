import React, { useState } from "react";
// import { Layout } from "antd";
import "antd/dist/antd.css";
import Index from "../index";
import Layout from "../../../components/Layout";


function DefaultLayout() {
  return (
    <div>
      {/* <Layout> */}

        <div >
          <Index />
        </div>
      {/* </Layout> */}
    </div>
  );
}

export default DefaultLayout;
