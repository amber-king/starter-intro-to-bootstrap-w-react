/* eslint-disable jsx-a11y/anchor-is-valid*/
import Card from "./Card";
import yellowRose from "../Images/anastasia-zhenina-3YiZ0B2W8c0-unsplash.jpg";
import lavenderRose from "../Images/muhammad-osama-YMDmfGxNgrQ-unsplash.jpg";
import apricotRose from "../Images/mel-pB-IJfg8jb8-unsplash.jpg";
import { detailsCard1, detailsCard2, detailsCard3 } from "../data";

export default function Restocked() {
  /* <!-- ************************** -->
    <!-- Set class container on outer div -->
    <!-- Set class display-4 on h3 --> // * increases font size 
    <!-- Set class row on inner div --> // * we have a row of 3 cards; set up the div that contains these cards as a row
    <!-- ************************** --> 
    */

  return (
    <div className="container">
      <h3 className="display-4">Just Restocked</h3>
      <div className="row">
        <Card details={detailsCard1} image={yellowRose} />
        <Card details={detailsCard2} image={lavenderRose} />
        <Card details={detailsCard3} image={apricotRose} />
      </div>
    </div>
  );
}
