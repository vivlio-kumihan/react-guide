const Example = () => {
  const clickHander1 = () => {
    alert("クリックされました。");
  };
  const clickHander2 = () => {
    console.log("クリックされました。");
  };


  return (
    <>
      <button onClick={clickHander1}>click</button>
      <button onClick={clickHander2}>click</button>
    </>
  );
};

export default Example;
