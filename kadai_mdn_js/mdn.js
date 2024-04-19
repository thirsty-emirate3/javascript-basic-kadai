const today = new Date();

const getToday =() => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  console.log(year + "年" + month + "月" + day + "日");
}

getToday();
