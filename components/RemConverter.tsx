'use client'
import React, { useState } from 'react';

const RemConverter: React.FC = () => {
    const [cssInput, setCssInput] = useState<string>('');
    const [convertedCss, setConvertedCss] = useState<string>('');

    const convertToRem = () => {
        try {
            const parsedCss = parseCss(cssInput);
            const remCss = convertCssToRem(parsedCss);
            setConvertedCss(remCss);
        } catch (error) {
            setConvertedCss('Error al analizar el CSS. Verifica la sintaxis.');
        }
    };

    const parseCss = (cssString: string): CSSRuleList => {
        const styleElement = document.createElement('style');
        styleElement.textContent = cssString;
        document.head.appendChild(styleElement);
        const cssRules = styleElement.sheet!.cssRules as CSSRuleList;
        document.head.removeChild(styleElement);
        return cssRules;
    };

    const convertCssToRem = (cssRules: CSSRuleList): string => {
        const remRules = Array.from(cssRules).map((rule) => {
            const remRule = rule.cssText.replace(/(\d+)px/g, (_, value) => {
                const remValue = parseFloat(value) / 16; // Ajusta según tu base de font-size
                return `${remValue}rem`;
            });
            return remRule;
        });
        return remRules.join('\n');
    };

    return (
        <div className={"flex justify-center"}>
            <div>
                <textarea
                    rows={10}
                    value={cssInput}
                    onChange={(e) => setCssInput(e.target.value)}
                />
                <button onClick={convertToRem}>Convertir a rem</button>
            </div>
            <div>
                <p>Estilos convertidos a rem:</p>
                <pre>{convertedCss}</pre>
            </div>
        </div>
    );
};

export default RemConverter;
