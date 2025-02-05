import React from 'react'
import { TabContainer } from './TabContainer';
import { TabContent } from './TabContent';
import { TabPane } from './TabPane';

const Tab: React.FC = () => {
  throw new Error(
    ' The `Tab` component is not meant to be rendered! ' +
      "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " +
      'For custom tabs components use TabPane and TabsContainer directly',
  );
};


export default Object.assign(Tab, {
  Container: TabContainer,
  Content: TabContent,
  Pane: TabPane,
});
