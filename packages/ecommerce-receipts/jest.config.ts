import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    ...require("../../jest.config.base.ts").default as Config.InitialOptions,
    rootDir: "../../",
}

export default config;