export function buildFio(hr) {
	let nameParts = [hr.lastName, hr.firstName, hr.middleName];

	return nameParts.filter(part => !!part ? (part.length > 0) : false).join(' ');
}

export function buildVacancyInfoText(hr) {
	const count = hr.vacanciesCount;
	if (count < 20 && count > 10) {
		return `${count} вакансий`;
	}
	switch (count % 10) {
		case 0: return 'Нет вакансий';
		case 5:
		case 6:
		case 7:
		case 8:
		case 9: return `${count} вакансий`;
		case 1: return `${count} вакансия`;
		case 2:
		case 3:
		case 4: return `${count} вакансии`;
	}
}