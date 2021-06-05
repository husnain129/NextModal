import Image from 'next/image';
import s from './MCard.module.css';
function MCard() {
	return (
		<div className={s.container}>
			<Image src="/2.jpg" width={270} height={220} />
			<Image
				src="https://cdn.dribbble.com/users/1994279/screenshots/15769705/media/5d3f9857c7bd176478bff4fc72cc18b3.png"
				width={270}
				height={220}
			/>
			<Image
				src="https://cdn.dribbble.com/users/702789/screenshots/15784279/media/15db39f5566ec33b128fa96b71aee402.png"
				width={270}
				height={220}
			/>
			<Image
				src="https://cdn.dribbble.com/users/6234/screenshots/15785047/media/675b019e4c7ef5099ab60c027e130c3a.png"
				width={270}
				height={220}
			/>
			<Image
				src="https://cdn.dribbble.com/users/418188/screenshots/15786417/media/ed768e07f4cf588678d47cfb68c1b639.jpg"
				width={270}
				height={220}
			/>
			<Image
				src="https://cdn.dribbble.com/users/427857/screenshots/15784077/media/a192fb12a2d1cf0dcf05314c4d45f587.png"
				width={270}
				height={220}
			/>
		</div>
	);
}

export default MCard;
