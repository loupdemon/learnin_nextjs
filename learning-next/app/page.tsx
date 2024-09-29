import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function Home() {
    console.log("Hello, world!"); //visible que sur console serveur
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-bold text-center sm:text-left">
                    Welcome to your dashboard
                </h1>

                <div className="text-lg text-center sm:text-left">
                    This is a dashboard page. You can go to the{" "}
                    <Link href="/connexion" className="text-blue-500">
                        about page
                    </Link>
                    <Link href="/inscription" className="text-blue-500">
                        about page
                    </Link>
                </div>

                <Button />
            </main>
        </div>
    );
}
