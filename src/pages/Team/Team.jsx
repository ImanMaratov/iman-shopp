import './Team.css'

const Team = () => {
	const teamMembers = [
		{
			id: 1,
			name: 'Иман Маratov',
			role: 'Основатель и директор',
			description:
				'Страстный предприниматель с любовью к качественным продуктам',
			image:
				'https://static.wikia.nocookie.net/vinlandsaga/images/7/7c/ThorfinnVinlandArc2.jpeg/revision/latest?cb=20240613153044',
		},
		{
			id: 2,
			name: 'Команда кондитеров',
			role: 'Мастера своего дела',
			description: 'Опытные кондитеры, создающие уникальные сладости',
			image: 'https://images.unsplash.com/photo-1556911220-bff31c812d9b?w=400',
		},
		{
			id: 3,
			name: 'Команда бариста',
			role: 'Кофейные эксперты',
			description: 'Профессионалы, готовящие идеальный кофе',
			image:
				'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
		},
		{
			id: 4,
			name: 'Служба доставки',
			role: 'Быстрая доставка',
			description: 'Надежная команда, доставляющая ваши заказы вовремя',
			image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
		},
	]

	return (
		<div className='team'>
			<div className='container'>
				<h1 className='page-title'>Наша команда</h1>

				<section className='team-intro'>
					<p className='team-intro-text'>
						Мы - дружная команда профессионалов, которые работают вместе, чтобы
						сделать ваш опыт покупок незабываемым. Каждый член нашей команды
						вносит свой вклад в создание качественных продуктов и отличного
						сервиса.
					</p>
				</section>

				<div className='team-grid'>
					{teamMembers.map(member => (
						<div key={member.id} className='team-member'>
							<div className='team-member-image'>
								<img
									src={member.image}
									alt={member.name}
									onError={e => {
										e.target.src =
											'https://via.placeholder.com/300x300?text=Team+Member'
									}}
								/>
							</div>
							<div className='team-member-info'>
								<h3 className='team-member-name'>{member.name}</h3>
								<p className='team-member-role'>{member.role}</p>
								<p className='team-member-description'>{member.description}</p>
							</div>
						</div>
					))}
				</div>

				<section className='team-values'>
					<h2 className='section-title'>Наши принципы</h2>
					<div className='values-grid'>
						<div className='value-item'>
							<div className='value-icon'>🤝</div>
							<h3>Работа в команде</h3>
							<p>Мы верим в силу совместной работы и взаимной поддержки</p>
						</div>
						<div className='value-item'>
							<div className='value-icon'>🎯</div>
							<h3>Фокус на качестве</h3>
							<p>
								Качество - это наш приоритет номер один во всем, что мы делаем
							</p>
						</div>
						<div className='value-item'>
							<div className='value-icon'>💡</div>
							<h3>Инновации</h3>
							<p>Мы постоянно ищем новые способы улучшить наш сервис</p>
						</div>
						<div className='value-item'>
							<div className='value-icon'>❤️</div>
							<h3>Забота о клиентах</h3>
							<p>Ваше удовлетворение - наша главная цель</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Team
