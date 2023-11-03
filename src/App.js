import { useState } from 'react';
import './App.css';
function App() {
  const [fname,setfname]=useState();
  const [lname,setlname]=useState();
  const [dob,setdob]=useState();
  const [gender,setgender]=useState();
  const [status,setVacinated]=useState();
  const handleLogin=(e)=>{
    e.preventDefault();
    //api call to backend
    console.log(fname,lname,dob,gender,status);
    const payload = {
      fname,
      lname,
      dob,
      gender,
      status
    };
    fetch('http://localhost:4400/submit',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    }) .then(response => response.json())
    .then(data => {
      alert('Data sent successfully:', data);
    })
    .catch(error => {
      alert('Error sending data:', error);
    });


  }
  return (
    <div className="App" >
      <h2> ENTER YOUR INFORMATION</h2><hr></hr><br></br>
      <form id="formid" onSubmit={handleLogin}>
        <label for="name">NAME:</label>
        <input type="text" id="name" name="name" onChange={(e)=>setfname(e.target.value)}></input><br /><br />
        <label for="lastname">LAST NAME:</label>
        <input type="text" id="lastname" name="name" onChange={(e)=>setlname(e.target.value)}></input><br></br>
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="Male" onChange={(e)=>setgender(e.target.value)}></input>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" onChange={(e)=>setgender(e.target.value)}></input>
        <label for="female">Female</label>
        <input type="radio" id="other" name="gender" value="Other" onChange={(e)=>setgender(e.target.value)}></input>
        <label for="other">Other</label><br /><br />

        

        <label for="birthdate">Birth Date:</label>
        <input type="date" id="birthdate" name="birthdate" required onChange={(e)=>setdob(e.target.value)}></input><br /><br />
        
        <label>VACCINATED</label>
        <input type="radio" id="vaccinated" name="same" value="yes" onChange={(e)=>setVacinated(e.target.value)}></input>
        <label for="vaccinated">YES</label>
        <input type="radio" id="vaccinated" name="same" value="no" onChange={(e)=>setVacinated(e.target.value)}></input>
        <label for="vaccinated">NO</label><br></br><br></br>
        <input type="submit" value="SUBMIT" /><br></br><br></br>


      </form>

      <a href='/dashboard'>Dashboard</a>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    </div>
  );
}

export default App;
