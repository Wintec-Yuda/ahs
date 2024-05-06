export const formatIDR = (value: number) => {
  const reverse = value.toString().split("").reverse().join("");
  const ribuan = reverse.match(/\d{1,3}/g) || [];
  const hasil = ribuan.join(".").split("").reverse().join("");
  return "Rp " + hasil;
};
