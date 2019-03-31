import React, { Component } from 'react'
import { Button, Card,  CardGroup, Col, Container, Form,  InputGroup,   Row ,FormGroup,FormLabel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 class Consumer extends Component {
    constructor(props){
        super(props)
            this.proceed=this.proceed.bind(this);
            this.state={
                drugid:''
            };
        };
        proceed(){
            console.log('this.state',this.state);
        }
        
    
  render() {
    return (
      <div>
         <div>
        <center>TRACK DETAILS</center>
      </div>
      <Card>
    
     <center>
      <Form className="form-vertical">
        <Col>
          <FormGroup><FormLabel className="control-label col-sm-2">DRUG ID</FormLabel>
<input
  type="text"
  name="drugid"
  
   onChange={event =>this.setState({drugid:event.target.value})}
/> </FormGroup>

<Button onClick={this.proceed}>PROCEED</Button>

</Col>
</Form>
</center>
</Card>
</div>
)
}
}
export default Consumer;
