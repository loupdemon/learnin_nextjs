"use client";
import React from "react";

type Props = {};

export default function Button({}: Props) {
    return (
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => alert("Hello, world!")}
        >
            Click me
        </button>
    );
}
