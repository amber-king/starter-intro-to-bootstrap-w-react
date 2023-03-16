/* eslint-disable jsx-a11y/anchor-is-valid*/
import heroRoses from "../Images/lauza-loistl-pkFo3Lm-d0s-unsplash.jpg";
export default function Hero() {
  // <!-- ************************** -->
  // <!-- Set class container-fluid on div on hero/jumbo image -->
  // <!-- Set id hero on div for hero/jumbo image --> 
  // * ^ --- styling the main img;
  // * makes the img stretch 100% of the page, regardless of width
  // <!-- ************************** -->
  return (
    <div className="container-fluid" id="hero">
      <img src="{heroRoses}" className="img-fluid" alt="many roses" />
      <h2>Give the Gift of Roses</h2>
      <span>
        Photo by &nbsp;
        <a href="https://unsplash.com/@prettyspecial?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Lauza Loistl
        </a>
        &nbsp; on &nbsp;
        <a href="https://unsplash.com/s/photos/roses?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </div>
  );
}
