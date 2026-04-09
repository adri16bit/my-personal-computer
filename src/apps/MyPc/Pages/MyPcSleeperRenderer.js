import "./MyPcSleeperRenderer.css";

function MyPcSleeperRenderer({ appRef }) {
	return (
		<div className="my-pc-experience-root">
			<div className="my-pc-experience-panel">
				<h2 className="my-pc-experience-path">projects/experience</h2>
				<p className="my-pc-experience-body">
					I began my developer career working with robotic process automation, creating scripts on virtual machines to replace manual processes and
					building cloud-based automations on GCP. In this role, I primarily worked with Python and GraphQL. Currently, I focus on both backend and
					frontend development. On the backend, I mainly work with TypeScript, node.js, using clean arch and ddd, (sometimes) applying TDD, design
					patterns, refactoring practices, and some clean code principles. I also have experience with microservices using aws services, like DynamoDB,
					Aurora, Secrets Manager, SSM, API Gateway, Cognito, and SNS/SQS etc. On the frontend, I worked with Web Components (Lit framework) as well as
					React. I try my best to stay adaptable, I usually quickly learn the team&apos;s practices and the technologies used.
				</p>
			</div>
		</div>
	);
}

export default MyPcSleeperRenderer;
