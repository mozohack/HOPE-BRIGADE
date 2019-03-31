import React,{Component}  from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Link} from "react-router-dom";
class Track extends Component{
    static async getInitialProps(){
        const accounts=await web3.eth.getAccounts();
       

    
       const  PathOfDrug=await wmtSystem.methods.getSupplyChainDetails().call();
    }
    
    render(){
        return(
            <div>
                <Label>Enter Drug ID:</Label>
                <input type="text"></input>
            <Link route="/TrackDet"><button>Track Details</button></Link>    
            <div>
                {PathOfDrug}
            </div>
            </div>
        )
    }

}
export default Track;