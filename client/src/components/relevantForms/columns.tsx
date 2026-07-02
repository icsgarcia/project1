"use client";

import { type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DownloadableForm = {
    id: string;
    name: string;
    filePath: string;
};

export const columns: ColumnDef<DownloadableForm>[] = [
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
