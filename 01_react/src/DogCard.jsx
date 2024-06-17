export function Image() {
  // this is called named export
  // jb bhi ek se jyada component ek file me hote hai to named export hota hai
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRiZ3tJwLtsDKzrYDFZosmdqocWnl65OC0w&s"
      alt=""
    />
  );
}

// export  function DogCard() {
function DogCard() {
  return (
    <div>
      <h3>Jimmi</h3>
      {/* <Image /> */}
    </div>
  );
}

export default DogCard;
// hum ek file 1 components ko default export krr skte hai (1 se jyada nhi kr skte)
