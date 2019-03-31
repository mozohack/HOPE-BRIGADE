import React,{Component}  from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Link} from "react-router-dom";
class Manufacturer extends Component{
    static async getInitialProps(){
        const accounts=await web3.eth.getAccounts();
        return account
    }
    render(){
        return(<div>
            <Link route="/Update" ><button>Update Details</button></Link>
            <Link route="/Track" ><button>View Details</button></Link>
        </div>);
    };
}
export default Manufacturer;