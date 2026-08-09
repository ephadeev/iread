import {FC} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import "./App.css";
import Footer from "@/widgets/Footer/ui/Footer.tsx";
import Header from "@/widgets/Header/ui/Header.tsx";
import AppRoutes from "@/pages/lib/routes.tsx";

const theme = createTheme({
    palette: {
        mode: 'dark',
        // success: {
        //     main: '#ff0000',
        // },
        background: {
            default: '#201f20',
            paper: '#333333'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: (themeParam) => `
        li {
          background-color: ${themeParam.palette.background.paper};
        }
      `,
        },
    }
});

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <AppRoutes/>
            <Footer/>
        </ThemeProvider>
    );
};

export default App;
