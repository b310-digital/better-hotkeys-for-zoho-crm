require("esbuild")
  .build({
    entryPoints: ["./src/background.ts", "./src/popup.tsx"],
    bundle: true,
    minify: true,
    sourcemap: process.env.NODE_ENV !== "production",
    target: ["chrome89", "firefox91"],
    outdir: "./public/build",
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
    },
    loader: {
      ".eot": "file",
      ".woff": "file",
      ".woff2": "file",
      ".ttf": "file",
      ".svg": "file",
      ".html": "file",
    },
    watch: !!process.argv.includes("--watch"),
  })
  .catch(() => process.exit(1));
