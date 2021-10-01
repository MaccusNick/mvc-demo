import $ from "jquery";
import "./app1.css";

const $button1 = $("#add1"); // 用jQuery获取 add1 button
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
const $number = $("#number"); // 获取 number div
const n = localStorage.getItem("n"); // 把信息存入本地内存中
$number.text(n || 100); //number div 的默认值为

$button1.on("click", () => {
  let n = parseInt($number.text()); //取出number中内容，转化为数字，放入变量n
  n += 1; //每次数字加1
  localStorage.setItem("n", n); //将数字存入localStorage
  $number.text(n);
}); //添加事件监听

$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});

$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});

$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
