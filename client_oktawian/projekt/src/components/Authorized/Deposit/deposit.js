import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col } from 'reactstrap';
import {Btc} from '../../../btc_graph/src/index';

export class Deposit extends Component{

    render(){
        return(     
            <div className ="HomeFund">                     
                <Container>
                    <Row>
                    
                        <Col sm={{size:12}}>
                        <div class ="BitcoinAvailable">
                        <h1>Deposit:</h1>
                        <h3> Available funds: 3,04343 BTC </h3>
                        <form action="https://www.coinpayments.net/index.php" method="post">
                            <input type="hidden" name="cmd" value="_pay"/>
                            <input type="hidden" name="reset" value="1"/>
                            <input type="hidden" name="merchant" value="45b3be002d9b5c7e0739554100d90971"/>
                            <input type="hidden" name="item_name" value="Invest"/>
                            <input type="hidden" name="currency" value="USD"/>
                            <input type="hidden" name="amountf" value="10.00000000"/>
                            <input type="hidden" name="quantity" value="1"/>
                            <input type="hidden" name="allow_quantity" value="0"/>
                            <input type="hidden" name="want_shipping" value="1"/>
                            <input type="hidden" name="allow_extra" value="0"/>
                            <input type="image" src="https://www.coinpayments.net/images/pub/CP-main-medium.png" alt="Buy Now with CoinPayments.net"/>
                         </form>
                        </div>
                        </Col>
                    
                    </Row>
                </Container>
             </div>
        )
    }
};
