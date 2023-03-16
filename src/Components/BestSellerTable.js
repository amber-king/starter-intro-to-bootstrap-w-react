export default function Table() {
  // <!-- ************************** -->
  // <!-- Best Sellers table -->
  // <!-- set class display-5 on h3 --> // * increased font size header info
  // <!-- Set classes table table-striped table-hover text-center on table --> 

  // * ^--- makes a cleaner grid table of info that when hovered over chage color 
  // *Notes from the reading of the diff features ---v 
  //  Let's add another class, table-striped, to allow for better division between rows.

  // <table class="table table-striped"></table>
  // If we want to center the text elements in our table, we could write our CSS in the index.css file. But it is better to use Bootstrap whenever possible. Bootstrap has a class called text-center that will center our text. This will allow for more consistent styling and less unexpected behaviors with our styles.

  // <table class="table table-striped text-center"></table>
  // Finally, we can imagine that each row would be a link to an individual view of each tree with more information and the ability to purchase it. We can add a hover effect to assist our users in recognizing that the table would be interactive.

  // <table class="table table-striped text-center table-hover"></table>

  // <!-- ************************** -->
  return (
    <>
      <h3 className="display-5">Best Sellers</h3>
      <table className="table table-striped text-center table-hover">

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type</th>
            <th scope="col">Hardiness Zone(s)</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Russet</td>
            <td>3-10</td>
            <td>$120</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Peach</td>
            <td>4-7</td>
            <td>$80</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Orange</td>
            <td>3-9</td>
            <td>$10</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Yellow</td>
            <td>5-9</td>
            <td>$50</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Lavender</td>
            <td>2-7</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
