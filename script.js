const accessKey='';


const form=document.querySelector('#form');
const search_box=document.querySelector('#search-box');
const search_result=document.querySelector('#search-result');
const show_More=document.querySelector('#show-more');

let keyword="";
let page=1;

async function searchImage(){
    keyword=search_box.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

      if(page===1){
        search_result.innerHTML="";
      }
    // console.log(data);
    const results=data.results;

    results.map((result)=>{
        const image=document.createElement('img');
        image.src=result.urls.small;
        const imageLink=document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.target='_blank';
        imageLink.appendChild(image);
        search_result.appendChild(imageLink);
    })

    show_More.style.display='flex';

}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    page=1;
    searchImage();
},false)

show_More.addEventListener('click',()=>{
    page++;
    searchImage();
},false)
