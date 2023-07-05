import { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import './testimonial.css';

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		const query = '*[_type == "testimonials"][0..2]';

		client.fetch(query).then((data) => {
			setTestimonials(data);
		});
	}, []);

	return (
		<section id='testimonials' className='dark-gray'>
			<div className='wrapper'>
				<h2>What our students say?</h2>

				<div className='content-container'>
					{testimonials.map((item) => (
						<div className='testimonial'>
							<img src={urlFor(item.image)} />
							<div className='review-details'>
								<div className='name'>{item.name}</div>
								<div className='company-name'>
									{item.company}
								</div>
								<div className='review'>{item.message}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
