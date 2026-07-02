import DashboardLayout from "@/layouts/DashboardLayout";
import {
    columns,
    type DownloadableForm,
} from "@/components/relevantForms/columns";
import { DataTable } from "@/components/relevantForms/data-table";
import { useEffect, useState } from "react";

export default function RelevantFormsPage() {
    const [data, setData] = useState<DownloadableForm[]>([]);

    useEffect(() => {
        setData([
            {
                id: "728ed52f",
                name: "Form #1",
                filePath: "/path/for/form1",
            },
        ]);
    }, []);

    return (
        <DashboardLayout>
            <div className="p-4">
                <DataTable columns={columns} data={data} />
            </div>
        </DashboardLayout>
    );
}

// export default RelevantFormsPage;
