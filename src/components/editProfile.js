import React from 'react';
import bindfunc from '../util';
import {Redirect} from 'react-router-dom';

class EditProfile extends React.Component{
    constructor(props){
        super(props);

        this.state={
            path:null,
            
            data:{
                name:this.props.location.data.name,
                email:this.props.location.data.email,
                address:this.props.location.data.address,
            },
            users_info : JSON.parse(localStorage.getItem("users_info")),
            
        }
            bindfunc.call(this,['updateInfo'])
    }

    updateInfo(){
      var user_info=JSON.parse(localStorage.getItem("users_info"));
      var users_info=user_info.users_info;
      var prop_index=this.props.location.index;
      var new_users={
          name:this.name.value,
          email:this.email.value,
          address:this.address.value
      }
      for(let i=0 ; i<users_info.length; i++){
          if(prop_index===i)
          {
            users_info[i]=new_users;
          }
      }
      user_info.users_info=users_info;
      localStorage.setItem('users_info',JSON.stringify(user_info));
        this.setState({
            path:true
        })
    }

    render(){
        if(this.state.path){
            return (<Redirect to=
                {{pathname:'/dashboard'}}/>)
        }

        let view;
            if(this.props.location.data){
                view=(
                    <div>
                        Name:<input type="text" ref={(ref)=>this.name=ref} defaultValue={this.state.data.name}  /><br/>
                        Email:<input type="text" ref={(ref)=>this.email=ref} defaultValue={this.state.data.email} /><br/>
                        Address:<input type="text" ref={(ref)=>this.address=ref} defaultValue={this.state.data.address} /><br/><br/>
                        <input type="button" className="btn btn-primary" value="update" onClick={this.updateInfo} /><br/>
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
export default EditProfile;