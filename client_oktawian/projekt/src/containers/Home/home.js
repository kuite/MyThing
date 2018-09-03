import React, { Component } from 'react';

import {Container, Row,} from 'reactstrap';

import {Navbar} from '../../components/navbar';
import {Header} from '../../components/Home/header';
import {ChoiceSection} from '../../components/Home/choiceSection';
import {CarouselFinal} from '../../components/Home/carousel';
import {Advantages} from '../../components/Home/advantages';
import {HomeInteraction} from '../../components/Home/interaction';
import {Policy} from '../../components/Home/policy';



import '../../global-styles';


export default class Home extends Component{

    render(){
        return(
            <div>
                <Header/>
                <ChoiceSection/>
                <CarouselFinal/>
                    <Container>
                    <Row>
                        <Advantages/>
                    </Row>
                    <Row>
                       <HomeInteraction/> 
                    </Row>
                </Container>
                <Policy/>
            </div>
        )
    }
};







