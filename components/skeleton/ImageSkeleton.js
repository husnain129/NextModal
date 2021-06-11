import Skeleton from 'react-loading-skeleton';
const SkelAvatar = (props) => {
	return <Skeleton circle={true} height={70} width={70} {...props} />;
};
const SkelCard = (props) => {
	return <Skeleton circle={true} height={266} width={350} {...props} />;
};

const SkelModal = (props) => {
	return <Skeleton circle={true} height={500} width={400} {...props} />;
};
export { SkelAvatar, SkelCard, SkelModal };
