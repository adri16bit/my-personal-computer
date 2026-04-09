import "./MyPcSetupRenderer.css";

function MyPcSetupRenderer({ appRef }) {
	return (
		<div className="my-pc-setup-root">
			<h2 className="my-pc-setup-section-heading">config</h2>
			<div className="my-pc-setup-inset">
				<div className="my-pc-setup-hardware-row">
					<div className="my-pc-setup-body">
						Nvidia GeForce RTX 3060
						<br />
						AMD Ryzen 5 5600
						<br />
						TUF Gaming B550M Plus
						<br />
						32 GBytes RAM
						<br />
						1TB HD
						<br />
						Watercooler Gamdias Aura 240mm
						<br />
						SSD 1TB XPG S70 Blade, PCIe Gen4x4, M.2
						<br />
						NVMe, 7400MB/5500MB
					</div>
					<img src="icons/computer.png" alt="" className="my-pc-setup-computer-img" />
				</div>
			</div>

			<h2 className="my-pc-setup-section-heading my-pc-setup-section-heading--spaced">setup</h2>
			<div className="my-pc-setup-inset">
				<div className="my-pc-setup-peripherals-row">
					<div className="my-pc-setup-body my-pc-setup-col">
						Mouse Fallen Pantera Pro Headset Corsair
						<br />
						Virtuoso
						<br />
						Monitor LG Ultrawide 34wr50qc-b
					</div>
					<div className="my-pc-setup-body my-pc-setup-col">
						Keyboard DynaTab
						<br />
						75 X
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyPcSetupRenderer;
