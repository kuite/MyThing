import React, { Component } from 'react';

import {Container, Row, Col, Progress } from 'reactstrap';
import {Navbar} from '../components/navbar';
import { Link } from 'react-router-dom';

import {Browseideaheader} from '../components/browseideaheader';

import {Vote} from '../components/reactvote/vote';
import '../global-styles';

export default class Browseideas extends Component{

    render(){
        return(
            <div>  
                <Navbar/>
                <Browseideaheader/>
                <Main/>
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
                        <Col sm={{size:1}}><Vote/></Col>   
                        <Col sm={{size:3}}><div className ="Idea_image"></div></Col>
                        <Col sm={{size:6}}>
                        <h2>Simple title</h2>
                            <p>Business/Non Profit</p>
                            <p>Kategoria</p>
                            <p>Started 27.01 - Finish: 32.02</p>
                        <div className ="Rectangle"></div>
                        
                        <p>Description about this specific issue with information about
                        it and why customer should support this idea</p>

                        <Progress multi>
                            <Progress bar color="success" value="35" /> 35 / 100 BTC funded
                        </Progress>

                            <Link to="/idea" className="btn btn-link">Support idea now</Link>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};


class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        displayCategory: "all",
        products: PRODUCTS,
        productCategories: PRODUCT_CATEGORIES
      };
      this.setCategory = this.setCategory.bind(this);
    }
   
    setCategory(category) {
      this.setState({
        displayCategory: category
      });
    }
    render() {
      return <UI setCategory={this.setCategory} state={this.state} />;
    }
   }


const Result = ({ state: { products, displayCategory } }) =>
<div>
  {products
    .filter(({ category }) =>
        displayCategory === category || displayCategory === "all"
    )
    .map(({ category, name, desc, img }) =>
      <ResultItem category={category} name={name} desc={desc} img ={img}/>
    )}
</div>;





const ResultItem = ({ category, name, desc, img }) =>
 
<div className ="Idea"> 
<Link to ={`${name}`}>                              
<Container>
    <Row>
        <Col sm={{size:1}}><Vote/></Col>   
        <Col sm={{size:3}}><div className ="Idea_image"></div></Col>
        <Col sm={{size:6}}>
        <h2>{name}</h2>
            <p>Business/Non Profit</p>
            <p>{category}</p>
            <p>Started 27.01 - Finish: 32.02</p>
        <div className ="Rectangle"></div>
        
        <p>{desc}</p>

        <Progress multi>
            <Progress bar color="success" value="35" /> 35 / 100 BTC funded
        </Progress>

            <Link to="/idea" className="btn btn-link">Support idea now</Link>

        </Col>
    </Row>
</Container>
</Link>
</div>
;























const OptionCategory = ({ setCategory, category }) =>
<button
    className={`${category}` + ' button_category'}
    onClick={() => setCategory(category)}
    >
    {category}
</button>;


const UI = ({
    state,
    state: { productCategories },
    setCategory,
    allProducts
  }) =>
  
  <div>
      <div className="project_options">
        <h1>Find the best alternative for yourself</h1>
        <p>All added ideas can become a reality with your help, choose what is most important to you</p>
  
       <div className ="filters_button animated fadeIn">
         {productCategories.map(category =>
           <OptionCategory setCategory={setCategory} category={category} />
         )}
       </div>
     </div>
     <div>
       <Result className="Projects" state={state} />
     </div>
   </div>
  ;


//data (need to fetch from api later)

const PRODUCTS = [
    { category: "Category1", name: "IdeaCategory1", desc: "Description about idea",img: <div>test</div>},
    { category: "Category2", name: "IdeaCategory2", desc: "Description about idea",img: <div>test</div>},
];


const uniqueItems = (x, i, a) => a.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
 uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();

class RenderTests extends React.Component {
    render(){
      return(
        <div>
        <Main products={PRODUCTS} />
        </div>
      )
    }
};




