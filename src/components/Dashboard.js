import React from 'react';
import bindfunc from '../util';
import {withRouter} from 'react-router-dom';
import Profile from './Profile'
import EditProfile from './editProfile'
import users_info from '../dummy_data/localData';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        //localStorage.setItem('users_info',JSON.stringify(users_info));
        this.state={
            users:JSON.parse(localStorage.getItem('users_info')),
        }
        bindfunc.call(this,['DemoFn','addUser','deleteUser','editUSer'])

    }

    DemoFn(data,index){
        this.props.history.push({pathname:'/profile',data:data})
    }

    addUser(){
        this.props.history.push({pathname:'/profile'});
    }

    deleteUser(e){
        var index=e.target.getAttribute('data-key');
        var users=JSON.parse(localStorage.getItem('users_info'));
        users.users_info.splice(index,1);
        this.setState({
          users:users
        })
        localStorage.setItem('users_info',JSON.stringify(users));
    }
    
    editUSer(data,index){
        this.props.history.push({pathname:'/editProfile',data:data,index:index})
    }


    render(){
      //  localStorage.setItem('users_info',JSON.stringify(users_info));
        return(
           <div >
                <ul>
                <h3 >List of Users</h3>
                <input type="button" value="AddUser" onClick={this.addUser}/><br/><br/>

                        {this.state.users.users_info.map((data,index)=>
                        (
                            
                                <li key={index} >
                                {data.name}&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="button" value="Info" onClick={()=>this.DemoFn(data.name,index)}/>&nbsp;&nbsp;
                                <input type="button" value="X" data-key={index} onClick={this.deleteUser}/>&nbsp;&nbsp;
                                <input type="button" value="edit"  onClick={()=>this.editUSer(data,index)}/>
                                </li>
                        ))
                        }
                </ul>
            </div>
        );
    }
}
export default withRouter(Dashboard);