import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from "react-redux";

import Routes from '../../config/routes';
import GlobalStyle from '../../styles/global.js';

const ContainerApp: React.FC = () => {
   const {theme} = useSelector((state) => state.global);
   return (
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
   )
}

export default ContainerApp;
