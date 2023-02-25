import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';

import { App } from './pages/home';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { client } from './configs/global/react-query';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
