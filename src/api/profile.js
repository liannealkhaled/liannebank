import instance from ".";

const getAllUsers = () => {
  const res = instance.get("/mini-project/api/auth/users");
  return res.data;
};
const getTransactions = () => {
  const res = instance.get("/mini-project/api/transactions/my");
  return res.data;
};

const putDeposit = (amount) => {
  const res = instance.put("/mini-project/api/transactions/deposit", {
    amount,
  });
  return res.data;
};

const putWithdraw = (amount) => {
  const res = instance.put("/mini-project/api/transactions/withdraw", {
    amount,
  });
  return res.data;
};

const putTransfer = (amount, username) => {
  const res = instance.put(
    `/mini-project/api/transactions/transfer/${username}`
  );
  return res.data;
};

const getUserInfo = (userID) => {
  const res = instance.get(`/mini-project/api/auth/user/${userID}`);
  return res.data;
};

export {
  getTransactions,
  putDeposit,
  putWithdraw,
  putTransfer,
  getUserInfo,
  getAllUsers,
};
