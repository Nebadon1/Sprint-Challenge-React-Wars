import React from "react";
import styled from "styled-components";

const CardStyle=  styled.div`
display:flex;
flex-direction:column;
border: 1px solid gray;
border-radius: 12px;
color:white;
width: 430px;
height: 540px;
margin-bottom: 40px
font-size: 0.9rem;
background: rgba(130,130,130,0.5);
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`
const HeaderStyle = styled.div`
color: #0079c6;
`
export default function CharacterCard({ info }) {
    
    return (
      <div>
      <CardStyle>
      <HeaderStyle>
                <h2>{info.name}</h2>
      </HeaderStyle>
      
           <h2>Birth Year: {info.birth_year}</h2>
           <h2>Height: {info.height}</h2>
           <h2>Mass: {info.mass}</h2>
           <h2>Eye Color: {info.eye_color}</h2>
           <h2>Hair Color: {info.hair_color}</h2>
           <h2>Skin Color: {info.skin_color}</h2>
      </CardStyle>
     </div>
    );
  };