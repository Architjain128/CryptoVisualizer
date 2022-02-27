import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CryptoPage from './pages/cryptopage';

let webSocLink='wss://stream.binance.com:9443/ws/btcusdt@trade'
let label="BTC USDT Chart"

function App() {
    return (
        <div>
            <div class="header">
                <h2 class="text-center">Archit Jain's Crypto Viewer</h2>
            </div>
            <br/>
            {/* main page which is responsible for rendering the chart */}
            <CryptoPage label={label} webSocLink={webSocLink}/>
        </div>
    );
} 

export default App;
