import { AccountBalanceWallet, Apps, Bed, LocalHotel, LogoutRounded, People } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import Logo from '/xyz.png';
import AddPatient from '../CardButtons/AddPatient';
import AddDoctor from '../CardButtons/AddDoctor'
import PatientCard from './PatientCard';
import DoctorCard from './DoctorCard';
import RoomCard from './RoomCard';
import FeesCard from './FeesCard';
import DepartmentCard from './DepartmentCard';



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const handleLoginClick = () => {
  history.push('/home');
};

export default function AdminDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };


  return (

    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
  
              <Typography variant="h6" noWrap component="div" sx={{ mt: 1 }}>
                Welcome Admin!
              </Typography>
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" 
                  color="inherit"
                  onClick={handleLoginClick}
                  href="/home">
                  <Typography>Logout</Typography>
                  <LogoutRounded />
              </IconButton>

          </Box>
          </Box>
        </Toolbar>
      </AppBar>
    <div className='cards'>
      <DoctorCard />
      <PatientCard />
      <RoomCard />
      <FeesCard />
      <DepartmentCard />
    </div>
    </Box>
  );
}
