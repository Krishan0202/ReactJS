import Person from "./Person";
import Button from "./Button";
import Header from "./Header";
import List from "./List";
function App() {
  const handleClickButton = () => {
    console.log("Button was clicked");
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
  };

  const items = ["Krishan", "Kumar", "Sharma", "Kataria"];
  return (
    <>
      <Header title={"This Made Krishan Kataria"} />
      <Person name="Krishan" age="23" />
      <Button text={"Click Me"} onClick={handleClickButton} />
      <List items={items} />
    </>
  );
}

export default App;
