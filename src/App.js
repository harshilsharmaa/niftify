import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './utilities/store';
import '@rainbow-me/rainbowkit/styles.css';
import {wagmiConfig, chains} from './rainboKitConfig'
import {
    RainbowKitProvider,
    Theme 
} from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';


function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} >
          <Provider store={store}>
            <Body />
            <Footer />
          </Provider>

        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
