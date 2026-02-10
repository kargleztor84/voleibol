import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig ({
    server: {
        hmr: {
            overlay: false,
        }
    },

    // base: 'https://kargleztor84.github.io/voleibol',

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                equipo: resolve(__dirname, "./equipo/index.html"),
            },
        },
    },
})