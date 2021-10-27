export const getCreatedAt = (createdAt: string): string => {
  const diffInSeconds = Math.floor(
    Math.abs(new Date().valueOf() - Date.parse(createdAt)) / 1000
  );
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInDate = Math.floor(
    Math.abs(new Date().getDate() - new Date(createdAt).getDate())
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
    case diffInMinutes > 0:
      created = `${Math.floor(diffInMinutes)} minutes ago`;
      break;
    case diffInSeconds > 0:
      created = `${Math.floor(diffInSeconds)} seconds ago`;
      break;
    default:
      created = `0 second ago`;
  }
  return created;
};
