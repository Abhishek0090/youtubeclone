import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


import youtube from "../img/youtube-logo-png-2067.png";


const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter}  ;
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;  
`;

const Search = styled.div`
    width: 40%; 
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
   border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500; 
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
`;


const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Hamburgercss = styled.div`
  
    height : 100%; 
    background-color : ${({ theme }) => theme.bgLighter};
    font-size: 14px;
    color : ${({ theme }) => theme.text};
    top: 12px;
    left : 5px;
    display:flex;
    align-items :center;
    justify-content : center;
    flex-direction  :column; 
`;


const Logo = styled.div`
    display:flex; 
    align-items: center;
    justfity-content  :center;
    gap:5px;
    font-weight : bold;
    margin-bottom : 25px;
`;

const Img = styled.img`
  
    height:25px; 

`;

const Navbar = () => {


  const [hamburger, sethamburger] = useState(null);

  return (
    
    <Container>
        <Wrapper>
          <Hamburgercss onClick={() => sethamburger(!hamburger)} style={{ cursor: "pointer" }}>
            <MenuIcon />
          </Hamburgercss>
                <Logo>
                        <Img src={youtube} alt='youtube' />
                        PlayTube
                    </Logo>
          <Search>
            <Input placeholder="Search.." />
            <SearchOutlinedIcon style={{ cursor: "pointer" }} />
          </Search>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
    </Link>
        </Wrapper>
      </Container>
  )
}

export default Navbar