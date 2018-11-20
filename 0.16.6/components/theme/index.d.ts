import text from './text';
import button from './button';
import common from './common';
import link from './link';
declare const createDefaultTheme: () => ITheme;
export declare type ITheme = {
    readonly text: typeof text;
    readonly common: typeof common;
    readonly button: typeof button;
    readonly link: typeof link;
};
export default createDefaultTheme;
