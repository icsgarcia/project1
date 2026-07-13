"use client";

import { type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ActivityProposal = {
    id: string;
    name: string;
    filePath: string;
};

export const columns: ColumnDef<ActivityProposal>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Form",
    },
    {
        accessorKey: "filePath",
        header: "Action",
    },
];
