import { LogoutRounded } from '@mui/icons-material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import PatientCard from './Staff/PatientCard';



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
                Welcome STAFF!
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

      
      
      <PatientCard />

    </Box>
  );
}
