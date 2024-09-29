import React from "react";

type Props = {
    params: {
        id: number;
    };
};

export default function page({ params }: Props) {
    return <div>page de l'article {params.id} </div>;
}
