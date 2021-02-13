import React, { Component } from 'react';
import Coin from '../Coin Component/Coin.js';

export default class CoinList extends Component {
 render() {
  return (
    <table>
     <thead>
       <tr>
         <th>Name</th>
         <th>Ticker</th>
         <th>Price</th>
       </tr>
     </thead>
     <tbody>
       {
         this.props.coinData.map( ({name, ticker, price}) => 
         <Coin key={ticker} name={name} ticker={ticker} price={price} />
         )
       }          
      </tbody>
    </table>
  )
 }
}
