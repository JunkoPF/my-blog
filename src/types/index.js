// @flow strict
import type { Node as ReactNode } from 'react';

export type Edge = {
    node: Node
};

export type Edges = Array<Edge>;

export type AllMarkdownRemark = {
    allMarkdownRemark: {
        edges: Edges,
    },
    group: {
        fieldValue: string,
        totalCount: number
    }[]
};