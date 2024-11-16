import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Registration from '../Registration/Registration';
import Login from '../Login/Login'


const LoginRegTabs = () => {
    return (
        <Tabs>
    <div className='flex justify-center items-center mx-auto mt-8'>
        <TabList>
        <Tab>LogIn</Tab>
        <Tab>Registration</Tab>
        </TabList>
    </div>

    <TabPanel>
      <Login></Login>
    </TabPanel>
    <TabPanel>
      <Registration></Registration>
    </TabPanel>
  </Tabs>
    );
};

export default LoginRegTabs;