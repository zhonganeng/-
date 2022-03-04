import "./Test.scss";
function Test(props) {
  return (
    <>
      <div style={{
        marginBottom: '20px'
      }} className="Test">
        <div>
          {props.children}
        </div>
        <div>
          {props.val}
        </div>
      </div>
    </>
  )
}
export default Test;