/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className=" ">
      <div className="mt-lg-6 mt-md-4 mt-sm-3 mt-2 ">
        <div className=" text-center  ">
          <img
            src="/img/logo.jpg"
            width="100px"
            height="100px"
            className="rounded-circle"
          />
        </div>
        <div>
          <p className=" mt-lg-3 mt-md-2 mt-sm-1 mt-1 fontsSize  text-white">
            နာမည်ပျက်လုံးဝ လုံးဝမရှိ အလျော်/အစား အမှန်ကန်တဲ့ ရိုးရာရှမ်း
            အမ်နိုင်းရှမ်းကိုးမီး မြန်မာနိုင်ငံရဲ့ အကောင်းဆုံး ရှမ်းကိုးမီး
          </p>
        </div>

        <button
          className="btn btn-primary w-100 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="d-flex justify-content-center ">
            <i className="fa-brands fa-viber logoSize "></i>
            <p className="mt-2 ms-3 fontsSize">Viber မှ အကောင့်ဖွင့်ကစားရန် </p>
          </div>
          {/* <i class="fa-solid fa-angle-down"></i> */}
        </button>

        <div class="collapse gap-1 mt-1 " id="collapseExample">
          <div class="card card-body  bg-white ">
            <div className="d-flex justify-content-evenly">
              <h6 className="mt-5">Viber Contact - 09263430377</h6>

              <div className="">
                <img
                  src="/img/logo.jpg"
                  width="100px"
                  height="100px"
                  className="rounded-circle"
                />
              </div>
            </div>
            <hr />
            <a
              href="viber://add?number=959263430377"
              className="btn btn-primary w-100  mt-lg-3 mt-md-2 mt-sm-1 mt-1"
            >
              Viber Customer Service သို့ ဆက်သွယ်ရန်{" "}
            </a>
          </div>
        </div>

        <a
          href="https://t.me/shanminthar77"
          className="btn btn-primary w-100 mt-lg-3 mt-md-2 mt-sm-1 mt-1"
        >
          <i class="fa-brands fa-telegram fs-5 me-1"></i>{" "}
          <span className="fontsSize">Telegram မှ အကောင့်ဖွင့်ကစားရန် </span>{" "}
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100080698352130&mibextid=ZbWKwL"
          className="btn btn-primary w-100 mt-lg-3 mt-md-2 mt-sm-1 mt-1 "
        >
          <i class="fa-brands fa-facebook fs-5 me-1 "></i>
          <span className=" fontsSize  ">
            FaceBook မှ အကောင့်ဖွင့်ကစားရန်
          </span>{" "}
        </a>
      </div>
    </div>
  );
};

export default Header;
