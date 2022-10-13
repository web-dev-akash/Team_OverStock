// const data1 = `http://localhost:3000/Furniture`;
// const getData = async() => {
//     try {
//         const res = await fetch(`http://localhost:3000/Furniture`);
//     const data = await res.json();
//     console.log(data[0]);
//     detailsPage(data[0]);
//     } catch (error) {
//         console.log(error);
//     }
// }   
import './details.css';

function detailsPage(){

    const style_main = {
        display:"flex",
        width:"70%",
        margin:"0 20% 0 10%"
    }

    const cont1 = {
        width:"50%"
    }

    const cont2 = {
        width:"48%"
    }

    const image = {
        width:"90%",
        height:"450px"
    }

   const name = {
    fontSize:"20px",
    textAlign:"left"
   }

   const upper = {
    fontSize:"10px"
   }

   const quantity = {
    width:"225px",
    padding:"7px",
    border:"1px solid cream"
   }

   const cartBtn = {
    width:"225px",
    padding:"7px"
   }

   const buttons = {
    display:"flex",
    justifyContent:"space-between",
    marginTop:"40px"
   }

   const details_main = {
        width:"70%",
        margin:"2% 20% 0 10%"
   }
   const details = {
    width:"48%"
   }
    return (

        <>
        <div style={style_main}>
                <div style={cont1}><img style={image} src="https://ak1.ostkcdn.com/images/products/is/images/direct/20ac71253bf7293ea9cb8a980e86890249f68a79/Fasade-Traditional-Style-%231-Moonstone-Copper-Backsplash-Kit.jpg" alt="not able to fetch" /></div>
            <div style={cont2}><p style={name}>Fasade Traditional Style #1 Moonstone Copper Backsplash 15 Sq Ft Kit</p>
            <p style={name}>4.5/5⭐</p>
            <p style={name}>Starting at <sup style={upper}>INR</sup> 382 <sup style={upper}>00</sup> </p> 
            <div style={buttons}>
                <select name="" id="" style={quantity} className="itemQuantity">
                    <option value="1">Quantity 1</option>
                    <option value="2">Quantity 2</option>
                    <option value="3">Quantity 3</option>
                    <option value="4">Quantity 4</option>
                    <option value="5">Quantity 5</option>
                </select>
                <button style={cartBtn} className="cartBtn">Add to Cart</button>
            </div>
            </div>
        </div>
        <div style={details_main}>
            <div style={details}><h2>Deatils:</h2> Take home renovations into your own hands with Fasade Backsplash. Fasade Backsplash tiles are lightweight, flexible and easy to install, allowing even the most novice DIY-ers to create beautiful and luxurious spaces in their homes! Waterproof, rust-proof and mold-proof, our products are created with you in mind. Our vinyl finishes allow quick cleanup for even the toughest messes, simply wipe clean with warm, soapy water and soft cloth. You'll be grateful you chose Fasade, even years down the road!</div>
        </div>
        </>
    )
}

export default detailsPage;