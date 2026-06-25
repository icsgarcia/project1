import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card>
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                        <CardDescription>
                            Get started - it only takes a minute
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4">
                            <div>
                                <Label htmlFor="firstName" className="mb-2">
                                    First Name
                                </Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="middleName" className="mb-2">
                                    Middle Name
                                </Label>
                                <Input
                                    id="middleName"
                                    type="text"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="lastName" className="mb-2">
                                    Last Name
                                </Label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="role" className="mb-2">
                                    Role
                                </Label>
                                <Select required>
                                    <SelectTrigger id="role" className="w-full">
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">
                                                Apple
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="organization" className="mb-2">
                                    Organization
                                </Label>
                                <Select required>
                                    <SelectTrigger
                                        id="organization"
                                        className="w-full"
                                    >
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">
                                                Apple
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="email" className="mb-2">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="password" className="mb-2">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    required
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="confirmPassword"
                                    className="mb-2"
                                >
                                    Confirm Password
                                </Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="********"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Register
                            </Button>
                            <p className="text-center text-xs text-slate-500">
                                Already have an account?{" "}
                                <a
                                    href="/"
                                    className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
                                >
                                    Sign in
                                </a>
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default RegisterPage;
