export const PaymentModel = {
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
