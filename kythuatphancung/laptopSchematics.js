const cheerio = require('cheerio');
const axios = require('axios');
const { response } = require('express');


module.exports = async (re)=>{
    let links = [];
    for(i=0;i<=176;i++){
        links.push(fetchPageGetLinks(`http://kythuatphancung.vn/search/laptop-schematics_${i}.html`))
    }
    return Promise.all(links).then(response=>{
        return [].concat.apply([],response);
    })

    
}

function fetchPageGetLinks(url){
    return axios.get(url)
        .then(response=>{
            return getDownloadLinks(response.data);
        })
        .catch(err=>console.log(err))
}

function getDownloadLinks(page){
    let links =[];
    const $ = cheerio.load(page);
    let download_list = $('.download_list > li.downitem a.down_btn');
    download_list.each((i,e) => {
        links.push($(e).attr('href'))
    });
    return links;
}