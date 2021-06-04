import Image from 'next/image';
import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillInfoCircle } from 'react-icons/ai';
import { IoMdShareAlt } from 'react-icons/io';
import { RiHeartFill, RiMessage3Fill } from 'react-icons/ri';
import s from './CModal.module.css';

function CModal({ url }) {
	return (
		<div className={s.container}>
			<div className={s.position}>
				<div className={s.v_list}>
					<Image src="/1.jpg" width={40} height={40} className={s.avatar} />
					<div className={s.icon_container}>
						<IconContext.Provider value={{ color: 'black' }}>
							<RiMessage3Fill size={22} />
						</IconContext.Provider>
					</div>
					<div className={s.icon_container}>
						<IconContext.Provider value={{ color: 'black' }}>
							<IoMdShareAlt size={22} />
						</IconContext.Provider>
					</div>
					<div className={s.icon_container}>
						<IconContext.Provider value={{ color: 'black' }}>
							<AiFillInfoCircle size={22} />
						</IconContext.Provider>
					</div>
					<div className={s.icon_container}>
						<IconContext.Provider value={{ color: 'black' }}>
							<RiHeartFill size={22} />
						</IconContext.Provider>
					</div>
				</div>
			</div>
			<div className={s.body_container}>
				<Image src={url} width={668} height={476} />
				<div className={s.p_detail}>
					<p>
						Are you into the food industry and planning to take your venture to the next level with an
						on-demand food delivery app? If yes, congrats, this is the right move! It will take your
						business to a whole new level.
					</p>
					<p>
						Prepare yourself{' '}
						<span style={{ color: '#F082AC', fontWeight: '400', cursor: 'pointer' }}>
							hello@outcrowd.io
						</span>
					</p>
				</div>
				<div className={s.user_detail}>
					<div className={s.user}>
						<div className={s.line} />
						<Image src="/1.jpg" width={80} height={80} className={s.avatar} />
						<div className={s.line} />
					</div>
					<div className={s.info}>
						<p style={{ fontWeight: 'bold', fontSize: '14pt' }}>Outcrowd</p>
						<p>A full-service innovative agency.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CModal;
