import './App.css'
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import Home from "./pages/Home";
import AddPatient from './pages/Forms/AddPatient';
import DischargedForm from './pages/Forms/Discharged';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from "./pages/Routes"
import Tabs from "./pages/Dashboard/Tabs"


export default function App() {

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#c93ab5"
      }
    }
  });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

