import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import Card from '../card/Card';
import Modall from '../modal/Modall';
import NModal from '../nmodal/NModal';
import s from './Layout.module.css';

function Layout() {
	const [modal, setModal] = useState(false);
	const modalOpener = () => {
		setModal(true);
	};
	return (
		<div className={s.container}>
			<div className={s.container_list}>
				<Link href={`/?id=1`} as={`/id=1`}>
					<Card
						onClick={() => modalOpener()}
						img_src="https://cdn.dribbble.com/users/1994279/screenshots/15769705/media/5d3f9857c7bd176478bff4fc72cc18b3.png"
					/>
				</Link>
				<div className={s.detail}>
					<div className={s.detail_content}>
						<p className={s.detail__title}>Hunny Khan</p>
						<p>Blog - Food -Travel</p>
					</div>
					<div className={s.detail_btn}>
						<IoIosHeartEmpty size={23} className={s.icons} />
					</div>
				</div>
			</div>
			<div className={s.container_list}>
				<Link href={`/?id=1`} as={`/id=1`}>
					<Card
						onClick={() => modalOpener()}
						img_src="https://cdn.dribbble.com/users/702789/screenshots/15784279/media/15db39f5566ec33b128fa96b71aee402.png"
					/>
				</Link>
				<div className={s.detail}>
					<div className={s.detail_content}>
						<p className={s.detail__title}>Hunny Khan</p>
						<p>Blog - Food -Travel</p>
					</div>
					<div className={s.detail_btn}>
						<IoIosHeartEmpty size={23} className={s.icons} />
					</div>
				</div>
			</div>
			<div className={s.container_list}>
				<Link href={`/?id=1`} as={`/id=1`}>
					<Card
						onClick={() => modalOpener()}
						img_src="https://cdn.dribbble.com/users/6234/screenshots/15785047/media/675b019e4c7ef5099ab60c027e130c3a.png"
					/>
				</Link>
				<div className={s.detail}>
					<div className={s.detail_content}>
						<p className={s.detail__title}>Hunny Khan</p>
						<p>Blog - Food -Travel</p>
					</div>
					<div className={s.detail_btn}>
						<IoIosHeartEmpty size={23} className={s.icons} />
					</div>
				</div>
			</div>
			<div className={s.container_list}>
				<Link href={`/?id=1`} as={`/id=1`}>
					<Card
						onClick={() => modalOpener()}
						img_src="https://cdn.dribbble.com/users/418188/screenshots/15786417/media/ed768e07f4cf588678d47cfb68c1b639.jpg"
					/>
				</Link>
				<div className={s.detail}>
					<div className={s.detail_content}>
						<p className={s.detail__title}>Hunny Khan</p>
						<p>Blog - Food -Travel</p>
					</div>
					<div className={s.detail_btn}>
						<IoIosHeartEmpty size={23} className={s.icons} />
					</div>
				</div>
			</div>
			<div className={s.container_list}>
				<Link href={`/?id=1`} as={`/id=1`}>
					<Card
						onClick={() => modalOpener()}
						img_src="https://cdn.dribbble.com/users/427857/screenshots/15784077/media/a192fb12a2d1cf0dcf05314c4d45f587.png"
					/>
				</Link>
				<div className={s.detail}>
					<div className={s.detail_content}>
						<p className={s.detail__title}>Hunny Khan</p>
						<p>Blog - Food -Travel</p>
					</div>
					<div className={s.detail_btn}>
						<IoIosHeartEmpty size={23} className={s.icons} />
					</div>
				</div>
			</div>
			<div className={s.container_list}>
				<Link href={`/?id=1`} as={`/id=1`}>
					<Card
						onClick={() => modalOpener()}
						img_src="https://cdn.dribbble.com/users/1615584/screenshots/14947408/media/b9701a4bb0c77c22a8a3150bd91ac80e.jpg"
					/>
				</Link>
				<div className={s.detail}>
					<div className={s.detail_content}>
						<p className={s.detail__title}>Hunny Khan</p>
						<p>Blog - Food -Travel</p>
					</div>
					<div className={s.detail_btn}>
						<IoIosHeartEmpty size={23} className={s.icons} />
					</div>
				</div>
			</div>
			<Modall modal={modal} setModal={setModal}>
				<NModal />
			</Modall>
		</div>
	);
}

export default Layout;
