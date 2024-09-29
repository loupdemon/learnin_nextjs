import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
    return (
        <div>
            <ul>
                <li>
                    <Link
                        href="/articles/1"
                        as="/articles/1"
                        className="text-blue-500"
                    >
                        Article 1
                    </Link>
                </li>
                <li>
                    <Link
                        href="/articles/2"
                        as="/articles/2"
                        className="text-blue-500"
                    >
                        Article 2
                    </Link>
                </li>
                <li>
                    <Link
                        href="/articles/3"
                        as="/articles/3"
                        className="text-blue-500"
                    >
                        Article 3
                    </Link>
                </li>
            </ul>
        </div>
    );
}
