function getQueryParams() {
	const queryParams = {}
	const queryString = window.location.search

	const urlParams = new URLSearchParams(queryString.substring(1))

	for (const [key, value] of urlParams.entries()) {
		queryParams[key] = value
	}

	return queryParams
}

const nameElem = document.querySelector('.subdomain')
nameElem.textContent = getQueryParams().username

document.querySelectorAll('*').forEach((elem) => {
	if (elem.textContent.includes('...') && elem.childNodes.length === 1) {
		elem.textContent = elem.textContent.replaceAll('...', getQueryParams().username)
	}

	if (elem.textContent.includes('5,050') && elem.childNodes.length === 1) {
		elem.textContent = elem.textContent.replaceAll('5,050', getQueryParams().bet)
	}

	document.querySelector(
		'#aj_content > main > section.tm-section.tm-auction-section > div.tm-section-box.tm-section-bid-info > table > tbody > tr > td:nth-child(3) > div > div.table-cell-value.tm-value.icon-before.icon-ton',
	).textContent = Math.floor(getQueryParams().bet * 1.05)

	document.querySelector(
		'#aj_content > main > section.tm-section.tm-auction-section > div.tm-section-box.tm-section-bid-info > table > tbody > tr > td:nth-child(1) > div > div.table-cell-desc',
	).textContent = ` ~ $${getQueryParams().bet * 5.4}`

	document.querySelector(
		'#aj_content > main > section.tm-section.tm-auction-section > div.tm-section-box.tm-section-bid-info > table > tbody > tr > td:nth-child(3) > div > div.table-cell-desc',
	).textContent = ` ~ $${Math.floor(getQueryParams().bet * (5.4 * 1.05))}`

	if (elem.textContent.includes('253') && elem.childNodes.length === 1) {
		elem.textContent = Math.floor((getQueryParams().bet / 100) * 5)
	}
})

document.addEventListener('click', (e) => {
	if (!e.target.classList.contains('popup') && e.target.classList.contains('popup-container')) {
		e.target.classList.add('hide')
	}
})

document.querySelector('.js-popup-closer').addEventListener('click', () => {
	document.querySelector('.js-bet-popup').classList.add('hide')
})

document.querySelector('.js-bet-popup .popup-body h4 span').textContent = getQueryParams().bet
