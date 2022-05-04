const packagesByReactVersion = {
    "0.16": {
        "@testing-library/react": "@testing-library/react-12",
        "react": "react-16",
        "react-dom": "react-dom-16",
    },
    "0.17": {
        "@testing-library/react": "@testing-library/react-12",
        "react": "react-17",
        "react-dom": "react-dom-17",
    },
    "0.18": {
        "react": "react-18",
        "react-dom": "react-dom-18",
    }
};

const versions = Array.from(Object.keys(packagesByReactVersion));
// find the highest version supported and default to that
const defaultVersion = Math.max(...versions.map(parseFloat)).toString();
const version = process.env.REACT_VERSION || defaultVersion;
// @ts-expect-error
const packages = packagesByReactVersion[version];

if (packages === undefined) {
    throw Error(`Unknown React version specified: ${version}`);
}

// get a reference to *real* console.log instead of Jest's wrapped one
const log = require("console").log;

log(`Mocking packages based on REACT_VERSION:`);

// for each defined package, mock it using the defined alias
Object.entries(packages).forEach(([original, mockAlias]) => {
    log(`\t${original} \u21D2 ${mockAlias}`);
    jest.mock(original, () => {
        // Require the aliased module.
        // @ts-expect-error
        const aliasedModule = jest.requireActual(mockAlias);
    
        return {
            __esModule: true,
            ...aliasedModule,
        };
    });
});

log("\n")
