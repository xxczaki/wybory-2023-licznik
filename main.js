import './style.css';
import { registerSW } from 'virtual:pwa-register'

function updateCounter(id, operation) {
	const countElement = document.getElementById(id);
	const rawCount = localStorage.getItem(id) ?? '0';
	let convertedCount = Number.parseInt(rawCount, 10);

	switch (operation) {
		case 'add':
			convertedCount++;
			break;
		case 'sub':
			if (convertedCount === 0) break;
			convertedCount--;
			break;
	}

	localStorage.setItem(id, convertedCount.toString());
	countElement.textContent = convertedCount.toString();
}

registerSW({ 
	immediate: true,
	onOfflineReady() {
		localStorage.setItem('offline-ready', 'true');
		document.getElementById('offline-info').textContent = '✅ Gotowość do działania off-line';
	},
});

if (localStorage.getItem('offline-ready') === 'true') {
	document.getElementById('offline-info').textContent = '✅ Gotowość do działania off-line';
}

const categories = [
	'glosujacy',
	'sejm',
	'senat',
	'referendum',
];

categories.forEach(category => {
	const countId = `${category}-count`;

	updateCounter(countId);

	document.getElementById(`${category}-add`).onclick = () => {
		updateCounter(countId, 'add');
	};

	document.getElementById(`${category}-sub`).onclick = () => {
		updateCounter(countId, 'sub');
	};
});

document.getElementById('referendum-add').onclick = () => {
	updateVisibleReferendumCount('add');
};

document.getElementById('referendum-sub').onclick = () => {
	updateVisibleReferendumCount('sub');
};
