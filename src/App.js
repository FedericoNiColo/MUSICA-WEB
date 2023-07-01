
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Layout, Header, Browser, Charts, Artist } from './router'
function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route
            path='/'
            element={
              <Layout><Home /></Layout>
            }></Route>
          <Route
            path='/browser'
            element={
              <Layout><Browser /></Layout>
            }></Route>
          <Route
            path='/charts'
            element={
              <Layout><Charts /></Layout>
            }></Route>
          <Route
            path='/artists'
            element={
              <Layout><Artist /></Layout>
            }></Route>
        </Routes>
      </Router>


    </>
  );
}

export default App;
