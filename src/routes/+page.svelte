<script lang="ts">
	import { base } from '$app/paths';
</script>

<link
	href="https://fonts.googleapis.com/css?family=Lato:400,300,700"
	rel="stylesheet"
	type="text/css"
/>
<div class="container bg-white mx-auto shadow-sm shadow-gray-300 rounded-sm p-2 sm:p-10 mt-12">
	<div class="header mb-8">
		<div class="full-name text-4xl uppercase mb-1.5">
			<span class="first-name font-bold">Michael</span>
			<span class="last-name font-light">Horgan</span>
		</div>
		<div class="contact-info mb-4">
			<span class="email font-light text-gray-500">email:</span>
			<span class="email-val">michaelghorgan@gmail.com</span>
			<span class="separator h-2.5 inline-block border-s-2 border-gray-500 divide-solid mx-2"
			></span>
			<span class="phone font-light text-gray-500">phone:</span>
			<span class="phone-val">650-804-2651</span>
			<span class="separator h-2.5 inline-block border-s-2 border-gray-500 divide-solid mx-2"
			></span>
			<span class="linkedin"
				><a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/michael-horgan-8577a2a5">Linkedin</a
				></span
			>
		</div>
		<div class="about">
			<span class="font-bold inline-block me-2.5"
				>Software Development &#8212 Machine Learning Research and Development &#8212
				Real-time Signal Processing
			</span>
		</div>
	</div>
	<div class="details leading-5">
		<div class="section">
			<div class="section__title">Personal Projects</div>
			<div class="section__list">
				<div class="section__list-item">
					<div class="left">
						<a target="_blank" rel="noopener noreferrer" href="{base}/nhits-lorenz"
							>Modeling Chaotic Dynamics with Deep Learning: A Case Study on the
							Lorenz Attractor</a
						>
						<div class="desc">
							I investigated the ability of a common neural forecasting architecture (<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://nixtlaverse.nixtla.io/neuralforecast/models.nhits.html"
								>NHITS</a
							>) to model a chaotic dynamical system (the Lorenz Attractor). I trained
							the model on a PaperSpace VM using Pytorch and two RTX-5000 GPUs. (<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/nrxszvo/mochaNN">Github repo</a
							>)
						</div>
					</div>
					<div class="right"><div class="duration">Jan - Apr 2024</div></div>
				</div>
				<div class="section__list-item">
					<div class="left">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://app.freedivesuperhome.com"
							>A Scheduling Web App for Freedive SuperHome</a
						>
						<div class="desc">
							I taught myself web programming and created a scheduling application pro
							bono for my favorite freediving school in the Philippines (<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/nrxszvo/superhome-scheduler">Github repo</a
							>)
						</div>
					</div>
					<div class="right"><div class="duration">Jan - June 2023</div></div>
				</div>
				<div class="section__list-item">
					<div class="left">
						Competitive Freediving National Record
						<div class="desc">
							After dedicated daily training for approximately one year, I set a US
							national record in the "Dynamic No Fins" (DNF) freediving &#8211 pool
							discipline. (See my <a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.aidainternational.org/Athletes/Profile-dc4d56fa-a6ee-4b5f-a81b-5e739ddd5508"
								>AIDA profile</a
							>)
						</div>
					</div>
					<div class="right"><div class="duration">April 2023</div></div>
				</div>
			</div>

			<div class="section__title">Experience</div>
			<div class="section__list">
				<div class="section__list-item">
					<div class="left">
						<div class="company">Dolby Laboratories &#8212 San Francisco, CA</div>
					</div>
					<div class="position__list">
						<div class="left">
							<div class="position">Staff Software Engineer, Applied AI Group</div>
							<ul class="position__items">
								<li>
									research and develop deep neural networks for noise reduction,
									speech separation, and speech synthesis, written in Pytorch and
									trained on NVIDIA GPU clusters
								</li>
								<li>
									one of three research engineers who developed an original
									DNN-based speech separation network from the ground up; used by
									BlueJeans Video Conferencing for noise suppression
								</li>
							</ul>
						</div>
						<div class="right">
							<div class="duration">Jul 2018 - Jul 2021</div>
						</div>
						<div class="left">
							<div class="position">
								Staff Software Engineer, Consumer Entertainment Group
							</div>
							<ul class="position__items">
								<li>
									design, implement, and test real‑time spatial audio processing
									modules, written in C/C++, used for cinematic content creation
								</li>
								<li>
									research and develop data-driven quality assurance tools for
									evaluating spatial audio content generation algorithms, written
									in Python
								</li>
								<li>
									research and develop deep neural networks for speech synthesis,
									written in Pytorch and trained on NVIDIA GPU clusters
								</li>
							</ul>
						</div>
						<div class="right"><div class="duration">Aug 2015 - Jul 2018</div></div>
						<div class="left">
							<div class="position">
								Senior Software Engineer, Advanced Technology Group
							</div>
							<ul class="position__items">
								<li>
									design, implement, and test software libraries for real-time
									spatial audio processing, perceptual audio coding, and loudness
									management, written in C/C++ for Intel, ARM, and Texas
									Instruments platforms
								</li>
							</ul>
						</div>
						<div class="right">
							<div class="duration">Oct 2011 - Aug 2015</div>
						</div>
						<div class="left">
							<div class="position">
								Applications Engineer, DSP Implementation Group
							</div>
							<ul class="position__items">
								<li>
									provide technical guidance to dsp core designers and integrated
									circuit developers implementing Dolby’s IP on proprietary
									architectures
								</li>
								<li>
									validate and issue design approvals of licensees’ core designs,
									IC implementations, and professional audio/video processing
									products
								</li>
							</ul>
						</div>
						<div class="right">
							<div class="duration">Oct 2008 - Oct 2011</div>
						</div>
					</div>
				</div>
			</div>
			<div class="section__title">Publications</div>
			<div class="section__list">
				<div class="section__list-item">
					B. Kadioglu, M. Horgan, X. Liu, J. Pons, D. Darcy, V. Kumar, "An Empirical Study
					of Conv-TasNet" <i>ICASSP 2020</i>, arXiv:<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://arxiv.org/abs/2002.08688">2002.08688</a
					>
				</div>
				<div class="section__list-item">
					C. Zhou, M. Horgan, V. Kumar, C. Vasco, D. Darcy, “Voice Conversion with
					Conditional SampleRNN” <i>Interspeech 2018</i>, arXiv:<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://arxiv.org/abs/1808.08311">1808.08311</a
					>
				</div>
			</div>
			<div class="section__title">Patents</div>
			<div class="section__list">
				<div class="section__list-item">
					X. Liu, M. Horgan, R. Fejgin, P . Holmburg. Deep Learning Based Speech
					Enhancement. WO 2022/094293 A1
				</div>
				<div class="section__list-item">
					C. Zhou, M. Horgan, V. Kumar, C. Vasco, J. Morales. Speech Style Transfer. US
					11,538,455 B2
				</div>
				<div class="section__list-item">
					C. Zhou, X. Liu, M. Horgan, V. Kumar. Systems and Methods for Adapting Human
					Speaker Embeddings in Speech Synthesis. US 2022/0335925 A1
				</div>
				<div class="section__list-item">
					X. Li, G. Cengarle, Q. Bin, M. Horgan. Generating Channel and Object-based Audio
					from Channel-based Audio. WO 2023/076039 A1
				</div>
				<div class="section__list-item">
					B. Kadioglu, M. Horgan, J. Pons Puig, X. Liu. Deep Source Separation
					Architecture. WO 2021/081002 A1
				</div>
			</div>
			<div class="section__title">Education</div>
			<div class="section__list">
				<div class="section__list-item">
					<div class="left">
						<b>Stanford University</b>
						<div class="desc">
							<i>Master of Arts in Music, Science, and Technology</i>
						</div>
					</div>
					<div class="right">Jun 2008</div>
				</div>
				<div class="section__list-item">
					<div class="left">
						<b>Stanford University</b>
						<div class="desc">
							<i>Bachelor of Arts in Music, Science, and Technology</i>
						</div>
					</div>
					<div class="right">Jun 2008</div>
				</div>
			</div>
		</div>
	</div>
</div>
