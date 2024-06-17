import "./App.css";
import DogCard from "./DogCard";
// default export ko hum normally import krr skte hai
import { Image } from "./DogCard";
// jb bhi named export ko import krna hoga tb usse destructure krke hi krna hoga

function App() {
  return (
    <div className="App">
      <button>Submit</button>
      <DogCard />
      <Image />
    </div>
  );
}

export default App;
