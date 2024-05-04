import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CartState } from './Context';
function Filters() {
  const {productdispatch,productstate:{stock,sort}}=CartState()
  return (
    <div className='mt-4 text-white p-4'>
     
      <Form.Check type="radio" aria-label="radio 1" label="Ascending" className='mb-4' name='r1'
      onChange={()=>{
        productdispatch({
         type:"sortbyprice",
          payload:"ascending"
        })
      }}
      checked={sort==="ascending"?true:false}/>

      <Form.Check type="radio" aria-label="radio 2" label="Descending" className='mb-4' name='r1'
      onChange={()=>{
        productdispatch({
          type:"sortbyprice",
          payload:"descending"
        })
      }}
      checked={sort==="descending"?true:false}/>

      <Form.Check aria-label="option 1" label="Out of Stock" 
      className='mb-4'
      onChange={()=>{
        productdispatch({
          type:"filterbystock"
        })
      }}
      checked={stock}/>

      <Button variant="secondary" className="mb-4 fs-4"
      onClick={()=>{
        productdispatch({
          type:"clearfilters"
        })
      }}>Clear Filter</Button>
    </div>
  )
}

export default Filters
