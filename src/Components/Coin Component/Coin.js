import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    text-align: center;
    border: 1px rgb(166, 187, 189) ridge;
    width: 33.33vw;
    font-size: 1.5em;
`;

export default function Coin(props) {
 
    const handleClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.tickerId);
    }

    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            {props.showBalance ? <Td>{props.balance}</Td> : null} 
            <Td>            
                <button onClick={handleClick}>Refresh</button>  
            </Td>                        
        </tr>
    );   
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}