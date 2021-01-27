import React, {useState} from 'react'
import './App.css';
// import FriendsForm from './FriendsForm'
import styled from 'styled-components'
import List from './listcomponent'

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
const ListDiv = styled.div`
// border: 1px solid white;
display: flex;
flex-flow: column nowrap;
align-items: center;
width: 100%;
height: auto;
`
function App() {
  const initialForm = {fname: '', lname: '', email: ''}

  // const {teamList, setTeamList} = useState ([])
  const [formInput, setFormInput] = useState(initialForm)
  const [arrayList, setArrayList] = useState([])

  const formChanges = event => {
    // debugger
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    })
  }
  const submit = (event) => {
    event.preventDefault();
    arrayList.unshift({fname: formInput.fname, lname: formInput.lname, email: formInput.email});
    console.log(arrayList);
    setFormInput(initialForm);
  }

  return (
    <AppBox>
    <FormDiv>
      <form onSubmit={submit}>
      <h1>Check-in</h1>
        <input type='text' value={formInput.fname} placeholder='First Name' name='fname' onChange={formChanges}></input>
        <input type='text' value={formInput.lname} placeholder='Last Name' name='lname' onChange={formChanges}></input>
        <input type='text' value={formInput.email} placeholder='Email' name='email' onChange={formChanges}></input>
        <button>Submit</button>
      </form>
    </FormDiv>
    <ListDiv>
      {arrayList==false ? 'Join the waitlist!' :
      arrayList.map(obj=>{
        return(
          <List obj={obj}/>
        )})}
    </ListDiv>
    </AppBox>
  );
}

export default App;
