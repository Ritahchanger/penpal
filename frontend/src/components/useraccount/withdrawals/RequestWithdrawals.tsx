const RequestWithdrawals = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-red-600 mb-4 border-b pb-2">
        REQUEST WITHDRAWAL
      </h4>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Safaricom Number
          </label>
          <input
            type="text"
            id="phone"
            className="mt-1 block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="07xxxxxxxx"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Safaricom Number
          </label>
          <input
            type="text"
            id="confirmPhone"
            className="mt-1 block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="07xxxxxxxx"
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount (KES)
          </label>
          <input
            type="text"
            id="amount"
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Enter amount without symbols"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          SUBMIT REQUEST
        </button>
      </form>
    </div>
  );
};

export default RequestWithdrawals;
