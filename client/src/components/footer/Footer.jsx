import { facebookIcon, instagramIcon, twitterIcon } from '../../assets';
import './footer.css';

const Footer = () => {
	return (
		<footer className='black'>
			<div className='wrapper'>
				<div className='content-container'>
					<div className='links'>
						<a href='#' className='logo'>
							Sound<span className='red'>DXZi</span>
						</a>

						<div className='social'>
							<a href='#'>
								<img src={facebookIcon} alt='' />
							</a>
							<a href='#'>
								<img src={twitterIcon} alt='' />
							</a>
							<a href='#'>
								<img src={instagramIcon} alt='' />
							</a>
						</div>

						<div className='copyright'>
							This is website designer by QCodi &copy; 2023;
						</div>
					</div>

					<div className='links'>
						<h3>Quick Links</h3>
						<ul>
							<li>
								<a href='#'>Blog</a>
							</li>
							<li>
								<a href='#'>Privacy Policy</a>
							</li>
						</ul>
					</div>

					<div className='links'>
						<h3>Contact Us</h3>
						<ul>
							<li>
								<a href='#'>contact@email.com</a>
							</li>
							<li>
								<a href='#'>+1 999 9999 999</a>
							</li>
						</ul>
					</div>

					<div className='copyright mobile'>
						This is website designer by QCodi &copy; 2023;
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
