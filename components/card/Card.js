import Link from 'next/link';
import { SkelCard } from '../skeleton/ImageSkeleton';
import s from './Card.module.css';
function Card({ onClick, img_src }) {
	return (
		<div className={s.container}>
			<div className={s.card}>
				<div className={s.card_position}>
					<div className={s.card_img}>
						{<img src={img_src} alt="dribble" className={s.img} /> || <SkelCard count={10} />}
					</div>
					<div className={s.card_checkout}>
						<Link href={`/profile`} as={`/profile=1`}>
							<p className={s.card_checkout__p1}>Start with hunny</p>
						</Link>
						<p className={s.card_checkout__p2} onClick={onClick}>
							preview this
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
