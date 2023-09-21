import { users } from "db";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <h1>
      User with it {userId} is named: {users[Number(userId) - 1].name}
    </h1>
  );
}

export default User;
