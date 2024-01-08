import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Markdown from 'react-markdown'
async function getPost(id: number) {
    const { data, error } = await createClient(cookies()).from("post").select("*").eq('id', id);

    if (error) {
        throw error;
    }

    return data;
}

export default async function Post({ params }: { params: { id: number } }) {
    const { id } = params;
    const post = await getPost(id);

    console.log('Post', post);

    return (
       <>
           {post.map((post) => (
               <div key={post.id} className="text-center">
                   <h1>{post.title}</h1>
                   <Markdown>{post.content}</Markdown>
               </div>
           ))}
       </>
    );
}
