import React, { Component } from 'react';

import {Container, Row, Col, Progress } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Browseideaheader from '../../components/FundRaiser/browseideaheader';

import {Footer} from '../../components/footer';

import {Vote} from '../../components/reactvote/vote';
import '../../global-styles';

import axios from 'axios';

export default class Browseideas extends Component{

    render(){
        return(
            <div>  
                 <Navbar/>
                <Browseideaheader/>

                <Main/>
                <Footer/>
                
             </div>
        )
    }
};


class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
    
        data: [],
        products: [],
        isLoaded: false,

        displayCategory: "all",
        products: PRODUCTS,
        productCategories: PRODUCT_CATEGORIES
      };

      this.setCategory = this.setCategory.bind(this);
    }



  
    componentDidMount() {
      axios
      fetch('http://localhost:50647/fund/GetFunds')

      .then(response => {
        return response.json();
      })
      
      .then(data => {

        console.log(data);
        this.setState({isLoaded: true, data});
        console.log(this.state);

        const products = data.items.map(obj => ({id: obj.id, title: obj.title, description: obj.description, category: obj.category, btcGoal: obj.btcGoal, startDate: obj.startDate, endDate: obj.endDate,vote: obj.vote}));
        
        this.setState({isLoaded: true, products});
  
        console.log('Products', products);
      }).catch(err => {
      });
      
    }
    
    setCategory(category) {
      this.setState({
        displayCategory: category,
      });
      console.log
    }

    render() {
    return (
      <div>
        <UI setCategory={this.setCategory} state={this.state} />
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
    .map(args => <ResultItem {...args} />)
  }
</div>;





const ResultItem = ({id, title, description, btcGoal, startDate, endDate, category, vote}) =>
 

<div className ="Idea"> 
                             
<Container>
    <Row>
        <Col sm={{size:1}}><Vote vote={vote}/></Col>   
        <Col sm={{size:3}}><div className ="Idea_image"></div></Col>
        <Col sm={{size:6}}>
        <h2>{title}</h2>

            <p>{category}</p>


            <p>Started:  {startDate} - <br/>Finished: {endDate}</p>
        <div className ="Rectangle"></div>
        
        <p>{description}</p>

      <Progress color = "success" value={"5" - {btcGoal}}>Donated / {btcGoal} BTC goal</Progress>
          
            <Link to={{ 
                  pathname: `/idea/${id}`,
                  state: {id}
                }}><button className ="SecondaryButton">View funraiser</button></Link>

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

const PRODUCTS = [];

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




