// ========================================
// REALMS OF WESTEROS - JAVASCRIPT
// ========================================


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(0, 0, 0, 0.95)";

        } else {

            navbar.style.background =
                "rgba(0, 0, 0, 0.75)";

        }

    });

}

// ========================================
// BACKGROUND MUSIC
// ========================================

const musicBtn = document.getElementById("musicBtn");

const backgroundMusic = new Audio("audio/got.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.9;

if (musicBtn) {

    musicBtn.addEventListener("click", function () {

        if (backgroundMusic.paused) {

            backgroundMusic.play()
                .then(function () {

                    musicBtn.textContent = "🔊";

                    console.log("Music is playing");

                })
                .catch(function (error) {

                    console.log("Music error:", error);

                });

        } else {

            backgroundMusic.pause();

            musicBtn.textContent = "🔇";

            console.log("Music stopped ");  

        }

    });

}

// ========================================
// TARGARYEN CHARACTER DATA
// ========================================

const targaryens = [

    {
        name: "Aegon I Targaryen",
        title: "The Conqueror",
        dragon: "Balerion",
        image: "images/aegon1.jpg",
        description:
            "The first Targaryen king to unite the Seven Kingdoms."
    },

    {
        name: "Viserys I Targaryen",
        title: "King of the Andals",
        dragon: "Balerion",
        image: "images/viserys1.jpg",
        description:
            "The fifth Targaryen king of Westeros."
    },

    {
        name: "Rhaenyra Targaryen",
        title: "The Realm's Delight",
        dragon: "Syrax",
        image: "images/rhaenyra.jpg",
        description:
            "The firstborn child of King Viserys I and a claimant to the Iron Throne."
    },

    {
        name: "Daemon Targaryen",
        title: "Prince of the City",
        dragon: "Caraxes",
        image: "images/daemon.jpg",
        description:
            "The younger brother of King Viserys I and husband of Rhaenyra."
    },

    {
        name: "Aemond Targaryen",
        title: "One-Eye",
        dragon: "Vhagar",
        image: "images/aemond.jpg",
        description:
            "Prince of House Targaryen and rider of the mighty Vhagar."
    },

    {
        name: "Aegon II Targaryen",
        title: "King of the Seven Kingdoms",
        dragon: "Sunfyre",
        image: "images/aegon2.jpg",
        description:
            "Son of Viserys I and Alicent Hightower."
    }

];

console.log(targaryens);


// ========================================
// DISPLAY TARGARYEN CHARACTERS
// ========================================

const characterContainer =       
    document.getElementById(
        "targaryenCharacters"
    );

if (characterContainer) {

    targaryens.forEach(character => { 

        const card =
            document.createElement("div");

        card.classList.add(
            "character-card"
        );

        card.id =
            character.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");

        card.dataset.character =
            character.name;

        card.innerHTML = `

            <img
                src="${character.image}"
                alt="${character.name}"
                class="character-image"
            >

            <h3>
                ${character.name}
            </h3>

            <p class="character-title-text">
                ${character.title}
            </p>

            <p class="dragon-name">
                🐉 Dragon: ${character.dragon}
            </p>

            <p class="character-description">
                ${character.description}
            </p>

        `;

        characterContainer.appendChild(card);

    });

}


// ========================================
// CHARACTER MODAL
// ========================================

const characterModal =
    document.getElementById(
        "characterModal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const modalName =
    document.getElementById(
        "modalName"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalDragon =
    document.getElementById(
        "modalDragon"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const characterCards =
    document.querySelectorAll(
        ".character-card"
    );


characterCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        const character =
            targaryens[index];

        if (!character) return;

        if (modalName) {
            modalName.textContent =
                character.name;
        }

        if (modalTitle) {
            modalTitle.textContent =
                character.title;
        }

        if (modalDragon) {
            modalDragon.textContent =
                "🐉 Dragon: " +
                character.dragon;
        }

        if (modalDescription) {
            modalDescription.textContent =
                character.description;
        }

        if (characterModal) {
            characterModal.classList.add(
                "active"
            );
        }

    });

});


// CLOSE CHARACTER MODAL

if (closeModal && characterModal) {

    closeModal.addEventListener(
        "click",
        () => {

            characterModal.classList.remove(
                "active"
            );

        }
    );

    characterModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                characterModal
            ) {

                characterModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// ========================================
// GREAT HOUSE DATA
// ========================================

const houses = {

    Targaryen: {

        name: "House Targaryen",
        symbol: "🐉",
        words: "Fire and Blood",
        seat: "Dragonstone",

        description:
            "The ancient dragonlord dynasty that conquered and ruled Westeros for centuries."

    },

    Stark: {

        name: "House Stark",
        symbol: "🐺",
        words: "Winter Is Coming",
        seat: "Winterfell",

        description:
            "One of the oldest noble houses of Westeros and the ruling house of the North."

    },

    Lannister: {

        name: "House Lannister",
        symbol: "🦁",
        words: "Hear Me Roar",
        seat: "Casterly Rock",

        description:
            "One of the richest and most powerful houses in Westeros."

    },

    Baratheon: {

        name: "House Baratheon",
        symbol: "🦌",
        words: "Ours Is the Fury",
        seat: "Storm's End",

        description:
            "A powerful house from the Stormlands that took the Iron Throne after Robert's Rebellion."

    },

    Tyrell: {

        name: "House Tyrell",
        symbol: "🌹",
        words: "Growing Strong",
        seat: "Highgarden",

        description:
            "The powerful ruling house of the Reach."

    },

    Martell: {

        name: "House Martell",
        symbol: "☀️",
        words: "Unbowed, Unbent, Unbroken",
        seat: "Sunspear",

        description:
            "The ruling house of Dorne, known for its distinctive culture and fierce independence."

    }

};


// ========================================
// HOUSE INFORMATION MODAL
// ========================================

const houseModal =
    document.getElementById(
        "houseModal"
    );

const closeHouseModal =
    document.getElementById(
        "closeHouseModal"
    );

const houseModalName =
    document.getElementById(
        "houseModalName"
    );

const houseModalSymbol =
    document.getElementById(
        "houseModalSymbol"
    );

const houseModalWords =
    document.getElementById(
        "houseModalWords"
    );

const houseModalSeat =
    document.getElementById(
        "houseModalSeat"
    );

const houseModalDescription =
    document.getElementById(
        "houseModalDescription"
    );


const houseCards =
    document.querySelectorAll(
        ".house-card"
    );


houseCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const houseName =
                card.dataset.house;

            const house =
                houses[houseName];

            if (!house) return;

            if (houseModalName) {
                houseModalName.textContent =
                    house.name;
            }

            if (houseModalSymbol) {
                houseModalSymbol.textContent =
                    house.symbol;
            }

            if (houseModalWords) {
                houseModalWords.textContent =
                    '"' + house.words + '"';
            }

            if (houseModalSeat) {
                houseModalSeat.textContent =
                    "🏰 Seat: " +
                    house.seat;
            }

            if (houseModalDescription) {
                houseModalDescription.textContent =
                    house.description;
            }

            if (houseModal) {
                houseModal.classList.add(
                    "active"
                );
            }

        }
    );

});


// CLOSE HOUSE MODAL

if (closeHouseModal && houseModal) {

    closeHouseModal.addEventListener(
        "click",
        () => {

            houseModal.classList.remove(
                "active"
            );

        }
    );

    houseModal.addEventListener(
        "click",
        event => {

            if (
                event.target === houseModal
            ) {

                houseModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// ========================================
// DRAGON DATABASE
// ========================================

const dragons = [

    {
        name: "Balerion",
        title: "The Black Dread",
        rider: "Aegon I Targaryen",
        description:
            "One of the largest and most fearsome dragons ever to live."
    },

    {
        name: "Vhagar",
        title: "The Queen of Dragons",
        rider: "Aemond Targaryen",
        description:
            "An ancient dragon who fought during the Targaryen civil war."
    },

    {
        name: "Caraxes",
        title: "The Blood Wyrm",
        rider: "Daemon Targaryen",
        description:
            "A fierce red dragon known for his terrifying appearance and aggressive nature."
    },

    {
        name: "Syrax",
        title: "The Golden Dragon",
        rider: "Rhaenyra Targaryen",
        description:
            "The dragon ridden by Princess Rhaenyra Targaryen."
    },

    {
        name: "Sunfyre",
        title: "The Golden",
        rider: "Aegon II Targaryen",
        description:
            "A beautiful golden dragon with pale wings."
    },

    {
        name: "Meleys",
        title: "The Red Queen",
        rider: "Rhaenys Targaryen",
        description:
            "A powerful scarlet dragon known for her speed."
    }

];


// ========================================
// DISPLAY DRAGONS
// ========================================

const dragonContainer =
    document.getElementById(
        "dragonContainer"
    );

if (dragonContainer) {

    dragons.forEach(dragon => {

        const card =
            document.createElement("div");

        card.classList.add(
            "dragon-card"
        );

        card.dataset.dragon =
            dragon.name;

        card.innerHTML = `

            <div class="dragon-icon">
                🐉
            </div>

            <h3>
                ${dragon.name}
            </h3>

            <p class="dragon-title">
                ${dragon.title}
            </p>

            <p class="dragon-rider">
                Rider: ${dragon.rider}
            </p>

            <p class="dragon-description">
                ${dragon.description}
            </p>

        `;

        dragonContainer.appendChild(card);

    });

}


// ========================================
// DRAGON INFORMATION MODAL
// ========================================

const dragonModal =
    document.getElementById(
        "dragonModal"
    );

const closeDragonModal =
    document.getElementById(
        "closeDragonModal"
    );

const dragonModalName =
    document.getElementById(
        "dragonModalName"
    );

const dragonModalTitle =
    document.getElementById(
        "dragonModalTitle"
    );

const dragonModalRider =
    document.getElementById(
        "dragonModalRider"
    );

const dragonModalDescription =
    document.getElementById(
        "dragonModalDescription"
    );


const dragonCards =
    document.querySelectorAll(
        ".dragon-card"
    );


dragonCards.forEach((card, index) => {

    card.addEventListener(
        "click",
        () => {

            const dragon =
                dragons[index];

            if (!dragon) return;

            if (dragonModalName) {
                dragonModalName.textContent =
                    dragon.name;
            }

            if (dragonModalTitle) {
                dragonModalTitle.textContent =
                    dragon.title;
            }

            if (dragonModalRider) {
                dragonModalRider.textContent =
                    "🐉 Rider: " +
                    dragon.rider;
            }

            if (dragonModalDescription) {
                dragonModalDescription.textContent =
                    dragon.description;
            }

            if (dragonModal) {
                dragonModal.classList.add(
                    "active"
                );
            }

        }
    );

});


// CLOSE DRAGON MODAL

if (closeDragonModal && dragonModal) {

    closeDragonModal.addEventListener(
        "click",
        () => {

            dragonModal.classList.remove(
                "active"
            );

        }
    );

    dragonModal.addEventListener(
        "click",
        event => {

            if (
                event.target === dragonModal
            ) {

                dragonModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// ========================================
// WESTEROS LOCATIONS
// ========================================

const locations = {

    Winterfell: {

        name: "Winterfell",
        symbol: "🐺",
        house: "House Stark",

        description:
            "The ancient seat of House Stark and the heart of the North."

    },

    Dragonstone: {

        name: "Dragonstone",
        symbol: "🐉",
        house: "House Targaryen",

        description:
            "The ancestral seat of House Targaryen and a stronghold on the Blackwater."

    },

    "Kings Landing": {

        name: "King's Landing",
        symbol: "👑",
        house: "The Iron Throne",

        description:
            "The capital of the Seven Kingdoms and the seat of the Iron Throne."

    },

    "Casterly Rock": {

        name: "Casterly Rock",
        symbol: "🦁",
        house: "House Lannister",

        description:
            "The legendary fortress and seat of House Lannister."

    },

    Highgarden: {

        name: "Highgarden",
        symbol: "🌹",
        house: "House Tyrell",

        description:
            "The beautiful seat of House Tyrell in the Reach."

    },

    Sunspear: {

        name: "Sunspear",
        symbol: "☀️",
        house: "House Martell",

        description:
            "The capital and seat of House Martell in Dorne."

    }

};


// ========================================
// LOCATION INFORMATION MODAL
// ========================================

const locationModal =
    document.getElementById(
        "locationModal"
    );

const closeLocationModal =
    document.getElementById(
        "closeLocationModal"
    );

const locationModalSymbol =
    document.getElementById(
        "locationModalSymbol"
    );

const locationModalName =
    document.getElementById(
        "locationModalName"
    );

const locationModalHouse =
    document.getElementById(
        "locationModalHouse"
    );

const locationModalDescription =
    document.getElementById(
        "locationModalDescription"
    );


const locationButtons =
    document.querySelectorAll(
        ".location"
    );


locationButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const locationName =
                button.dataset.location;

            const location =
                locations[locationName];

            if (!location) return;

            if (locationModalSymbol) {
                locationModalSymbol.textContent =
                    location.symbol;
            }

            if (locationModalName) {
                locationModalName.textContent =
                    location.name;
            }

            if (locationModalHouse) {
                locationModalHouse.textContent =
                    location.house;
            }

            if (locationModalDescription) {
                locationModalDescription.textContent =
                    location.description;
            }

            if (locationModal) {
                locationModal.classList.add(
                    "active"
                );
            }

        }
    );

});


// CLOSE LOCATION MODAL

if (closeLocationModal && locationModal) {

    closeLocationModal.addEventListener(
        "click",
        () => {

            locationModal.classList.remove(
                "active"
            );

        }
    );

    locationModal.addEventListener(
        "click",
        event => {

            if (
                event.target === locationModal
            ) {

                locationModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// ========================================
// TIMELINE EVENT DATA
// ========================================

const timelineEvents = [

    {
        year: "2 BC",
        title: "Aegon's Conquest",
        icon: "🔥",

        description:
            "Aegon I Targaryen begins his conquest of Westeros with his sisters Visenya and Rhaenys. The Iron Throne is created from the swords of defeated enemies."

    },

    {
        year: "37 AC",
        title: "Jaehaerys I",
        icon: "👑",

        description:
            "Jaehaerys I becomes king and begins a long period of peace and prosperity known as the reign of the Conciliator."

    },

    {
        year: "129 AC",
        title: "The Dance of the Dragons",
        icon: "🐉",

        description:
            "A devastating civil war begins between supporters of Rhaenyra Targaryen and Aegon II Targaryen."

    },

    {
        year: "282 AC",
        title: "Robert's Rebellion",
        icon: "⚔️",

        description:
            "Robert Baratheon, Eddard Stark and their allies rebel against King Aerys II Targaryen."

    },

    {
        year: "298 AC",
        title: "The Game of Thrones",
        icon: "🐺",

        description:
            "The great houses struggle for control of the Iron Throne while an ancient threat awakens beyond the Wall."

    }

];


// ========================================
// TIMELINE ITEMS
// ========================================

const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );


// ========================================
// TIMELINE ANIMATION
// ========================================

if (
    typeof IntersectionObserver !==
    "undefined"
) {

    const timelineObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateX(0)";

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    timelineItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform =
            "translateX(-40px)";

        item.style.transition =
            "all 0.8s ease";

        timelineObserver.observe(item);

    });

}


// ========================================
// TIMELINE MODAL
// ========================================

const timelineModal =
    document.getElementById(
        "timelineModal"
    );

const closeTimelineModal =
    document.getElementById(
        "closeTimelineModal"
    );

const timelineModalIcon =
    document.getElementById(
        "timelineModalIcon"
    );

const timelineModalTitle =
    document.getElementById(
        "timelineModalTitle"
    );

const timelineModalYear =
    document.getElementById(
        "timelineModalYear"
    );

const timelineModalDescription =
    document.getElementById(
        "timelineModalDescription"
    );


timelineItems.forEach((item, index) => {

    item.addEventListener(
        "click",
        () => {

            const event =
                timelineEvents[index];

            if (!event) return;

            if (timelineModalIcon) {
                timelineModalIcon.textContent =
                    event.icon;
            }

            if (timelineModalTitle) {
                timelineModalTitle.textContent =
                    event.title;
            }

            if (timelineModalYear) {
                timelineModalYear.textContent =
                    event.year;
            }

            if (timelineModalDescription) {
                timelineModalDescription.textContent =
                    event.description;
            }

            if (timelineModal) {
                timelineModal.classList.add(
                    "active"
                );
            }

        }
    );

});


// CLOSE TIMELINE MODAL

if (
    closeTimelineModal &&
    timelineModal
) {

    closeTimelineModal.addEventListener(
        "click",
        () => {

            timelineModal.classList.remove(
                "active"
            );

        }
    );


    timelineModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                timelineModal
            ) {

                timelineModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// ========================================
// WESTEROS SEARCH SYSTEM
// ========================================

const searchInput =
    document.getElementById(
        "searchInput"
    );

const searchButton =
    document.getElementById(
        "searchButton"
    );

const searchResults =
    document.getElementById(
        "searchResults"
    );


// ========================================
// SEARCH DATA
// ========================================

const searchData = [

    // CHARACTERS

    {
        name: "Aegon I Targaryen",
        type: "Character"
    },

    {
        name: "Viserys I Targaryen",
        type: "Character"
    },

    {
        name: "Rhaenyra Targaryen",
        type: "Character"
    },

    {
        name: "Daemon Targaryen",
        type: "Character"
    },

    {
        name: "Aemond Targaryen",
        type: "Character"
    },

    {
        name: "Aegon II Targaryen",
        type: "Character"
    },


    // DRAGONS

    {
        name: "Balerion",
        type: "Dragon"
    },

    {
        name: "Vhagar",
        type: "Dragon"
    },

    {
        name: "Caraxes",
        type: "Dragon"
    },

    {
        name: "Syrax",
        type: "Dragon"
    },

    {
        name: "Sunfyre",
        type: "Dragon"
    },

    {
        name: "Meleys",
        type: "Dragon"
    },


    // HOUSES

    {
        name: "House Targaryen",
        type: "House"
    },

    {
        name: "House Stark",
        type: "House"
    },

    {
        name: "House Lannister",
        type: "House"
    },

    {
        name: "House Baratheon",
        type: "House"
    },

    {
        name: "House Tyrell",
        type: "House"
    },

    {
        name: "House Martell",
        type: "House"
    },


    // LOCATIONS

    {
        name: "Winterfell",
        type: "Location"
    },

    {
        name: "Dragonstone",
        type: "Location"
    },

    {
        name: "King's Landing",
        type: "Location"
    },

    {
        name: "Casterly Rock",
        type: "Location"
    },

    {
        name: "Highgarden",
        type: "Location"
    },

    {
        name: "Sunspear",
        type: "Location"
    },


    // TIMELINE

    {
        name: "Aegon's Conquest",
        type: "Historical Event"
    },

    {
        name: "Jaehaerys I",
        type: "Historical Event"
    },

    {
        name: "Dance of the Dragons",
        type: "Historical Event"
    },

    {
        name: "Robert's Rebellion",
        type: "Historical Event"
    }

];


// ========================================
// FIND SEARCH TARGET
// ========================================

function findSearchTarget(item) {

    const name =
        item.name.toLowerCase();


    // CHARACTER

    if (item.type === "Character") {

        const cards =
            document.querySelectorAll(
                ".character-card"
            );

        for (const card of cards) {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(name)) {

                return card;

            }

        }

    }


    // DRAGON

    if (item.type === "Dragon") {

        const cards =
            document.querySelectorAll(
                ".dragon-card"
            );

        for (const card of cards) {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(name)) {

                return card;

            }

        }

    }


    // HOUSE

    if (item.type === "House") {

        const cards =
            document.querySelectorAll(
                ".house-card"
            );

        for (const card of cards) {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(name)) {

                return card;

            }

        }

    }


    // LOCATION

    if (item.type === "Location") {

        const buttons =
            document.querySelectorAll(
                ".location"
            );

        for (const button of buttons) {

            const text =
                button.innerText.toLowerCase();

            const data =
                (
                    button.dataset.location ||
                    ""
                ).toLowerCase();

            if (
                text.includes(name) ||
                data.includes(name) ||
                (
                    name === "king's landing" &&
                    data === "kings landing"
                )
            ) {

                return button;

            }

        }

    }


    // TIMELINE

    if (
        item.type ===
        "Historical Event"
    ) {

        const items =
            document.querySelectorAll(
                ".timeline-item"
            );

        for (const timeline of items) {

            const text =
                timeline.innerText.toLowerCase();

            if (text.includes(name)) {

                return timeline;

            }

        }

    }


    return null;

}


// ========================================
// PERFORM SEARCH
// ========================================

function performSearch() {

    if (
        !searchInput ||
        !searchResults
    ) {

        return;

    }


    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    if (query === "") {

        searchResults.innerHTML = `

            <p class="search-message">
                Type a character, dragon,
                house or location.
            </p>

        `;

        return;

    }


    const results =
        searchData.filter(item =>

            item.name
                .toLowerCase()
                .includes(query)

        );


    if (results.length === 0) {

        searchResults.innerHTML = `

            <p class="search-message">
                No results found for
                "${searchInput.value}"
            </p>

        `;

        return;

    }


    searchResults.innerHTML = "";


    results.forEach(item => {

        const resultCard =
            document.createElement("div");


        resultCard.classList.add(
            "search-result-card"
        );


        resultCard.innerHTML = `

            <div class="search-type">
                ${item.type}
            </div>

            <h3>
                ${item.name}
            </h3>

            <span class="search-hint">
                Click to go there →
            </span>

        `;


        resultCard.addEventListener(
            "click",
            () => {

                const target =
                    findSearchTarget(item);


                if (!target) {

                    console.log(
                        "Search target not found:",
                        item.name
                    );

                    return;

                }


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });


                // Highlight target

                target.classList.add(
                    "search-highlight"
                );


                setTimeout(() => {

                    target.classList.remove(
                        "search-highlight"
                    );

                }, 2000);

            }
        );


        searchResults.appendChild(
            resultCard
        );

    });

}


// ========================================
// SEARCH BUTTON
// ========================================

if (searchButton) {

    searchButton.addEventListener(
        "click",
        performSearch
    );

}


// ========================================
// ENTER KEY SEARCH
// ========================================

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


// ========================================
// WELCOME MESSAGE
// ========================================

console.log(
    "🐉 Welcome to the Realms of Westeros!"
);

console.log(
    "🔥 Fire and Blood"
);

console.log(
    "🎵 Background music ready"
);

