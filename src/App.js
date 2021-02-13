import React from "react";
import './App.css';
import CoinList from './Components/CoinList/CoinList.js';
import logo from './logo.svg';
import AccountBalance from './Components/AccountBalance/AccountBalance';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 10000.00,
            coinData: [
                {
                    name: "Bitcoin",
                    ticker: "BTC",
                    price: 27721.52
                },
                {
                    name: "Ethereum",
                    ticker: "ETH",
                    price: 1083.86
                },
                {
                    name: "Litecoin",
                    ticker:"LTC",
                    price: 106.68
                },
                {
                    name: "Monero",
                    ticker: "XMR",
                    price: 120.12
                },
                {
                    name: "Bitcoin Cash",
                    ticker: "BCH",
                    price: 438.43
                }
            ]
        }       
    }
    render () {
        return (
            <div>
               <header id="header">
                    <img src={logo} alt="react logo" />
                    <h1>Coin Exchange</h1>
                </header>
                    <AccountBalance amount={this.state.balance} />
                    <CoinList coinData={this.state.coinData} />
            </div>
        );
    }
}

export default App;
