import React from 'react'
import styled from 'styled-components'
import Logo from "../Assets/Logo/logo.png"
import Moon from "../Assets/Logo/moon.png"
import { Link } from 'react-router-dom';


export default function Header() {
    return (
     <Headcontainer>
             <Logoitems to="/">
               <Logoimage src={Logo} alt="Logoimage" />
               <Logotext>marvel</Logotext>
             </Logoitems>  
         <Navbar>
             <Navitems>
                 <Navitem><Navlink to="/about">about</Navlink></Navitem>
                 <Navitem><Navlink to="/projects">projects</Navlink></Navitem>
                 <Navitem><Navlink to="/resume">resume</Navlink></Navitem>
                 <Navitem><Navlink to="/contact">contact</Navlink></Navitem>
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
const Logoitems = styled(Link)`
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
const Navlink = styled(Link)`
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