import "./ProductPage.css";
function Posts({ post, rating }) {
  const posts = post.map((post, index) => {
    return (
      <div key={index}>
        <div className="review__container">
          <div className="review_post"> 
                  <h1 className="productPage__right__rating">
                    <img
                      className="star"
                      src="https://www.google.com/imgres?q=imagen%20estrella%20peque%C3%B1a%20blanca&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F256%2F16%2F16666.png&imgrefurl=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Festrella-blanca_16666&docid=1SAyozUqfBqvsM&tbnid=palpcOddJtwMWM&vet=12ahUKEwiS9IbQz_OHAxUASzABHZMgHMQQM3oECF8QAA..i&w=256&h=256&hcb=2&ved=2ahUKEwiS9IbQz_OHAxUASzABHZMgHMQQM3oECF8QAA"
                      alt=""
                    /><span>{post.rate}</span>
                  </h1>
                  <h1 className="review__text">{post.text}</h1>
                  </div>
                  <div className="review__rate ">
                    <img
                      className="review__avatar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H1cJiq2N6D8u6lQMkP_-iPVu7d2XZbevhfUNM6obwXcUkeMDvJEsak3kTjvqAr67DDY&usqp=CAU"
                      alt=""
                    />{" "}
                    <h1>Pratyush | 7 Aug 2024 </h1>{" "}
                  </div>
                </div>
        </div>
      
    );
  });

  return <div>{posts}</div>
}

export default Posts;
