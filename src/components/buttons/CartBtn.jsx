import React from 'react';
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const CartBtn = () => {

  const x = useSelector((state) => state.addItems)
  console.log(x);
  return(
    <div>
      <Link to='cart' className='btn btn-outline-primary'>Cart{x.length}
      </Link>
    </div>
    )
};

export default CartBtn;
