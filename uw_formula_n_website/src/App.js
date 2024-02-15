import logo from './logo.svg';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CustomButton from './components/CustomButton';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3.5rem',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2.5rem',
    },
    h5: {
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontSize: '1.5rem',
    },
    subtitle2: {
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1.25rem',
    },
    body2: {
      fontSize: '1rem',
    },
  }
});






function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <CustomButton text="Click me" onClick={() => alert('You clicked me!')} style={{ backgroundColor: 'red', color: 'white' }} />
      </header>

      </ThemeProvider>

    </div>
  );
}

export default App;
