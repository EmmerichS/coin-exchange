import React, { useState, useEffect } from "react";
import CoinList from './Components/CoinList/CoinList.js';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import Head from './Components/Head/Head.js';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div `
    background-color: rgb(7, 59, 75);
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(3));

function App(props) {
    /*
    state = {
        balance: 10000.00,
        showBalance: true,
        coinData: []
    }
    */ 
    const [balance, setBalance] = useState(10000.00);
    const [showBalance, setShowBalance] = useState(true);
    const [coinData, setCoinData] = useState([]);

    const componentDidMount = async () => {
        let response = await axios.get("https://api.coinpaprika.com/v1/coins")
        let coinId = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
        const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
        const promises = coinId.map(id => axios.get(tickerURL + id));
        const coinData = await Promise.all(promises);
        const coinPriceData = coinData.map(function(response) {
            const coin = response.data;
            return {
               key: coin.id,
               name: coin.name,
               ticker: coin.symbol,
               balance: 0,
               price: formatPrice(coin.quotes.USD.price)
           }
        })
        setCoinData(coinPriceData);
       }

    useEffect(function() {
        if(coinData.length === 0) {
            //componentDidMount
            componentDidMount();
        }else{
            //componentDidUpdate
        }
    }); 

    const handleRefresh = async (valueChangeId) => {
        const tickerURL = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
        const response = await axios.get(tickerURL);
        debugger;
        const newPrice = formatPrice(response.data.quotes.USD.price);
        const newCoinData = coinData.map(function (values)  {
            let newValues = { ...values };
            if(valueChangeId === values.key) {           
                newValues.price = newPrice;
            }
            return newValues;
            });
        setCoinData(newCoinData);
    }
 
    const hideBalance = () => {
        setShowBalance( oldValue => !oldValue );
    }

    return (
        <Div>
            <Head />
            <AccountBalance amount={balance} 
            showBalance={showBalance}
            hideBalance={hideBalance} />
            <CoinList coinData={coinData} 
            showBalance={showBalance}
            handleRefresh={handleRefresh} />
        </Div>
    );
}

export default App;

/*class App extends React.Component {
    state = {
        balance: 10000.00,
        showBalance: true,
        coinData: [
            //From here...
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
           //...to here is commented out in the actual app 
        ]
    } 

    componentDidMount = async () => {
     let response = await axios.get("https://api.coinpaprika.com/v1/coins")
     let coinId = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
     const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
     const promises = coinId.map(id => axios.get(tickerURL + id));
     const coinData = await Promise.all(promises);
     const coinPriceData = coinData.map(function(response) {
         const coin = response.data;
         return {
            key: coin.id,
            name: coin.name,
            ticker: coin.symbol,
            balance: 0,
            price: formatPrice(coin.quotes.USD.price)
        }
     })
     this.setState({ coinData: coinPriceData })
    } 

    handleRefresh = async (valueChangeId) => {
        const tickerURL = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
        const response = await axios.get(tickerURL);
        const newPrice = formatPrice(response.data.quotes.USD.price);
        const newCoinData = this.state.coinData.map(function (values)  {
            let newValues = { ...values };
            if(valueChangeId === values.key) {           
                newValues.price = newPrice;
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
*/
