import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../redux/action";
import "./checkout.css"
function Cartpage(){
  const dispatch = useDispatch();
  const {cart} = useSelector(state=>state);

  const removeHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  useEffect(()=>{

  },[cart])
    return (
      <div className="marginTop"> 
       <h1 className="heading">Shopping Cart</h1>
  
      <div className="parent">
        <div>
          {
            cart.map((elm)=>{
              return <div className="box1">
              <div>
                <img src={elm.thumbnails[0][6]} />
              </div>
              <div>
                <p>
                  {elm.title}
                </p>
      
                <p className="">{elm.category}</p>
                <p>INR {elm.price}</p>
                <p className="red">Sale INR 37,803.19</p>
                <p>Ends in 1 day 18 hrs 52 min</p>
                <p className="selected">high selected items</p>
                <div>
                  <div className="innerBox">
                    <h2>Quatity : {elm.quantity}</h2> 
                  </div>
                  <div className="innerBox">
                    <u>
                      {" "}
                      <button onClick={()=>removeHandler(elm.position)}>Remove</button>{" "}
                    </u>
                    <u>
                      {" "}
                      <button>Save for later</button>
                    </u>
                  </div>
                </div>
              </div>
            </div>
            })
          }
        </div>
        <div className="box2">
          <div>
            <h1>Add a Promo Code</h1>
          </div>
          <div className="box2_main2">
              <div>
                <h5>(1) item:</h5>
                <h5>INR 44,072.35</h5>
              </div>
              <div>
                  <p> Savings:</p>
                <p className="paragraph"> 6,269.16</p>
              </div>
              <div>
                <h5>Subtotal:</h5>
                <h5> INR 37,803.19</h5>
              </div>
              <div>
                <h3>Your Total:</h3>
                <h3>37,803.19</h3>
              </div>
              <button>Check Out</button>
          </div>
        </div>
      </div>
      <h3> Things We Know You'll Love</h3>
      <div className="parent2">
        <div>
          <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/6f028d80157c02d1a519d36a0045fa8ef914efb0/Furniture-of-America-Transitional-Espresso-Dining-Buffet.jpg?impolicy=mediumlow" />
          <button>Add to Cart</button>
          <h3> Sale $373.49</h3>
          <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
        </div>
        <div>
          <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/6f028d80157c02d1a519d36a0045fa8ef914efb0/Furniture-of-America-Transitional-Espresso-Dining-Buffet.jpg?impolicy=mediumlow" />
          <button>Add to Cart</button>
          <h3> Sale $373.49</h3>
          <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
        </div>
        <div>
          <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/6f028d80157c02d1a519d36a0045fa8ef914efb0/Furniture-of-America-Transitional-Espresso-Dining-Buffet.jpg?impolicy=mediumlow" />
          <button>Add to Cart</button>
          <h3> Sale $373.49</h3>
          <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
        </div>
        <div>
          <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/6f028d80157c02d1a519d36a0045fa8ef914efb0/Furniture-of-America-Transitional-Espresso-Dining-Buffet.jpg?impolicy=mediumlow" />
          <button>Add to Cart</button>
          <h3> Sale $373.49</h3>
          <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
        </div>
      </div>
      </div>
    )
  }
  export default Cartpage