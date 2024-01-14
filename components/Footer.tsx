import Newsletter from "@/components/Newsletter";

export default function Footer(){
    return (
        <footer className="flex flex-col w-full">
            {/*<Newsletter/>*/}
            <p className={"border-t border-t-foreground/10 p-4 flex justify-center text-center text-xs"}>
                Powered by{' '}
                <a
                    href="https://github.com/xGinDev"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                >
                    xGinDev
                </a>
            </p>
        </footer>
    )
}