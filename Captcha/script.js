createCaptcha = () => {
  const charArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  let captcha = [];
  let randomNum = 0;
  for (let i = 0; i < 6; i++) {
    randomNum = Math.floor(Math.random() * charArray.length);
    captcha.push(charArray[randomNum]);
  }
  let canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 200;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "35px Roboto";
  ctx.strokeText(captcha.join(""), 0, 30);
  document.getElementById("captcha").appendChild(canv);
};
