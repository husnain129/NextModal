import React, { useState } from 'react';
import s from './ImageSlider.module.css';

function ImageSlider() {
	const [lmargin, setLmargin] = useState('0px');

	return (
		// <div>
		// 	<img src="/2.jpg" alt="project" className={s.bottom_img__i} />
		// </div>
		<div className={s.container}>
			<div className={s.slider}>
				<div className={s.slides}>
					{/* radio button start */}
					<input type="radio" name="radio-btn" id="radio1" onClick={() => setLmargin('0')} />
					<input type="radio" name="radio-btn" id="radio2" onClick={() => setLmargin('-20%')} />
					<input type="radio" name="radio-btn" id="radio3" onClick={() => setLmargin('-40%')} />
					{/* radio button end */}

					<div className={s.slide} style={{ marginLeft: lmargin }}>
						<img
							src="https://cdn.dribbble.com/users/1994279/screenshots/15769705/media/5d3f9857c7bd176478bff4fc72cc18b3.png"
							style={{ width: '100%' }}
						/>
					</div>

					{/* ////////////////////// */}

					<div className={s.slide}>
						<img
							src="https://cdn.dribbble.com/users/702789/screenshots/15784279/media/15db39f5566ec33b128fa96b71aee402.png"
							style={{ width: '100%' }}
						/>
					</div>
					{/* ........../////////........ */}
					<div className={s.slide}>
						<img
							src="https://cdn.dribbble.com/users/6234/screenshots/15785047/media/675b019e4c7ef5099ab60c027e130c3a.png"
							style={{ width: '100%' }}
						/>
					</div>
				</div>
				<div className={s.navigation_manual}>
					<label for="radio1" className={s.manual_btn}></label>
					<label for="radio2" className={s.manual_btn}></label>
					<label for="radio3" className={s.manual_btn}></label>
				</div>
			</div>
		</div>
	);
}

export default ImageSlider;
