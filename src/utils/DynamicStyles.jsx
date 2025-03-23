import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicStyles = () => {
    const location = useLocation();

    useEffect(() => {
        let styleSheet;

        console.log(location.pathname)

/*         // Determine which CSS file to load based on route
        if (location.pathname === "/dashboard") {
            styleSheet = import("../styles/dashboardUtils.css");
        } else {
            styleSheet = import("../styles/homeUtils.css");
        }

        return () => {
            // Optional: Clean up styles when navigating away (not always needed)
            document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
                if (link.href.includes("dashboardUtils.css") || link.href.includes("homeUtils.css")) {
                    link.remove();
                }
            });
        }; */
    }, [location]);

    return null;
};

export default DynamicStyles;
