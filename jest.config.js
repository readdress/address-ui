module.exports = {
    roots: ["<rootDir>/src"],
    clearMocks: true,
    testEnvironment: "jsdom",
    coverageDirectory: "coverage",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    preset: "ts-jest",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|scss)$": "identity-obj-proxy",
    },
};
