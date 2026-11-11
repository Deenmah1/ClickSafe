// document.addEventListener('DOMContentLoaded', () => {
//     const navTabs = document.querySelectorAll('.nav-tab');
//     const tabContents = document.querySelectorAll('.tab-content');

//     navTabs.forEach(navTab => {
//         const tabContent = document.getElementById(navTab.getAttribute('data-tab'))

//         navTab.addEventListener('click', function (e) {
//             e.preventDefault();

//             tabContents.forEach(tabContent => tabContent.classList.remove('active'));
//             document.querySelector('.nav-tab.active').classList.remove('active');
//             tabContent.classList.add('active')
//             navTab.classList.add('active');
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const navTabs = document.querySelectorAll(".nav-tab");
    const tabContents = document.querySelectorAll(".tab-content");

    navTabs.forEach((navTab) => {
        const tabContent = document.getElementById(navTab.getAttribute("data-tab"));

        navTab.addEventListener("click", function (e) {
            e.preventDefault();

            tabContents.forEach((tabContent) =>
                tabContent.classList.remove("active"),
            );
            document.querySelector(".nav-tab.active").classList.remove("active");
            tabContent.classList.add("active");
            navTab.classList.add("active");
        });
    });

    const fakeUrls = document.querySelectorAll(".fake-urls-btn");
    const inputUrl = document.querySelector(".analyse-url-bar");
    const analyseBtn = document.querySelector(".analyse-url-btn");

    fakeUrls.forEach((fakeUrl) => {
        fakeUrl.addEventListener("click", function () {
            let url = fakeUrl.getAttribute("data-url");
            inputUrl.value = url;

            if (inputUrl.value?.length && inputUrl.value.match(/^https?:\/\/([\w.-]+)/gi)) {
                analyseBtn.dispatchEvent(new MouseEvent('click'));
            }
        });
    });

    analyseBtn.addEventListener("click", function (e) {
        e.preventDefault();

        if (inputUrl.value?.length) {
            if (inputUrl.value.match(/^https?:\/\/([\w.-]+)/gi)) {
                fetch(inputUrl.value).then((response) => {
                    console.log(response);
                });
            }
        }
    });
});
