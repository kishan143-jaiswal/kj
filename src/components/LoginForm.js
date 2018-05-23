import React from 'react';
import Mydata from '../dummy_data/data';
import '../index';
import {Redirect} from 'react-router-dom';
import bindfunc from '../util';

class LoginForm extends React.Component{
    constructor(props){
      
        super(props);
        bindfunc.call(this,['logIn'])
        this.state={
            username:'',
            password:'',
            path:null,
        }
    }

    logIn(user,pass){
        if(user!="" && pass!=""){
            for(let i=0;i<Mydata.data.length;i++)
             {
                let u_data=Mydata.data[i];
                    if(u_data.username===user && u_data.password===pass)
                    {
                        console.log("user logged");
                        this.setState({path:true})
                        break;
                    }
                    else{
                        alert("user not exist");
                        break;
                    }
              }
        }
        else{
           alert("insert username");
        }
   
     {this.setState({username:''})}
     {this.setState({password:''})}
    }

	render(){
        
        var Span;
        if(this.state.path){
            return (<Redirect to=
                                {{pathname:'/dashboard'}}/>)
        }
		return(
			<div >
                <form >
                 <div >
                    UserName:<input type="text"
                     name="uname" value={this.state.username} 
                     onChange={(text)=>this.setState({ username:text.target.value})
                   } placeholder="username" />
                  
                     <br/>
                    

                    Password:<input type="password" 
                    name="pwd" value={this.state.password}
                     onChange={(text)=>this.setState({password: text.target.value })
                                   
                                   
                   } 
                   placeholder="password"/><br/>
                   </div>
                    <button type="button"
                     onClick={()=>this.logIn(this.state.username,this.state.password)}>Submit</button>
                </form>
                
            </div>
            
			)
	}
}

export default LoginForm;