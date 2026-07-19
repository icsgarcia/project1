import DashboardLayout from "@/layouts/DashboardLayout";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Calendar from "@/components/Calendar";

const HomePage = () => {
    return (
        <DashboardLayout>
            <div className="p-4">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Title</CardTitle>
                                <CardDescription>Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div>Content</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Title</CardTitle>
                                <CardDescription>Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div>Content</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Title</CardTitle>
                                <CardDescription>Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div>Content</div>
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <Calendar />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default HomePage;
