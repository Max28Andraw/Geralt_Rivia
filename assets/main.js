const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCzybXLxv08IApdjdN0mJhEg&part=snippet%2Cid&order=date&maxResults=5';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		'X-RapidAPI-Key': 'a962d7a0f6msh936209cfef8c2d7p11ee53jsn75764daa1d69'		
	}
};

async function fetchData(urlApi){
	const response = await fetch(urlApi, options);
	const data = await response.json();
	return data;
}

(async () => {
	try{
		const videos = await fetchData(API);
		let view = `
		${videos.items.map(videos => `
		<a class="vidios" rel="null" href="https://www.youtube.com/watch?v=${videos.id.videoId}">
			<div class="group relative" styler="cursor: pointer;">
			
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					
						<img src="${videos.snippet.thumbnails.high.url}" alt="${videos.snippet.description}" class="w-full">
					
				</div>

				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						${videos.snippet.title}
					</h3>
				</div>
			</div>
		</a>
		`).slice(0, 4).join('')}
		`;
		content.innerHTML = view;
	} catch (error) {
		console.log(error);
		alert(error);
	}
}) ();