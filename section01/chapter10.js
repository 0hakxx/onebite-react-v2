for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx); // 1, 3, 5 출력

  if (idx >= 5) {
    break;
  }
}
