import { use } from "react";
import { fetchUser } from "../action";
export default function UserPage() {
  const value = use(fetchUser());
  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl font-bold">
      <div>{value.name}</div>
    </div>
  );
}
