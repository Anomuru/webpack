
export type BuildMode = "production" | "development"

export type multiEntry = string | {
    ["string"]: string
}

export interface BuildPaths {
    entry: string,
    build: string,
    html: string
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    port: number
}
