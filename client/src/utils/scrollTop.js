export const scrollTop = (isSmooth) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: isSmooth ? "smooth" : 'instant'
    });
}