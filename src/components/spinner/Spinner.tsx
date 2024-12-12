import { ClipLoader } from "react-spinners";
import "./Spinner.css";

interface SpinnerProps {
	isLoading?: boolean,
}
export function Spinner({ isLoading = true }: SpinnerProps) {
	return (
		<>
			<div id="Loading-spinner">
				<ClipLoader
					color="#14b8a6"
					loading={isLoading}
					size={35}
					aria-label="Loading Spinner"
					data-testid='loader'
				/>
			</div>
		</>
	)
}
