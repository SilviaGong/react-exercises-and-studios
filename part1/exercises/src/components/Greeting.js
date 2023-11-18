//function with an arrow function


function GreetFriend(name) {
  return (
    <h1>Hello, {name.name}!</h1>
  );
}

function Greeting() {
  return (
    <>
      <GreetFriend
        name="YUMAN"
      />
    </>
  );
}

export default Greeting;