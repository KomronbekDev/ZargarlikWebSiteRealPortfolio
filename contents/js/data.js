let componentData = [
  {
    id: "1",
    img: "http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/shop/04.jpg",
    title: "Moon Necklace",
    comment: "lorem ipsum lorem grud fixed marker",
    money: "500$",
    like: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    clickLike: "https://cdn-icons-png.flaticon.com/512/1077/1077086.png",
  },
  {
    id: "2",
    img: "http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/shop/03.jpg",
    title: "Moon Necklace",
    comment: "lorem ipsum lorem grud fixed marker",
    money: "600$",
    like: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    clickLike: "https://cdn-icons-png.flaticon.com/512/1077/1077086.png",
  },
  {
    id: "3",
    img: "http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/shop/02.jpg",
    title: "Moon Necklace",
    comment: "lorem ipsum lorem grud fixed marker",
    money: "300$",
    like: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    clickLike: "https://cdn-icons-png.flaticon.com/512/1077/1077086.png",
  },
  {
    id: "4",
    img: "http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/shop/02.jpg",
    title: "Moon Necklace",
    comment: "lorem ipsum lorem grud fixed marker",
    money: "700$",
    like: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    clickLike: "https://cdn-icons-png.flaticon.com/512/1077/1077086.png",
  },
  {
    id: "5",
    img: "http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/shop/03.jpg",
    title: "Moon Necklace",
    comment: "lorem ipsum lorem grud fixed marker",
    money: "400$",
    like: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    clickLike: "https://cdn-icons-png.flaticon.com/512/1077/1077086.png",
  },
  {
    id: "6",
    img: "http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/shop/01.jpg",
    title: "Moon Necklace",
    comment: "lorem ipsum lorem grud fixed marker",
    money: "1200$",
    like: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    clickLike: "https://cdn-icons-png.flaticon.com/512/1077/1077086.png",
  },
]


let list = document.querySelector('.list')


function myRender(arr, list) {
  let data = window.localStorage.getItem('likedImg') &&  window.localStorage.getItem('likedImg').length ? JSON.parse(window.localStorage.getItem('likedImg')) : []
  console.log(data);
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li')
    list.appendChild(li)
    let container = document.createElement('div')
    container.classList.add("container")
    li.appendChild(container)
    let card = document.createElement('div')
    card.classList.add("card")
    container.appendChild(card)
    let image = document.createElement('div')
    image.classList.add("image")
    card.appendChild(image)
    let imgTag = document.createElement('img')
    image.appendChild(imgTag)
    imgTag.setAttribute('src', arr[i].img)
    let content = document.createElement('div')
    content.classList.add("content")
    card.appendChild(content)
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let money = document.createElement('h3')
    let imgLIke = document.createElement('img')
    imgLIke.classList.add("like_img")
    let likeBtn = document.createElement('button')
    likeBtn.classList.add("like_btn")
    let contentOne = document.createElement('div')
    content.appendChild(h3)
    content.appendChild(p)
    content.appendChild(contentOne)
    contentOne.appendChild(money)
    likeBtn.appendChild(imgLIke)
    contentOne.appendChild(likeBtn)
    contentOne.setAttribute('class', 'displayFlex')
    money.textContent = arr[i].money
    imgLIke.setAttribute("src", arr[i].like)
    h3.textContent = arr[i].title
    p.textContent = arr[i].comment
    p.setAttribute("class", "black")
    // localStorage.removeItem("link")
    imgLIke.dataset.uuid = arr[i].id
    data.forEach(item => {
      if(item == arr[i].id){
        imgLIke.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/1077/1077086.png")
      }
    })
    likeBtn.addEventListener('click', (e) => {
      e.preventDefault()
      let newArr = window.localStorage.getItem('likedImg') ? JSON.parse(window.localStorage.getItem('likedImg')) : [];
      let targetButton = e.target.dataset.uuid
      newArr.forEach(item => {
        arr.findIndex(arr => arr.id == targetButton)
        console.log(targetButton);
        
      });

      
      if (newArr.includes(`${targetButton}`)) {
        console.log('yes');
        let indexOfButton = newArr.findIndex(item => item == targetButton)
        console.log(indexOfButton);
        newArr.splice(indexOfButton, 1)
        localStorage.setItem('likedImg', JSON.stringify(newArr))
        const buttonImg = e.target
        buttonImg.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/1077/1077035.png")
      } else {
        console.log('no');
        newArr.push(targetButton)
        localStorage.setItem('likedImg', JSON.stringify(newArr))
        const buttonImg = e.target
        buttonImg.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/1077/1077086.png")
      }
      // console.log(newArr);

    })
  }
}
myRender(componentData, list)

// if (imgLIke.src == arr[i].like) {
//   imgLIke.setAttribute("src", arr[i].clickLike)
//   localStorage.setItem("link", "https://cdn-icons-png.flaticon.com/512/1077/1077086.png")
// } else if (imgLIke.src == arr[i].clickLike) {
//   imgLIke.setAttribute("src", arr[i].like)
//   localStorage.setItem("link", "https://cdn-icons-png.flaticon.com/512/1077/1077035.png")
// }
