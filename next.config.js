module.exports = {
      ...require("nextra")({
        theme: "nextra-theme-docs",
        themeConfig: "./theme.config.jsx",
        latex: true,
        titleSuffix:
        "Whitepaper: Managed Futures Yield (Carry): A Practitioner's Perspective",
      })()
    };