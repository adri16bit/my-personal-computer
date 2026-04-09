import "./TxtRenderer.css";

function TxtRenderer({ appCoreRef }) {
	return (
		<div className="app-txt-renderer-container">
			This file is just in case you want to know a little bit more about me.
			<div>
				<br />
			</div>
			<a>
				My name is Adri. I&apos;m a Brazilian guy, currently in my last year of Computer Science. At the moment, I work remotely as a full-stack
				developer at Thoughtworks.{" "}
			</a>
			<div className="app-txt-renderer-selfie">
				<a>
					I have a huge love for retro tech, including old computers, CRTs, and video games. Honestly, I think my mind is stuck in the 2000s—I
					can&apos;t let go of the nostalgia, the rise of the internet, and everything that was made at that time; it all has a special place in my
					heart. It&apos;s strange to see how computers evolved in such a short time, and I&apos;m glad to have grown up in that era. I even own a
					sleeper PC. That&apos;s why I decided to create this page.
				</a>
			</div>
			<div>
				<br />
			</div>
			<div>
				About my personality, I can say I&apos;m a very calm, rational, lonely, and simple person, always trying to do the right thing. Sometimes I can
				be tough and skeptical, but that&apos;s part of my resilience. I have a lot of intrapersonal and interpersonal intelligence, which for some
				reason led me to develop schizoid personality traits; despite that, I have good relationships. I like to question everything, teach, observe
				people, and spend time with myself.
				<div>
					<br />
				</div>
				In my free time, I really like reading scientific books and playing video games. My favorite games are usually in the hack-and-slash genre,
				like Devil May Cry 3 and Doom (2016)—by the way, I have a huge interest in programming games. I also love chess and cats.
			</div>
		</div>
	);
}

export default TxtRenderer;
