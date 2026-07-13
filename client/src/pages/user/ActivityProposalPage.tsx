import DashboardLayout from "@/layouts/DashboardLayout";
import { DataTable } from "@/components/ui/data-table";
import { columns, type ActivityProposal } from "@/components/activityProposal/columns"
import { useEffect, useState } from "react";


const ActivityProposalPage = () => {
    const [data, setData] = useState<ActivityProposal[]>([]);

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
};

export default ActivityProposalPage;
