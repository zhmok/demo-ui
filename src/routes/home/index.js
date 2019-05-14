import React from "react";
import { Switch, Route } from "react-router-dom";
import Load from "@/tools/load";

const Login = Load(() => import("@/page/login"));
const Index = Load(() => import("@/page/index"));
const Admin = Load(() => import("@/page/admin"));



const Home = () => {
  const someVariable = true;
  return (
    <Switch>
      {/* these are good */}
      <Route path="/" component={Admin} />
    </Switch>
  );
};

export default Home;
