function getImgUrl (name) {
    return new URL(`../assets/foods/${name}`, import.meta.url)
}

export {getImgUrl}