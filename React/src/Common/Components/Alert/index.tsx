import React, { ElementType, ReactNode } from "react";
import { AlertContextProvider, useAlertContext } from "./AlertContext";
import { AlertCircle, X } from "lucide-react";

interface AlertProps {
    children?: ReactNode;
    className?: string;
    src?: string;
    as?: ElementType;
    alt?: string;
    style?: React.CSSProperties;
}

export const AlertBold: React.FC<AlertProps> = ({ children }) => {
    return <span className="font-bold">{children}</span>
};

export const AlertIcon: React.FC<AlertProps> = ({ children }) => {
    return (
        <React.Fragment>
            {children ?? <AlertCircle className="h-4"></AlertCircle>}
        </React.Fragment>
    );
};

export const AlertClose: React.FC<AlertProps> = ({ className }) => {

    const { handleAlertToggle } = useAlertContext()
    return (
        <button
            className={className ? className : 'absolute top-0 bottom-0 right-0 p-3 transition text-custom-200 hover:text-custom-500 dark:text-custom-400/50 dark:hover:text-custom-500'}
            onClick={handleAlertToggle}
        >
            <X className="h-5"></X>
        </button>
    );
};

export const AlertImage: React.FC<AlertProps> = ({ src, className, alt }) => {
    return <img src={src} alt={alt} className={className} />;
};

export const AlertContent: React.FC<AlertProps> = ({ children, as: Component = "div" }) => {
    return <Component>{children}</Component>;
};

const Alert: React.FC<AlertProps> = ({ className, children, as: Component = "div" }) => {

    return (
        <AlertContextProvider className={className} Component={Component}>
            {children}
        </AlertContextProvider>
    );
};

export default Object.assign(Alert, {
    Bold: AlertBold,
    Icon: AlertIcon,
    Image: AlertImage,
    Content: AlertContent,
    Close: AlertClose
});
