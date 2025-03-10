// useActiveLink.js
import { useState, useEffect } from 'react';

const useActiveLink = (defaultLink: any) => {
    const [activeLink, setActiveLink] = useState("/Home");

    const handleLinkClick = (target: any) => {
        setActiveLink(target);
    };

    useEffect(() => {
        const defaultLinkElement = document.querySelector(defaultLink);

        if (defaultLinkElement) {
            setActiveLink(defaultLinkElement.getAttribute('href'));
        }
    }, [defaultLink]);

    return {
        activeLink,
        handleLinkClick,
    };
};

export default useActiveLink;
