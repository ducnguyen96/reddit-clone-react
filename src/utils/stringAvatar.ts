export function stringAvatar(name: string) {
  return {
    // children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    children: `${name[0].toUpperCase()}`,
  };
}
