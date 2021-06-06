import Image from 'next/image';
import { IconContext } from 'react-icons';
import { IoLogoGithub, IoLogoTwitter, IoMdShareAlt } from 'react-icons/io';
import { RiFacebookLine, RiHeartFill } from 'react-icons/ri';
import MCard from '../modalCard/MCard';
import s from './NModal.module.css';
function NModal() {
	return (
		<div className={s.container}>
			<div className={s.profile}>
				<div className={s.l_profile}>
					<Image src="/profile.png" width={90} height={90} className={s.avatar} />
					<p className={s.l_profile__title}>Muhammad Hunsain</p>
				</div>
				<div className={s.r_profile}>
					<div className={`${s.r_profile_btn} ${s.r_profile_btn__x}`}>
						<p className={s.r_profile_btn__value}>View Detail</p>
					</div>
					<div className={`${s.r_profile_btn} ${s.r_profile_btn__y}`}>
						<p className={s.r_profile_btn__value}>View Profile</p>
					</div>
				</div>
			</div>

			{/* ------------------------------------------------------- */}

			<div className={s.body_container}>
				<div className={s.bottom_img}>
					<img src="/2.jpg" alt="project" className={s.bottom_img__i} />
					<div className={s.bottom_img__list}>
						<p style={{ color: '#fff', fontWeight: '400', fontSize: '15pt' }}>Graphics vector with AI</p>
						<div className={s.icon_container}>
							<div className={s.icon_box}>
								<IconContext.Provider value={{ color: 'white' }}>
									<IoMdShareAlt size={22} />
								</IconContext.Provider>
							</div>
							<div className={s.icon_box}>
								<IconContext.Provider value={{ color: 'white' }}>
									<RiHeartFill size={22} />
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</div>

				{/* <div className={s.p_detail}> */}
				<div className={s.p_detail__text}>
					<p>
						Are you into the food industry and planning to take your venture to the next level with an
						on-demand food delivery app? If yes, congrats, this is the right move! It will take your
						business to a whole new level.
					</p>

					<div className={s.p_detail__icon}>
						<p>
							Prepare yourself{' '}
							<span style={{ color: '#F082AC', fontWeight: '400', cursor: 'pointer' }}>
								hello@outcrowd.io
							</span>
						</p>
						<div className={s.icon_container}>
							<div className={s.icon_box}>
								<IconContext.Provider value={{ color: 'black' }}>
									<IoLogoGithub size={22} />
								</IconContext.Provider>
							</div>
							<div className={s.icon_box}>
								<IconContext.Provider value={{ color: 'black' }}>
									<RiFacebookLine size={22} />
								</IconContext.Provider>
							</div>
							<div className={s.icon_box}>
								<IconContext.Provider value={{ color: 'black' }}>
									<IoLogoTwitter size={22} />
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</div>
				{/* </div> */}
			</div>
			<div className={s.projects}>
				<div className={s.line} />
				<p>More Projects</p>
				<div className={s.line} />
			</div>
			<MCard />
		</div>
	);
}

export default NModal;
