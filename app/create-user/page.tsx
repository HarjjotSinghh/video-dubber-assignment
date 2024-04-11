import CreateUserPage from "./create-user-form";

export default async function CreateUser() {
  return (
    <div className="flex flex-col items-center justify-center lg:py-24 py-12 px-8">
      <CreateUserPage className="w-full max-w-4xl lg:p-6 rounded-3xl p-6 border-primary-400 border" />
    </div>
  );
}
