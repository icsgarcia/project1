import DashboardLayout from "@/layouts/DashboardLayout";
import { columns, type Payment } from "@/components/relevantForms/columns";
import { DataTable } from "@/components/relevantForms/data-table";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ];
}

export default async function RelevantFormsPage() {
    const data = await getData();

    return (
        <DashboardLayout>
            <div className="p-4">
                <DataTable columns={columns} data={data} />
            </div>
        </DashboardLayout>
    );
}

// export default RelevantFormsPage;
