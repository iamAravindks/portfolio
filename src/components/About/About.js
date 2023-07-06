import React from 'react';
import './About.css'

function About() {
	return (
		<section>
			<div className="left" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="left">
				<img
					src={require('../../assets/images/avatar.jpeg')}
					alt="about-me"
					className="avatar"
				/>
			</div><br></br>
			<div>
				<p>
				Hi there! I'm John Doe, a passionate and creative web developer with a strong foundation in front-end and back-end technologies. I have a deep love for coding and enjoy building responsive and user-friendly websites that leave a lasting impression on users.

My journey as a developer began several years ago, and since then, I have continuously honed my skills and kept up with the latest industry trends. I specialize in using modern web technologies such as HTML5, CSS3, JavaScript, and React to craft intuitive and interactive web applications.

As a problem solver by nature, I thrive on challenges and take pride in finding elegant solutions to complex problems. I'm a strong believer in the power of collaboration and enjoy working in teams to bring ideas to life.

When I'm not coding, you can find me exploring new technologies, attending tech meetups, or contributing to open-source projects. I believe in the importance of giving back to the developer community and sharing knowledge.

				</p>
				<p>
				If you have a project idea or just want to say hello, feel free to get in touch. I'm always excited to connect with fellow developers and collaborate on interesting projects!

Let's create something amazing together!
				</p>
			</div>
		</section>
	);
}

export default About;
