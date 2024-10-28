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
})

const popupTrigger = document.querySelector('.btn.btn-primary.js-place-bid-btn')
const popupContainer = document.querySelector('.place-bid-popup-container')

popupTrigger.addEventListener('click', () => {
	popupContainer.classList.remove('hide')
})

document.addEventListener('click', (e) => {
	if (!e.target.classList.contains('popup') && e.target.classList.contains('popup-container')) {
		e.target.classList.add('hide')
	}
})

document.querySelector('.js-bet-popup .popup-text').textContent =
	document.querySelector('.js-bet-popup .popup-text').textContent + getQueryParams().bet
