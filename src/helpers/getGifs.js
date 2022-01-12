
export const getGifs = async(category) =>{
        
    const api_key = 'qqcxVpkaiNpS1jF0dgBd3EcxuHnQSo5t';
    const limit = 10;
    const q = category;

    const url='https://api.giphy.com/v1/gifs/search?api_key='+api_key+'&limit='+limit+'&q='+q;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    // console.log(gifs);
    return gifs;
}