import React from 'react';
import { Menu } from 'antd';
import MenuConfig from './../../resource/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;
const NavLeft = () => {
  const renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return <SubMenu title={item.title} key={item.key}>
          {renderMenu(item.children)}
        </SubMenu>
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }
  const MenuTreeNode = renderMenu(MenuConfig);
  return (
    <div>
      <div className='logo'>
        <img src="/assets/logo-ant.svg" alt="" />
        <h1>Imooc MS</h1>
      </div>
      <Menu theme='dark'>
        {MenuTreeNode}
      </Menu>
    </div>
  );
}

export default NavLeft;