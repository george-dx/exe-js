import { Profile } from "./Profile";
import { Avatar } from "./Avatar";

export function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Avatar />
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
    </section>
  );
}
