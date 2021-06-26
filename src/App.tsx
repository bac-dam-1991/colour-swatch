import * as React from "react";
import Cell from "./components/Cell/Cell";
import CellContainer from "./components/CellContainer/CellContainer";
import { convertHSVToRGB, generateRandomHSV } from "./domain/color.utilities";
import IHSV from "./domain/interfaces/IHSV";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	const [hsvArray, setHsvArray] = React.useState<IHSV[]>([]);
	const generateHsvArray = React.useCallback(() => {
		const _hsvArray: IHSV[] = [];
		for (let i = 0; i < 48; i++) {
			const currentHsv = generateRandomHSV();
			_hsvArray.push(currentHsv);
		}
		setHsvArray(_hsvArray);
	}, []);
	React.useEffect(() => {
		generateHsvArray();
	}, [generateHsvArray]);
	React.useEffect(() => {
		window.document.onkeypress = (event: KeyboardEvent) => {
			if (event.code === "Space") {
				event.preventDefault();
				generateHsvArray();
			}
		};
		return () => {
			window.document.onkeypress = null;
		};
	}, [generateHsvArray]);
	return (
		<div className="App">
			<CellContainer>
				{hsvArray.map((hsv: IHSV) => {
					return (
						<Cell
							rgb={convertHSVToRGB(hsv, {
								red: 255,
								green: 255,
								blue: 255,
							})}
						/>
					);
				})}
			</CellContainer>
		</div>
	);
};

export default App;
