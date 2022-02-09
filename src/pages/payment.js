import React, { useState } from "react";
import { Progress } from "reactstrap";
import logo from "../logo.png";
import loader from "../spinner.gif";
import { PaymentModel } from "../interface/payment.interface";
import audioCall from "../audio.mp3";
import success from "../success.jpg";
import npcilogo from "../npci.png";
import screen from "../screen1.png";
import failIcon from "../fail.png";
var requestOptions = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
  body: null,
};

const requestOptions1 = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
  body: null,
};
const Payment = (props) => {
  const [formData, setFormData] = useState({
    mobile: "",
    bankId: "",
    amount: "",
  });
  const [isLoader, setIsLoader] = useState(false);
  const [data, setData] = useState(PaymentModel);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  var [count, setCount] = useState(0);
  var [move1, setMove1] = useState(0);
  var [move2, setMove2] = useState(0);
  var [move3, setMove3] = useState(0);
  var [move4, setMove4] = useState(0);
  var [move5, setMove5] = useState(0);
  var [move6, setMove6] = useState(0);
  var [move7, setMove7] = useState(0);
  var [move8, setMove8] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  var [transactionId, setTransactionId] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  var [interval, setInter] = useState();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlePayment = async (e) => {
    runProgressbar1();
    if (!validate()) {
      e.preventDefault();
      setIsLoader(true);
      data.ReqPay.Payer.Device.Tag[0].value = countryCode + formData.mobile;
      data.ReqPay.Payer.Amount.value = formData.amount;
      data.ReqPay.Payer.addr = formData.mobile + "@" + formData.bankId;
      data.ReqPay.Payer.name = formData.mobile;
      requestOptions.body = JSON.stringify(data);
      fetch(
        "https://et32mpbgpe.execute-api.us-east-1.amazonaws.com/Dev/payment",
        requestOptions
      )
        .then((res) => res.clone().json())
        .then((res) => {
          localStorage.setItem("TXID", res.body);
          setTransactionId(res.body);
          interval = setInterval(() => {
            getStatus();
          }, 3000);
        })
        .catch((err) => {
          setIsMobile(false);
          setIsFailure(true);
        });
    }
  };

  const validate = () => {
    let flag = false;
    if (formData.amount === "") {
      flag = true;
    }
    if (formData.bankId === "") {
      flag = true;
    }
    if (formData.mobile === "") {
      flag = true;
    }
    return flag;
  };

  const clearData = () => {
    setFormData({
      ...formData,
      mobile: "",
      bankId: "",
      amount: "",
    });
  };

  const runProgressbar1 = () => {
    if (count === 0) {
      count = 1;
      var width = 1;
      var id = setInterval(frame, 20);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          count = 0;
        } else {
          width++;
          setMove1(width);
          if (width === 100) {
            runProgressbar2();
          }
        }
      }
    }
  };
  const runProgressbar2 = () => {
    count = 0;
    if (count === 0) {
      count = 1;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          count = 0;
        } else {
          width++;
          setMove2(width);
          if (width === 100) {
            runProgressbar3();
          }
        }
      }
    }
  };
  const runProgressbar3 = () => {
    count = 0;
    if (count === 0) {
      count = 1;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          count = 0;
        } else {
          width++;
          setMove3(width);
          if (width === 100) {
            runProgressbar4();
          }
        }
      }
    }
  };
  const runProgressbar4 = () => {
    count = 0;
    if (count === 0) {
      count = 1;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          count = 0;
        } else {
          width++;
          setMove4(width);
          if (width === 100) {
            setIsMobile(true);
          }
        }
      }
    }
  };

  const clickKeyboard = () => {};
  const runProgressbar5 = () => {
    count = 0;
    if (count === 0) {
      count = 1;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          count = 0;
        } else {
          width++;
          setMove5(width);
          if (width === 100) {
            runProgressbar6();
          }
        }
      }
    }
  };
  const runProgressbar6 = () => {
    count = 0;
    if (count === 0) {
      count = 1;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          count = 0;
        } else {
          width++;
          setMove6(width);
          if (width === 100) {
            runProgressbar7();
          }
        }
      }
    }
  };
  const runProgressbar7 = () => {
    count = 0;
    if (count === 0) {
      count = 1;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          count = 0;
        } else {
          width++;
          setMove7(width);
          if (width === 100) {
            runProgressbar8();
          }
        }
      }
    }
  };
  const runProgressbar8 = () => {
    count = 0;
    if (count === 0) {
      count = 1;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          count = 0;
        } else {
          width++;
          setMove8(width);
          if (width === 100) {
            setIsLoader(false);
            // setIsSuccess(true)
            // navigate("/success");
          }
        }
      }
    }
  };

  function playAudio() {
    new Audio(audioCall).play();
  }

  const getStatus = async () => {
    let data = {
      "Transaction-ID": localStorage.getItem("TXID"),
    };
    requestOptions1.body = JSON.stringify(data);
    fetch(
      "https://et32mpbgpe.execute-api.us-east-1.amazonaws.com/Dev/payment",
      requestOptions1
    )
      .then((res) => res.clone().json())
      .then((res) => {
        setIsMobile(false);
        clearData();
        if (res.body == "In-Progress") {
          setIsMobile(true);
        }
        if (res.body == "true") {
          clearIntervalTime();
          runProgressbar5();
          setTimeout(() => {
            setIsSuccess(true);
            setIsFailure(false);
          }, 2000);
        }
        if (res.body == "false") {
          setTimeout(() => {
            clearIntervalTime();
            runProgressbar5();
            setIsSuccess(false);
            setIsFailure(true);
          }, 2000);
        }
      })
      .catch((err) => {
        clearData();
        setIsMobile(false);
        setIsFailure(true);
      });
  };

  const goback = () => {
    setIsFailure(false);
    clearData();
    setIsSuccess(false);
    clearCount();
  };

  const clearIntervalTime = () => {
    clearInterval(interval);
  };

  const clearCount = () => {
    setMove1(0);
    setMove2(0);
    setMove3(0);
    setMove4(0);
    setMove5(0);
    setMove6(0);
    setMove7(0);
    setMove8(0);
  };
  return (
    <>
      <div className="container-fluid">
        <div className={"row row-gutter"}>
          <div className="col-md-3">
            <div className="smartphone">
              <div className="content">
                <div className="phone-header">
                  <div className="text-center mart-title">Minimart</div>
                </div>
                <div className="phone-logo">
                  <div className="logo-card">
                    <img src={logo} className="height-30" alt="logo" />
                  </div>
                </div>
                <div className="phone-content">
                  <div className="form-content">
                    <div className="form-group">
                      <div className="enter-amount">
                        <div className="ruppe-symbol">₹</div>
                        <input
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          type="text"
                          className="form-control text-amount"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <div className="mobile-form">
                        <input
                          value={countryCode}
                          disabled
                          className="form-control w-26 text-amount"
                        />
                        <input
                          value={formData.mobile}
                          name="mobile"
                          onChange={handleChange}
                          placeholder="Mobile..."
                          type="text"
                          required
                          className="form-control w-66 text-box"
                        />
                      </div>
                      <div className="at-sign">@</div>
                    </div>
                    <div className="form-group">
                      <div className="upi-form">
                        <select
                          id="bankId"
                          value={formData.bankId}
                          name="bankId"
                          type="select"
                          onChange={handleChange}
                          required
                          className="form-control form-select text-box"
                        >
                          <option value={""}>Select</option>
                          <option value={"icici"}>icici</option>
                          <option value={"ybl"}>ybl</option>
                          <option value={"okhdfcbank"}>okhdfcbank</option>
                          <option value={"okaxis"}>okaxis</option>
                          <option value={"oksbi"}>oksbi</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="make-payment" onClick={handlePayment}>
                    Request money
                  </div>
                </div>
              </div>
              {isLoader ? (
                <div className="loader-bg">
                  <div className="loading">
                    <img src={loader} alt="loading" className="height-130" />
                    <div>Payment Processsing</div>
                  </div>
                </div>
              ) : null}
              {isSuccess ? (
                <div className="loader-bg">
                  <div className="loading">
                    <img src={success} alt="success" className="height-190" />
                    <div className="payment-title">Payment Successfull</div>
                    <div className="go-back-button-new" onClick={goback}>
                      Make New Payment
                    </div>
                  </div>
                </div>
              ) : null}
              {isFailure ? (
                <div className="loader-bg">
                  <div className="loading">
                    <img src={failIcon} alt="success" className="height-190" />
                    <div className="payment-title-fail">Payment Failure</div>
                    <div className="go-back-button" onClick={goback}>
                      Retry
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-md-7">
            <div className="m-t-18">
              <div className="row">
                <div className="col-md-2 p-0">
                  <Progress value={move1} id="myid" />
                  <br />
                  <Progress value={move8} className="justify-content-end" />
                </div>
                <div className="col-md-1 p-0">
                  <i class="fas fa-university font-3em psp-color"></i>
                  <div className="psp-text">Merchant bank/</div>
                  <div className="psp-text">Acquirer/</div>
                  <div className="psp-text">PSP</div>
                </div>
                <div className="col-md-2 p-0">
                  <Progress value={move2} />
                  <br />
                  <Progress value={move7} className="justify-content-end" />
                </div>
                <div className="col-md-2 p-0">
                  <div className="pt-3 mleft-12">
                    <img src={npcilogo} className="npcilogo" alt="npcilogo" />
                  </div>
                </div>
                <div className="col-md-2 p-0">
                  <Progress value={move3} />
                  <br />
                  <Progress value={move6} className="justify-content-end" />
                </div>
                <div className="col-md-1 p-0">
                  <i class="fas fa-university font-3em issuer-color"></i>
                  <div className="psp-text">Customer bank/</div>
                  <div className="psp-text"> Issuer/</div>
                  <div className="psp-text">PSP</div>
                </div>
                <div className="col-md-2 p-0">
                  <Progress value={move4} /> <br />
                  <Progress value={move5} className="justify-content-end" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div class="telephone">
              <div class="content">
                <div className="screen">
                  <img src={screen} alt="screen" className="width-100 " />
                </div>
                <div className="buttons">
                  <button
                    className="btn numric-btn green-btn"
                    onClick={clickKeyboard}
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button className="btn numric-btn" onClick={clickKeyboard}>
                    Ok
                  </button>
                  <button
                    className="btn numric-btn red-btn"
                    onClick={clickKeyboard}
                  >
                    <i className="fas fa-phone-slash"></i>
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    1
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    2
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    3
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    4
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    5
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    6
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    7
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    8
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    9
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    *
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    0
                  </button>
                  <button
                    className={`${isMobile ? "blink_me" : null} btn numric-btn`}
                    onClick={clickKeyboard}
                  >
                    #
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
