import * as React from "react";
import { generateCssRgb } from "../../domain/color.utilities";
import IRGB from "../../domain/interfaces/IRGB";
import styles from "./Cell.module.css";

export interface CellProps {
	rgb: IRGB;
}

const Cell: React.FC<CellProps> = ({ rgb }) => {
	const color = generateCssRgb(rgb);
	return (
		<div className={styles.root} style={{ backgroundColor: color }}>
			<div className={styles.contentContainer}>
				<span>{color}</span>
			</div>
		</div>
	);
};

export default Cell;
