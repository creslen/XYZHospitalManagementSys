import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CancerCard from './DepartmentCards/CancerCard';
import PathologyCard from './DepartmentCards/PathologyCard';
import OrthopedicCard from './DepartmentCards/OrthopedicCard';
import Home from './Home'
import PrimarySearchAppBar from './Home';
import DentalCard from './DepartmentCards/DentalCard';
import BloodBlankCard from './DepartmentCards/BloodBankCard';

export default function HomeTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Home" value="home" />
            <Tab label="Departments" value="dept" />
            <Tab label="Services" value="service" />
          </TabList>
        </Box>
        <TabPanel value="home"></TabPanel>
        <TabPanel value="dept">
            <div className='homecard'>
                <CancerCard />
                <PathologyCard />
                <OrthopedicCard />
                <DentalCard />
                <BloodBlankCard />
            </div>
        </TabPanel>
        <TabPanel value="service">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
