// vite.config.ts
import { defineConfig } from "file:///C:/Users/chara/Desktop/progects/Honey%20Clicker/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/chara/Desktop/progects/Honey%20Clicker/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/chara/Desktop/progects/Honey%20Clicker/node_modules/vite-plugin-pwa/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"]
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#f28705",
        background_color: "#531aa5",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "Honey Clicker",
        description: "Honey Clicker Game",
        name: "Honey Clicker",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "logo256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "logo384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        shortcuts: [
          {
            name: "\u0418\u0433\u0440\u0430",
            description: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
            url: "/",
            icons: [
              {
                src: "honey-jar96.png",
                sizes: "96x96"
              }
            ]
          },
          {
            name: "\u0418\u043D\u0444\u043E",
            description: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
            url: "/about",
            icons: [
              {
                src: "info.png",
                sizes: "96x96"
              }
            ]
          },
          {
            name: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
            description: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
            url: "/settings",
            icons: [
              {
                src: "settings.png",
                sizes: "96x96"
              }
            ]
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjaGFyYVxcXFxEZXNrdG9wXFxcXHByb2dlY3RzXFxcXEhvbmV5IENsaWNrZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGNoYXJhXFxcXERlc2t0b3BcXFxccHJvZ2VjdHNcXFxcSG9uZXkgQ2xpY2tlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvY2hhcmEvRGVza3RvcC9wcm9nZWN0cy9Ib25leSUyMENsaWNrZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgLy8gYWRkIHRoaXMgdG8gY2FjaGUgYWxsIHRoZSBpbXBvcnRzXHJcbiAgICAgIHdvcmtib3g6IHtcclxuICAgICAgICBnbG9iUGF0dGVybnM6IFtcIioqLypcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGFkZCB0aGlzIHRvIGNhY2hlIGFsbCB0aGVcclxuICAgICAgLy8gc3RhdGljIGFzc2V0cyBpbiB0aGUgcHVibGljIGZvbGRlclxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbXCIqKi8qXCJdLFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIHRoZW1lX2NvbG9yOiBcIiNmMjg3MDVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiM1MzFhYTVcIixcclxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcclxuICAgICAgICBzY29wZTogXCIvXCIsXHJcbiAgICAgICAgc3RhcnRfdXJsOiBcIi9cIixcclxuICAgICAgICBzaG9ydF9uYW1lOiBcIkhvbmV5IENsaWNrZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJIb25leSBDbGlja2VyIEdhbWVcIixcclxuICAgICAgICBuYW1lOiBcIkhvbmV5IENsaWNrZXJcIixcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IFwibG9nbzE5Mi5wbmdcIixcclxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBcImxvZ28yNTYucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjI1NngyNTZcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCJsb2dvMzg0LnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIzODR4Mzg0XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IFwibG9nbzUxMi5wbmdcIixcclxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHNob3J0Y3V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlx1MDQxOFx1MDQzM1x1MDQ0MFx1MDQzMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTA0MTNcdTA0M0JcdTA0MzBcdTA0MzJcdTA0M0RcdTA0MzBcdTA0NEZcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9cIixcclxuICAgICAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IFwiaG9uZXktamFyOTYucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaXplczogXCI5Nng5NlwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlx1MDQxOFx1MDQzRFx1MDQ0NFx1MDQzRVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTA0MThcdTA0M0RcdTA0NDRcdTA0M0VcdTA0NDBcdTA0M0NcdTA0MzBcdTA0NDZcdTA0MzhcdTA0NEZcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9hYm91dFwiLFxyXG4gICAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNyYzogXCJpbmZvLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXHUwNDFEXHUwNDMwXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDM5XHUwNDNBXHUwNDM4XCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvc2V0dGluZ3NcIixcclxuICAgICAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IFwic2V0dGluZ3MucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaXplczogXCI5Nng5NlwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VSxTQUFTLG9CQUFvQjtBQUNwVyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBR3hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQTtBQUFBLE1BRU4sU0FBUztBQUFBLFFBQ1AsY0FBYyxDQUFDLE1BQU07QUFBQSxNQUN2QjtBQUFBO0FBQUE7QUFBQSxNQUdBLGVBQWUsQ0FBQyxNQUFNO0FBQUEsTUFDdEIsVUFBVTtBQUFBLFFBQ1IsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLFFBQ0EsV0FBVztBQUFBLFVBQ1Q7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxZQUNiLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxjQUNMO0FBQUEsZ0JBQ0UsS0FBSztBQUFBLGdCQUNMLE9BQU87QUFBQSxjQUNUO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsWUFDYixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsY0FDTDtBQUFBLGdCQUNFLEtBQUs7QUFBQSxnQkFDTCxPQUFPO0FBQUEsY0FDVDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFlBQ2IsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRSxLQUFLO0FBQUEsZ0JBQ0wsT0FBTztBQUFBLGNBQ1Q7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
