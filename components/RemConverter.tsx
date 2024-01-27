'use client'
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { MdCleaningServices } from "react-icons/md";
import { BsClipboard2, BsClipboard2Check } from "react-icons/bs";
import {Button } from "@nextui-org/react";

const CssConverter: React.FC = () => {
    const [cssInput, setCssInput] = useState<string>('');
    const [convertedCss, setConvertedCss] = useState<string>('');
    const [copyCode, setCopyCode] = useState(false)

    const convertToRem = () => {
        try {
            const remCss = convertCssToRem(cssInput);
            setConvertedCss(remCss);
        } catch (error) {
            setConvertedCss('Error al analizar el CSS. Verifica la sintaxis.');
        }
    };

    const convertCssToRem = (cssString: string): string => {
        const remCss = cssString.replace(/(\d*\.?\d+)px/g, (_, value) => {
            const remValue = parseFloat(value) / 16; // Ajusta según tu base de font-size
            return remValue % 1 === 0 ? `${remValue.toFixed(0)}rem` : `${remValue.toFixed(3)}rem`;
        });

        return remCss;
    };

    const clear = () => {
        setCssInput('')
        setConvertedCss('')
    }

    const handleCopyCode = () => {
        navigator.clipboard.writeText(convertedCss)
        setCopyCode(true)
        setTimeout(() => {
            setCopyCode(false)
        }, 3000)
    }

    return (
        <div className="min-h-screen flex flex-col items-center text-white">
            <h1 className="text-4xl font-bold text-blue-500 mb-8">
                CSS PX to REM Converter
            </h1>
            <div className="flex flex-col w-full px-8 ">
                <div className={"flex flex-col md:flex-row w-full gap-6"}>
                    <div className="w-full md:w-1/2 p-6 mb-4 md:mb-0 bg-gray-800 rounded-lg shadow-md overflow-y-auto">
                        <label className="block mb-2 text-lg font-medium">
                            Pega tus estilos CSS aquí:
                        </label>
                        <textarea
                            rows={14}
                            className="w-full p-2.5 text-sm bg-gray-700 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 block"
                            value={cssInput}
                            onChange={(e) => setCssInput(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-6 bg-gray-800 rounded-lg shadow-md overflow-y-auto">
                    <div>
                            <p className="text-lg font-medium mb-2">
                                Estilos convertidos a rem:
                            </p>
                        <SyntaxHighlighter language="css" style={atomOneDark} customStyle={{
                            padding: "8px",
                            overflow: "hidden",
                            height: "18.75rem",
                            overflowY: "scroll"
                        }} wrapLongLines={true} showLineNumbers={true}>
                            {convertedCss}
                        </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-between"}>
                    <Button
                        onClick={convertToRem}
                        className="mt-4 p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-full px-8">Convert</Button>
                    <div className="flex gap-4">
                        <Button
                            onClick={clear}
                            className="flex items-center gap-3 mt-4 p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-full px-8"
                        >
                            <MdCleaningServices/>
                            Clear
                        </Button>
                        {
                            !copyCode ? (
                                <Button
                                    onClick={() => {handleCopyCode()}}
                                    className="flex items-center gap-3 mt-4 p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-full px-8"
                                >
                                    <BsClipboard2/>
                                    Copy
                                </Button>
                            ): (
                                <Button
                                    className="flex items-center gap-3 mt-4 p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-full px-8"
                                >
                                    <BsClipboard2Check/>
                                    Copied!
                                </Button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CssConverter;
