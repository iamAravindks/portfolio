import React from 'react';
import Project from '../Project/Project';

function Portfolio() {
	const projects = [
		{
			name: 'Project 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper malesuada urna, non tristique urna iaculis ac. Nulla viverra nulla eu tincidunt lacinia. Aliquam malesuada commodo sem id vestibulum. Donec maximus dui ut felis tristique dapibus. Nulla facilisi.',
			image: 'work1.jpg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'Heroku & AWS S3',
				'React.js',
				'MERN Stack',
			],
			github: 'https://github.com',
			deployed: 'https://github.com',
		},
		{
			name: 'Project 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper malesuada urna, non tristique urna iaculis ac. Nulla viverra nulla eu tincidunt lacinia. Aliquam malesuada commodo sem id vestibulum. Donec maximus dui ut felis tristique dapibus. Nulla facilisi.',
			image: 'work2.jpg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: 'https://github.com',
			deployed: 'https://github.com',
		},
		{
			name: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper malesuada urna, non tristique urna iaculis ac. Nulla viverra nulla eu tincidunt lacinia. Aliquam malesuada commodo sem id vestibulum. Donec maximus dui ut felis tristique dapibus. Nulla facilisi.',
			image: 'work3.jpeg',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com',
			deployed: 'https://github.com',
		},
		{
			name: 'Project 4',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper malesuada urna, non tristique urna iaculis ac. Nulla viverra nulla eu tincidunt lacinia. Aliquam malesuada commodo sem id vestibulum. Donec maximus dui ut felis tristique dapibus. Nulla facilisi.',
			image: 'work4.jpeg',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com',
			deployed: 'https://github.com',
		},
		{
			name: 'Project 5',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper malesuada urna, non tristique urna iaculis ac. Nulla viverra nulla eu tincidunt lacinia. Aliquam malesuada commodo sem id vestibulum. Donec maximus dui ut felis tristique dapibus. Nulla facilisi.',
			image: 'work2.jpg',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com',
			deployed: 'https://github.com',
		},
		{
			name: 'Project 6',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper malesuada urna, non tristique urna iaculis ac. Nulla viverra nulla eu tincidunt lacinia. Aliquam malesuada commodo sem id vestibulum. Donec maximus dui ut felis tristique dapibus. Nulla facilisi.',
			image: 'work1.jpg',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com',
			deployed: 'https://github.com',
		}
	];

	return (
		<section>
			<div className="left">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
