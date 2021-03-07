// @flow strict
import React from "react"
import type { Node } from "react"
import styles from "./Layout.module.scss"

type Props = {
    children: Node,
}

const Layout = ({ children }: Props) => {
    return (
        <div className={styles["layout"]}>
            {children}
        </div>
    )
}

export default Layout;
