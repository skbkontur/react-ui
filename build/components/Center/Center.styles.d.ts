import { ITheme } from '../theme';
export default function Center(theme: ITheme): {
    root: {
        height: string;
    };
    spring: {
        display: string;
        height: string;
        verticalAlign: string;
    };
    container: {
        display: string;
        textAlign: string;
        verticalAlign: string;
    };
};
