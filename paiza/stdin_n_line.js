// https://paiza.jp/works/mondai/stdin/stdin_n_line

const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const lineCount = Number(lines[0]);

for (let i = 1; i <= lineCount; i++) {
  const line = lines[i];
  console.log(line);
}
