import AllTransactions from "@/components/useraccount/withdrawals/AllTransactions";
import PendingWithdrawals from "@/components/useraccount/withdrawals/PendingWithdrawals";
import RequestWithdrawals from "@/components/useraccount/withdrawals/RequestWithdrawals";
import React from "react";

const WithdrawalPage = () => {
  // Dummy data for pending withdrawals
  const pendingWithdrawals = [
    {
      id: 1,
      requestedAmount: 1500,
      date: "2023-05-15",
      phoneNumber: "0723123456",
      paidOn: "2023-05-16",
      amountPaid: 1500,
      balance: 0,
    },
    {
      id: 2,
      requestedAmount: 2500,
      date: "2023-05-18",
      phoneNumber: "0723765432",
      paidOn: "Pending",
      amountPaid: 0,
      balance: 2500,
    },
    {
      id: 3,
      requestedAmount: 1500,
      date: "2023-05-15",
      phoneNumber: "0723123456",
      paidOn: "2023-05-16",
      amountPaid: 1500,
      balance: 0,
    },
    {
      id: 4,
      requestedAmount: 2500,
      date: "2023-05-18",
      phoneNumber: "0723765432",
      paidOn: "Pending",
      amountPaid: 0,
      balance: 2500,
    },
    {
      id: 5,
      requestedAmount: 1500,
      date: "2023-05-15",
      phoneNumber: "0723123456",
      paidOn: "2023-05-16",
      amountPaid: 1500,
      balance: 0,
    },
    {
      id: 6,
      requestedAmount: 2500,
      date: "2023-05-18",
      phoneNumber: "0723765432",
      paidOn: "Pending",
      amountPaid: 0,
      balance: 2500,
    },
  ];

  // Dummy data for cleared transactions
  const clearedTransactions = [
    {
      id: 1,
      requestedAmount: 5000,
      requestedOn: "2023-04-10",
      phoneNumber: "0723123456",
      paidOn: "2023-04-11",
      amountPaid: 5000,
      balance: 0,
    },
    {
      id: 2,
      requestedAmount: 3000,
      requestedOn: "2023-04-15",
      phoneNumber: "0723765432",
      paidOn: "2023-04-16",
      amountPaid: 3000,
      balance: 0,
    },
    {
      id: 3,
      requestedAmount: 7000,
      requestedOn: "2023-04-20",
      phoneNumber: "0723123456",
      paidOn: "2023-04-21",
      amountPaid: 7000,
      balance: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700   rounded-lg  text-white p-4 rounded-t-sm shadow-md">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            WITHDRAWAL MONEY
          </h2>
          <p className="text-center text-sm md:text-base mt-1">
            Please provide a SAFARICOM NUMBER only
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              Pending Withdrawals
              <span className="ml-auto bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {pendingWithdrawals.length}
              </span>
            </h2>
            <div className="overflow-x-auto">
              <PendingWithdrawals pendingWithdrawals={pendingWithdrawals} />
            </div>
          </div>

          {/* Request Withdrawal */}
          <RequestWithdrawals />
        </div>

        {/* Cleared Transactions */}
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-red-600">
              CLEARED TRANSACTIONS
            </h4>
            <button className="text-sm bg-red-600 hover:bg-red-800 text-white py-1 px-3 rounded">
              Clear all cleared transactions
            </button>
          </div>
          <div className="overflow-x-auto">
            <AllTransactions clearedTransactions={clearedTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalPage;
