import { User } from "@/types/User";
import { UsersPage } from "./users-page";
import { Title } from "@mantine/core";

export const dynamic = "force-dynamic";

export default async function Users() {
  const users: User[] = await fetch("https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
      console.error(err);
    });
  return (
    <div className="flex flex-col items-center justify-center lg:py-24 py-12">
      <Title size={"36px"} fw={"900"} mb={"24px"}>
        All Users
      </Title>
      <UsersPage users={users} className="max-w-4xl lg:p-6 rounded-3xl p-0 bg-transparent border border-primary-400" />
    </div>
  );
}
