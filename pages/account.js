import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import {useSession, signOut, signIn} from "next-auth/react";

export default function AccountPage(){
    const {data:session} = useSession();
    async function logout(){
        await signOut({
            callbackUrl: process.env.NEXT_PUBLIC_URL,
        });
    }
    async function login(){
        await signIn('google');
    }
    return (
        <>
            <Header></Header>
            <Center>
                <Title>Account</Title>
                {session && (
                    <Button primary onClick={logout}>Logout</Button>
                )}
                {!session && (
                    <Button primary onClick={login}>Login</Button>
                )}
            </Center>

        </>
    )
}