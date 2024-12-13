import Test from "./Test";
const Super = () => {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <Test cl="b1" num={1}/>
      <Test cl="b2" num={2}/>
      <Test cl="b3" num={3}/>
    </div>
  );
}
export default Super;