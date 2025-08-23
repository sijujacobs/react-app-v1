import { USER } from "../../constants";
import { User } from "../../models";

export const getUsers = async () => {
  try {
    await new Promise((res) => setTimeout(res, 2000));
    const response = await fetch(USER.GET_API);
    if (!response.ok) {
      throw new Error(USER.NOT_OK);
    }
    const data = await response.json();
    return data.map((u: User) => ({
      id: u.id,
      name: u.name,
    }));
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : String(err));
  }
};
