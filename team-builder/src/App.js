import React, {useState} from 'react'
import './App.css';
// import FriendsForm from './FriendsForm'
import styled from 'styled-components'

const AppBox = styled.div`
  color: #61dafb;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const FormDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 395px;
  height: auto;
  margin: 5%;
  align-items: center;
  border: 5px solid #266b7c;
  input {
    padding: 3px;
    margin: 5px 9px;
  }
  button {
    width: 120px;
    height: 20px;
    border: 2px solid gray;
    border-radius: 8px;
    font-weight: bold;
    margin: 0 35px;
  }
  button:hover {
    border: 2px solid #db7272;
  }
  h1 {
    text-align: center;
    background-color: rgb(84,94,114,.5);
    width: 70%;
    margin: 5px 15%;
    border-radius: 4px;
  }
`
function App() {
  const initialForm = {fname: '', lname: '', email: ''}

  // const {teamList, setTeamList} = useState ([])
  const [formData, setFormData] = useState(initialForm)

  const formChanges = event => {
    // debugger
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

 
  return (
    <AppBox>
    
    <FormDiv>
      <form>
      <h1>Check-in</h1>
        <input classList ='input' type='text' placeholder='First Name' name='fname' onChange={formChanges}></input>
        <input classList ='input' type='text' placeholder='Last Name' name='lname' onChange={formChanges}></input>
        <input classList ='input' type='text' placeholder='Email' name='email' onChange={formChanges}></input>
        <button>Submit</button>
      </form>
    </FormDiv>
    </AppBox>
  );
}

export default App;
