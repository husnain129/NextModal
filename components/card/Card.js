// import { IconContext } from 'react-icons';
import { IoIosHeartEmpty } from 'react-icons/io';
import s from './Card.module.css';

function Card({ onClick, img_src }) {
	return (
		<div className={s.container} onClick={onClick}>
			<div className={s.card}>
				<div className={s.card_position}>
					<div className={s.card_img}>
						<img src={img_src} alt="dribble" className={s.img} />
					</div>
					<div className={s.card_checkout}>
						<p className={s.card_checkout__p}>Check out</p>
					</div>
				</div>

				<div className={s.detail}>
					<div className={s.detail_content}>
						<p className={s.detail__title}>Hunny Khan</p>
						<p>Blog - Food -Travel</p>
					</div>
					<div className={s.detail_btn}>
						{/* <IconContext.Provider value={{ color: 'black' }}> */}
						<IoIosHeartEmpty size={23} className={s.icons} />
						{/* </IconContext.Provider> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
