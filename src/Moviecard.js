import React from "react";


function Moviecard(props) {

    // now no need of  this code because we moved all the add start, minus stars code in movie list using props

    //Creating an arrow function for addStars which automatically binds to the current instance
    // addStars = () => {
    //     // // way 1
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // })
        
    //     // // way 2 
    //     if(this.state.stars >= 5){
    //         alert("Rating can be only upto 5");
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return{
    //             stars: prevState.stars + 0.5
    //         }
    //     })
        
    //     // without using setState which will not rerender the component
    //     // this.state.stars += 0.5;
    //     // console.log("this.state.stars: ",this.state.stars)
    // }

    // decStars = () => {
    //     if(this.state.stars <= 0){
    //         alert("Rating cannot be negative");
    //         return;
    //     }
    //     // way 2
    //     this.setState((prevStars) => {
    //         return{
    //             stars: prevStars.stars - 0.5
    //         }
    //     })
    // }

    // // toggle favourite button 
    // handleFav = () => {
    //     this.setState({
    //         fav: !this.state.fav
    //     })
    // }

    // // toggle add to cart button 
    // handleCart = () => {
    //     this.setState({
    //         addToCart: !this.state.addToCart
    //     })
    // }






    

        //Destructing the state object in render function
        const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars} = props;
        const {title, plot, poster, price, rating, stars, fav,addToCart} =  props.movies;
        console.log(props.movies)

        return (

            <div className="movie-card">
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>

                <div className="right">
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price}</div>
                
                <div className="footer">
                    <div className="rating">IMDB: {rating}</div>

                <div className="star-dis">
                    <img className="str-btn" alt="minus" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" onClick = {() => onDecStars(movies)} />

                    <img className="stars" alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                    <img className="str-btn" alt="plus" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={() => onIncStars(movies)}/>

                    <span className="starCount">{stars}</span>
                </div>

                {/* way 1: */}
                {/* {fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> : 
                <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                {/* way 2: */}
                <button className={fav ? "unfavourite-btn":"favourite-btn"}
                    onClick={() => onClickFav(movies)}>
                        {fav ? "Un-favourite":"Favourite"}                
                </button>


                {/* Add to cart button Way 1*/}
                {/* {addToCart? <button className="cart-btn" onClick={this.handleCart}>Add to cart</button>:
                <button className="cart-btn" onClick={this.handleCart}>Remove from cart</button>} */}
                
                
                {/* {Add to cart button way 2} */}
                <button className={addToCart?"unfavourite-btn":"cart-btn"}  
                    onClick={() => onClickAddtocart(movies)}>
                        
                            {addToCart ? "Remove from Cart":"Add to Cart"}

                </button>

                </div>
                </div>
            </div>
        )
    }
export default Moviecard;


// function based component
// const Moviecard = () => {
//     const [state, setState] = useState({

//         title: "Don no 1",
//         plot: "Amazing action",
//         price: 200,
//         rating: 8.9    
//     })

//     const addStars = () => {
//         console.log("This: ", state)
//     };

//     const {title, plot, price, rating} = state

//   return (
//     <div className="main">
//       <div className="movie-card">
//         <div className="left">
//           <img alt="poster" src="https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3-300x300.png" />
//         </div>

//         <div className="right">
//           <div className="title">{title}</div>
//           <div className="plot">{plot}</div>
//           <div className="price">Rs.{price}</div>

//         <div className="footer">
//             <div className="rating">{rating}</div>
//             <div className="star-dis">
//                 <span>0</span>
//                 <img className="str-btn" alt="minus" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"/>
//                 <img className="stars" alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
//                 <img className="str-btn" alt="plus" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={addStars}/>
//             </div>
//             <button className="favourite-btn">Favourite</button>
//             <button className="cart-btn">Add to cart</button>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Moviecard;