import { Profile } from "./Profile";
import { Avatar } from "./Avatar";
import PackingList from "./PackingList";
import { getImageUrl } from "./utils";
import { people } from "./data";
import Recipe from "./Recipe";
import { sculptureList } from "./data";
import { useState } from "react";
import Image from "./Image";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function Listt() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export function OldGallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Card>
        <Avatar
          person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
          size={100}
        />
      </Card>
      <ul
        style={{
          backgroundColor: "white",
          color: "green",
        }}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>{" "}
      <PackingList />
      <List />
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      {/* <img src={sculpture.url} alt={sculpture.alt} /> */}
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}

export function NewGallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}
