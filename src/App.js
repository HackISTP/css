import logo from "./logo.svg";
import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled, { css } from "styled-components";

function App() {
  return (
    <div className="App">
      <Button1 />
      <Button2 />
      <Container>
        <Button>normal버튼</Button>
        <Button primary>primary 버튼</Button>
      </Container>
    </div>
  );
}

export default App;
const Container = styled.div`
  display: flex;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #4c5b69;
  color: #b9eaff;
  margin: 0.1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;
