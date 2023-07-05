import { bgEl2, studentIcon, videoIcon } from '../../assets';
import './info.css';

const Info = () => {
	return (
		<section id='info' className='dark-gray'>
			<div className='wrapper'>
				<div className='content-container'>
					<div className='info-content'>
						<img src={studentIcon} />
						<div className='amount'>23,000+</div>
						<div className='type'>Students</div>
					</div>

					<div className='info-content'>
						<img src={videoIcon} />
						<div className='amount'>25Hrs</div>
						<div className='type'>Video Content</div>
					</div>
				</div>

				<img src={bgEl2} className='bgEl-2' />
			</div>
		</section>
	);
};

export default Info;
