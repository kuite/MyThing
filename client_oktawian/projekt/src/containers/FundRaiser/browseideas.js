import React, { Component } from 'react';

import {Container, Row, Col, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';

import {Browseideaheader} from '../../components/FundRaiser/browseideaheader';

import {Vote} from '../../components/reactvote/vote';
import '../../global-styles';

export default class Browseideas extends Component{

    render(){
        return(
            <div>  
                <Browseideaheader/>
                <Main/>
             </div>
        )
    }
};


class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        
        data: [],
        isLoaded: false,
        
        displayCategory: "all",
        products: PRODUCTS,
        productCategories: PRODUCT_CATEGORIES
      };
      this.setCategory = this.setCategory.bind(this);
    }
  


    componentDidMount(){
        fetch('http://localhost:50647/fund/GetFunds?MaxPageSize=100&Offset=5&Limit=5')
        
        .then(response => {
          return response.json();

        }).then(data => {
          this.setState({
            isLoaded: true,
          })
          const PRODUCTS = data.map(obj => ({title: obj.title, description: obj.description}))
          this.setState({isLoaded: true, PRODUCTS})

        }).catch(err => {
        });
    }

    setCategory(category) {
      this.setState({
        displayCategory: category
      });
    }

    render() {

      return (
      <div>
      <UI setCategory={this.setCategory} state={this.state} />; 
      </div>
      )
    }
   }



const Result = ({state: { products, displayCategory} }) =>
<div>

  {products
    .filter(({ category }) =>
        displayCategory === category || displayCategory === "all"
    )
    .map(( {title, description}) =>
      <ResultItem title ={title} description ={description}/>
    )
    
  }
</div>;





export const ResultItem = ({title, description}) =>
 
<div className ="Idea"> 
                             
<Container>
    <Row>
        <Col sm={{size:1}}><Vote/></Col>   
        <Col sm={{size:3}}><div className ="Idea_image"></div></Col>
        <Col sm={{size:6}}>
        <h2>{title}</h2>
            <p>Business/Non Profit</p>
            <p>[category]</p>
            <p>Started [startdate] - Finish: [enddate]</p>
        <div className ="Rectangle"></div>
        
        <p>{description}</p>

        <Progress multi>
            <Progress bar color="success" value="{BtcDonated}"/> [btcdonated] BTC / [btcgoal] BTC funded
        </Progress>

            <Link to ={`${title}`} className="SecondaryButton">Support idea now</Link>

        </Col>
    </Row>
</Container>
</div>
;



const OptionCategory = ({ setCategory, category }) =>
<button
    className={'SecondaryButton'}
    onClick={() => setCategory(category)}
    >
    {category}
</button>;


const UI = ({
    i,
    state,
    state: { productCategories },
    setCategory,
    allProducts
  }) =>
  
  <div>
    <Container>


      <div className="Categories_Header"><br/><br/>
        <h2>Find what interests you</h2>
        <p>All added ideas can become a reality with your help, choose what is most important to you</p>
  
       <div className ="Categories">
         {productCategories.map((category, i) =>
           <OptionCategory key ={i} setCategory={setCategory} category={category} />
         )}
       </div>
     </div>




     <div>
       <Result key ={i} className="Projects" state={state} />
     </div>

     
     </Container>
   </div>
  ;


//data (need to fetch from api later)

//GET FUNCTION




const uniqueItems = (x, i, a) => a.indexOf(x) === i;

const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
 uniqueItems,
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();

/*
class RenderTests extends React.Component {
    render(){
      return(
        <div>
        <Main products={PRODUCTS} />
        </div>
      )
    }
};
*/




