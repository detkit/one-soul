import { useState } from 'react';
import { closeIcon, menuIcon } from '../../assets';
import './navbar.css';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const [colors, setColors] = useState(false);

	const clickColor = (color) => {
		setColors(color);
	};

	return (
		<>
			<nav>
				<a href='#' className='logo'>
					Sound<span className='red'>DXZi</span>
				</a>

				<ul>
					<li>
						<a
							href='#topics'
							className={
								colors === 'Course Details' ? 'active' : ''
							}
							onClick={() => clickColor('Course Details')}
						>
							Course Details
						</a>
					</li>
					<li>
						<a
							href='#info'
							className={colors === 'About' ? 'active' : ''}
							onClick={() => clickColor('About')}
						>
							About
						</a>
					</li>
					<li>
						<a
							href='#blog'
							className={colors === 'Blog' ? 'active' : ''}
							onClick={() => clickColor('Blog')}
						>
							Blog
						</a>
					</li>
					<li>
						<a
							href='#testimonials'
							className={
								colors === 'Testimonials' ? 'active' : ''
							}
							onClick={() => clickColor('Testimonials')}
						>
							Testimonials
						</a>
					</li>
				</ul>

				<div className='menu-icon' onClick={() => setIsActive(true)}>
					<img src={menuIcon} alt='' />
				</div>
			</nav>

			<div className={`mobil-menu-container ${isActive ? 'active' : ''}`}>
				<div onClick={() => setIsActive(false)} className='close-icon'>
					<img src={closeIcon} alt='' />
				</div>

				<ul className='menu-items'>
					<li>
						<a
							href='#topics'
							onClick={() => setIsActive(!isActive)}
						>
							Course Details
						</a>
					</li>
					<li>
						<a href='#info' onClick={() => setIsActive(!isActive)}>
							About
						</a>
					</li>
					<li>
						<a href='#blog' onClick={() => setIsActive(!isActive)}>
							Blog
						</a>
					</li>
					<li>
						<a
							href='#testimonials'
							onClick={() => setIsActive(!isActive)}
						>
							Testimonials
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
