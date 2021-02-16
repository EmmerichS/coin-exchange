import React, { Component } from 'react';
import Coin from '../Coin Component/Coin.js';
import styled from 'styled-components';

const Table = styled.table `
  color: rgb(166, 187, 189);
`;

const Th = styled.th `
  width: 33.33vw;
  font-size: 2em;
`;

export default class CoinList extends Component {
 render() {
  return (
    <Table>
     <thead>
       <tr>
         <Th>Name</Th>
         <Th>Ticker</Th>
         <Th>Price</Th>
         {this.props.showBalance ? <Th>Balance</Th> : null } 
         <Th>Actions</Th>
       </tr>
     </thead>
     <tbody>
       {
         this.props.coinData.map( ({name, ticker, balance, price}) => 
         <Coin key={ticker}
               handleRefresh={this.props.handleRefresh} 
               name={name} 
               ticker={ticker} 
               showBalance={this.props.showBalance}
               balance={balance}
               price={price} />
                )
       }          
      </tbody>
    </Table>
  )
 }
}
