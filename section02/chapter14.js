// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// ->함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getUser() {
  // 객체만 리턴해도 자동으로 Promise { <fulfilled>: {name: '조영학', ...} }가 됨
  return {
    name: "조영학",
    id: "0hakxx",
  };
}
console.log("getUser 호출 결과:", getUser()); // 호출 결과: Promise 객체가 출력


async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// -> 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData(); // await
  console.log(data);
}

printData();
