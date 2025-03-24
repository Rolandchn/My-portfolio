import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const DynamicStyles = () => {
    const location = useLocation();

    useEffect(() => {
        let styleSheet;

        // Determine which CSS file to load based on route
        if (location.pathname === "/") {
            styleSheet = import("../style/utils.css");
        } else {
            styleSheet = import("../style/utils2.css");
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

    return <Outlet/>;
};

export default DynamicStyles;
