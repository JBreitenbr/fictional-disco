import Test from "./Test";
const Super = () => {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <Test cl="b1" range="short-term"/>
      <Test cl="b2" range="medium-term"/>
    </div>
  );
}
export default Super;