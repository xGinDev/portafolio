'use client'
import {FC} from "react";
import {Button, Image, Link, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell} from "@nextui-org/react";
import {Tooltip} from "@nextui-org/tooltip";

const VTEXExtension: FC = () => {
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

    const blocksSnipets = [
        {
            'command': 'flr',
            'block': 'flex-layout.row'
        },
        {
            'command': 'flc',
            'block': 'flex-layout.col'
        },
        {
            'command': 'rt',
            'block': 'rich-text'
        },
        {
            'command': 'sl',
            'block': 'slider-layout'
        },
        {
            'command': 'i',
            'block': 'icon'
        },
        {
            'command': 'atc',
            'block': 'add-to-cart-button'
        }
    ]

    const componentsSnipets = [
        {
            'command': 'carrousel',
            'component': 'Context Image List And Slider',
            'image': 'https://github.com/xGinDev/vtex-snippets/assets/57797652/23b0044d-63b2-4d0a-b282-5d3b257a2ba2'
        }
    ]

    return (
        <div className={'flex flex-col items-center lg:px-20 gap-8'}>
            <h1 className={'text-4xl font-bold text-white-500 text-star'}>VTEX IO CodeBits</h1>
            <p className={'text-white-500 text-star'}>VTEX IO Snippets are concise, reusable code fragments tailored for VTEX IO. These code blocks serve as building blocks for customizing and extending your VTEX e-commerce store with ease. Whether it's adding new features, tweaking design, or optimizing performance, VTEX IO Snippets provide the flexibility to streamline development tasks, helping you create unique shopping experiences for your customers.</p>
            <div className="flex flex-col justify-center items-center w-80 gap-4">
                <Link className={'w-auto lg:w-full'} href={'https://github.com/xGinDev/vtex-snippets'} isExternal>
                    <Button className={'w-full'}>View on GitHub</Button>
                </Link>
                <Link className={'w-auto lg:w-full'} href={"https://marketplace.visualstudio.com/items?itemName=xGinDev.vtex-snippet-io"} isExternal>
                    <Button className={'w-full'}>Install From VSCode Marketplace</Button>
                </Link>
            </div>
            <div className="flex gap-4">
                {
                    itemsAnalytics.map((img, index) => (
                        <Image src={`${img.url}`} key={index}/>
                    ))
                }
            </div>
            <div className={'py-4 w-full flex flex-col gap-4'}>
                <h2 className={'text-4xl'}>List Commands</h2>
                <div className={'flex flex-col lg:flex-row w-full gap-6'}>
                    <div className={'w-full'}>
                        <h3 className={'mb-4'}>Blocks Snippets</h3>
                        <Table isStriped>
                            <TableHeader>
                                <TableColumn>Commands</TableColumn>
                                <TableColumn>Block</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {
                                    blocksSnipets.map((command, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{command.command}</TableCell>
                                            <TableCell>{command.block}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                    <div className={'w-full'}>
                        <h3 className={'mb-4'}>Components Snippets</h3>
                        <Table isStriped aria-label="Example table with dynamic content">
                            <TableHeader>
                                <TableColumn>Commands</TableColumn>
                                <TableColumn>Components</TableColumn>
                                <TableColumn>Image</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {
                                    componentsSnipets.map((command, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{command.command}</TableCell>
                                            <TableCell>{command.component}</TableCell>
                                            <TableCell>
                                                <Tooltip content={<Image src={`${command.image}`}/>}><Button>Hover me</Button></Tooltip></TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VTEXExtension;
