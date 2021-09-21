import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'
function Create() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  let [focusState, setFocusState] = useState(false);
  return (
    <>
      <TextField
        autoFocus={focusState}
        id="standard-basic"
        label="请输入要完成的事项"
        style={{
          width: '100%'
        }} onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.target.value !== '') {
              dispatch({
                type: "AddTodos",
                addObj: {
                  id: list.length,
                  name: e.target.value,
                  isSelect: false,
                  isEdit: false
                }
              })
              setFocusState(false);
            }
          }
        }}
      /></>
  )
}
export default Create