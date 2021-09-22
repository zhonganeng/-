import "./phone.scss"
function Phone(props) {
  let isPC = true;
  if (document.body.clientWidth <= 750) {
    isPC = false;
  }
  return <div className={isPC ? 'pc' : 'phone'}>
    {props.children}
  </div>
}
export default Phone