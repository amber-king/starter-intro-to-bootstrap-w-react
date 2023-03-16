/* eslint-disable jsx-a11y/anchor-is-valid*/
export default function Card({ details, image }) {
  /* <!-- ************************** -->
        <!-- Set classes card col on outer div --> // * seems to organize the row more cleaner; puts pics next to each other in one line
        <!-- set class card-body on inner div after img --> // * refined spacing of header info a w/ proper spacing
        <!-- Set class card-title on h5 -->
        <!-- Set class card-text on p tag -->
        <!-- Set classes btn btn-primary on a tag --> // * highlights the gift it line under flower
        <!-- ************************** --> */

  return (
    <div className="col" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={`${details.name} Rose`} />
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
        <p className="card-text">
          <span>
            Photo by &nbsp;
            <a href={details.unsplashPage}>{details.artistName} </a>
            <span>&nbsp; on</span> <br></br>
            <a href={details.unsplashAttributionLink}>Unsplash</a>
          </span>
        </p>
        <br />
        <a className="btn-primary">Gift it</a>
      </div>
    </div>
  );
}
