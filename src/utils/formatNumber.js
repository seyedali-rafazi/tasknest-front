export function toNumbersWithComma(n) {
  const numWithCommas = numberWithCommas(n); // 1000,2343
  return numWithCommas;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

