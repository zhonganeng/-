import "./app.scss";
import Title from "./Title";
import Create from "./Create";
import Li from "./Li";
import PhoneBox from "./Phone";
import State from "./State";
import { useSelector } from "react-redux";
export default function App() {
  const state = useSelector((state) => state);
  let todos = "",
    done = "";
  state.list.forEach((item) => {
    if (!item.isSelect) {
      todos++;
    } else {
      done++;
    }
    if (todos === "") {
      todos = "0";
    }
  });
  return (
    <PhoneBox>
      <Title />
      <Create />
      <Li />
      <State todos={todos} done={done} />
    </PhoneBox>
  );
}
