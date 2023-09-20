window.onload = () => {
    const shortSection = document.querySelectorAll("ytd-rich-section-renderer");
    shortSection.forEach((elem) => (elem.style.display = "none"));
    const shortsLink = document.querySelectorAll("a[title='Shorts']");
    shortsLink.forEach((elem) => (elem.style.display = "none"));
    const shortsContainer = document.querySelector(
        "div[id='shorts-container']"
    );
    if (shortsContainer) {
        document.querySelector("body").innerHTML = "";
    }
};
