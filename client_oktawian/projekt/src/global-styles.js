import { injectGlobal } from 'styled-components';

injectGlobal`
body {

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

  color:#222064;
}

h2{
  color:#222064;
  font-size:24px;
  font-weight:500;
}

h3{
  color:#222064;
  font-size:18px;
  font-weight:300;
}

p{
  font-size:14px;
  color:#75739B;
  font-weight:100;
}

.Header h1{
font-family:Helvetica;
font-size:48px;
font-weight:100;
color:white;
margin-top:33%;

}
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

.Header p{
  font-family:Helvetica;
  font-size:14px;
  font-weight:200;
  color:white;
  margin-top:5%;

} 

//Navbar + Menu

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
    background-color:#ea9e33;
    transition: background-color 0.5s ease;
    box-shadow: 0 0 0 0 rgba(0,50,0,.2), 0 0 8px 0 rgba(0,50,0,.4);
  }

  .Menu {
    margin-top:10px;
  }

  .Menu  a{
    font-size:14px;
    font-family:Helvetica;
    margin-top:30px !important;
    color:white;
  }

  .Menu  a:hover{
    font-size:14px;
    font-family:Helvetica;
    margin-top:30px !important;
    color:#00C57F;
    text-decoration:none;
  }

  .Login{
    margin-right:2%;
    background-color:#00C57F;
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
    margin:2% 2% 0 0;
    border-color:#00C57F;
    border-size:2px;
    border-style:solid;
    width:120px;
    height:30px;
    font-size:12px;
    color:#00C57F;
    background-color:transparent;
    border-radius:4px;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 4px 0 rgba(0,0,0,0);
  }

  .SecondaryButton:hover{
    transition: background-color 0.5s ease;
    cursor:pointer;
    background-color:#00C57F;
    border-color:#00C57F;
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
  background-image: linear-gradient(to right,#6a11cb 0%,#2575fc 100%);
  float:left;
  
  
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
    font-family:Helvetica;
    margin:2% 0 2% 0%;
    font-size:24px;
  }

  .Section p{
    font-family:Helvetica;
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


  // Browse Ideas


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
  background-image: linear-gradient(to right,#6a11cb 0%,#2575fc 100%);
  width:100%;
  height:470px;
  padding-top:3%;
}

.SectionsHeader h1{
  font-family:Helvetica;
  font-size:48px;
  font-weight:400;
  color:white;
  margin-top:15%;
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
  width:300px;
  float:left;

}

.FundIcon > img{
  height:80px;
  margin:5% 0 5% 0;
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

.PlanSection{
  width:100%;
  margin:2% 0 7% 0;
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
  background-image: linear-gradient(to right,#6a11cb 0%,#2575fc 100%);
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