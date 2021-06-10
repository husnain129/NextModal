import { useRouter } from 'next/router';
import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#__next');

function Modall({ children, modal, setModal }) {
	const router = useRouter();
	const customStyles = {
		content: {
			top: '50%',
			zIndex: '10',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '90vw',
			height: '90vh',
			outline: 'none',
			border: 'none',
			borderRadius: '5px',
			position: 'absolute',
			scrollBar: 'none',
			boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 20px rgba(0,0,0,0.23)'
		}
	};
	return (
		<div>
			<Modal
				isOpen={modal}
				style={customStyles}
				onRequestClose={() => {
					router.push('/');
					setModal(false);
				}}
			>
				{children}
			</Modal>
		</div>
	);
}

export default Modall;
