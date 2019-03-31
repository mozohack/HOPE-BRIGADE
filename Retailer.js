import React,{Component}  from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Link} from "react-router-dom";
import wmtSystem from './KnowYourDrug.json';
class Retailer extends Component{
    static async getInitialProps(){
        const accounts=await web3.eth.getAccounts();
        return account
    }
    render(){
        return(<div>
            <Link route="/Update" ><buutton>Update Details</buutton></Link>
            <Link route="/Track" ><buutton>View Details</buutton></Link>
        </div>);
    };
}
export default Retailer;