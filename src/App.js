import "./App.css";
import { WelcomePage } from "./Components/Welcome Page/WelcomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#11cb5f",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#FFA00A",
      },
      back : {
        main:"rgb(0, 0, 0)",
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <WelcomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
