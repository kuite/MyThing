import { injectGlobal } from 'styled-components';

injectGlobal`
body {

  background-color:#F3F6F7;


  #mainmenu, #mainmenu ul {list-style: none; margin: 0; padding: 0;}
  #mainmenu ul {width: 160px;}
  #mainmenu ul li {clear: both;}
  #mainmenu > li {margin-right: 10px; position: relative;}
  #mainmenu > li li {position: relative;}
  #mainmenu > li ul {position: absolute; left:0;margin-top:8%;}
  #mainmenu > li ul li ul {position: absolute; left: 160px; top: 0px;}
  ul ul {display: none;}
  ul li:hover > ul {display: block;}
  
  /*POZIOM 1*/
  #mainmenu {margin: 21px 0 0 47% ;}
  #mainmenu > li > a {display: table; width: auto; padding: 8px; border-radius: 6px; text-align: center; text-decoration: none; color: #84c5f7;}
  #mainmenu > li:hover > a {background: #eee; color: #0090ff;}
  
  /*POZIOMY NIŻSZE*/
  #mainmenu ul {font-size: 12px; border-radius: 3px; background: #F6F6F6;}
  #mainmenu ul li > a {color: #999; display: block; padding: 10px; border-radius: 6px; text-decoration: none;text-align:left;}
  #mainmenu ul li:hover > a {color: #eee; background:blue;}





  .CalendarDay__highlighted_calendar {
    background: #82E0AA;
    color: #186A3B;
  }
  
  .CalendarDay__highlighted_calendar:hover {
    background: #58D68D;
    color: #186A3B;
  }
  
  .CalendarDay__highlighted_calendar:active {
    background: #58D68D;
    color: #186A3B;
  }

  .form-control{
    font-weight:200;
    color:#222064 !important;
  }

  .Demo__some-network {
    vertical-align: top;
    display: inline-block;
    margin-right: 30px;
    text-align: center;
  }
  
  .Demo__some-network__share-count {
    margin-top: 3px;
    font-size: 12px;
  }
  
  .Demo__some-network__share-button {
    cursor: pointer;
  }
  
  .Demo__some-network__share-button:hover:not(:active) {
    opacity: 0.75;
  }



.alert{
  margin-bottom:0 !important;
}




input{
  font-weight:100;
  width:80%;
  height:50px
  padding:1% 1% 1% 1%;
  margin:1% 0% 1% 0%;
  border-radius:8px;
  border: #ccc 1px solid
}

  //React Vote


.vote {
  position:absolute;
  display:contents;
  text-align: center;
  user-select: none;
  cursor: default;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vote__arrow {
  width: 18px;
  cursor: pointer;
  transition: transform 150ms ease-in-out;
}
.vote__arrow:active {
  transform: scale(1.15);
}
.vote__arrow--up:active {
  stroke: #b4da55;
}
.vote__arrow--down:active {
  stroke: #f33119;
}


.vote__columns {
  display:flex
  justify-content: left;
}

.vote__column {
  height: 22px;
  font-size: 18px;
  overflow: hidden;
}

//

h1{
  font-family:Lato;
  color:#222064;
}

h2{
  font-family:Lato;
  color:#222064;
  font-size:24px;
  font-weight:500;
}

h3{
  font-family:Lato;
  color:#222064;
  font-size:22px;
}

p{
  font-family:Museo Sans;
  font-size:14px;
  color:#75739B;
  font-weight:100;
}

.Header h1{
font-family:Lato;
font-size:48px;
color:white;
margin-top:33%;

}
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

.Header p{
  font-family:Museo Sans;
  font-size:14px;
  font-weight:200;
  color:white;
  margin-top:5%;

} 

//Navbar + Menu


.Logo{
  margin-top:2%;
  width:140px;
  height:100%;
}

  .Navbar{
    z-index:10000;
    position:fixed;
    width:100%;
    height:52px;
    background-color:transparent;
    // box-shadow: 0 0 0 0 rgba(0,50,0,.2), 0 0 8px 0 rgba(0,50,0,.4);
  }
  
  .NavbarScroll{
    z-index:10000;
    position:fixed;
    width:100%;
    height:52px;
    background-color:white;
    transition: background-color 0.5s ease;
    box-shadow: 0 0 0 0 rgba(0,50,0,.2), 0 0 8px 0 rgba(0,50,0,.4);
  }

  .Menu {
    margin-top:15px;
  }

  .Menu a.Navbar{
    letter-spacing:1.5px;
    width:0%;
    height:0%;
    font-size:14px;
    font-family:Museo Sans;
    color:white;
  }

  a.Navbar.NavbarScroll{
    letter-spacing:1.5px;
    width:0%;
    height:0%;
    background-color:none;
    padding:0%;
    font-size:14px;
    font-family:Museo Sans;
    color:#222064;
  }

  .Menu  a:hover{
    font-size:14px;
    font-family:Museo Sans;
    color:#00C57F;
    text-decoration:none;
  }

  .Login{
    margin-right:2%;
    background-image: linear-gradient(to right,#FABD61 0%,#F76B1C 100%);
    width:120px;
    height:30px;
    font-size:12px;
    color:white;
    border-radius:6px;
    border:none;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 8px 0 rgba(0,0,0,.19);
  }
  

  .Login:hover{
    cursor:pointer;
    margin-right:2%;
    background-color:#24EBA4;
    width:120px;
    height:30px;
    font-size:12px;
    color:white;
    border-radius:6px;
    border:none;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 8px 0 rgba(0,0,0,.19);
  }

  .SecondaryButton{
    margin:0% 0% 0 0;
    border-color:#FF9100;
    border-size:2px;
    border-style:solid;
    width:120px;
    height:30px;
    font-size:12px;
    color:#FF9100;
    background-color:transparent;
    border-radius:4px;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 4px 0 rgba(0,0,0,0);
  }

  .SecondaryButton:hover{
    transition: background-color 0.5s ease;
    cursor:pointer;
    background-image: linear-gradient(to right,#FABD61 0%,#F76B1C 100%);
    border-color:#FABD61;
    border-size:2px;
    border-style:solid;
    width:120px;
    height:30px;
    font-size:12px;
    color:white;
    border-radius:4px;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 4px 0 rgba(0,0,0,0);
  }




  //Home
  
  .Header{
    width:100%;
    background-color:grey;
    height:800px;
  }


  .Signin{
    float:right;
    width:60px;
    height:190px
    position:fixed;
    top:20%;
    right:0px;
    background-color:white;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 8px 0 rgba(0,0,0,.19);
    border-radius: 4px;
  }
  
  .HeaderLeft{
  width:61.8034%;
  height:100%;
  background-image: linear-gradient(to right,#8CD051 0%,#68B34A 100%);
  float:left;
  }
  
.Choice_sections{
  position:absolute;
  width:100%;
}



  .HeaderRight{
    width:38.17%;
    height:800px;
    float:left;
  }

  .HeaderRight > img{
    width:100%;
    height:100%;
    float:left;
  }
    
  .Section{
    padding:2%;
    float:left;
    width: calc(25% - 1px);
    height:280px;
    border-style: solid;
    border-width: 1px;
    border-color:#BEBEBE;
    text-align:center
  }

  .SectionPlans{
    padding:2%;
    float:left;
    width: calc(25% - 1px);
    height:180px;
    border-style: solid;
    border-width: 1px;
    border-color:#BEBEBE;
    text-align:center
  }

  .SectionInside > img {
    text-align:center;
    display:inline-flex;
    width:75px;
    height:75px;
    margin:2% 0 2% 0;
  }

  .SectionInside h2 > .Rectangle {
    text-align:center;
    display:inline-flex;
    width: 60px;
    height: 3px;
    margin:2% 0 2% 0%;
    background: #7DC72C;
  }

  .Section h2{
    font-family:Lato;
    margin:2% 0 2% 0%;
    font-size:24px;
  }

  .Section p{
    font-family:Museo Sans;
    font-weight:100;
    margin:2% 0% 2% 0%;
    font-size:14px;
  }

  .Rectangle{
    width: 60px;
    height: 1px;
    margin:2% 0 2% 0%;
    background: #7DC72C;
  }

  .Latest_ideas{
    width:100%;
    height:570px;
    text-align:center;
    top:40%;
    transform: translateY(25%);
  }

  .SignIn{
    width:60px;
    height:200px;
  }

  /////

  .HomeInteraction{
    margin:12% 0 12% 0;
    width:100%;
    height:100%;
    text-align:center;
  }
  
  
  /////Carousel

  .carousel{
    position:relative;
    margin-top:280px;
    margin-bottom:80px;
  }

  .d-md-block{
    display: block !important;
    position: fixed;
    margin-left: 40%;
    width: 30%;
    top: 10%;
    text-align: left;
    float: left;
  }


  .d-md-block h3{
    padding-bottom:40px;
    font-size:42px;
    font-family:Lato;
    color:#222064;
  }

.carousel-control-prev-icon{
  width:60px;
  height:60px;
  background-image: url(img/arrow_left.svg);
}

.carousel-control-next-icon{
width:60px;
height:60px;
background-image: url(img/arrow_right.svg);
}

.carousel-indicators{
  display:none;
}

.Rodo{
    margin-top:6%;
    width:80%;
    height:100%;
    text-align:left;
    float:left;
  }
  
  .Rodo > h1{
    margin:8% 10% 0% 13%;
    font-family: SF-Pro-Display-Light, Helvetica, Arial;
    font-size: 42px;
    font-weight:200;
    letter-spacing: 1px;
    text-align: left;
    color: #021a38;
  }
  
  .Rodo > h2{
    margin:2% 10% 2% 13%;
  }
  
  .Rodo > p{
    margin:2% 10% 0% 13%;
    font-size:12px;
  }
  
  .rodo_button{
    width:140px;
    height:20px;
    right:20px;
    background-color:transparent;
    border-color:white;
    position:absolute;
    color:white;
  }
  
    .rodo_button:hover{
      width:140px;
      height:20px;
      right:20px;
      background-color:white;
      border-color:white;
      position:absolute;
      cursor:pointer;
      color:red;
  }
  
  .rodo_info > p{
    margin:0;
    font-size:12px;
    font-family:HarmoniaDemo;
    color:white;
  }
  
  .rodo_info > p > a {
    text-decoration:underline !important;
    color:white !important;
  }
















  // FUNRAISERS

.Categories_Header{
  margin-top:10%;
}

.Categories_Header > h2{
  text-align:center;
}

.Categories_Header > p{
  text-align:center;
}


  .Categories{
    text-align:center;
    width:100%;
    margin-bottom:15%;
    vertical-align: middle;
  }

  .Idea{
    margin:5% 0 5% 0;
  }


  .Idea_image{
    width:80%;
    height:100%;
    background-color:grey;
  }









// Get Funded

.Getfundedform{
  width:100%;
}


// Browse Ideas

.SectionsHeader{
  width:100%;
  height:470px;
}

.SectionsHeader h1{
  font-family:Lato;
  font-size:48px;
  font-weight:400;
  color:white;
  margin-top:25%;
}

.SectionHeader > img{
width: 100%;
height: 100%;
float: left;
}


.SectionHeaderRight{
  width:38.17%;
  float:left;
}

.SectionHeaderRight > img{
  width:100%;
  height:470px;
  float:left;
}

#circle {
  width: 50px;
  height: 50px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  background: red;
}

.FundHeader2{
  margin:7% 0 7% 0;
  width:100%;
  height:100%;
  text-align:center;
}


.FundHeader2Icons{
display:inline-flex;
}

.FundIcon{
  width:350px;
  float:left;
}

.FundIcon > img{
  height:80px;
  margin:5% 0 5% 0;
}

.FundIcon > p{
  width:80%
  margin-left:10%;
  text-align:center;

}



.SectionsHeader p{
  font-family:Helvetica;
  font-size:14px;
  font-weight:200;
  color:white;
  margin-top:0%;
}

//Earn with us

.Plans{
  padding-top:5%;
}

.PlanAdvantages{
  margin:10% 0 10% 0;
  width:100%;
}

.PlanElement{
  margin:0% 0 10% 0;
}
.PlanElement > h2{
  margin:10% 0 5% 0;
}

.PlanElement > p{
  margin:10% 0 5% 0;
}

.PlanSection{
  width:100%;
  margin:2% 0 7% 0;
}

.Plan{
  width: 510px;
  height: 255px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(91, 91, 91, 0.5);
}

.Plan > img{
  width: 208px;
  height: 255px;
  float:left;
}

.Plan > h1{
  margin-top:32px;
  margin-left:270px;
  font-size:24px;
}

.Plan > p{
  margin-top:18px;
  margin-left:270px;
  color: #75739b;
}

.Plan .SecondaryButton{
  float:left;
  margin-top:18px;
  margin-left:60px;
}

.PlanFeatures{
  margin-top:17%;;
  text-align:center;
}



// LAW NOTE


.Invest{
  text-align:center;
}

.LawNote{
  text-align:center;
  width: 950px;
  height: 260px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(91, 91, 91, 0.5);
}

.LawNote > p{
font-size:12px;
}








}




// Login

.LoginModal{

  border-radius:10px;
  padding:15% 10% 15% 10%;
  width:500px;
  height:500px;


}


.loginform, .registerform{
  margin: 15%;
}

.LoginIcon{
  position:absolute;
  float:left;
  width:40px;
  height:40px;

}

//Registration

.help-block{
  color:orange;
  
  font-family:Helvetica
  font-size:12px;
}

.RegisterForm{
  width:100%;
  background-image: linear-gradient(to right,#8CD051 0%,#68B34A 100%);
  height:100%;
  position:absolute;
}

.RegistrationLeft{
  padding-top:10%;
  width:61.8034%;
  height:100%;
  float:left;
  background-color:white;
}

.RegistrationRight{
  float:left;
  text-align:center;
  font-family:Helvetica;
  color:white;
  font-size:18px;
  margin:20% 0 0% 10%;
}

.RegistrationRight > p{
  float:left;
  text-align:center;
  font-family:Helvetica;
  color:white;
  font-size:14px;

}


google-login{


}



// HOME PAGE AFTER LOGIN

.bsOFsf{
  width:65vw !important;
  box-shadow:none !important;
}

.HomeFund {
  padding-top:5%;
  background-image: linear-gradient(to right,#6a11cb 0%,#2575fc 100%);
  width:100%;
  height:1800px;
}

.BitcoinAvailable{
  width:100%;
  background-color:white;
  margin: 2% 0 2% 0;
  padding:3% 3% 3% 3%;

  border-radius:10px;
}

.PlanWidget{
  background-color:white;
  padding:3% 3% 3% 3%;
  margin: 1% 0 2% 0;
  border-radius:10px;
}


//INCREASE AFTER LOGIN

.IncreaseOpportunity{
margin:3% 0 3% 0;
}

.IncreaseOpportunity > img{
  width:80px;
  margin:1% 0 1% 0;
  }



  .DepositSteps{
    margin:5% 0 5% 0;
  }




  // PAYMENT


  .PaymentHeader{
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    width:100%;
    height:80px;
  }

.SecureSection{
  margin-top:2%;
  margin-bottom:2%;
}

.SecureSection img{
  float:left;
}

.SecureSection p{
  float:left;
}






`;