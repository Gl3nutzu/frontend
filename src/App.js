import {useState} from 'react';
import axios from 'axios';

function App() {
  const [cname, setcname] = useState("");
  const [location, setlocation] = useState("");
  const [duration, setduration] = useState("");
  const [starts, setstarts] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("da!");
    let obj = {
      "name": cname,
      "location": location,
      "duration": duration,
      "starts": starts
    }
    axios.post("http://localhost:3000/api/course/addcourse", obj).then(res => alert('Succes'));
  }

  return (
    <form style={{display: "flex", flexDirection: "column", gap: "10px"}} onSubmit={handleSubmit}>
      <label>
        Course name:
        <input type="text" name="name" onChange={(e) => {setcname(e.target.value)}} />
      </label>
      <label>
        Location:
        <input type="text" name="location" onChange={(e) => {setlocation(e.target.value)}} />
      </label>
      <label>
        Duration:
        <input type="text" name="duration" onChange={(e) => {setduration(e.target.value)}} />
      </label>
      <label>
        Available starts:
        <input type="text" name="starts" onChange={(e) => {setstarts(e.target.value)}} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
