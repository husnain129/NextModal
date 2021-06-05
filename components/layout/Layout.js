import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Card from '../card/Card';
import NModal from '../nmodal/NModal';
import s from './Layout.module.css';
Modal.setAppElement('#__next');

function Layout() {
	const router = useRouter();
	const [modal, setModal] = useState(false);
	const [url, setUrl] = useState('');
	const modalOpener = (e) => {
		setUrl(e.target.src);
		setModal(true);
	};
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '80vw',
			height: '80vh',
			outline: 'none',
			border: 'none',
			borderRadius: '5px',
			scrollBar: 'none',
			boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
		}
	};
	return (
		<div className={s.container}>
			<Link href={`/?id=1`} as={`/id=1`}>
				<Card
					onClick={(e) => modalOpener(e)}
					img_src="https://cdn.dribbble.com/users/1994279/screenshots/15769705/media/5d3f9857c7bd176478bff4fc72cc18b3.png"
				/>
			</Link>
			<Link href={`/?id=1`} as={`/id=1`}>
				<Card
					onClick={(e) => modalOpener(e)}
					img_src="https://cdn.dribbble.com/users/702789/screenshots/15784279/media/15db39f5566ec33b128fa96b71aee402.png"
				/>
			</Link>

			<Link href={`/?id=1`} as={`/id=1`}>
				<Card
					onClick={(e) => modalOpener(e)}
					img_src="https://cdn.dribbble.com/users/6234/screenshots/15785047/media/675b019e4c7ef5099ab60c027e130c3a.png"
				/>
			</Link>

			<Link href={`/?id=1`} as={`/id=1`}>
				<Card
					onClick={(e) => modalOpener(e)}
					img_src="https://cdn.dribbble.com/users/418188/screenshots/15786417/media/ed768e07f4cf588678d47cfb68c1b639.jpg"
				/>
			</Link>

			<Link href={`/?id=1`} as={`/id=1`}>
				<Card
					onClick={(e) => modalOpener(e)}
					img_src="https://cdn.dribbble.com/users/427857/screenshots/15784077/media/a192fb12a2d1cf0dcf05314c4d45f587.png"
				/>
			</Link>

			<Link href={`/?id=1`} as={`/id=1`}>
				<Card
					onClick={(e) => modalOpener(e)}
					img_src="https://cdn.dribbble.com/users/1615584/screenshots/14947408/media/b9701a4bb0c77c22a8a3150bd91ac80e.jpg"
				/>
			</Link>

			<Modal
				isOpen={modal}
				style={customStyles}
				onRequestClose={() => {
					router.push('/');
					setModal(false);
				}}
			>
				<NModal url={url} />
			</Modal>
		</div>
	);
}

export default Layout;
