import React from 'react';
import ReactDom from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId,ThirdwebProvider} from '@thirdweb-dev/react';
import { XrpLedgerEvmDevnetSidechain } from "@thirdweb-dev/chains";
import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={ XrpLedgerEvmDevnetSidechain }
    clientId="582b6e63d82b727f980ae9753e8d0ea3">
        <Router>
            <StateContextProvider>
            <App/>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)