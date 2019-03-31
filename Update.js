import React,{Component}  from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Link} from "react-router-dom";
import wmtSystem from './KnowYourDrug.json';
class Update extends Component{
    static async getInitialProps(){
       
    state={drugId:"",drugName:"",FromSerialNo:"",ToSerialNo:"",DateOfManufacture:"",DateOfExpiry:""}
    
    const Update=await wmtSystem.methods.getSupplyChainDetails().call();UpdateSupplyChainParts(drugId,drugName
        ,FromSerialNo,ToSerialNo);
    }
    render(){
        return(<div>
            <Label>Enter Drug ID</Label>
            <input type="text" onChange={this.setState(drugId=event.target.value)}></input>
            <Label>Enter Drug Name</Label>
            <input type="text" onChange={this.setState(drugName=event.target.value)}></input>
            <Label>Enter From Serial No</Label>
            <input type="number" onChange={this.setState(FromSerialNo=event.target.value)}></input>
            <Label>To Serial No</Label>
            <input type="number"onChange={this.setState(ToSerialNo=event.target.value)}></input>
            <Label>Date Of Manufacture</Label>
            <input type="date"onChange={this.setState(DateOfManufacture=event.target.value)}></input>
            <Label>Date Of Expiry</Label>
            <input type="date"onChange={this.setState(DateOfExpiry=event.target.value)}></input>

        </div>);
    };
}
export default Update;