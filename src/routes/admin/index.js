import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Button } from "antd";
// import "@/routes/home/index.less";
import Load from "@/tools/load";

// const Index = Load(() => import("@/page/index"));
const Admin = Load(() => import("@/components/admin"));

const AdminRouter = () => {
  const someVariable = true;
  return (
    <Switch>
      {/* these are good */}
      {/* <B/> */}
       <Route component={Admin} />
      {/* <Redirect to="/login"  /> */}
    </Switch>
  );
};
export default AdminRouter;
