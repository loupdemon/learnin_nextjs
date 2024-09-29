import React from "react";

type Props = {
    params: {
        id: number;
    };
};

const getData = async (id: number) => {
    const response = await fetch(`http://localhost:4000/articles/${id}`);
    const data = await response.json();
    return data;
};

export default async function page({ params }: Props) {
    const article = await getData(params.id);

    return (
        <div className="container">
            <h3 className="titre">{article.titre}</h3>
            <p>{article.contenu}</p>
            <p>{article.auteur}</p>
            <p>{article.date}</p>
        </div>
    );
}
