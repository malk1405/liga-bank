function formatNumber(num) {
  if (num === null) {
    return ``;
  }
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
}

export default formatNumber;
