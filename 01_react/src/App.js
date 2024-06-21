// import "./App.css";
// import DogCard from "./DogCard";
// default export ko hum normally import krr skte hai
// import { Image } from "./DogCard";
// jb bhi named export ko import krna hoga tb usse destructure krke hi krna hoga
// import Counter from "./Counter";
import Avatar from "./Avatar";

function App() {
  // let title = "This is basic React app for learning use";
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

      {/* <Counter /> */}

      <Avatar
        src="https://images.pexels.com/photos/25288421/pexels-photo-25288421/free-photo-of-model-in-blue-dress-with-black-scarf-on-her-shoulder.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        width={"500px"}
        height={"500px"}
      />
    </div>
  );
}

export default App;
