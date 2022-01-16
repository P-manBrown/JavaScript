// https://paiza.jp/works/mondai/stdin/stdin_3_line

const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

lines.forEach(line => console.log(line));
