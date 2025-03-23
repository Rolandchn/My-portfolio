import React, { useEffect } from "react";

const DynamicStyles = () => {
    const location = window.location.pathname;

    useEffect(() => {
        let styleSheet;

        // Determine which CSS file to load based on route
        if (location === "/") {
            styleSheet = import("../style/utils.css");
            console.log("a")
        } else {
            styleSheet = import("../style/utils2.css");
            console.log("b")
        }

        return () => {
            // Optional: Clean up styles when navigating away (not always needed)
            document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
                if (link.href.includes("utils.css") || link.href.includes("utils2.css")) {
                    link.remove();
                }
            });
        };
    }, [location]);

    return null;
};

export default DynamicStyles;
