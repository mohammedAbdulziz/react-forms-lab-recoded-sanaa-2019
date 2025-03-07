import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }
  handleBoth=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    if(this.state.username!==""&&this.state.password!==""){
      this.props.handleLogin({username:this.state.username,password:this.state.password})
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleBoth}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleBoth}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
