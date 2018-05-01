import superagent from 'superagent';
import pick from 'lodash/pick';

export const API_ROOT = 'https://itunes.apple.com';

export const ITEM_FIELDS = {
	song: ['artistId','collectionId','trackId', 'trackViewUrl', 'artistName','collectionName','trackName','previewUrl','artworkUrl30','artworkUrl60','artworkUrl100','trackPrice','releaseDate','trackTimeMillis','currency','primaryGenreName']
};

superagent.parse['text/javascript'] = JSON.parse; // tell superagent to parse body json on text/javascript responses

const musicQuery = req => {
	req.query({media: 'music', entity: 'song', country: 'ES', lang: 'en_us', limit: '20'});
};
const parseSearch = res => {
	return res.body.results.map(item => {
		if (!ITEM_FIELDS[item.kind]) throw Error('Unknown item kind:' + item.kind);
		return pick(item, ITEM_FIELDS[item.kind]);
	});
};
const responseError = err => {
	throw Error(err.response.body.errorMessage);
};

const getScopeAttribute = scope => {
	if (scope === 'song') return 'songTerm';
	if (scope === 'album') return 'albumTerm';
	if (scope === 'artist') return 'artistTerm';
	// if (scope === 'genre') return 'genreIndex';
	return 'songTerm';
}

const search = (term, scope) => {
	return superagent.get(`${API_ROOT}/search`)
		.use(musicQuery)
		.query({term, attribute: getScopeAttribute(scope)})
		.then(parseSearch)
		.catch(responseError);
};

export default { search };
