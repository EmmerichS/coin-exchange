import React from "react";
import CoinList from './Components/CoinList/CoinList.js';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import Head from './Components/Head/Head.js';
import styled from 'styled-components';

const Div = styled.div `
    background-color: rgb(7, 59, 75);
`;

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
            <Div>
                <Head />
                <AccountBalance amount={this.state.balance} />
                <CoinList coinData={this.state.coinData} />
            </Div>
        );
    }
}

export default App;
