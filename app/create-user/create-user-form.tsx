"use client";
// This component renders a form to create a new user
import { ReactNode, useState } from "react";
import { TextInput, Button, Box, Title, CheckIcon } from "@mantine/core";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const formSchema = object({
  email: string().email("Invalid email address"),
  avatar: string().url("Invalid URL"),
});

type CreateUserPageProps = React.ComponentPropsWithoutRef<"div">;

export default function CreateUserPage({ ...props }: CreateUserPageProps) {
  const [formSuccess, setFormSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  // Handle form submission
  const onSubmit = handleSubmit(async (values) => {
    try {
      const response = await fetch("/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        console.error("Failed to create user:", response.statusText);
        setErrorMessage("Failed to create user: " + response.statusText);
      }
      //   console.log(values);
      //   console.log("User created successfully");
      setFormSuccess(true);
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Failed to create user: ", error);
    }
  });

  return (
    <Box mx="auto" maw={500} {...props}>
      {formSuccess ? (
        <div className="w-full flex justify-center items-center flex-col gap-4">
          <Title
            size={"24px"}
            className="gap-2 text-gray-700 inline-flex flex-row justify-center items-center"
          >
            <CheckIcon size={24} />
            User created successfully!
          </Title>
          <Link href="/users">
            <Button className="w-full" variant="light" size="md">
              View All Users
            </Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <TextInput
            className="mb-2"
            label="Email"
            placeholder="Enter Email"
            {...register("email")} // Register the email field with react-hook-form
          />
          {/* Display the error message */}
          {errors.email?.message && (
            <p className="text-red-500 w-full text-right font-normal text-xs opacity-90 mt-2">
              {errors.email?.message as ReactNode}
            </p>
          )}
          <TextInput
            className="mb-2"
            label="Avatar URL"
            placeholder="Enter Avatar URL"
            {...register("avatar")} // Register the avatar field with react-hook-form
          />
          {errors.avatar?.message && (
            <p className="text-red-500 w-full text-right font-normal text-xs opacity-90 mt-2">
              {errors.avatar?.message as ReactNode}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 w-full text-right font-normal text-xs opacity-90 mt-2">
              {errorMessage}
            </p>
          )}
          <Button type="submit" radius={"md"} mt="sm" w={"100%"} variant="light" size="md">
            Create User
          </Button>
        </form>
      )}
    </Box>
  );
}
