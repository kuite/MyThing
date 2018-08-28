import React, { Component } from 'react';

import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';



import {Navbar} from '../../components/navbar';
import {SignInModule} from '../../components/signin'


import {Header} from '../../components/Home/header';
import {ChoiceSection} from '../../components/Home/choiceSection';
import {CarouselFinal} from '../../components/Home/carousel';
import {Advantages} from '../../components/Home/advantages';
import {HomeInteraction} from '../../components/Home/interaction';



import '../../global-styles';


export default class Home extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <SignInModule/>
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
            </div>
        )
    }
};







