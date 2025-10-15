/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/*.{js,ts}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "1.111rem",
                    md: "1.111rem",
                    lg: "7rem",
                    xl: "7rem",
                    "2xl": "7rem",
                },
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1440px",
                },
            },
            colors: {
                black: "#000000",
                brand: "#C29E80",
                circle: "#D9D9D9",
                cyan: { 900: "#133D5E" },
                stone: {
                    900: "#21201E",
                    400: "#C29E80",
                    300: "#E3D6CB",
                },
                neutral: {
                    800: "#212325",
                },
            },
            backgroundImage: {
                "hero-gradient":
                    "linear-gradient(180deg, #C29E80 7%, #000000 100%)",
                "hero-gradient-270":
                    "linear-gradient(270deg, #C29E80 7%, #000000 100%)",
            },
        },
    },
    plugins: [],
};