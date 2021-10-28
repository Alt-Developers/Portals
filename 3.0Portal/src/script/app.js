// // DOM Selection

// const heroTextAbstract = document.querySelector(".abstract__text");
// const heroAbstract = document.querySelector(".header__main");

// // Variables

// const abstractsImg = [
//   "./src/img/vrvalo.png",
//   "./src/img/devnews.png",
//   "./src/img/sys13.png",
// ];

// let count = 0;

// // Functions

// const changeImg = function (imgPath) {
//   setTimeout(() => {
//     heroAbstract.style.opacity = "0";
//   }, 1000);
//   setTimeout(() => {
//     heroAbstract.style.backgroundImage = `url(${imgPath})`;
//   }, 2000);
//   setTimeout(() => {
//     heroAbstract.style.opacity = "100";
//   }, 3000);
//   console.log(`Change Image`);
//   count++;
// };

// // Event Handler

// changeImg(abstractsImg[count]);

// setInterval(() => {
//   count === abstractsImg.length ? (count = 0) : (count = count);
//   changeImg(abstractsImg[count]);
// }, 10000);
