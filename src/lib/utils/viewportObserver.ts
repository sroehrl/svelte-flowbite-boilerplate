
let observerOptions = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
};
export default function(e: HTMLElement, params: any = {}) {
    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
            params?.isVisible(true);
        } else {
            params?.isVisible(false);
        }
    }, observerOptions);

    observer.observe(e);
}