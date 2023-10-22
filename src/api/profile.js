import instance from ".";

const getAllUsers = () => {
  const { data } = instance.get("/mini-project/api/auth/users");
  return data;
};
const getTransactions = () => {
  const { data } = instance.get("/mini-project/api/transactions/my");
  return data;
};

const putDeposit = (amount) => {
  const { data } = instance.put("/mini-project/api/transactions/deposit", {
    amount,
  });
  return data;
};

const putWithdraw = (amount) => {
  const { data } = instance.put("/mini-project/api/transactions/withdraw", {
    amount,
  });
  return data;
};

const putTransfer = (amount, username) => {
  const { data } = instance.put(
    `/mini-project/api/transactions/transfer/${username}`
  );
  return data;
};

const getUserInfo = (userID) => {
  const { data } = instance.get(`/mini-project/api/auth/user/${userID}`);
  return data;
};

export {
  getTransactions,
  putDeposit,
  putWithdraw,
  putTransfer,
  getUserInfo,
  getAllUsers,
};
