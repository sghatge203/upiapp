export const paymentService = () => {
  let data = {
    ReqPay: {
      Payer: {
        Device: { Tag: [{ name: "MOBILE", value: "+919049947625" }] },
        Amount: { value: "0500.00", curr: "INR" },
        addr: "ram@axis",
        name: "ram",
      },
      Payees: {
        Payee: {
          Device: { Tag: [{ name: "MOBILE", value: "918149033167" }] },
          Amount: { value: "05.00", curr: "INR" },
          addr: "laxmi@boi",
          name: "mini mart",
        },
      },
    },
  };

  const requestOptions = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(data),
  };
  fetch(
    "http://consumerPayment-1291013180.us-east-1.elb.amazonaws.com/payment",
    requestOptions
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.json();
    });
};

export const getStatusService = () => {
  const requestOptions = {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
  };
  fetch(
    "http://consumerPayment-1291013180.us-east-1.elb.amazonaws.com/payment/status",
    requestOptions
  )
    .then((response) => {
      return response.json();
    })
    .catch((data) => {
      return data.json();
    });
};
