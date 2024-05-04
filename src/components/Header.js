import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { CartState } from './Context';
import { DropdownToggle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';

function Header() {
  const {state:{cart},dispatch,productdispatch}=CartState()
  return (
    <div >
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Onine Shopping</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href=""> <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{"width":"500px"}}
              onChange={(e)=>{
                productdispatch({
                type:"filterbyserach",
                payload:e.target.value
              })
              }}
            />
          </Form></Nav.Link>
            <Nav.Link href="" className='ms-5'> 
            <Dropdown>
      <DropdownToggle variant="success" id="dropdown-basic">
      <i className="fa-solid fa-cart-shopping"></i>
      <sup className='fs-5'>{cart.length}</sup>
      </DropdownToggle>

      <Dropdown.Menu style={{width:"350px"}}>
        {
          cart.length > 0 ? (
            <>
            {
              cart.map((prod)=>{
                return (
                  <div className='d-flex justify-content-evenly align-items-center'>
                    <div key={prod.id}>
                      <img src={prod.Image} alt={prod.name}
                      height="80" width="80"/>
                    </div>
                        <div className='text-wrap'>{prod.name}</div>
                        <div>${prod.price}</div>
                        {/* trash icon from react-icon */}

                        <div><i className="fa-solid fa-trash fs-5 " onClick={()=> dispatch({
                          type:"REMOVEFROMCART",
                          payload:prod
                        })}></i></div>
                  </div>
                )
              })
            }
            <Link to={"/Cart"}>
              <Button variant='primary'>Go To Cart</Button>
            </Link>
            </>
          ) : ("Cart is empty")
          }

      </Dropdown.Menu>
    </Dropdown>
            </Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  )
}

export default Header