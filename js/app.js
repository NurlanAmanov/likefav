const cardlar = document.getElementById('cardlar');
const sevimlilermain = document.getElementById('sevimlilermain');
const likes = document.getElementById('likes');
const menu = document.getElementById('menu');
let elaveler = []; 

function addcards() {
    data.map(item => {
        cardlar.innerHTML += `
        <div class="w-[38%] h-[38%] lg:w-[20%] lg:h-[20%] mx-2 mb-2 flex items-center flex-col justify-center rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900" id="card-${item.id}">
            <img src="${item.img}" alt="" class="object-cover object-center w-[100%] rounded-md ">
            <div class="m-3 lg:w-[80%] w-[100%] p-3 flex items-start justify-start flex-col">
                <span class="block text-[15px] lg:text-[19px] font-bold mt-2 mb-3">
                Sevimlilərə əlavə et 
                <i onclick="likead('${item.id}')" class="fa-solid fa-heart text-[orange] text-[15px] lg:text-[19px]"></i>
                </span>
                <span class="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">${item.name}</span>
                <h2 class="text-[15px] font-semibold tracking-wide">${item.desc}</h2>
            </div>
            <p class="dark:text-gray-800 mb-4 text-left w-[80%]">Qiymət ${item.price} AZN</p>
         
        </div>`;
    });
}
addcards();

function opensevim() {
    if (sevimlilermain.style.display === 'none' || sevimlilermain.style.display === '') {
        sevimlilermain.style.display = 'block';
    }
if(menu.style.display==='flex'){
        menu.style.display='none'
}
}

function clossevim() {
    if (sevimlilermain.style.display === 'block') {
        sevimlilermain.style.display = 'none';
    }
    if(menu.style.display==='none'){
        menu.style.display='flex'
}
}

function likead(id) {
    const elav = data.find(item => item.id == id);

    if (elav && !elaveler.some(item => item.id === elav.id)) {
        elaveler.push(elav);
        favyenile(); 
    }
}

function favyenile() {
    likes.innerHTML = ''; 
    elaveler.forEach(item => {
        likes.innerHTML += `
        <div class=" w-[80%] h-[80%] lg:w-[100%] lg:h-[50%] mx-2 mb-2 flex items-center flex-row justify-center rounded-md  border border-white">
            <div class="m-3 lg:w-[80%] w-[100%] p-3 flex items-start justify-start flex-col">
                <span class="block text-[15px] lg:text-[19px] font-bold mt-2 mb-3">
                Sevimlilərə əlavə et 
                <i onclick="likead('${item.id}')" class="fa-solid fa-heart text-[orange] text-[15px] lg:text-[19px]"></i>
                </span>
                <span class="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">${item.name}</span>
                <h2 class="text-[15px] font-semibold tracking-wide">${item.desc}</h2>
            </div>
            <p class="dark:text-gray-800 mb-4 text-left w-[80%]">Qiymət ${item.price} AZN</p>
            <button onclick="sil('${item.id}')" class="bg-[#FF0000] w-[90%] rounded-md mx-2 mb-2 lg:w-[135px] h-[40px] text-white text-[16px]">Sil</button>
        </div>`;
    });
}

function sil(id) {
  
    elaveler = elaveler.filter(item => item.id !== id);
    

    const itemDiv = document.getElementById(`card-${id}`);
    if (itemDiv) {
        itemDiv.style.display = 'none'; 
    }
    

    favyenile();
}


