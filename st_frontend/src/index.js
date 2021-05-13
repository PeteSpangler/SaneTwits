import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ReactDOM from 'react-dom';
import '@fontsource/ibm-plex-mono';
import './styles/index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { Provider } from 'react-redux';
// import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  typography: {
    fontfamily: 'IBM Plex Mono',
  },
});

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
