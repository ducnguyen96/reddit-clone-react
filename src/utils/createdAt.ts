export const getCreatedAt = (createdAt: string): string => {
  const diffInMinutes =
    Math.abs(new Date().valueOf() - Date.parse(createdAt)) / 60000;
  const diffInDate = Math.abs(
    new Date().getDate() - new Date(createdAt).getDate()
  );
  let created;
  switch (true) {
    case diffInMinutes >= 2880:
      created = `${Math.floor(diffInMinutes / (60 * 24))} days ago`;
      break;
    case diffInMinutes >= 1440:
      created = `${Math.floor(diffInMinutes / (60 * 24))} day ago`;
      break;
    case diffInDate == 1:
      created = `yesterday`;
      break;
    case diffInMinutes >= 60:
      created = `${Math.floor(diffInMinutes / 60)} hours ago`;
      break;
    default:
      created = `${Math.floor(diffInMinutes)} minutes ago`;
      break;
  }
  return created;
};
