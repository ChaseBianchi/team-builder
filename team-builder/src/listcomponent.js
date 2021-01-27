import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
display: flex;
flex-flow: column nowrap;
width: 350px;
height: auto;
color: #e0eaff;
margin: 5%;
align-items: center;
border: 5px solid rgb(84,94,114,.5);

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
`

export default function List(params) {
    const {obj} = params

    return (
        
        <StyledCard>
            <h2>{`${obj.fname} ${obj.lname}`}</h2>
            <p>{obj.email}</p>
        </StyledCard>
    )
}
