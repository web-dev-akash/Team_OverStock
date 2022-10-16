function Cartpage(){
    return (
      <div>
       <h1 className="heading">Shopping Cart</h1>
  
      <div className="parent">
        <div className="box1">
          <div>
          <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/8c574877417df3e284db73ec68f559550dcd7df1/Furniture-of-America-Diz-Modern-47-inch-Wine-Bar-Dining-Server.jpg?impolicy=mediumlow"/>
          </div>
          <div> 
            <p>
              Furniture of America Diz Modern 47-inch Wine Bar Dining Server
            </p>
  
            <p className="">Cappuccino</p>
            <p><s>INR 44,072.35</s></p>
            <p className="red">Sale INR 37,803.19</p>
            <p>Ends in 1 day 18 hrs 52 min</p>
            <img src="./Capture.png" alt=""/>
            <div>
              <div className="innerBox">
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="innerBox">
                <u>
                  {" "}
                  <button>Remove</button>{" "}
                </u>
                <u>
                  {" "}
                  <button>Save for later</button>
                </u>
              </div>
            </div>
          </div>
        </div>
        <div className="box2">
            <div className="box2_main1">
                <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg"><path d="M12 2V22" stroke="#2F3337" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12H2" stroke="#2F3337" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              
                <h3 className="promo">Add a Promo Code</h3>
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
       <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/8c574877417df3e284db73ec68f559550dcd7df1/Furniture-of-America-Diz-Modern-47-inch-Wine-Bar-Dining-Server.jpg?impolicy=mediumlow"/>
          <button>Add to Cart</button> 
          <h3> Sale $373.49</h3>
          <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/8c574877417df3e284db73ec68f559550dcd7df1/Furniture-of-America-Diz-Modern-47-inch-Wine-Bar-Dining-Server.jpg?impolicy=mediumlow"/>
          <button>Add to Cart</button>
          <h3> Sale $373.49</h3>
          <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/8c574877417df3e284db73ec68f559550dcd7df1/Furniture-of-America-Diz-Modern-47-inch-Wine-Bar-Dining-Server.jpg?impolicy=mediumlow"/>
          <button>Add to Cart</button>
          <h3> Sale $373.49</h3>
          <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/8c574877417df3e284db73ec68f559550dcd7df1/Furniture-of-America-Diz-Modern-47-inch-Wine-Bar-Dining-Server.jpg?impolicy=mediumlow"/>
          <button>Add to Cart</button>
          <h3> Sale $373.49</h3>
          <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
        </div>
      </div>
  
      
      </div>
    )
  }
  export default Cartpage