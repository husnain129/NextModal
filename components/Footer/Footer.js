import SkillCategories from '../../data';
import S from './Footer.module.css';
export default function Footer({ page, white }) {
	let d = new Date(Date.now());

	return (
		<footer className={`${S.footer} ${white ? S.white : ''}`}>
			<div className={S.topLayer}>
				<div className={S.col}>
					<p className={S.colHeading}>Categories</p>
					<ul className={S.colList}>
						{SkillCategories &&
							SkillCategories.map((v, i) => (
								<li>
									<a href={'/?c=' + i}>{v}</a>
								</li>
							))}
					</ul>
				</div>
				<div className={S.col}>
					<p className={S.colHeading}>About</p>
					<ul className={S.colList}>
						<li>
							<a href="#">Press & News</a>
						</li>
						<li>
							<a href="#">Partnerships</a>
						</li>
						<li>
							<a target="_blank" href="https://recrutability.com/privacy">
								Privacy Policy
							</a>
						</li>
						<li>
							<a target="_blank" href="https://recrutability.com/terms">
								Terms of Service
							</a>
						</li>
						<li>
							<a target="_blank" href="https://recrutability.com/claims">
								Intellectual Property Claims
							</a>
						</li>
						{/* <li>
              <a href="#">Investor Relations</a>
            </li> */}
						<li>
							<a href="#">Startupmate by Recrutability </a>
						</li>
					</ul>
				</div>
				<div className={S.col}>
					<p className={S.colHeading}>Support</p>
					<ul className={S.colList}>
						<li>
							<a href="https://help.recrutability.com" target="_blank">
								Help & Support{' '}
							</a>
						</li>
						<li>
							<a href="#">Trust & Safety </a>
						</li>
						<li>
							<a href="#">Talent Filtration </a>
						</li>
						<li>
							<a href="#">Hiring on Recrutability </a>
						</li>
					</ul>
				</div>

				<div className={S.col}>
					<p className={S.colHeading}>Community</p>
					<ul className={S.colList}>
						<li>
							<a href="#">Events</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Forum</a>
						</li>
						<li>
							<a target="_blank" href="https://recrutability.com/standards">
								Community Standards
							</a>
						</li>
						<li>
							<a href="#">Invite a Friend</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={S.bottomLayer}>
				<div className={S.row}>
					<img className={S.footerImg} src="/footer.png" />
				</div>
				<div className={S.row}>
					<p className={S.madeWith}>Made In Pakistan</p>
				</div>
				<div className={S.row}>
					<p className={S.trademark}>© {d.getFullYear()} Recrutability</p>
				</div>
			</div>
		</footer>
	);
}
