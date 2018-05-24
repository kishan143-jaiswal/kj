import React from 'react';
import bindfunc from '../util';
import Dashboard from './Dashboard';
import {Redirect} from 'react-router-dom';
import users_info from '../dummy_data/localData';
import '../css/profile.css'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
             users_info : JSON.parse(localStorage.getItem("users_info")),
             path:null,
             
        }
            bindfunc.call(this,['addInfo'])
    }


    addInfo(){
        var name=this.refs.name.value;
        var email=this.refs.email.value;
        var address=this.refs.address.value;
        
        if(localStorage.getItem("users_info")){
    
            var users_info = JSON.parse(localStorage.getItem("users_info"));
           
            users_info.users_info.push({
                name:name,
                email:email,
                address:address
            })
            localStorage.setItem('users_info',JSON.stringify(users_info));
            
        }else{
            this.state.users_info.push({
                name:name,
                email:email,
                address:address
            })
            localStorage.setItem('users_info',JSON.stringify(this.state.users_info));
        }
                               this.refs.name.value="";
                               this.refs.email.value="";
                               this.refs.address.value="";
                               this.setState({
                                   path:true
                               })
    }

    render(){
        if(this.state.path){
            return (<Redirect to=
                {{pathname:'/dashboard'}}/>)
        }

        if(this.props.location.data){
        var view;
        let props_data=this.props.location.data;
        let state_data=this.state.users_info.users_info;

            for(let i in state_data){
                if(props_data===state_data[i].name){
                    
                    view=(
                        <div className="row">
                        <div className="col-md-5 col-sm-5 col-lg-5 col-xs-5"></div>
                        <div className="col-md-7 col-sm-7 col-lg-7 col-xs-7 ">
                           <span className="h1_tag"> <h1>Users-Information</h1></span>
                            <h3>Name:{state_data[i].name}</h3>
                            <h3>Email:{state_data[i].email}</h3>
                            <h3>Address:{state_data[i].address}</h3>
                        </div>
                       
                        </div>
                        )
                      
                        break;
                    
                }
            }
        }
            else{
                view=(
                                   <div>
                                       Name:<input type="text" ref="name" placeholder="insert user name"/><br/>
                                       Email:<input type="text" ref="email" placeholder="insert user email"/><br/>
                                       Address:<input type="text" ref="address" placeholder="insert user address"/><br/><br/>
                                       <input type="button" className="btn btn-primary" value="AddInfo" onClick={this.addInfo} /><br/>
                                    </div>
    
                               ) 
            }
        return(
                <div>
                    {view}
                </div>
        )
    }
}
export default Profile;