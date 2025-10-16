document.addEventListener('DOMContentLoaded', ()=>{
	const greeting = document.getElementById('greeting');
	const changeBtn = document.getElementById('changeBtn');
	const timeBtn = document.getElementById('timeBtn');

	const alternatives = [
		'Hello, World!',
		'嗨，世界！',
		'こんにちは、世界！',
		'Bonjour le monde!',
		'¡Hola Mundo!'
	];
	let idx = 0;

	changeBtn.addEventListener('click', ()=>{
		idx = (idx + 1) % alternatives.length;
		greeting.textContent = alternatives[idx];
	});

	timeBtn.addEventListener('click', ()=>{
		const now = new Date();
		const t = now.toLocaleString();
		greeting.textContent = `現在時間：${t}`;
	});
});
