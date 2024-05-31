import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="grid place-items-center h-screen">
            <SignIn path="/signin" />
        </div>
    );
};