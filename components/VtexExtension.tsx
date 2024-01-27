import {Button, Image, Link} from "@nextui-org/react";


const VTEXExtension: React.FC = () => {
    const itemsAnalytics = [
        {
            'url': 'https://img.shields.io/vscode-marketplace/r/xgindev.vtex-snippet-io.svg?style=flat-square'
        },
        {
            'url': 'https://img.shields.io/vscode-marketplace/d/xgindev.vtex-snippet-io.svg?style=flat-square'
        },
        {
            'url': 'https://img.shields.io/vscode-marketplace/v/xgindev.vtex-snippet-io.svg?style=flat-square'
        }
    ];

    return (
        <div className={'flex flex-col items-center lg:px-20 gap-8'}>
            <h1 className={'text-4xl font-bold text-white-500 text-center'}>VTEX IO CodeBits</h1>
            <p className={'text-white-500 text-center'}>VTEX IO Snippets are short code blocks for customizing stores on VTEX IO, making it easy to add features and design adjustments efficiently.</p>
            <div className="flex flex-col justify-center items-center w-80 gap-4">
                <Link className={'w-full'} href={'https://github.com/xGinDev/vtex-snippets'} isExternal>
                    <Button className={'w-full'}>View on GitHub</Button>
                </Link>
                <Link className={'w-full'} href={"https://marketplace.visualstudio.com/items?itemName=xGinDev.vtex-snippet-io"} isExternal>
                    <Button className={'w-full'}>Install From VSCode Marketplace</Button>
                </Link>
            </div>
            <div className="flex gap-4">
                {
                    itemsAnalytics.map((img) => (
                        <Image src={`${img.url}`}/>
                    ))
                }
            </div>
        </div>
    );
};

export default VTEXExtension;
