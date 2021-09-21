import Link from '@material-ui/core/Link';
import './State.scss'
import { useDispatch } from 'react-redux'
function State(props) {
  const dispatch = useDispatch();
  return (
    <>
      {
        props.todos !== '' ? <div className="state">
          {
            props.todos !== '' ? <div>{props.todos}<span style={{
              color: "#777777"
            }}>项待完成</span></div> : null
          }
          {
            props.done ? <div onClick={() => {
              dispatch({
                type: 'Clear'
              })
            }}>
              <Link href="#">
                Clear {props.done} 已完成事项
              </Link>
            </div> : null
          }
        </div> : null
      }
    </>
  )
}
export default State