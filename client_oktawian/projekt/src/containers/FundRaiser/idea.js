import React, { Component } from 'react';

import {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    RedditShareCount,
  
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton,
  
    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon,
    RedditIcon,
  } from 'react-share';





import {Container, Row, Col, Progress } from 'reactstrap';
import {Navbar} from '../../components/navbar';

import {IdeaHeader} from '../../components/FundRaiser/ideaheader';

import {PaymentModalfinal} from '../../components/Payment/paymentmodal';

import {Vote} from '../../components/reactvote/vote';
import '../../global-styles';

export default class Ideas extends Component{

    render(){
        return(
            <div>  
                <Navbar/>
                <IdeaHeader/>
                
                <Idea/>
             </div>
        )
    }
};

export class Idea extends Component{

    render(){
        return(
            <div className ="Idea">                               
                <Container>

                    <Row>

                      <Col sm={{size:1}}>
                      <Vote/>
                      </Col>

                        <Col sm={{size:7}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis mattis erat quis laoreet. Nunc posuere faucibus aliquam. In efficitur est odio, et dapibus libero faucibus vitae. Pellentesque quis nisi et ipsum ultrices ultricies eget tempus libero. Praesent venenatis aliquam rhoncus. Sed at ullamcorper erat, sit amet pretium ligula. Aenean semper bibendum aliquet.</p>
                        </Col>
                        <Col sm={{size:4}}>
                           <Share/>
                          <Progress multi>
                              <Progress bar color="success" value="35" /> 0.4531 / 1 BTC funded
                          </Progress>

                          <PaymentModalfinal/>
                        </Col>
      

                        
                    </Row>
                </Container>
            </div>
        )
    }
};




































class Share extends Component {
    render() {
      const shareUrl = 'http://github.com';
      const title = 'GitHub';
  
      return (
        <div className="Demo__container">
          <div className="Demo__some-network">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button">
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
  
            <FacebookShareCount
              url={shareUrl}
              className="Demo__some-network__share-count">
              {count => count}
            </FacebookShareCount>
          </div>
  
          <div className="Demo__some-network">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button">
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
  
            <div className="Demo__some-network__share-count">
              &nbsp;
            </div>
          </div>
  
  

          <div className="Demo__some-network">
            <GooglePlusShareButton
              url={shareUrl}
              className="Demo__some-network__share-button">
              <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>
  
            <GooglePlusShareCount
              url={shareUrl}
              className="Demo__some-network__share-count">
              {count => count}
            </GooglePlusShareCount>
          </div>
  
          <div className="Demo__some-network">
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              windowWidth={750}
              windowHeight={600}
              className="Demo__some-network__share-button">
              <LinkedinIcon
                size={32}
                round />
            </LinkedinShareButton>
  
            <LinkedinShareCount
              url={shareUrl}
              className="Demo__some-network__share-count">
              {count => count}
            </LinkedinShareCount>
          </div>
    
          <div className="Demo__some-network">
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="Demo__some-network__share-button">
              <RedditIcon
                size={32}
                round />
            </RedditShareButton>
  
            <RedditShareCount url={shareUrl}
              className="Demo__some-network__share-count" />
          </div>
  

        </div>
      );
    }
  }
  