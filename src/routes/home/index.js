import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Button } from "antd";
// import "@/routes/home/index.less";
import Load from "@/tools/load";
import { BlueSkies } from "@/components/music";

// const Index = Load(() => import("@/page/index"));
// const Admin = Load(() => import("@/page/admin"));

const Home = () => {
  const someVariable = true;
  return (
    <div>
      <Switch>
        {/* these are good */}

        <Route
          path="/admin"
          render={() => {
            let pro = window.location.protocol;
            let host = window.location.host;
            let pathname = window.location.pathname;
            let n = pathname.lastIndexOf("/");
            let path = pathname.substring(0, n + 1);
            window.location.href = pro + "//" + host + path + "admin" + ".html";
            console.log(window.location.href);
          }}
        />
        <Route path="/" component={B} />
        {/* <Redirect to="/login"  /> */}
      </Switch>
      <BlueSkies />
    </div>
  );
};
export default Home;

// require('./index1.css');
const B = () => {
  let linkStyle = { marginRight: "20px" };
  // 函数跳转
  // this.context.router.push('/home');
  return (
    <div style={{ padding: "60px 80px 16px" }}>
      <Button href="#" style={linkStyle} ghost>
        展示页
      </Button>
      {/* <Button href="#" style={linkStyle} ghost>
        博客 Blok
      </Button> */}
      {/* <Button href="./admin.html" style={linkStyle} ghost>
        Admin
      </Button> */}
      <Button href="https://github.com/zhmok/demo-ui" style={linkStyle} ghost>
        GitHub
      </Button>
      <Button href="http://47.103.1.227:8080/" style={linkStyle} ghost>
        jenkins 自动部署
      </Button>
    </div>
  );
};
