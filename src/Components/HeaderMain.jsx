import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function HeaderMain() {
  return (
    <div>
        <Navbar className="bg-yellow-400 h-16">
            <Container>
            <Navbar.Brand href="#home">
                <h4 className='flex items-center mt-2'>
                    <i className="fa-solid fa-pepper-hot fa-bounce text-red-700"></i>
                    <span className='ms-2 font-extrabold text-black'>Epicurean Symphony</span>
                </h4>
            </Navbar.Brand>
            </Container>
            <Container>
              <ul style={{display:"flex",padding:"50px",margin:"20px"}}>
                <li ><a href="#HOME" style={{padding:"15px",color:"black",textDecoration:'none'}}>HOME</a></li>
                <li ><a href="#GRACIOUSNESS" style={{padding:"15px",color:"black",textDecoration:'none'}}>GRACIOUSNESS</a></li>
                <li ><a href="#AWARDS" style={{textDecoration: 'none',padding:"15px",color:"black"}}>AWARDS</a></li>
                <li ><a href="#PARADISE" style={{textDecoration: 'none',padding:"15px",color:"black"}}>PARADISE</a></li>
              </ul>
            </Container>
        </Navbar>
    </div>
  )
}

export default HeaderMain