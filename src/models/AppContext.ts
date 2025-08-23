export interface User {
  id: string;
  name: string;
}
export interface AppContextType {
  users: User[];
  isLoading: boolean;
}
