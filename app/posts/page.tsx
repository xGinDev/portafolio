import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

export const metadata = {
    title: 'Blog',
    description: '',
}

interface Post {
    id: number;
    title: string;
    created_at: string;
}

async function getPosts(): Promise<Post[]> {
    const { data, error } = await createClient(cookies()).from("post").select("*");
    if (error) {
        throw error;
    }

    return data;
}

export default async function Posts() {
    const posts: Post[] = await getPosts();

    console.log('Posts', posts);

    function formatDate(dateString: string): string {
        const options: Intl.DateTimeFormatOptions = { month: 'short', year: '2-digit' };
        const [month, year] = new Date(dateString).toLocaleDateString('es-ES', options).split(' ');
        return `${month.toLowerCase()}. '${year}`;
    }

    return (
        <>
            <h1 className={"text-center font-bold text-xl lg:text-5xl tracking-wide"}>Blog</h1>
            <div className="grid divide-y lg:px-8">
                {posts?.map((post) => (
                    <Link href={`/posts/${encodeURIComponent(`${post.id}`)}`} key={post.id}>
                        <div className={"flex justify-between py-6"}>
                            <span>{post.title}</span>
                            <span className={"capitalize"}>{formatDate(post.created_at)}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
