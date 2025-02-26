import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html")
    }

    const PORT = env.port || 3000
    const MODE = env.mode || "development"

    return buildWebpackConfig({
        mode: MODE,
        paths: paths,
        port: PORT
    })
};
