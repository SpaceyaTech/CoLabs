export default function HeroSection() {
	return (
		<div className=''>
			<h1 className='text-3xl font-bold mb-4'>CoLabs Home</h1>
			<div className='col-lg-8 px-0'>
				<p className='mt-4'>
					Welcome to SpaceYaTech Colabs! Colabs is the Project division of
					SpaceYaTech
				</p>
			</div>
			<p className='mt-4'>There are 5 kinds of projects we work with: </p>
			<div className='flex flex-col'>
				<button
					href='#OpenSource'
					className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-none border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
				>
					Open Source
				</button>
				<button
					href='#ClosedSource'
					className='rounded-none bg-gray-400 text-black my-2'
				>
					Closed Source
				</button>
				<button
					href='#MonetisationEffortBased'
					className='bg-green-500 text-white my-2 w-40'
				>
					Monetisation Effort Based
				</button>
				<button
					href='#Infrastructure'
					className='bg-blue-500 text-white py-2 px-4 rounded-md'
				>
					Infrastructure projects
				</button>
				<button
					href='#Client'
					className='bg-yellow-400 text-black py-2 px-4 rounded-md'
				>
					Client projects
				</button>
			</div>
			<p className='mt-4'>
				Click here to see our project directory:{" "}
				<a href='projects.html'>Projects</a>
			</p>
			<p className='mt-4'>
				For benefits of creating or joining projects, see:{" "}
				<a href='#BenefitsProjects'>Benefits of Projects</a>
			</p>
		</div>
	);
}
