import React from "react";

const AllTransactions = ({
  clearedTransactions,
}: {
  clearedTransactions: any;
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Requested On
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Phone
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Paid On
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {clearedTransactions.map((transaction: any) => (
          <tr key={transaction.id}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
              KES {transaction.requestedAmount}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
              {transaction.requestedOn}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
              {transaction.phoneNumber}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
              {transaction.paidOn}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Completed
              </span>
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
              <button className="text-red-600 hover:text-red-800">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllTransactions;
