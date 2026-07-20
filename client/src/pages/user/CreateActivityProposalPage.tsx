import { Field, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "@/layouts/DashboardLayout";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router";

const optionalForms = [
    {
        title: "Check Payment / Cash",
        name: "cashForm",
        description:
            "Funding Request Form (FRF) for P1,000 and above. Petty Cash Form (PCF) for below P1,000.",
    },
    { title: "Food", name: "foodForm", description: "Request for Meals (RFM)" },
    {
        title: "Supplies",
        name: "supplyForm",
        description:
            "Requisition Form (RF) or Purchase Requisition Form (PRF).",
    },
    {
        title: "Reproduction",
        name: "reproductionForm",
        description: "Reproduction Form",
    },
    { title: "Others", name: "otherForm", description: "" },
];

const CreateActivityProposalPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        purpose: "",
        participants: "",
        attendees: 0,
        requirements: "",
        date: "",
        startTime: "",
        endTime: "",
        cashForm: null,
        foodForm: null,
        supplyForm: null,
        reproductionForm: null,
        otherForm: null,
        venueId: "",
    })

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "attendees" ? Number(value) : value,
        }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({
                ...prev,
                [name]: e.target.files![0],
            }));
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    }

    return (
        <DashboardLayout>
            <div className="p-4">
                <form>
                    <FieldGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            optionalForms.map((form) => (
                                <Card key={form.name} className="flex flex-col justify-between">
                                    <CardHeader>
                                        <CardTitle>{form.title}</CardTitle>
                                        <CardDescription>{form.description}</CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Input id={form.name} name={form.name} type="file" accept=".doc,.docx,.xls,.xlsx,.pdf" onChange={handleFileChange} />
                                    </CardFooter>
                                </Card>
                            ))
                        }
                    </FieldGroup>

                    <FieldSeparator className="my-4" />

                    <FieldGroup>
                        <Field>
                            <FieldLabel>Attendees</FieldLabel>
                            <Input type="number" min="1" id="attendees" name="attendees" value={formData.attendees} onChange={handleChange} />
                        </Field>
                        <Field>
                            <FieldLabel>Date</FieldLabel>
                            <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
                        </Field>
                        <Field>
                            <FieldLabel>Start Time</FieldLabel>
                            <Input id="startTime" name="startTime" type="time" value={formData.startTime} onChange={handleChange} />
                        </Field>
                        <Field>
                            <FieldLabel>End Time</FieldLabel>
                            <Input id="endTime" name="endTime" type="time" value={formData.endTime} onChange={handleChange} />
                        </Field>
                    </FieldGroup>

                    <FieldSeparator className="my-4" />

                    <FieldGroup>
                        <Field>
                            <FieldLabel>Venue</FieldLabel>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='venue1'>Hello</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>
                    </FieldGroup>

                    <FieldSeparator className="my-4" />

                    <FieldGroup>
                        <Field>
                            <FieldLabel>Title</FieldLabel>
                            <Input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                        </Field>
                        <Field>
                            <FieldLabel>Participants</FieldLabel>
                            <Textarea id="participants" name="participants" value={formData.participants} onChange={handleChange} />
                        </Field>
                        <Field>
                            <FieldLabel>Purpose</FieldLabel>
                            <Textarea id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} />
                        </Field>
                        <Field>
                            <FieldLabel >Requirements / Resources Needed</FieldLabel>
                            <Textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleChange} />
                        </Field>
                    </FieldGroup>
                    <FieldSeparator className="my-4" />

                    <FieldGroup>
                        <Field>
                            <div className="flex justify-center gap-4">
                                <Button>Submit</Button>
                                <Button onClick={() => navigate("/activity-proposals")}>Cancel</Button>
                            </div>
                        </Field>
                    </FieldGroup>
                </form>
            </div>
        </DashboardLayout>
    )
}

export default CreateActivityProposalPage