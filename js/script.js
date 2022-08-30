const sunflowers = 'http://www.reddit.com/search.json?q=sunflowers+nsfw:no'

// step 1 -- fetch the reddit images by URL
fetch(sunflowers)

// step 2 -- Jsonify the data

.then(sunflowerImages => {
    // console.log(sunflowerImages)

    return sunflowerImages.json()
})

// step 3 -- Display the images in a carousel slideshow

.then(returnedSunflowers => {
    // console.log(returnedSunflowers.results)
    const body = document.querySelector('body')
    const img = document.createElement('img')
    img.src = returnedSunflowers.data.children[1].data.thumbnail
    img.alt = returnedSunflowers.data.children[1].data.title
    console.log(returnedSunflowers.data.children[1].data) 

})    

// step 4 -- be a good programmer and handle errors