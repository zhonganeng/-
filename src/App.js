import "./app.scss";
import Title from "./Title";
import Create from "./Create";
import Li from "./Li";
import PhoneBox from "./Phone";
import Test from "./Test";
import State from "./State";
import { useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
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
    <HashRouter>
      <PhoneBox>
        <Title />
        <Create />
        <Li />
        <State className="box" todos={todos} done={done} />
        {/* <Test val="jjj">test</Test> */}
      </PhoneBox>
    </HashRouter>
  );
}
