import React from 'react';
import Coin from '../Coin Component/Coin.js';
import styled from 'styled-components';

const Table = styled.table `
  color: rgb(166, 187, 189);
`;

const Th = styled.th `
  width: 33.33vw;
  font-size: 2em;
`;

export default function CoinList(props) {

  return (
    <Table>
     <thead>
       <tr>
         <Th>Name</Th>
         <Th>Ticker</Th>
         <Th>Price</Th>
         {props.showBalance ? <Th>Balance</Th> : null } 
         <Th>Actions</Th>
       </tr>
     </thead>
     <tbody>
       {
         props.coinData.map( ({key, name, ticker, balance, price}) => 
         <Coin key={key}
               handleRefresh={props.handleRefresh} 
               name={name} 
               ticker={ticker} 
               showBalance={props.showBalance}
               balance={balance}
               price={price}
               tickerId={key} />
                )
       }          
      </tbody>
    </Table>
  ) 
}
