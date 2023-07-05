import { useState } from 'react';
import {
	bgEl1,
	draw,
	frequencies,
	mastering,
	mixing,
	mixingControl,
	vocalProcessing,
} from '../../assets';
import './topic.css';

const Topics = () => {
	const [currentImg, setCurrentImg] = useState(frequencies);

	return (
		<section id='topics' className='black'>
			<div className='wrapper'>
				<h2>What will you learn?</h2>

				<div className='content-container'>
					<ul className='topic-list'>
						<li onMouseEnter={() => setCurrentImg(frequencies)}>
							What are frequencies?
						</li>
						<li onMouseEnter={() => setCurrentImg(draw)}>
							Using DAW
						</li>
						<li onMouseEnter={() => setCurrentImg(vocalProcessing)}>
							Vocals Processing
						</li>
						<li onMouseEnter={() => setCurrentImg(mixing)}>
							Mixing
						</li>
						<li onMouseEnter={() => setCurrentImg(mixingControl)}>
							Mixing Console
						</li>
						<li onMouseEnter={() => setCurrentImg(mastering)}>
							Mastering
						</li>
					</ul>

					<div className='topic-image'>
						<img src={currentImg} alt='' />
					</div>
				</div>
				<img src={bgEl1} alt='' className='bgEl-1' />
			</div>
		</section>
	);
};

export default Topics;
