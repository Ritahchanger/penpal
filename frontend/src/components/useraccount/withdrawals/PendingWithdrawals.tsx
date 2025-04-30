import React from "react";
const PendingWithdrawals = ({
  pendingWithdrawals,
}: {
  pendingWithdrawals: any;
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Phone
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {pendingWithdrawals.map((withdrawal:any) => (
          <tr key={withdrawal.id}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
              KES {withdrawal.requestedAmount}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
              {withdrawal.date}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
              {withdrawal.phoneNumber}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
              {withdrawal.paidOn === "Pending" ? (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              ) : (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Paid
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PendingWithdrawals;
