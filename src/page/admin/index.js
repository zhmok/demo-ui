import React from "react";
import ReactDom from "react-dom";
import { Layout, Menu, Icon, AutoComplete } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Index = () => {
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <SearchMenu />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{ padding: 24, background: "#fff", textAlign: "center" }}
          />
          asd
        </Content>
      </Layout>
    </Layout>
  );
};
export default Index;

var menuJson = require("@/config/menu");
class SearchMenu extends React.Component {
  static propTypes = {};
  state = {
    menuJson: menuJson || [],
    showMenu: menuJson || [],
    openKeys: [],
    rootKey: []
  };


  search(v) {
    if (v) {
      let allOpen = [];
      for (let i = 0; i < this.state.showMenu.length; i++) {
        allOpen.push(i + "");
      }
      this.setState({ openKeys: allOpen });

      let newMenu = [];
      this.state.showMenu.forEach((menu, index, array) => {
        if (typeof menu.title === "string") {
          if (menu.title.indexOf(v) !== -1) {
            newMenu.push(menu);
          }
        }
      });
      this.setState({ menuJson: newMenu });
    } else {
      this.setState({ menuJson: this.state.showMenu, openKeys: [] });
    }
  }

  clickMenu({ item, key, keyPath }) {
    this.setState({
      openKeys: this.state.openKeys.length === 0 ? [key + ""] : []
    });
  }

  onOpenChange = openKeys => {
    console.log(openKeys);
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.state.rootKey.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  initialMenu(data) {
    return data.map((menu, index) => {
      this.state.rootKey.push(menu.title + index);
      if (menu.title === undefined) {
      } else if (!menu.children) {
        return (
          <Menu.Item
            key={menu.title + index}
            disabled={menu.disabled ? menu.disabled : false}
          >
            <span className="nav-text">{menu.title}</span>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={menu.title + index}
            onTitleClick={this.clickMenu}
            title={
              <span>
                <Icon type={"appstore"} />
                <span>{menu.title}</span>
              </span>
            }
          >
            {this.initialMenu(menu.children)}
          </SubMenu>
        );
      }
    });
  }

  onSelect(v) {
    console.log("onSelect", v);
  }

  render() {
    return (
      <div>
        <AutoComplete
          dataSource={[]}
          style={{ width: 180, margin: 10 }}
          onSelect={this.onSelect}
          onSearch={this.search}
          placeholder="input here1"
        />
        <Menu
          id="menu"
          theme="dark"
          mode="inline"
          selectedKeys={[]}
          //   onClick={this.clickMenu}
          onSelect={this.onSelect}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
          {this.initialMenu(this.state.menuJson)}
        </Menu>
      </div>
    );
  }
}
