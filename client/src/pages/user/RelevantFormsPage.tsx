import DashboardLayout from "@/layouts/DashboardLayout";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const forms = [
    {
        name: "Funding Request Form",
        link: "/forms/FRF.xls",
    },
    {
        name: "Petty Cash Form",
        link: "/forms/PCF.xlsx",
    },
    {
        name: "Request for Meals Form",
        link: "/forms/RFM.xlsx",
    },
    {
        name: "Requisition Form",
        link: "/forms/RF.doc",
    },
    {
        name: "Purchase Requisition Form",
        link: "/forms/PRF.doc",
    },
    {
        name: "Reproduction Form",
        link: "#",
    },
    {
        name: "Supplies and Maintenance Request Form",
        link: "/forms/SaMRF.docx",
    },
];

export default function RelevantFormsPage() {
    const handleClick = (link: string) => {
        if (link === "#") {
            toast.error("This form is currently unavailable.");
            return;
        }

        const downloadLink = document.createElement("a");
        downloadLink.href = link;
        downloadLink.download = "";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <DashboardLayout>
            <div className="p-4">
                <Table>
                    <TableCaption>A list of downloadable forms.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Form Name</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {forms.map((form) => (
                            <TableRow>
                                <TableCell>{form.name}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => handleClick(form.link)}
                                        className="font-bold py-2 px-4 cursor-pointer"
                                    >
                                        Download
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </DashboardLayout>
    );
}

// export default RelevantFormsPage;
