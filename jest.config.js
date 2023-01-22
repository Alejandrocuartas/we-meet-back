/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFiles: ["./__tests__/setupTest.ts"],
    testMatch: ["./__tests__/**/*.test.[jt]s?(x)"],
};
