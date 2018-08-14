import React from 'react';







class PaymentModal extends React.Component{


  render(){
    return(
    <div>
        <Test/>
    </div>
    )
  }
};




class Test extends React.Component{

  render(){
    return(
      <div>
        <div className ="PaymentHeader"></div>
        <p>to pay send amouth to the adress</p>
          <h3>Amount</h3>

          <h3>Adress</h3>

          <p>14:43 Awaiting Payment</p>

          <button className = "SecondaryButton">show qr code instead</button>
      </div>
    )
  }
};




export class PaymentModalfinal extends React.Component {
   constructor(props) {
     super(props)
     this.state = { isModalOpen: false }
   }

   render() {
     return (
       <div>
         <button className ="Login" onClick={() => this.openModal()}>Deposit crypto</button>
         <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
           <PaymentModal/>
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
        borderRadius: '10px',
        position: 'fixed',
        width: '18%',
        height: '450px',
        left: '40%',
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


