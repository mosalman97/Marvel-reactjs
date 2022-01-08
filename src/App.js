import styled from "styled-components";
import Header from "./Components/Header";


function App() {
  return (
   <Wrapper>
      <Header />
   </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
    width:80%;
    margin:0 auto;
`;