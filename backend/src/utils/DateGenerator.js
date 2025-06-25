const DateGenerator = () => {
    const now = new Date();
  
    const formattedDate = now.toLocaleString("en-KE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).replace(",", "");

    return formattedDate;

    

  };
  
  module.exports = DateGenerator;
  