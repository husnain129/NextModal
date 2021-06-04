import s from './Card.module.css';
function Card({ onClick, img_src }) {
	return (
		<div className={s.container} onClick={onClick}>
			<div className={s.card}>
				<div className={s.card_img}>
					<img src={img_src} alt="dribble" className={s.img} />
					<div className={s.img_list}>
						<p>Garphic designing</p>
						<span className={s.icons}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="15"
								height="15"
								fill="currentColor"
								className="bi bi-suit-heart-fill"
								viewBox="0 0 16 16"
							>
								<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
							</svg>
						</span>
					</div>
				</div>

				<div className={s.card_detail}>
					<div className={s.list}>
						<div className={s.profile}>
							<img
								src="https://samiabatool.recrutability.com/uploads/images/60857e9ded28f84fcac06192.jpg"
								alt="men"
								className={s.avatar}
							/>
							<p>@_samia</p>
						</div>
						<div className={s.like}>
							<span style={{ cursor: ' pointer', color: 'red' }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="15"
									height="15"
									fill="currentColor"
									className="bi bi-suit-heart-fill"
									viewBox="0 0 16 16"
								>
									<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
								</svg>
							</span>
							<p>3</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
