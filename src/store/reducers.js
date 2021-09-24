export default function reducer(
  state = {
    list: [],
  },
  action
) {
  switch (action.type) {
    case "AddTodos":
      return { list: [...state.list, action.addObj] };
    case "DelTodos":
      return { list: state.list.filter((item) => item.id !== action.id) };
    case "SetSelect":
      let obj = [];
      state.list.forEach((item) => {
        if (item.id === action.id) {
          item.isSelect = action.state;
        }
        obj.push(item);
      });
      return { list: obj };
    case "Clear":
      let newObj = [];
      state.list.forEach((item) => {
        if (!item.isSelect) {
          newObj.push(item);
        }
      });
      return { list: newObj };
    case "Edit":
      let editObj = [];
      state.list.forEach((item) => {
        if (item.id === action.id) {
          item.isEdit = true;
        } else {
          item.isEdit = false;
        }
        editObj.push(item);
      });
      return { list: editObj };
    case "AlertValue":
      let newVal = [];
      state.list.forEach((item) => {
        if (item.id === action.id) {
          item.name = action.name;
        }
        newVal.push(item);
      });
      return { list: newVal };
    default:
      return state;
  }
}
