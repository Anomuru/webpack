declare module '*.sass' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png" {
    const value: any;
    export default value;
}
