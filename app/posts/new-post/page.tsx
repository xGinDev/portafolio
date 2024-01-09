'use client'
import { createClient } from "@/utils/supabase/client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Input } from "@nextui-org/react";

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const supabase = createClient();

    const createPost = () => {
        return supabase
            .from("post")
            .insert([
                {
                    title: `${title}`,
                    content: `${description}`,
                },
            ])
            .select()
            .single()
            .then(({ data, error }) => {
                if (error) throw error;
                return data;
            });
    };

    const handleSubmit = () => {
        console.log("Creado");
        createPost().then((data) => {
            console.log("Post created:", data);
        }).catch((error: any) => {
            console.error("Error creating post:", error);
        });
    };

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <h1>New Posts</h1>
            <Input
                type={"text"}
                label={"Título"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                type={"textarea"}
                label={"Description"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button onClick={handleSubmit}>Crear Posts</Button>
        </div>
    );
}
