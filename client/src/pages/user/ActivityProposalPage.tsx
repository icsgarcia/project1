import DashboardLayout from "@/layouts/DashboardLayout";
import { DataTable } from "@/components/ui/data-table";
import {
    columns,
    type ActivityProposal,
} from "@/components/activityProposal/columns";
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
            <div className="px-4 py-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-blue-700 font-bold text-2xl">
                        Activity Proposals
                    </h1>
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ActivityProposalPage;
