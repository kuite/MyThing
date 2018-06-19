import React from 'react';




import {MultiStep, steps} from './form.js'




class EstimationForm extends React.Component{


  render(){
    return(
      <div className ="Modal_inside">

            <h1>Nice text to register</h1>

            <div className ="Estimation_multistep">
                <MultiStep steps={steps}/>
            </div>
      </div>
    )
  }
};



  class Modaltest extends React.Component {
   constructor(props) {
     super(props)
     this.state = { isModalOpen: false }
   }

   render() {
     return (
       <div>
         <button onClick={() => this.openModal()} className="submit_button">Register</button>
         <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
           <EstimationForm/>
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




 class Modal extends React.Component {
   render() {
     if (this.props.isOpen === false)
       return null




     if (this.props.style) {
       for (let key in this.props.style) {
         modalStyle[key] = this.props.style[key]
       }
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
       <div className="test">
         <div className={this.props.className} className ="modalStyle">
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


 export default Modaltest;
