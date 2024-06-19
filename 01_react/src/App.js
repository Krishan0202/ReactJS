// import "./App.css";
// import DogCard from "./DogCard";
// default export ko hum normally import krr skte hai
// import { Image } from "./DogCard";
// jb bhi named export ko import krna hoga tb usse destructure krke hi krna hoga
import Counter from "./Counter";

function App() {
  let title = "This is basic React app for learning use";
  return (
    <div>
      {/* <h2 style={{ backgroundColor: "red" }}>{title}</h2>
      <button>Submit</button>
      <DogCard
        name="Jimmi"
        image="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
      />
      <DogCard
        name="Kalu"
        image="https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3N8ZW58MHx8MHx8fDA%3D"
      /> */}

      <Counter />
    </div>
  );
}

export default App;
