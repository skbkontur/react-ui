/// <reference types="react" />
import * as React from 'react';
import PropTypes from 'prop-types';
export interface ZIndexProps extends React.HTMLAttributes<HTMLDivElement> {
    delta: number;
    render?: boolean;
    children?: React.ReactNode;
    className?: string;
}
export default class ZIndex extends React.Component<ZIndexProps> {
    static propTypes: {
        delta: PropTypes.Validator<any>;
        render: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        render: boolean;
    };
    private zIndex;
    constructor(props: ZIndexProps);
    componentWillUnmount(): void;
    render(): {} | null | undefined;
}
