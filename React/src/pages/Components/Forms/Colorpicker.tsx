import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { SketchPicker, TwitterPicker, ChromePicker, CompactPicker, SwatchesPicker, CirclePicker, GithubPicker, HuePicker } from "react-color";

const FormColorPicker: React.FC = () => {

    const [color, setColor] = useState<{ r: number; g: number; b: number; a: number; rgb?: number }>({ r: 63, g: 81, b: 181, a: 0.8 });
    const [twitterPicker, setTwitterPicker] = useState<string>("#3498db");
    const [chromeColor, setChromeColor] = useState<{ r: number; g: number; b: number }>({ r: 63, g: 81, b: 181 });
    const [compactColor, setCompactColor] = useState<string>("#A4DD00");
    const [swatchesColor, setSwatchesColor] = useState<{ r: number; g: number; b: number }>({
        r: 255,
        g: 235,
        b: 59,
    });
    const [circleColor, setCircleColor] = useState<{ r: number; g: number; b: number }>({ r: 156, g: 39, b: 176 });
    const [githubColor, setGithubColor] = useState<{ r: number; g: number; b: number }>({
        r: 196,
        g: 222,
        b: 246,
    });
    const [hueColor, setHueColor] = useState<{ r: number; g: number; b: number }>({ r: 255, g: 138, b: 101 });

    const contentRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)];
    const [displayColorPickers, setDisplayColorPickers] = useState<boolean[]>(Array(contentRefs.length).fill(false));


    const colors: React.CSSProperties = {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    };

    const chrome: React.CSSProperties = {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${chromeColor.r}, ${chromeColor.g}, ${chromeColor.b})`,
    };

    const compact: React.CSSProperties = {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: compactColor,
    };

    const swatches: React.CSSProperties = {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${swatchesColor.r}, ${swatchesColor.g}, ${swatchesColor.b})`,
    };

    const circle: React.CSSProperties = {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${circleColor.r}, ${circleColor.g}, ${circleColor.b})`,
    };

    const github: React.CSSProperties = {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${githubColor.r}, ${githubColor.g}, ${githubColor.b})`,
    };

    const hue: React.CSSProperties = {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        marginBlock: "3px",
        background: `rgba(${hueColor.r}, ${hueColor.g}, ${hueColor.b})`,
    };

    const handleOutsideClick = (event: MouseEvent, index: number) => {
        if (contentRefs[index].current && !contentRefs[index].current.contains(event.target as Node)) {
            setDisplayColorPickers((prev) => {
                const updatedDisplay = [...prev];
                updatedDisplay[index] = false;
                return updatedDisplay;
            });
        }
    };

    const handlePickerToggle = (index: number) => {
        setDisplayColorPickers((prev) =>
            prev.map((_, i) => (i === index ? !prev[i] : false))
        );
    };

    useEffect(() => {
        const eventListeners: Array<() => void> = [];

        contentRefs.forEach((ref, index) => {
            const listener = (event: MouseEvent) => handleOutsideClick(event, index);
            document.addEventListener("click", listener);
            eventListeners.push(() => document.removeEventListener("click", listener));
        });

        return () => {
            eventListeners.forEach((removeListener) => removeListener());
        };
    }, [contentRefs]);

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Color Picker" pageTitle="Forms" />

                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
                    <div className="card">
                        <div className="card-body" ref={contentRefs[0]}>
                            <h6 className="mb-1 text-gray-800 text-15 dark:text-white">SketchPicker Demo</h6>

                            <button style={colors} className="SketchPicker-colorpicker" onClick={() => { handlePickerToggle(0) }} />

                            {displayColorPickers[0] && (
                                <div style={{ position: "absolute", zIndex: 2 }}>
                                    <SketchPicker color={color} onChange={(newColor: any) => setColor(newColor.rgb)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" ref={contentRefs[1]}>
                            <h6 className="mb-1 text-gray-800 text-15 dark:text-white">ChromePicker Demo</h6>

                            <button style={chrome} className="classic-colorpicker" onClick={() => { handlePickerToggle(1) }} />

                            {displayColorPickers[1] && (
                                <div style={{ position: "absolute", zIndex: 2 }}>
                                    <ChromePicker color={chromeColor} onChange={(newColor) => setChromeColor(newColor.rgb)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" ref={contentRefs[2]}>
                            <h6 className="mb-1 text-gray-800 text-15 dark:text-white">CompactPicker Demo</h6>

                            <button style={compact} onClick={() => handlePickerToggle(2)} />

                            {displayColorPickers[2] && (
                                <div style={{ position: "absolute", zIndex: 2 }}>
                                    <CompactPicker color={compactColor} onChange={(newColor) => setCompactColor(newColor.hex)} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body" ref={contentRefs[3]}>
                            <h6 className="mb-1 text-gray-800 text-15 dark:text-white">SwatchesPicker Demo</h6>

                            <button style={swatches} className="colorpicker-demo" onClick={() => handlePickerToggle(3)} />

                            {displayColorPickers[3] && (
                                <div style={{ position: "absolute", zIndex: 2 }}>
                                    <SwatchesPicker
                                        color={swatchesColor}
                                        onChange={(newColor: any) => setSwatchesColor(newColor.rgb)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" ref={contentRefs[4]}>
                            <h6 className="mb-1 text-gray-800 text-15 dark:text-white">GithubPicker Demo</h6>

                            <button style={github} className="colorpicker-switch" onClick={() => handlePickerToggle(4)} />

                            {displayColorPickers[4] && (
                                <div style={{ position: "absolute", zIndex: 2 }}>
                                    <GithubPicker color={githubColor} onChange={(newColor: any) => setGithubColor(newColor.rgb)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" ref={contentRefs[5]}>
                            <h6 className="mb-1 text-gray-800 text-15 dark:text-white">HuePicker Demo</h6>
                            <div style={hue} className="SketchPicker-colorpicker" onClick={() => handlePickerToggle(5)} />

                            {displayColorPickers[5] && (
                                <div style={{ position: "absolute", zIndex: 2 }}>
                                    <HuePicker color={hueColor} onChange={(newColor: any) => setHueColor(newColor.rgb)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" ref={contentRefs[6]}>
                            <h6 className="mb-1 text-gray-800 text-15 dark:text-white">CirclePicker Demo</h6>
                            <button style={circle} className="colorpicker-switch" onClick={() => handlePickerToggle(6)} />

                            {displayColorPickers[6] && (
                                <div style={{ position: "absolute", zIndex: 2 }}>
                                    <CirclePicker color={circleColor} onChange={(newColor: any) => setCircleColor(newColor.rgb)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-gray-800 text-15 dark:text-white">TwitterPicker Demo</h6>
                            <TwitterPicker color={twitterPicker} onChange={(colors: any) => setTwitterPicker(colors.hex)} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FormColorPicker;
