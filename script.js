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

    const modelSelect = document.getElementById('dropdown');

    const modelData = {
        logistics: {
            trueNegative: 905,
            falsePositive: 95,
            falseNegative: 88,
            truePositive: 912
        },

        randomForest: {
            trueNegative: 959,
            falsePositive: 41,
            falseNegative: 32,
            truePositive: 968
        },

        xgBoost: {
            trueNegative: 967,
            falsePositive: 33,
            falseNegative: 25,
            truePositive: 975
        },

        svm: {
            trueNegative: 930,
            falsePositive: 70,
            falseNegative: 60,
            truePositive: 940
        }
    };

    modelSelect.addEventListener('change', function (e) {
        e.preventDefault();

        const selectModel = modelSelect.value;
        const result = modelData[selectModel];

        document.getElementById('fn').textContent = result.falseNegative;
        document.getElementById('tn').textContent = result.trueNegative;
        document.getElementById('tp').textContent = result.truePositive;
        document.getElementById('fp').textContent = result.falsePositive;
    });
});
