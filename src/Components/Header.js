import React from 'react'
import styled from 'styled-components'
import Logo from "../Assets/Logo/logo.png"
import Moon from "../Assets/Logo/moon.png"


export default function Header() {
    return (
     <Headcontainer>
             <Logoitems href="/">
               <Logoimage src={Logo} alt="Logoimage" />
               <Logotext>marvel</Logotext>
             </Logoitems>  
         <Navbar>
             <Navitems>
                 <Navitem><Navlink href="/">about</Navlink></Navitem>
                 <Navitem><Navlink href="/">projects</Navlink></Navitem>
                 <Navitem><Navlink href="/">resume</Navlink></Navitem>
                 <Navitem><Navlink href="/">contact</Navlink></Navitem>
             </Navitems>
         </Navbar>
         <Colormode href="/">
             <Moonimage src={Moon}  alt ="Moonimage"/>
             <Colormodetext>Color mode</Colormodetext>
         </Colormode>
     </Headcontainer>
    )
}
const Headcontainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:20px;
`;
const Logoitems = styled.a`
     text-decoration:none;
     display:flex;
     align-items:baseline;
`;
const Logoimage = styled.img`
    width:15%;
`;
const Logotext = styled.h1`
   color:black;
   font-weight:bold;
   text-transform:capitalize;
   margin: 0 0 0 15px;
   font-size:25px;
`;
const Navbar = styled.div`

`;
const Navitems = styled.ul`
    list-style:none;
    display:flex

`;
const Navitem = styled.li`
     margin-right:20px;
`;
const Navlink = styled.a`
     text-decoration:none;
     text-transform:capitalize;  
     font-weight:bold;
     color:hsl(0deg 0% 50%);
     font-size:20px;
`;
const  Colormode = styled.a`
    text-decoration:none;
    display:flex;
    align-items:center;
`;

const Moonimage = styled.img`
     width:12%
`;
const Colormodetext = styled.h1`
    color:black;
    margin: 0px 0px 0px 15px;
    font-size:25px;
`;