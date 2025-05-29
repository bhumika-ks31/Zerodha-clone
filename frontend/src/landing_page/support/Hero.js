import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href=" ">Track Tickets</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="form-control my-3" />

          <div className="d-flex flex-wrap gap-3">
            <a href=" ">Track account opening</a>
            <a href=" ">Track segment activation</a>
            <a href=" ">Intraday margins</a>
          </div>

          <div className="mt-3">
            <a href=" ">Kite user manual</a>
          </div>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href=" "> Latest Intraday leverages and Square-off timings</a>
            </li>
            <li>
              <a href=" " className="mt-5"> Offer for sale (OFS) – May 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
