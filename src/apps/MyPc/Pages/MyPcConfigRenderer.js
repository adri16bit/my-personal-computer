import "./MyPcConfigRenderer.css";
import Button from "../../../components/Button";

function MyPcConfigRenderer({ appRef }) {
	return (
		<div className="my-pc-config-root">
			<h1 className="my-pc-config-about-heading">about me</h1>
			<div className="my-pc-config-inset-panel">
				<div className="my-pc-config-profile-row">
					<img src="icons/selfie.png" alt="" className="my-pc-config-avatar" />
					<div className="my-pc-config-profile-text">
						<p className="my-pc-config-name">Adri</p>
						<ul className="my-pc-config-details">
							<li>he/him, 19y</li>
							<li>computer science</li>
							<li>software engineer</li>
							<li>graphic designer</li>
						</ul>
					</div>
				</div>
				<div className="my-pc-config-stacks">
					<span className="my-pc-config-stacks-label">stacks:</span> typescript, node.js, react.js, python sometimes
				</div>
				<div className="my-pc-config-actions">
					<Button text={"Ok"} width={"70px"} height={"22px"} />
				</div>
			</div>
		</div>
	);
}

export default MyPcConfigRenderer;
