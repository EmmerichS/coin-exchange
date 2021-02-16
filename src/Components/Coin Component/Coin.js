import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    text-align: center;
    border: 1px rgb(166, 187, 189) ridge;
    width: 33.33vw;
    font-size: 1.5em;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }

    render() {
        return (
            <tr>
               <Td>{this.props.name}</Td>
               <Td>{this.props.ticker}</Td>
               <Td>€{this.props.price}</Td>
               <Td>            
                    <button onClick={this.handleClick}>Refresh</button>  
               </Td>                        
            </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}