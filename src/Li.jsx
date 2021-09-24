import Checkbox from '@material-ui/core/Checkbox';
import Cancel from '@material-ui/icons/Cancel';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import "./Li.scss"
import { useSelector, useDispatch } from "react-redux"
function Li() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  let alertValue = "";

  return (
    <div className="li">
      {/* 数据 */}
      {
        state.list.map((item, index) => {
          return (
            !item.isEdit ?
              <ListItem
                className="liItem"
                button
                key={item.id}
                style={{
                  padding: 0,
                }}
              >
                <ListItemText primary={
                  <div className="dataList">
                    <div className="left">
                      <Checkbox
                        checked={item.isSelect}
                        size="small"
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        style={{
                          padding: '6px 0',
                          paddingRight: '6px'
                        }}
                        onChange={(e) => {
                          dispatch({
                            type: 'SetSelect',
                            id: item.id,
                            state: e.target.checked
                          })
                        }}
                      />

                      <span
                        style={{
                          textDecoration: item.isSelect ? 'line-through' : 'none'
                        }}
                        onClick={() => {
                          dispatch({
                            type: 'Edit',
                            id: item.id
                          })
                        }}
                      >{item.name}</span>
                    </div>
                    <Cancel
                      size="small"
                      onClick={() => {
                        dispatch({ type: 'DelTodos', id: item.id })
                      }}
                      className="cancel" />
                  </div>
                } />
              </ListItem>
              :
              < TextField
                autoFocus
                key={item.id}
                defaultValue={item.name}
                id="standard-basic"
                onBlur={() => {
                  dispatch({ type: 'Edit' })
                  if (alertValue !== '') {
                    dispatch({ type: 'AlertValue', id: item.id, name: alertValue })
                  }
                }}
                style={{
                  width: '100%',
                }}
                onChange={(e) => {
                  if (e.target.value !== '') {
                    alertValue = e.target.value;
                  }
                }}
              />
          )
        })}
    </div >
  )
}
export default Li