import { useRouter } from "next/router";
import LoginSection from "views/LoginPage/LoginSection";


export default function Login() {
    const router = useRouter();
    return (
        <>
            <LoginSection onClose={() => router.push("/")} />
        </>
    );
}