/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div>
      <div>
        <marquee
          direction="left"
          className="text-white pt-lg-4 pt-md-3 pt-sm-2 pt-2 pb-1"
        >
          {" "}
          မန်ဘာသစ် ၁၀၀ % နေ့စဉ်သွင်းတိုင်းရ ၁၀ % (5)ကြိမ် ရှုံးကြေးပြန်အမ်းငွေ ၅
          % အကောင့်ဖွင့် အနည်းဆုံး ၃၀၀၀ ကျပ်
        </marquee>
      </div>

      <div className="mt-lg-4 mt-md-3 mt-sm-2 mt-0">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying "
              className=" active"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying "
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying "
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying "
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying "
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>

          <div className="carousel-inner rounded-3">
            <div className="carousel-item active">
              <img src="/img/banner.jpg" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img
                src="/img/banner1.jpg"
                className="d-block w-100 "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/banner3.jpg"
                className="d-block w-100 "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/banner4.jpg"
                className="d-block w-100 "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/banner4.jpg"
                className="d-block w-100 "
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev visually-hidden"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next visually-hidden "
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div>
        <marquee
          direction="left"
          className="text-white pt-lg-4 pt-md-3  pt-sm-2 pt-2 "
        >
          {" "}
          Shan Koe Mee ,BuGyi ,Poker ,21 ,Slots တစ်နေရာတည်းမှာ
          အစုံဆော့ကစားနိုင်ပါသည်
        </marquee>
      </div>

      <div className="mt-lg-4 mt-md-3 mt-sm-2 mt-2">
        <div
          id="carouselExampleAutoplaying1"
          class="carousel slide "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner rounded-3">
            <div class="carousel-item active">
              <img src="/img/banner5.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/banner6.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/banner7.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying1"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying1"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <a
        href="http://m9skm.com/game373/index.html"
        className="btn btn-primary w-100 mt-lg-3 mt-md-2 mt-sm-2 mt-2"
      >
        <img src="/img/ShanLogo.jpg" className="logoSize1 rounded-circle" />
        <span className="ms-3">M9 ရှမ်းကိုးမီး တိုက်ရိုက်လင့်</span>
      </a>

      <a
        href="http://m9skm.com/w/signin/index.html?agentId=10000007"
        className="btn btn-primary w-100 mt-lg-3 mt-md-2 mt-sm-2 mt-2"
      >
        <img src="/img/ShanLogo.jpg" className="logoSize1 rounded-circle" />
        <span className="ms-5">M9 ရှမ်းကိုးမီး ဒေါင်းရန် </span>
      </a>
    </div>
  );
};

export default Content;
