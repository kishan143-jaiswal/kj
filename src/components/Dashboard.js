import React from 'react';
import bindfunc from '../util';
import {withRouter} from 'react-router-dom';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
       // localStorage.setItem('users_info',JSON.stringify(users_info));
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
           <span style={{textAlign:"center"}}> <h2 >List of Users</h2></span>
           <input type="button"  className="btn btn-primary" value="AddUser" onClick={this.addUser}/><br/><br/>
           <div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>NO.</th>
                                    <th>Name</th>
                                    <th>Buttons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.users_info.map((data,index)=>
                                    (
                                <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.name}</td>
                                        <td><input type="button" className="btn btn-info" value="Info" onClick={()=>this.DemoFn(data.name,index)}/>&nbsp;&nbsp;
                                        <input type="button" className="btn btn-warning" value="edit"  onClick={()=>this.editUSer(data,index)}/>&nbsp;&nbsp;
                                        <input type="button"  className="btn btn-danger" value="X" data-key={index} onClick={this.deleteUser}/>
                                        </td>
                                </tr>
                                ))
                            }
                            </tbody>

                        </table>
                </div>
            </div>
        );
    }
}
export default withRouter(Dashboard);