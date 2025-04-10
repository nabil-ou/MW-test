export function getDaysInMonth(month, year) {
  var date = new Date(year, month, 1);
  date.setHours(0, 0, 0, 0);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export const getTypeColor = (type) => {
  switch (type) {
    case "prospection":
      return "bg-blue-100 text-blue-700";
    case "startup-project":
      return "bg-green-100 text-green-700";
    case "startup-invest":
      return "bg-purple-100 text-purple-700";
    case "admin":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const formatType = (type) => {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
