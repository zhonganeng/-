import "./phone.scss"
function Phone(props) {
  return <div
    className="phone"
    style={{
      width: props.width || '360px',
      height: props.height || '620px',
      padding: '20px 10px',
      borderRadius: '20px',
      boxShadow: 'rgb(0 0 0 / 20%) 0 5px 6px 0'
    }}>
    {props.children}
  </div>
}
export default Phone