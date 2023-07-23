//변수 정하기
const filterBlueTButton = document.querySelector('.filter_blue_t');
const filterBluePButton = document.querySelector('.filter_blue_p');
const filterBlueSButton = document.querySelector('.filter_blue_s');
const filterColorBlueButton = document.querySelector('.filter_color_blue');
const filterColorYellowButton = document.querySelector('.filter_color_yellow');
const filterColorPinkButton = document.querySelector('.filter_color_pink');

const mainContainer = document.querySelector('main');
const itemContainer = document.createElement('div');
itemContainer.innerHTML = '<div class="item_container"><img src="imgs/pink_t.png" alt=""><p class="person_recog">female,</p><p class="size_recog">large size</p></div>';

let filterRecog = 'none';

// 동적으로 main의 item container 넣기

// 배열 정리하기
const itemList = ['blue_p', 'blue_s', 'blue_t', 'pink_p', 'pink_s', 'pink_t', 'yellow_p', 'yellow_s', 'yellow_t'];
const sizeList = ['small', 'large'];
const personList = ['male', 'female'];
const combinedArray = [];
let itemCotainerList = [];

itemList.forEach(item => {
    sizeList.forEach(size => {
        combinedArray.push({
          item: item,
          size: size,
      });
    });
});

combinedArray.forEach((obj, index) => {
  const nextChar = obj.item.charAt(obj.item.indexOf('_') + 1);
  combinedArray[index].person = nextChar === 's' ? 'female' : 'male';
});

console.log(combinedArray);

for (let i = combinedArray.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
}

// 동적으로 만들기
for(let i=0; i<combinedArray.length; i++) {
    itemCotainerList[i] = itemContainer.cloneNode(true);
    itemCotainerList[i].innerHTML = `<div class="item_container"><img src="imgs/${combinedArray[i].item}.png" alt=""><p class="person_recog">${combinedArray[i].person},</p><p class="size_recog">${combinedArray[i].size} size</p></div>`;
    mainContainer.appendChild(itemCotainerList[i]);
}


// 버튼 이벤트 = t
filterBlueTButton.addEventListener('click', () => {
    filterRecog = 't';
    filterCategory = 'shape';
    CategorySelectBtn(filterRecog, filterCategory);
});

// 버튼 이벤트 = p
filterBluePButton.addEventListener('click', () => {
  filterRecog = 'p';
  filterCategory = 'shape';
  CategorySelectBtn(filterRecog, filterCategory);
});

// 버튼 이벤트 = s
filterBlueSButton.addEventListener('click', () => {
  filterRecog = 's';
  filterCategory = 'shape';
  CategorySelectBtn(filterRecog, filterCategory);
});

filterColorBlueButton.addEventListener('click', ()=> {
  filterRecog = 'blue';
  filterCategory = 'color';
  CategorySelectBtn(filterRecog, filterCategory);
});

filterColorPinkButton.addEventListener('click', ()=> {
  filterRecog = 'pink';
  filterCategory = 'color';
  CategorySelectBtn(filterRecog, filterCategory);
});

filterColorYellowButton.addEventListener('click', ()=> {
  filterRecog = 'yellow';
  filterCategory = 'color';
  CategorySelectBtn(filterRecog, filterCategory);
});


function CategorySelectBtn(filterRecog, filterCategory) {

  window.scrollTo({
    top :0,
    behavior : 'smooth'
  });

  mainContainer.scrollTop = 0;

    // 배열 초기화 
    itemCotainerList = [];

    // 컨테이너 초기화
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }

     
        for(let i=0; i<combinedArray.length; i++) {
          if(filterCategory === 'shape') {
              if(filterRecog === combinedArray[i].item.charAt(combinedArray[i].item.indexOf('_') + 1)){
                itemCotainerList[i] = itemContainer.cloneNode(true);
                itemCotainerList[i].innerHTML = `<div class="item_container"><img src="imgs/${combinedArray[i].item}.png" alt=""><p class="person_recog">${combinedArray[i].person},</p><p class="size_recog">${combinedArray[i].size} size</p></div>`;
                mainContainer.appendChild(itemCotainerList[i]);
            }
          } else if(filterCategory === 'color') {
            if(filterRecog === combinedArray[i].item.substring(0, combinedArray[i].item.indexOf('_'))) {
              itemCotainerList[i] = itemContainer.cloneNode(true);
              itemCotainerList[i].innerHTML = `<div class="item_container"><img src="imgs/${combinedArray[i].item}.png" alt=""><p class="person_recog">${combinedArray[i].person},</p><p class="size_recog">${combinedArray[i].size} size</p></div>`;
              mainContainer.appendChild(itemCotainerList[i]);
          }
        }
  }
}