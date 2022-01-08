import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Wrapper>
                <Route path='/'  component={Header} />
            </Wrapper>
        </Router>
    );
}

export default App;
const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;
