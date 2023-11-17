import { useEffect, useState } from "react";

const Box = () => {
  const [count, setCount] = useState(0);

  // [useEffect Case 1]: 렌더링 될때마다 실행되는 것 확인
  useEffect(() => {
    console.log(`Count : ${count}`); //+ 누를 때마다 box component 갈아끼우는 것. 매번 box component 다른 놈임. 렌더링 다시되는것임.
  });

  return (
    <div className="bg-blue-500 w-40 h-40 text-white flex justify-center items-center gap-8">
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Box;
