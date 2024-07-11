import { useSelector } from "react-redux";
const UserProfile = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h1>Welcome to the Car Dealership Website</h1>
      {user ? <p>Welcome, {user.name}</p> : <p>Please login or sign up.</p>}
    </div>
  );
};

export default UserProfile;
