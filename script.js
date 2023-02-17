const block = document.getElementsByClassName('wrapper')[0]

const createCard = (cat, parent) => {
    let id = document.createElement('p')
    let card = document.createElement('div')
    let h2 = document.createElement('h2')
    let cat_img = document.createElement('img')
    let rate = document.createElement('div')
    let description = document.createElement('p')
    let love = document.createElement('p')
    id.innerText = cat.id
    id.className = 'id'
    love.className = 'love'
    love.innerText = 'любимка'
    card.className = 'flex card'
    h2.innerText = `${cat.name} - ${cat.age} ${cat.age == 1?'год':cat.age <= 4?'года':'лет'}`
    cat_img.src = cat.img_link
    cat_img.className = 'cat_img'
    description.innerText = cat.description
    description.className = 'description'
    let a = cat.rate
    while (a--){
        let star = document.createElement('img')
        star.src = 'https://schtirlitz.ru/800/600/https/cdn141.picsart.com/262710134027212.png'
        star.className = 'star'
        rate.append(star)
    }
    card.append(id,h2,cat_img,description,rate)
    if (cat.favourite){
        card.appendChild(love)
    }
    parent.append(card)
}

cats.forEach((cat) =>{
    createCard(cat, block)
})