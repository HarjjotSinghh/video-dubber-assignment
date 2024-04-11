import { User } from "@/types/User";
import { Avatar, Checkbox, Group, Table, Text } from "@mantine/core";
import React from "react";

// This component renders a single table row
export default function UserRow({
  item,
  selected,
  toggleRow,
}: {
  item: User;
  selected: boolean;
  toggleRow: (id: string) => void;
}) {
  return (
    <Table.Tr
      key={item.id}
      className={React.useMemo(
        () => (selected ? "bg-primary-50 rounded-xl" : ""),
        [selected]
      )}
    >
      <Table.Td>
        <Checkbox checked={selected} onChange={() => toggleRow(item.id.toString())} />
      </Table.Td>
      <Table.Td
        w={"50px"}
        className="flex items-center justify-start lg:flex-row lg:mr-auto flex-col gap-2"
      >
        <Avatar size={36} src={item.avatar} radius={"10000px"} />
        <Text className="lg:text-sm text-xs" fw={400}>
          {item.name}
        </Text>
      </Table.Td>
      <Table.Td className="flex-1">
        <Text className="lg:text-sm text-xs" fw={400}>
          {item.email}
        </Text>
      </Table.Td>
    </Table.Tr>
  );
}
