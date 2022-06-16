import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const { user } = useSelector((store) => store.users);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      <h3>Welcome, {user.name}</h3>
    </div>
  );
};
