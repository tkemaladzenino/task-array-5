

const myArr = [
    { name: "Kate", fullName: 'B.' },
];

myArr.forEach(myFunction);
function myFunction(value) {
    document.getElementById("demo").innerHTML = value.name + " ";
    document.getElementById("demo").style.color = "#1B1B1B";
    document.getElementById("demo").style.fontSize = "18px";
}


window.addEventListener('DOMContentLoaded', function () {
    var masivi = [
        {
            image: "images/image1.png",
            title: "Headset",
            subtitle: "Fidelity first. See more than ever before",
            description: "We've pushed visual, audio, and ergonomic technologies to create the best-in-class VR experience.",
            commentCount: "images/Icon1.png",
            num349: "349",
            showCount: "images/Icon2.png",
            num49500: "49500",
            shareLink: "images/Icon3.png"
        },
        {
            image: "images/image2.png",
            title: "Controllers",
            subtitle: "Your hands ,  in Virtual Reality",
            description: "Designed from the ground up to enable natural interactions, high-fidelity hand presence, and long-term comfort.",
            commentCount: "images/Icon4.png",
            num349: "349",
            showCount: "images/Icon5.png",
            num49500: "49500",
            shareLink: "images/Icon6.png"
        },
        {
            image: "images/image3.png",
            title: "Base Stations",
            subtitle: "Best-in-industry room-scale tracking",
            description: "The highest quality tracking has gotten even better with Base Station 2.0, now with improved range, field of view, and scalability.",
            commentCount: "images/Icon1.png",
            num349: "349",
            showCount: "images/Icon2.png",
            num49500: "49500",
            shareLink: "images/Icon3.png"
        },
    ];


    masivi.forEach(function (element) {

        var arrayDiv = document.getElementById("arraydiv");

        var card = document.createElement("div");
        card.classList.add("card", "headset-card");

        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');


        var titleElement = document.createElement('h5');
        titleElement.classList.add('headset');
        titleElement.textContent = element.title;

        var subtitleElement = document.createElement("h1");
        subtitleElement.classList.add("subtitle-fidelity");
        subtitleElement.textContent = element.subtitle;

        var imageElement = document.createElement('img');
        imageElement.src = element.image;

        var descriptionElement = document.createElement('p');
        descriptionElement.classList.add('p-description');
        descriptionElement.textContent = element.description;

        var arrayDivSmall = document.createElement("div");
        arrayDivSmall.classList.add("flex-div-small");

        var hr = document.createElement("hr");
        hr.classList.add("hr1");

        var imageSmall = document.createElement("div");
        imageSmall.classList.add("imgsmall-div");

        var commentCountElement = document.createElement("div1");
        var commentCountElement = document.createElement("img");
        commentCountElement.src = element.commentCount;

        var num349Element = document.createElement("p");
        num349Element.classList.add("num349");
        num349Element.textContent = element.num349;

        var showCountElement = document.createElement("img");
        showCountElement.src = element.showCount;

        var num49500Element = document.createElement("p");
        num49500Element.classList.add("num49500");
        num49500Element.textContent = element.num49500;

        var shareLinkElement = document.createElement("img");
        shareLinkElement.src = element.shareLink;

        cardBody.appendChild(imageElement);
        cardBody.appendChild(titleElement);
        arrayDivSmall.appendChild(descriptionElement);
        cardBody.appendChild(subtitleElement);
        cardBody.appendChild(arrayDivSmall);
        cardBody.appendChild(hr);
        cardBody.appendChild(imageSmall);
        imageSmall.appendChild(commentCountElement);
        imageSmall.appendChild(num349Element);
        imageSmall.appendChild(showCountElement);
        imageSmall.appendChild(num49500Element);
        imageSmall.appendChild(shareLinkElement);

        card.appendChild(cardBody);
        arrayDiv.appendChild(card);
    });
});


const wordsArray = ['CONTACT', 'HALP', 'PRIVACY POLACY', 'TERMS OF USER'];
const imageArray = ['Twitter.png', 'facebook.png', 'YouTube.png'];

function createFooter() {
    const footerDiv = document.getElementById('footer');
    const ninoElement = document.createElement('div');
    ninoElement.textContent = '© 2019 crowdfund. All Rights Reserved';
    footerDiv.appendChild(ninoElement);
    ninoElement.style.fontSize = '17px';

    const containerDiv = document.createElement('div');


    wordsArray.forEach((word) => {
        const wordElement = document.createElement('a');
        wordElement.textContent = word;

        wordElement.href = 'https://www.google.com/';
        containerDiv.appendChild(wordElement);
    });


    imageArray.forEach((filename) => {
        const imageElement = document.createElement('img');
        imageElement.src = 'images/' + filename;
        containerDiv.appendChild(imageElement);

        const imgLink = document.createElement('a');
        imgLink.href = 'http://google.com';
        imgLink.appendChild(imageElement);

        containerDiv.appendChild(imgLink);
    });
    footerDiv.appendChild(containerDiv);
}

createFooter();


