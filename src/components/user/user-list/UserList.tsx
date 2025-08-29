import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Spinner from "../../spinner/Spinner";
import { AppContextType } from "../../../models";
import "./UserList.css";

const UserList: React.FC = () => {
  const { users, isLoading } = useContext(AppContext) as AppContextType;
  return (
    <div className="user-list">
      {isLoading ? (
        <Spinner />
      ) : (
        users.map((u) => (
          <div key={u.id}>
            <h3>{u.name}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
