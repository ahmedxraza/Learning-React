// import React, { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     alert("Hello the page is loaded");
//   }, []);

//   useEffect(() => {
//     if (count > 0) {
//       // alert("current count is: " + count);

//       document.title = "current count is: " + count;
//     }

//     if (count == 5) {
//       alert("Count Hit 5");

//       // document.title = "Count Hit 5";
//     }
//   }, [count]);

//   return (
//     <div className="p-100 text-2xl font-bold">
//       <h1>{count}</h1>

//       <button
//         className="border-[2px]"
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click
//       </button>
//     </div>
//   );
// }

// export default App;
