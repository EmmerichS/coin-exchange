import React from "react";
import CoinList from './Components/CoinList/CoinList.js';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import Head from './Components/Head/Head.js';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div `
    background-color: rgb(7, 59, 75);
`;

const COIN_COUNT = 10;

class App extends React.Component {
    state = {
        balance: 10000.00,
        showBalance: true,
        coinData: [
            /*
            {
                name: "Bitcoin",
                ticker: "BTC",
                balance: 2,
                price: 27721.52
            },
            {
                name: "Ethereum",
                ticker: "ETH",
                balance: 10,
                price: 1083.86
            },
            {
                name: "Litecoin",
                ticker:"LTC",
                balance: 20,
                price: 106.68
            },
            {
                name: "Monero",
                ticker: "XMR",
                balance: 15,
                price: 120.12
            },
            {
                name: "Bitcoin Cash",
                ticker: "BCH",
                balance: 0,
                price: 438.43
            }
            */
        ]
    } 

    componentDidMount = () => {
        axios.get("https://api.coinpaprika.com/v1/coins")
            .then( response => {
               let coinData = response.data.slice(0, 10).map( function(coin) {
                    return {
                        kex: coin.id,
                        name: coin.name,
                        ticker: coin.symbol,
                        balance: 0,
                        price: 0
                    }
                })
                console.log("Setting state")
                this.setState({ coinData })
                console.log("Setting state complete")
            })
            console.log("Component did mount")
            debugger;
    }
 
    handleRefresh = (valueChangeTicker) => {

        const newCoinData = this.state.coinData.map(function (values)  {
            let newValues = { ...values };
            if(valueChangeTicker === values.ticker) {
                //const randomPercentage = 0.995 + Math.random()*0.01;
                newValues.price += 3//* randomPercentage
            }
            return newValues;
            });

        this.setState({coinData: newCoinData})
    }
    hideBalance = () => {
        this.setState ( function (oldState) {
            return {
                ...oldState,
                showBalance: !oldState.showBalance
            }
        });
    }
    render () {
        return (
            <Div>
                <Head />
                <AccountBalance amount={this.state.balance} 
                showBalance={this.state.showBalance}
                hideBalance={this.hideBalance} />
                <CoinList coinData={this.state.coinData} 
                showBalance={this.state.showBalance}
                handleRefresh={this.handleRefresh} />
            </Div>
        );
    }
}

export default App;
