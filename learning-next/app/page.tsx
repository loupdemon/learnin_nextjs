import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

//creation d'une fonction pour chercher les données de l'API

const getData = async () => {
    const response = await fetch("http://localhost:4000/articles");
    const data = await response.json();
    return data;
};

type Article = {
    id: number;
    titre: string;
    contenu: string;
    auteur: string;
    date: string;
};

export default async function Home() {
    console.log("Hello, world!"); //visible que sur console serveur
    const article = await getData();
    console.log(article);
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

                <div className="container">
                    {article.map((article: Article) => (
                        <div key={article.id} className="carte">
                            <Link
                                href={`/articles/${article.id}`}
                                className="text-blue-500"
                            >
                                <h3 className="text-xl font-bold">
                                    {article.id} .{article.titre}
                                </h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
