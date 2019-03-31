import React,{Component}  from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Link} from "react-router-dom";
class App extends Component{
    static async getInitialProps(){
        const accounts=await web3.eth.getAccounts();
        return account
    }
    render(){
        return(
            <div>
                <Link route="/Consumer"><button >Are You a Consumer</button></Link>
                <button>Are you a part of Supply Chain?</button>
                <Link route="/Supplier"><button >Are You a Consumer</button></Link>
                <button>Are you a part of Supply Chain?</button>
            </div>
        );
    }
} 
export default App;
