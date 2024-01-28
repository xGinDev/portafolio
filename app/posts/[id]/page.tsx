import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Markdown from 'react-markdown'
import GoBack from "@/components/GoBack";
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
           <div className={'lg:px-6'}><GoBack/></div>
           {post.map((post) => (
               <div key={post.id} className="flex flex-col lg:px-6">
                   <h1 className={'lg:text-center text-2xl font-bold mb-2'}>{post.title}</h1>
                   <Markdown className={'text-start'}>{post.content}</Markdown>
               </div>
           ))}
       </>
    );
}
