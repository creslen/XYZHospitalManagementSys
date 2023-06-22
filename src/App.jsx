import './App.css'
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import Home from "./pages/Home";
import AddPatient from './pages/Forms/AddPatient';
import DischargedForm from './pages/Forms/Discharged';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from "./pages/Routes"
import Tabs from "./pages/Dashboard/Tabs"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#8e7ffb"
      }
    }
  });

  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

