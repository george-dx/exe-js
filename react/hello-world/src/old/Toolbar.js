function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
      <Signup />
    </div>
  );
}
