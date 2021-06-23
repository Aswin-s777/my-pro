import React,{ Component } from "react";

class Forms extends Component{
    constructor(props){
        super(props);

    
    this.state={
        Name:"",
        Password:"",
        Email:"",
        address:"",
        language:"",
        gender:"",
        country:""

    };
}
name=(event)=>{
    this.setState(
        {
            Name:event.target.value,
            
        }
    );

};
password=(event)=>{
    this.setState(
        {
           
            Password:event.target.value
        }
    );

};
email=(event)=>{
    this.setState(
        {
           
            Email:event.target.value
        }
    );

};
address=(event)=>{
    this.setState(
        {
           
            address:event.target.value
        }
    );

};
language=(event)=>{
    this.setState(
        {
           
            language:event.target.value
        }
    );

};
gender=(event)=>{
    this.setState(
        {
           
            gender:event.target.value
        }
    );

};
country=(event)=>{
    this.setState(
        {
           
            country:event.target.value
        }
    );

};
submit=(event)=>{
    alert(`${this.state.Name} ${this.state.Password} ${this.state.Email} ${this.state.address} ${this.state.language} ${this.state.gender} ${this.state.country}`);
};
render(){
    return(
        <div style={{background: "url(" + "https://i.pinimg.com/originals/36/db/77/36db77ba1af872f131214f0ac9dcff7f.jpg" + ")"}}>
       <h1 className="name">Hello {this.state.Name} Lets Fill Up Your Form </h1>
       <form onSubmit={this.submit}>
           
           <table cellpadding="10" cellspacing="10" style={{fontFamily:" 'Bitter', serif;"}}>
                    <tr>
            <td>
                <label>NAME:</label><br></br>
            
                <input  className="black"  type="text" value={this.state.Name} onChange={this.name} style={{border:"hidden"}}></input>
            </td>
        </tr>
        <tr>
            <td>
                <label>PASSWORD:</label>
            </td>
            <td>
                <input type="password" value={this.state.Password} onChange={this.password}></input>
            </td>
        </tr>
        <tr>
            <td>
                <label>MAIL:</label>
            </td>
            <td>
                <input type="email" value={this.state.Email} onChange={this.email}></input>
            </td>
        </tr>
        <tr>
            <td>

            </td>

        </tr>
        <tr>
        <td>

            <label>ADDRESS: </label>
            </td>
			<td>
            <textarea cols="10" rows="10" name="Address" value={this.state.address} onChange={this.address}></textarea>
            </td>
        </tr>
        <tr>
        <td>
            <label>LANGUAGES:</label>
            </td>
			<td>
				<input type="checkbox" name="english" value={this.state.language} onChange={this.language}></input>
                <label>ENGLISH</label><br></br>
			<input type="checkbox" name="tamil" value={this.state.language} onChange={this.language}></input>
                <label>தமிழ்</label><br></br>
			
				<input type="checkbox" name="telugu" value={this.state.language} onChange={this.language}></input>
                <label>TELUGU</label>
			</td>
        </tr>
        <tr>
        <td><label>Gender</label></td>
		<td><input type="radio" value={this.state.gender==="Male"} name="Gender" id="male" onChange={this.gender}></input><label>Male</label><br></br>
		<input type="radio" value={this.state.gender==="Female"} name="Gender" id="female" onChange={this.gender}></input><label>Female</label>
        </td>
        </tr>
        
        <tr>
            <td>
            <label>Topic</label></td>
            <td>
          <select value={this.state.country} onChange={this.country}>
            <option>INDIA</option><br></br>
            <option>CHINA</option><br></br>
            <option>PAKISTAN</option>
          </select>
            </td>
        </tr>
        <tr>
        <td>
            <button value="SUBMIT" type="submit" style={{ backgroundColor: "rgba(0, 0, 0, 0)"}} >SUBMIT</button>

        </td>
			
        </tr>
        </table>
       </form> 
       
           
       
        </div>

    );


}

}



export default Forms;