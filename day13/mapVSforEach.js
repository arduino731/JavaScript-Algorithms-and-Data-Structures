calculateFaceLocation = (data) => {
    const facedata = data.outputs[0].data.regions;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    let faceBox = facedata.map((x) => {
        let clarifaiFace = x.region_info.bounding_box;
        console.log(clarifaiFace);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
        
    })
    console.log('faceBox', faceBox)


    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log('cla', clarifaiFace);
    return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
    }
}


// upload image with two faces recongition
// console logging 
{top_row: 0.104693264, left_col: 0.26165673, bottom_row: 0.3035247, right_col: 0.394291}
{top_row: 0.13627099, left_col: 0.5785932, bottom_row: 0.34982777, right_col: 0.72086203}
faceBox (2) [{…}, {…}]
cla {top_row: 0.104693264, left_col: 0.26165673, bottom_row: 0.3035247, right_col: 0.394291}
box {leftCol: 130.828365, topRow: 34.967550175999996, rightCol: 302.85450000000003, bottomRow: 232.6227502} 