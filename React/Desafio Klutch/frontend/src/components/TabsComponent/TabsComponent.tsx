import React, { FC } from "react";
import { Tabs, TabsProps } from "antd";
import * as S from "./styles";

interface ITabsProps extends TabsProps {
  tabs: {
    name: string;
    component: JSX.Element;
  }[];
}

/**
 * @description Custom tabs component used to switch tables
 * @param tabs An Array of Objects containing "name", which is the name showed at the tab and "component" which is the JSX Element rendered by the tab
 * @param defaultActiveKey Sets the default selected tab
 */

const TabsComponent: FC<ITabsProps> = ({ tabs, ...props }) => {
  return (
    <S.StyledTabs defaultActiveKey={props.defaultActiveKey}>
      {tabs.map((tab) => {
        return (
          <Tabs.TabPane tab={tab.name} key={tab.name}>
            {tab.component}
          </Tabs.TabPane>
        );
      })}
    </S.StyledTabs>
  );
};

export default TabsComponent;