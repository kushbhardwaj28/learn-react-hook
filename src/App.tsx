import { UseStateComp } from "./Home/useStateComp";
import { UseEffectComp } from "./Home/useEffectComp";
import { ProfileLikeComp } from "./Home/useContextComp";

export const App = () => {
  return (
    <>
      <UseStateComp />
      <UseEffectComp />
      <ProfileLikeComp />
    </>
  );
};
