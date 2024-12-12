import Test from "./Test";
const Super = () => {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <Test cl="b1"/>
      <Test cl="b2"/>
      <Test cl="b3" />
    </div>
  );
}
export default Super;