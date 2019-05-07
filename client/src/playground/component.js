class Alarm extends React.Component{

    constructor(...args) {
      super(args);
      this.state = {
        renderChild: true
      }
      
      this.interval = null;
    }
    
    componentDidMount() {
      this.interval = setTimeout(() => this.setState({renderChild: false}), 2000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }   
  
    render(){
        return(
          <div>
          { this.state.renderChild ? 
                <Alert color="success">
                This is a success alert — check it out!
                </Alert>
          : null }
        </div>
        )
    }
  }