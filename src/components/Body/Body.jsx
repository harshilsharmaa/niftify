import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import './body.css'
import {wagmiConfig, chains} from '../../rainboKitConfig'

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';

const Body = () => {
    return (
        <div className="body">
            <Sidebar />
                    <MainContainer />
        </div>
    )
}

export default Body;