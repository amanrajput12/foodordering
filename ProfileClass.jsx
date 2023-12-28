import React from "react";

class ProfileClass extends React.Component{
    // in class based we used constructor in place of usestate
    constructor(props){
        super(props);
        // create state
        this.state = {
            count:0,
            userInfo:{
            
              
            }
          }
        console.log(' children contrucator',this.props.name);
        }
async componentDidMount(){
  
    const data = await fetch('https://api.github.com/users/amanrajput12')
    const json = await data.json()
    console.log('api data',json);
    this.setState({
        userInfo:json
    })
   this.timer= setInterval(() => {
    console.log('namste react op profileclass');
   }, 1000);
    console.log('children componentdimount',this.props.name);
}
 componentDidUpdate(prevProps,prevState){
  if(this.state.count!==prevState.count){
   console.log('increase the value ');
  }
    console.log('componentDidUpdate ');
 }
 componentWillUnmount(){
    clearInterval(this.timer)
    console.log('componentWillUnmount ');
 }
    render(){
        console.log("children render of profile ",this.props.name  );
        return(
            <div>
            <h2>Profile class compoenet</h2>
            <h3>Name : {this.state.userInfo.name}</h3>
          <img style={{width:"200px",borderRadius:'50%'}} src={this.state.userInfo.avatar_url} alt="avtar" />
            <p>{this.state.userInfo.bio}</p>
            <button onClick={()=>this.setState({count:this.state.count+1},)}>Count{this.state.count}</button>
            </div>
        )
    }
}
/*

child constructor
child render
child componentDidMount

api call 
set state

<update cycle>

*/


export default ProfileClass