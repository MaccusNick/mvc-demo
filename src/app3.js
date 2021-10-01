import $ from "jquery";
import "./app3.css";
const $square = $("#app3 .square");

$square.on("click", () => {
  $square.toggleClass("active"); //检测是否有class 有则删除，无则添加
});
