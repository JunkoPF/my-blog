// @flow strict
import React from "react"
import { useSiteMetadata } from "../../hooks"
import type { Node } from "react"
import styles from "./Layout.module.scss"
import Sidebar from "../Sidebar"

type Props = {
    children: Node,
}

const Layout = ({ children }: Props) => {
    const { title, subtitle, author } = useSiteMetadata()
    return (
        <div className={styles["layout"]}>
            <h1 className={styles["layout__title"]}>{title}</h1>
            <div className={styles["layout__discription"]}>
                <h2 className={styles["layout__discription-subtitle"]}>{subtitle}</h2>
                <h3 className={styles["layout__discription-author"]}>{author}</h3>
            </div>
            <div className={styles["layout__content"]}>
                <div className={styles["layout__content__sidebar"]}>
                    <Sidebar />
                </div>
                <div className={styles["layout__content__text"]}>{children}</div>
            </div>
        </div>
    )
}

export default Layout
