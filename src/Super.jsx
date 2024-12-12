import Test from "./Test";
const Super = () => {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <Test cl="b1" range="short_term"/>
      <Test cl="b2" range="medium_term"/>
      <Test cl="b3" range="long_term"/>
    </div>
  );
}
export default Super;