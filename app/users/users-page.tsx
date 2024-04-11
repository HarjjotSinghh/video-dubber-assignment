"use client";
// This component renders a table with selectable rows
import { useState } from "react";
import { Table, Checkbox, ScrollArea, Group, Avatar, Text, rem, Button } from "@mantine/core";
import { User } from "@/types/User";
import UserRow from "./user-row";
import Link from "next/link";
import clsx from "clsx";

interface UsersPageProps extends React.ComponentPropsWithoutRef<"div"> {
  users: User[];
}

export function UsersPage({ users, ...props }: UsersPageProps) {
  const [selection, setSelection] = useState(["1"]);

  // Toggle the selection of a single row
  const toggleRow = (id: string) =>
    setSelection((current: string[]) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );

  // Toggle the selection of all rows
  const toggleAll = () =>
    setSelection((current: string[]) =>
      current.length === users.length ? [] : users.map((item) => item.id.toString())
    );

  // Render table rows
  const rows = users.map((item) => {
    const selected = selection.includes(item.id.toString());
    return <UserRow key={item.id} item={item} selected={selected} toggleRow={toggleRow} />;
  });

  return (
    <ScrollArea w={"100%"} {...props} className={clsx("flex flex-col items-center justify-center overflow-x-auto", props.className)}>
      <Link href={"/create-user"}>
        <Button variant="light" size="lg" className="w-full mb-4">
          Create A New User
        </Button>
      </Link>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(0) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === users.length}
                indeterminate={selection.length > 0 && selection.length !== users.length}
              />
            </Table.Th>
            <Table.Th className="text-lg">User</Table.Th>
            <Table.Th className="text-lg">Email</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
