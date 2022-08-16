// console.log('xmdnbgdnfbg')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".card")[0].classList.add("fadeToLeft");
            document.querySelectorAll(".card")[1].classList.add("fadeToRight");
            document.querySelectorAll(".card")[2].classList.add("fadeToLeft");
        } else {
            document.querySelectorAll(".card")[0].classList.remove("fadeToLeft");
            document.querySelectorAll(".card")[1].classList.remove("fadeToRight");
            document.querySelectorAll(".card")[2].classList.remove("fadeToLeft");
        }
    })
})
observer.observe(document.querySelector(".layout"))