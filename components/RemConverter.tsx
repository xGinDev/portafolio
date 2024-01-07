'use client'
import React, { useState } from 'react';

const CssConverter: React.FC = () => {
    const [cssInput, setCssInput] = useState<string>('');
    const [convertedCss, setConvertedCss] = useState<string>('');

    const convertToRem = () => {
        try {
            const remCss = convertCssToRem(cssInput);
            setConvertedCss(remCss);
        } catch (error) {
            setConvertedCss('Error al analizar el CSS. Verifica la sintaxis.');
        }
    };

    const convertCssToRem = (cssString: string): string => {
        const remCss = cssString.replace(/(\d+)px/g, (_, value) => {
            const remValue = parseFloat(value) / 16; // Ajusta según tu base de font-size
            return `${remValue}rem`;
        });

        return remCss; 
    };

    return (
        <div className="min-h-screen flex flex-col items-center text-white">
            <h1 className="text-4xl font-bold text-blue-500 mb-8">
                CSS PX to REM Converter
            </h1>
            <div className="flex flex-col w-full px-8 ">
                <div className={"flex md:flex-row w-full gap-6"}>
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
                            <code className="text-sm bg-gray-700 p-4 rounded-lg block">
                                {convertedCss}
                            </code>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        onClick={convertToRem}
                        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                    >
                        Convertir a rem
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CssConverter;
