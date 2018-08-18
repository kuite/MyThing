import React, { Component } from 'react';

import {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
  
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
  
    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    TumblrIcon,
    MailruIcon,
    EmailIcon,
    LivejournalIcon,
    ViberIcon,
  } from 'react-share';





import {Container, Row, Col, Progress } from 'reactstrap';
import {Navbar} from '../../components/navbar';

import {Browseideaheader} from '../../components/browseideaheader';

import {Vote} from '../../components/reactvote/vote';
import '../../global-styles';

export default class Ideas extends Component{

    render(){
        return(
            <div>  
                <Navbar/>
                <Browseideaheader/>
                <Share/>
                <Idea/>
             </div>
        )
    }
};

class Crypto extends Component{
    render(){
        return(
                <div>
                <a target ="_blank" rel="noopener noreferrer"  class="donate-with-crypto"
                    href="https://commerce.coinbase.com/checkout/6da189f179bc31">
                    <span>Donate with Crypto</span>
                </a>
                <script src="https://commerce.coinbase.com/v1/checkout.js">
                </script>
                </div>

        )
    }
}


export class Idea extends Component{

    render(){
        return(
            <div className ="Idea">                               
                <Container>

                    <Row>
                        <Col sm={{size:1}}><Vote/></Col>   
                        {/* <Col sm={{size:3}}><div className ="Idea_image"></div></Col>
                        <h2>Simple title</h2>
                            <p>Business/Non Profit, Category</p>
                            <p>Started 27.01 - Finish: 32.02</p>
        <div className ="Rectangle"></div> 
                        
                        <p>Description about this specific issue with information about
                        it and why customer should support this idea</p> */}

                        <Col sm={{size:12}}>

                       
                        <Progress multi>
                            <Progress bar color="success" value="35" /> 35 / 100 BTC funded
                        </Progress>

                        <Crypto/>

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
  