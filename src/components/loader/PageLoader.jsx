import React from "react";

const PageLoader = () => {
    return (
        <div style={styles.loaderWrapper}>
            {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} style={styles.pinPlaceholder}>
                    <div style={styles.imagePlaceholder}></div>
                    <div style={styles.textPlaceholder}></div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    loaderWrapper: {
        display: "flex",
        width: "100%",
        height: "100vh",
        position: "relative",
        top: "20px",
        flexWrap: "wrap",
        gap: "20px",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    pinPlaceholder: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "70px",
        gap: "10px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        animation: "fade 1.5s ease-in-out infinite",
    },
    imagePlaceholder: {
        height: "300px",
        width: "200px",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        animation: "pulse 1.5s ease-in-out infinite",
    },
    textPlaceholder: {
        height: "15px",
        width: "80%",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
        animation: "pulse 1.5s ease-in-out infinite",
    }
};

export default PageLoader;
