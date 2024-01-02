import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";
import Link from "next/link";

async function getPosts() {
    const {data, error} = await createClient(cookies()).from("post").select("*")
    if(error) {
        throw error
    }

    return data
}
export default async function Posts() {
    const posts = await getPosts()
    console.log('Posts', posts)
    return (
        <>
            <h1>Artículos</h1>
            <div className="grid grid-cols-2">
                {
                    posts?.map((post) => (
                        <div key={post.id}>
                            <Link href={`/posts/${encodeURIComponent(`${post.id}`)}`}>{post.title}</Link>
                        </div>
                        ))
                }
            </div>
        </>
    )
}