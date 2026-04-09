import React, { useState } from "react";
import YouTube from "react-youtube";
import "./Volume.css";

const MUSIC_VIDEO_ID = "s0NME1GfbIc";

function Volume() {
	const [isVolumeOn, setIsVolumeOn] = useState(false);

	const toggleVolume = () => {
		setIsVolumeOn(!isVolumeOn);
	};

	const onPlayerReady = (event) => {
		event.target.setVolume(12);
		event.target.playVideo();
	};

	return (
		<div className="volume-icon-container">
			{isVolumeOn ? (
				<>
					<img className="volume-on-icon" onClick={toggleVolume} src="icons/volume-on.png" alt="Volume On" />
					<div className="volume-youtube-audio-only" aria-hidden="true">
						<YouTube
							videoId={MUSIC_VIDEO_ID}
							opts={{
								width: "0",
								height: "0",
								playerVars: {
									autoplay: 1,
									controls: 0,
									disablekb: 1,
									fs: 0,
									iv_load_policy: 3,
									modestbranding: 1,
									playsinline: 1,
									rel: 0,
								},
							}}
							onReady={onPlayerReady}
						/>
					</div>
					<div className="easter-egg">
						<img src="icons/laindancing.gif" style={{ width: "100px", height: "93px" }} alt="" />
					</div>
				</>
			) : (
				<img className="volume-off-icon" onClick={toggleVolume} src="icons/volume-off.png" alt="Volume Off" />
			)}
		</div>
	);
}

export default Volume;
