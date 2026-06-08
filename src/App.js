// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './page/Home';

// function App() {
//   return (
//     <>
//     <BrowserRouter basename="/staticreactsite/soc2bundle">

//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>

//     </BrowserRouter>
//   </>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}
export default App;
