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

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>
                            Sign in to your account to continue
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4">
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

                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                            <p className="text-center text-xs text-slate-500">
                                Don't have an account?{" "}
                                <a
                                    href="/register"
                                    className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
                                >
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
