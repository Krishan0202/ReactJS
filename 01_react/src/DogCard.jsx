import Name from "./Name";

// export function Image(props) {
// this is also right
export function Image({ src }) {
  // modern way to pass props
  // yha src ko default value bhi pass krr skte hai
  // this is called named export
  // jb bhi ek se jyada component ek file me hote hai to named export hota hai
  return <img src={src} alt="" />;
}

// export  function DogCard() {
function DogCard({ name, image }) {
  return (
    <div>
      <Name>
        <h3>{name}</h3>
      </Name>

      <Image src={image} />
    </div>
  );
}

export default DogCard;
// hum ek file 1 components ko default export krr skte hai (1 se jyada nhi kr skte)
