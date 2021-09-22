import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'
function Create() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  // let [focusState, setFocusState] = useState(true);
  let [inputValue, setInputValue] = useState('');
  return (
    <>
      <TextField
        value={inputValue}
        // autoFocus={focusState}
        id="standard-basic"
        label="请输入要完成的事项"
        style={{
          width: '100%'
        }}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.target.value !== '') {
              dispatch({
                type: "AddTodos",
                addObj: {
                  id: list.length,
                  name: inputValue,
                  isSelect: false,
                  isEdit: false
                }
              })
              setInputValue('')
              // setFocusState(false)
            }
          }
        }}
      /></>
  )
}
export default Create