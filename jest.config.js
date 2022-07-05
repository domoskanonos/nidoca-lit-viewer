// eslint-disable-next-line no-undef
export default {
  projects: [
    {
      preset: "ts-jest",
      testEnvironment: "jsdom",
      roots: ["<rootDir>/src"],
      testMatch: ["**/*.test.+(ts)"],
      coverageDirectory: "<rootDir>/coverage/jest/esm",
      globals: {
        "ts-jest": {
          tsConfig: "tsconfig.json",
          useESM: true,
        },
      },
      transform: {
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
      },
      extensionsToTreatAsEsm: [".ts"],
    },
  ],
};
