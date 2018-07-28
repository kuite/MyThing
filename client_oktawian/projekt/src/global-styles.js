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
font-weight:400;
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




  //Home
  
  .Header{
    width:100%;
    background-color:grey;
    height:800px;
  }


  .Signin{
    float:right;
    width:60px;
    height:340px
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
    height: 5px;
    margin:5% 0 5% 0%;
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


// Login

.loginform, .registerform{
  margin: 15%;
}

//Registration

.help-block{
  color:orange;
  
  font-family:Helvetica
  font-size:12px;
}

.RegisterForm{
  width:100%;
  background-color:grey;
  height:800px;
}

.RegistrationLeft{
  width:61.8034%;
  height:100%;
  float:left;
  background-color:white;
}

.RegistrationRight{
  float:right;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
}


`;