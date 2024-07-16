import { useState, useContext } from "react";
import { likeContext } from "../context/likeContext";

export const ProfileLikeComp = () => {
  const [likes, updateLikes] = useState(0);
  return (
    <likeContext.Provider value={likes}>
      <Comp1 />
      <button onClick={() => updateLikes(likes + 1)}>Like</button>
    </likeContext.Provider>
  );
};

const Comp1 = () => {
  return <Comp2 />;
};

const Comp2 = () => {
  return <Comp3 />;
};
const Comp3 = () => {
  return <Comp4 />;
};
const Comp4 = () => {
  return <Comp5 />;
};
const Comp5 = () => {
  return <LikeComponent />;
};

const LikeComponent = () => {
  const likes = useContext(likeContext);

  return <>Total Likes: {likes}</>;
};
