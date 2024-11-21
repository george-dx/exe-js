import { Profile } from "./Profile";
import { Avatar } from "./Avatar";
import PackingList from "./PackingList";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function Gallery() {
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
    </section>
  );
}
