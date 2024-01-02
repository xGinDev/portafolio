import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

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
               <div key={post.id}>
                   <h1>{post.title}</h1>
                   <p>{post.content}</p>
               </div>
           ))}
       </>
    );
}
