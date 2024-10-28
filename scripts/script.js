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

	if (elem.textContent.includes('5303') && elem.childNodes.length === 1) {
		elem.textContent = elem.textContent.replaceAll('5303', getQueryParams().bet)
	}

	if (elem.value && elem.value.includes('5,303') && elem.childNodes.length === 1) {
		elem.value = getQueryParams().bet
	}

	if (elem.textContent.includes('5,303') && elem.childNodes.length === 1) {
		elem.textContent = elem.textContent.replaceAll(
			'5,303',
			(getQueryParams().bet / 1000 + '').replace('.', ','),
		)
	}
})

document.addEventListener('click', (e) => {
	if (!e.target.classList.contains('popup') && e.target.classList.contains('popup-container')) {
		e.target.classList.add('hide')
	}
})

document.querySelector('.js-bet-popup .popup-body h4 span').textContent = getQueryParams().bet
