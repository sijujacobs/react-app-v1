import { ChangeEvent, FormEvent, useState } from "react";
import "./UserProfile.css";

type UserProfileType = {
  username: string;
  password: string;
};

const UserProfile: React.FC = () => {
  const [formData, setFormData] = useState<UserProfileType>({
    username: "",
    password: "",
  });
  const onChangeHandler = (event: ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log("formData : ", formData);
    if (formData.username && formData.password) {
      console.log("Data sent to verify User");
    } else {
      console.log("Enter valid credentials!");
    }
  };

  return (
    <div className="user-profile">
      <form onSubmit={submitHandler}>
        <div className="form-field">
          Username :
          <input
            className="form-input"
            value={formData.username}
            onChange={onChangeHandler}
            name="username"
            type="text"
          />
        </div>
        <div className="form-field">
          Password :
          <input
            className="form-input"
            value={formData.password}
            onChange={onChangeHandler}
            name="password"
            type="text"
          />
        </div>
        <div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default UserProfile;
