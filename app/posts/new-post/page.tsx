import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
export default async function NewPost(){
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    console.log('Data', user)

    if(!user) {
        return redirect('/login')
    }

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <h1>New Posts</h1>
        </div>
    )
}