import React from "react";
import currency from "../images/image-currency.jpg";
import resturant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";
import "../components/articles.css";

function Articles() {
  return (
    <>
      <div className="articles_wrapper">
        <h1 className="article-title">Latest Articles</h1>

        <div className="articles">
          <div className="Claire_Robinson1">
            <img src={currency} width="100%" height="50%" />
            <span className="span">By Claire Robinson</span>
            <h1 className="title">
              Receive money in any currency with no fees
            </h1>
            <p className="para">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
          <div className="Wilson_Hutton1">
            <img src={resturant} width="100%" height="50%" />
            <span className="span">By Wilson Hutton</span>
            <h1 className="title">
              Treat yourself without worrying about money
            </h1>
            <p className="para">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
          <div className="Wilson_Hutton2">
            <img src={plane} width="100%" height="50%" />
            <span className="span">By Wilson Hutton</span>
            <h1 className="title">Take your Easybank card wherever you go</h1>
            <p className="para">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
          <div className="Claire_Robinson2">
            <img src={confetti} width="100%" height="50%" />
            <span className="span">By Claire Robinson</span>
            <h1 className="title">
              Our invite-only Beta accounts are now live!
            </h1>
            <p className="para">
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Articles;
