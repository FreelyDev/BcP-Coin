import ReactDOM from 'react-dom';
import App from './App';
import Web3RainbowKitProvider from 'hooks/Web3RainbowKitProvider';
import ActiveWeb3Provider from 'hooks/useActiveWeb3';
import reportWebVitals from "./reportWebVitals";
import ContractReadProvider from 'context/useContractRead';
import { LoadingProvider } from 'context/LoadingContext';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {  mainnet, pulsechain } from 'wagmi/chains'
import { connectorsForWallets, darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import posthog from 'posthog-js'
import {
  walletConnectWallet,
  trustWallet,
  metaMaskWallet,
  coinbaseWallet
} from '@rainbow-me/rainbowkit/wallets'
posthog.init('phc_bPAlJlXGuxyy4VpDpH60O1frpbneCmHtzjc9E05gEho', { api_host: 'https://app.posthog.com' });

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, pulsechain],
  [publicProvider()]
)

const projectId = process.env.REACT_APP_PROJECT_ID || 'YOUR_PROJECT_ID'
const appName = "MONKE";

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      coinbaseWallet({ appName, chains })
    ],
  },
])

// @ts-ignore
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

ReactDOM.render(
  <Web3RainbowKitProvider>
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains} showRecentTransactions={true} theme={darkTheme()}>
      <LoadingProvider>
        <ActiveWeb3Provider>
          <ContractReadProvider>
            <App />
          </ContractReadProvider>
        </ActiveWeb3Provider>
      </LoadingProvider>
      </RainbowKitProvider>
      </WagmiConfig>
  </Web3RainbowKitProvider>,
  document.getElementById('root')
);

reportWebVitals();