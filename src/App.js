import MovieList from "./MovieList";
import Navbar from "./Navbar";
import Student from "./Student";


function App() {
  return (
    <>
      {/* <h1>Movie app</h1> */}

      <Navbar />
      <MovieList />
      
      {/* props */}
       {/* <Student name = "Alex" marks = {89} />
       <Student name = "Jos" marks = {79} />
       <Student /> */}
    </>
  );
}

// // default props 
// Student.defaultProps = {
//   name : "stud",
//   marks : "NAN"
// }

export default App;
