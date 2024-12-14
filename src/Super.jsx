import Test from "./Test";
const Super = () => {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <Test taekscht="Last four weeks" num={1}/>
      <Test taekscht="Last six months" num={2}/>
      <Test taekscht="Last twelve months" num={3}/>
    </div>
  );
}
export default Super;