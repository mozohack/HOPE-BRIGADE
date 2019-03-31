import React,{Component}  from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Link} from "react-router-dom";
class SupplyChainPart extends Component{
    static async getInitialProps(){
        const accounts=await web3.eth.getAccounts();
       

    
     
    }

    
    render(){
        return(
            <div>
                <Label>Enter UserID</Label>
                <input type="text"></input>
                <Label>Select Your role</Label>
                <Link route="/Manufacturer"><button>Manufacturer</button></Link>
                <Link route="/Supplier"><button>Supplier</button></Link>
                <Link route="/Retailer"><button>Retailer</button></Link>

            </div>
        )
    };
}
export default SupplyChainPart ;