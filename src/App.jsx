import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from "./pages/Routes"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#f2f2fc"
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

