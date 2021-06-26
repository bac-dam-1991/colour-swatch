import * as React from "react";
import styles from "./CellContainer.module.css";

export interface CellContainerProps {}

const CellContainer: React.FC<CellContainerProps> = ({ children }) => {
	return <div className={styles.root}>{children}</div>;
};

export default CellContainer;
