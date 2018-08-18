import React from 'react';
import { LoginPageModal } from '../../containers/LoginPage/LoginPageModal';







class Signup extends React.Component{


  render(){
    return(
    <div>
        <LoginPageModal/> 
    </div>
    )
  }
};



export class Modalfinal extends React.Component {
   constructor(props) {
     super(props)
     this.state = { isModalOpen: false }
   }

   render() {
     return (
       <div>
         <button className ="SecondaryButton" onClick={() => this.openModal()}>Login</button>
         <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
           <Signup/>
         </Modal>
       </div>
     )
   }

   openModal() {
     this.setState({ isModalOpen: true })
   }

   closeModal() {
     this.setState({ isModalOpen: false })
   }
 }




 export class Modal extends React.Component {
   render() {
     if (this.props.isOpen === false)
       return null

     if (this.props.style) {
       for (let key in this.props.style) {
         modalStyle[key] = this.props.style[key]
       }
     }

    let modalStyle = {
        position: 'fixed',
        width: '30%',
        left: '35%',
        top: '20%',
        zIndex: '9999',
        background: '#fff'
        
    }

     let backdropStyle = {
       position: 'fixed',
       width: '100%',
       height: '100%',
       top: '0px',
       left: '0px',
       zIndex: '9998',
       background: 'rgba(0, 0, 0, 0.7)'
     }

     if (this.props.backdropStyle) {
       for (let key in this.props.backdropStyle) {
         backdropStyle[key] = this.props.backdropStyle[key]
       }
     }

     return (
       <div>
        <div className={this.props.className} style ={modalStyle}>
           {this.props.children}
         </div>
         {!this.props.noBackdrop &&
             <div className={this.props.backdropClassName} style={backdropStyle}
                  onClick={e => this.close(e)}/>}
       </div>
     )
   }

   close(e) {
     e.preventDefault()

     if (this.props.onClose) {
       this.props.onClose()
     }
   }
 }


