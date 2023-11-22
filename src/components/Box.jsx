import { useEffect, useState } from "react";

const Box = () => {
  const [count, setCount] = useState(0);

  ////------/------/------/------/------/------/------////

  // [useEffect Case 1]: 렌더링 될때마다 실행되는 것 확인

  //   useEffect(() => {
  //     console.log(`Count : ${count}`); //+ 누를 때마다 box component 갈아끼우는 것. 매번 box component 다른 놈임. 렌더링 다시되는것임.
  //   });

  ////--------/-------/-------/------/-------/-----////

  // [useEffect Case 2]: 최초 렌더링 시에만 실행되는 것 확인
  //   useEffect(() => {
  //     console.log(`Count : ${count}`); //초기 렌더싱 시에만 실행되고, 재 렌더링 시 실행되지 않음. 재렌더링되고 있는데 useEffect 실행 안 되는 것임. 서버로부터 요청 받아오는 등의 기능 만들 때 사용.
  //   }, []);

  ////--------/-------/-------/------/-------/-----////

  //   // [useEffect Case 3]: 최초 렌더링 시에만 실행되는 것 확인
  //   useEffect(() => {
  //     console.log(`Count : ${count}`); //count 값 추적하여 count 값 변경될 때마다 실행됨.
  //   }, [count]);

  ////--------/-------/-------/------/-------/-----////
  // [useEffect Case 4]: 최초 렌더링 시에만 실행되는 것 확인
  useEffect(() => {
    console.log(`Count : ${count}`); //count 값 추적하여 count 값 변경될 때마다 실행됨.

    return () => console.log(`Remove Count : ${count}`); //clear 함수. 잘 모르겠음 허허헣.유산을 남긴다??
  }, [count]);

  /////-------/------/------/------/-----/------/------////

  return (
    <div className="bg-blue-500 w-40 h-40 text-white flex justify-center items-center gap-8">
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Box;
