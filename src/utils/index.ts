export const formatIDR = (value: number) => {
  if (typeof value !== "number" || isNaN(value)) {
    return "Invalid value";
  }

  const isNegative = value < 0;
  const absoluteValue = Math.abs(value);

  const reverse = absoluteValue.toString().split("").reverse().join("");
  const ribuan = reverse.match(/\d{1,3}/g) || [];
  const hasil = ribuan.join(".").split("").reverse().join("");

  return isNegative ? "- Rp " + hasil : "Rp " + hasil;
};

export const formatDate = (date: string) => {
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const parts = date.split("-");
  if (parts.length !== 3) {
    return "Invalid date format";
  }

  const day = parts[0];
  const monthIndex = parseInt(parts[1]) - 1;
  const month = months[monthIndex];
  const year = parts[2];

  return `${day} ${month} ${year}`;
};

