import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartData, removeFromCart } from "../../redux/action";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import "./checkout.css";
function Cartpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, isAuth } = useSelector((state) => state);

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const getTotalPrice = () => {
    let totalPrice = cart.reduce(
      (acc, elm) => acc + Number(elm.price) * Number(elm.quantity),
      0
    );
    return totalPrice.toFixed(2);
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/signup");
    } else {
      dispatch(getCartData());
    }
  }, []);
  return (
    <Container maxW={"7xl"}>
      <div className="marginTop">
        <h1 className="heading">Shopping Cart</h1>
        <div className="parent">
          <div className="parent-Div1">
            {cart.map((elm) => {
              return (
                <div className="box1">
                  <div className="box1_imageDiv">
                    <img src={elm.thumbnails[0][6]} />
                  </div>
                  <div>
                    <div className="box1_Div2">
                      <p
                        style={{
                          margin: "0px 0 10px 0",
                        }}
                      >
                        {elm.title}
                      </p>
                      <p
                        className=""
                        style={{
                          textTransform: "capitalize",
                        }}
                      >
                        {elm.category}
                      </p>
                      <p>INR {elm.price}</p>
                      <p>Ends in 1 day 18 hrs 52 min</p>
                      <Flex
                        style={{
                          marginLeft: "0px",
                        }}
                        align={"center"}
                        className="selected"
                        width={"200px"}
                        gap={2}
                      >
                        {" "}
                        <BsFillEmojiLaughingFill /> High Satisfaction Item
                      </Flex>
                    </div>
                    <div>
                      <div className="innerBox">
                        <h2>Quantity : {elm.quantity}</h2>
                      </div>
                      <div className="innerBox2">
                        <u>
                          {" "}
                          <button onClick={() => removeHandler(elm.id)}>
                            Remove
                          </button>{" "}
                        </u>
                        <u>
                          {" "}
                          <button>Save for later</button>
                        </u>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="box2">
            <Box border={"1px solid #cecece"}>
              <Flex align={"center"} justifyContent={"center"} gap={5}>
                <Text fontSize={"25px"} pos={"relative"} top={"-5px"}>
                  <AiOutlinePlus />
                </Text>{" "}
                <h1>Add a Promo Code</h1>
              </Flex>
            </Box>
            <div className="box2_main2">
              <div>
                <h5>({cart.length}) item:</h5>
                <h5>INR {getTotalPrice()}</h5>
              </div>
              <div>
                <p> Savings:</p>
                <p className="paragraph">
                  {" "}
                  {(getTotalPrice() * 0.07).toFixed(2)}
                </p>
              </div>
              <div>
                <h5>Subtotal:</h5>
                <h5> INR {(getTotalPrice() * 0.93).toFixed(2)}</h5>
              </div>
              <div>
                <h3>Your Total:</h3>
                <h3>{(getTotalPrice() * 0.93).toFixed(2)}</h3>
              </div>
              <button onClick={() => navigate("/checkout")}>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Cartpage;
