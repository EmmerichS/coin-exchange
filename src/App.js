import React from "react";
import './App.css';
import Coin from './Coin Component/Coin.js';
import logo from './logo.svg';
import AccountBalance from './AccountBalance/AccountBalance';

class App extends React.Component {
    render () {
        return (
            <div>
               <header id="header">
                    <img src={logo} alt="react logo" />
                    <h1>Coin Exchange</h1>
                </header>
                <section>
                    <AccountBalance amount={10000.00} />
                </section>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ticker</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Coin name="Bitcoin" ticker="BTC" price={27710.52}/>
                        <Coin name="Ethereum" ticker="ETH" price={1083.86}/> 
                        <Coin name="Litecoin" ticker="LTC" price={106.68} />  
                        <Coin name="Monero" ticker="XMR" price={120.12} />
                    </tbody>
                </table>
            </div>
        )

    }
}

export default App;
