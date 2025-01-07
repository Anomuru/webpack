import {RuleSetRule} from "webpack";
import {loader} from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({mode}: BuildOptions): RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            mode === "development" ? "style-loader" : loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: mode === "development"
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:5]"
                    }
                }
            },
            "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        styleLoader,
    ]
}