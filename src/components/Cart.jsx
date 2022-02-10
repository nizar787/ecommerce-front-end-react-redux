 import React from 'react'
 import { useSelector } from 'react-redux'
 import { useDispatch } from 'react-redux'
 import { delItem } from '../redux/actions/index'
 import { Link } from 'react-router-dom'

 const Cart=() => {
  const x = useSelector((state) => state.addItems)
  const dispatch =useDispatch()
console.log(x);

  
   return (
     <div className='px4 my-5 bg-light rounded-3'>
       <div className='container'>
         <button className='btn'></button>
         {x?.map((el) => (
           <div className='row'>

            <div >
             <img style={{width:"100px"}} src={el.img} alt="" />
            </div>
             <div className='col-md-4'>
               <h3>{el.title}</h3>
               <p> {el.price} </p>
             </div>
             
           </div>
           
         ))}
       </div>
     </div>
   )
   const handleClose=(item)=>{
    dispatch(delItem(item))
   }
  }
  const emptyCart=()=>{
   return (
    <div className='px-4 my-5 bg-light rounded-3'>
     <div className='container py-4'>
      <div className='row'>
       <h3>your Cart is empty</h3>
      </div>

     </div>
     </div>
   )
  }
 {/* return (
   <>
   {state.length === 0 && emptyCart()}
   {state.length !==0 && state.map(cartItems)}
   {state.length !==0 && button()}
   </>
 )*/}
 


 export default Cart