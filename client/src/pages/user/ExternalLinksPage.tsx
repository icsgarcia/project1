import DashboardLayout from "@/layouts/DashboardLayout";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const externalLinks = [
    {
        title: "University of the Assumption",
        desc: "Official Website of the University of the Assumption",
        image: "/logos/ua-logo.png",
        url: "https://web.ua.edu.ph/",
    },
    {
        title: "University of the Assumption - SERP",
        desc: "Official Website of the University of the Assumption - SERP",
        image: "/logos/ua-logo.png",
        url: "https://serp.ua.edu.ph/serp/Gate/UASFP.Login.aspx",
    },
    {
        title: "RSOinTrack",
        desc: "Official Website of RSOinTrack",
        image: "/logos/RSOinTrack-logo.png",
        url: "#",
    },
];

const ExternalLinksPage = () => {
    return (
        <DashboardLayout>
            <div className="p-4">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {externalLinks.map((externalLink) => (
                            <Card
                                onClick={() =>
                                    window.open(externalLink.url, "_blank")
                                }
                                className="relative w-full pt-0 cursor-pointer"
                            >
                                <div className="absolute inset-0 z-30 aspect-video" />
                                <img
                                    src={externalLink.image}
                                    alt={externalLink.title}
                                    className="relative z-20 aspect-video w-full object-cover"
                                />
                                <CardHeader>
                                    <CardTitle>{externalLink.title}</CardTitle>
                                    <CardDescription>
                                        {externalLink.desc}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ExternalLinksPage;
