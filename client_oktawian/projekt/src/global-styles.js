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
    background-color:white;
    box-shadow: 0 0 0 0 rgba(0,50,0,.2), 0 0 8px 0 rgba(0,50,0,.2);
  }

  .Menu {
    margin-top:10px;
  }

  .Menu  a{
    font-size:14px;
    font-family:Helvetica;
    margin-top:25px !important;
    color:#222064;
  }

  .Login{
    background-color:#00C57F;
    width:120px;
    height:30px;
    font-size:12px;
    color:white;
    border-radius:6px;
    border:none;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 8px 0 rgba(0,0,0,.19);
  }

  .SecondaryButton{
    border-color:#00C57F;
    border-size:2px;
    border-style:solid;
    width:120px;
    height:30px;
    font-size:12px;
    color:#00C57F;
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
  background-image: linear-gradient(to right, #7065D8 0%, #275DDF 100%);
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
    float:left;
    width: calc(25% - 1px);
    height:220px;
    border-style: solid;
    border-width: 1px;
    border-color:#BEBEBE;
  }

  .Section h2{
    font-family:Helvetica;
    margin:12% 0 0 7%;
    font-size:24px;
  }

  .Section p{
    font-family:Helvetica;
    font-weight:100;
    margin:0% 7% 0 7%;
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
  background-image: linear-gradient(to right, #7065D8 0%, #275DDF 100%);
  width:100%;
  height:420px;
}

.SectionsHeader h1{
  font-family:Helvetica;
  font-size:36px;
  font-weight:400;
  color:white;
  margin-top:15%;
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
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
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

.HomeFund {
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  width:100%;
  height:1200px;
}

.BitcoinAvailable{
  background-color:white;
  margin: 10% 0 0 0;
  padding:3% 3% 3% 3%;
  height:220px
  border-radius:20px;
}

`;