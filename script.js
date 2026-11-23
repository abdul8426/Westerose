document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", function () {
            navbar.style.background = window.scrollY > 50
                ? "rgba(0, 0, 0, 0.95)"
                : "rgba(0, 0, 0, 0.75)";
        });
    }


    // ========================================
    // BACKGROUND MUSIC
    // ========================================

    const musicBtn = document.getElementById("musicBtn");

    const backgroundMusic = new Audio("audio/got.mp3");

    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.5;

    if (musicBtn) {
        musicBtn.addEventListener("click", function () {

            if (backgroundMusic.paused) {

                backgroundMusic.play()
                    .then(function () {
                        musicBtn.textContent = "🔊";
                    })
                    .catch(function (error) {
                        console.error("Music could not play:", error);
                        musicBtn.textContent = "🔇";
                        alert("Music file not found. Please check audio/got.mp3");
                    });

            } else {

                backgroundMusic.pause();
                musicBtn.textContent = "🔇";

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
            description: "The first Targaryen king to unite the Seven Kingdoms."
        },

        {
            name: "Viserys I Targaryen",
            title: "King of the Andals",
            dragon: "Balerion",
            image: "images/viserys1.jpg",
            description: "The fifth Targaryen king of Westeros."
        },

        {
            name: "Rhaenyra Targaryen",
            title: "The Realm's Delight",
            dragon: "Syrax",
            image: "images/rhaenyra.jpg",
            description: "The firstborn child of King Viserys I and a claimant to the Iron Throne."
        },

        {
            name: "Daemon Targaryen",
            title: "The Rogue Prince",
            dragon: "Caraxes",
            image: "images/daemon.jpg",
            description: "The younger brother of King Viserys I and husband of Rhaenyra."
        },

        {
            name: "Aemond Targaryen",
            title: "One-Eye",
            dragon: "Vhagar",
            image: "images/aemond.jpg",
            description: "Prince of House Targaryen and rider of the mighty Vhagar."
        },

        {
            name: "Aegon II Targaryen",
            title: "King of the Seven Kingdoms",
            dragon: "Sunfyre",
            image: "images/aegon2.jpg",
            description: "Son of Viserys I and Alicent Hightower."
        }

    ];


    // ========================================
    // CHARACTER MODAL
    // ========================================

    const characterModal = document.getElementById("characterModal");

    function openCharacter(character) {

        document.getElementById("modalName").textContent = character.name;
        document.getElementById("modalTitle").textContent = character.title;
        document.getElementById("modalDragon").textContent = "🐉 Dragon: " + character.dragon;
        document.getElementById("modalDescription").textContent = character.description;

        characterModal.classList.add("active");
    }

    function closeModal(modalId, buttonId) {

        const modal = document.getElementById(modalId);
        const button = document.getElementById(buttonId);

        if (!modal) return;

        if (button) {
            button.addEventListener("click", function () {
                modal.classList.remove("active");
            });
        }

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.remove("active");
            }
        });
    }

    closeModal("characterModal", "closeModal");


    // ========================================
    // DISPLAY TARGARYEN CHARACTERS
    // ========================================

    const characterContainer = document.getElementById("targaryenCharacters");

    if (characterContainer) {

        targaryens.forEach(function (character) {

            const card = document.createElement("div");

            card.className = "character-card";

            card.innerHTML = `
                <img
                    src="${character.image}"
                    alt="${character.name}"
                    class="character-image"
                    loading="lazy"
                >

                <h3>${character.name}</h3>

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

            card.addEventListener("click", function () {
                openCharacter(character);
            });

            characterContainer.appendChild(card);

        });

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
            description: "The ancient dragonlord dynasty that conquered and ruled Westeros for centuries."
        },

        Stark: {
            name: "House Stark",
            symbol: "🐺",
            words: "Winter Is Coming",
            seat: "Winterfell",
            description: "One of the oldest noble houses of Westeros and the ruling house of the North."
        },

        Lannister: {
            name: "House Lannister",
            symbol: "🦁",
            words: "Hear Me Roar",
            seat: "Casterly Rock",
            description: "One of the richest and most powerful houses in Westeros."
        },

        Baratheon: {
            name: "House Baratheon",
            symbol: "🦌",
            words: "Ours Is the Fury",
            seat: "Storm's End",
            description: "A powerful house from the Stormlands that took the Iron Throne after Robert's Rebellion."
        },

        Tyrell: {
            name: "House Tyrell",
            symbol: "🌹",
            words: "Growing Strong",
            seat: "Highgarden",
            description: "The powerful ruling house of the Reach."
        },

        Martell: {
            name: "House Martell",
            symbol: "☀️",
            words: "Unbowed, Unbent, Unbroken",
            seat: "Sunspear",
            description: "The ruling house of Dorne, known for its distinctive culture and fierce independence."
        }

    };


    // ========================================
    // HOUSE MODAL
    // ========================================

    function openHouse(house) {

        document.getElementById("houseModalName").textContent = house.name;
        document.getElementById("houseModalSymbol").textContent = house.symbol;
        document.getElementById("houseModalWords").textContent = '"' + house.words + '"';
        document.getElementById("houseModalSeat").textContent = "🏰 Seat: " + house.seat;
        document.getElementById("houseModalDescription").textContent = house.description;

        document.getElementById("houseModal").classList.add("active");
    }

    document.querySelectorAll(".house-card").forEach(function (card) {

        card.addEventListener("click", function () {

            const house = houses[card.dataset.house];

            if (house) openHouse(house);

        });

    });

    closeModal("houseModal", "closeHouseModal");


    // ========================================
    // DRAGON DATABASE
    // ========================================

    const dragons = [

        {
            name: "Balerion",
            title: "The Black Dread",
            rider: "Aegon I Targaryen",
            description: "One of the largest and most fearsome dragons ever to live."
        },

        {
            name: "Vhagar",
            title: "The Queen of Dragons",
            rider: "Aemond Targaryen",
            description: "An ancient dragon who fought during the Targaryen civil war."
        },

        {
            name: "Caraxes",
            title: "The Blood Wyrm",
            rider: "Daemon Targaryen",
            description: "A fierce red dragon known for his terrifying appearance and aggressive nature."
        },

        {
            name: "Syrax",
            title: "The Golden Dragon",
            rider: "Rhaenyra Targaryen",
            description: "The dragon ridden by Princess Rhaenyra Targaryen."
        },

        {
            name: "Sunfyre",
            title: "The Golden",
            rider: "Aegon II Targaryen",
            description: "A beautiful golden dragon with pale wings."
        },

        {
            name: "Meleys",
            title: "The Red Queen",
            rider: "Rhaenys Targaryen",
            description: "A powerful scarlet dragon known for her speed."
        }

    ];


    // ========================================
    // DISPLAY DRAGONS
    // ========================================

    const dragonContainer = document.getElementById("dragonContainer");

    if (dragonContainer) {

        dragons.forEach(function (dragon) {

            const card = document.createElement("div");

            card.className = "dragon-card";

            card.innerHTML = `
                <div class="dragon-icon">🐉</div>

                <h3>${dragon.name}</h3>

                <p class="dragon-title">${dragon.title}</p>

                <p class="dragon-rider">Rider: ${dragon.rider}</p>

                <p class="dragon-description">${dragon.description}</p>
            `;

            card.addEventListener("click", function () {

                document.getElementById("dragonModalName").textContent = dragon.name;
                document.getElementById("dragonModalTitle").textContent = dragon.title;
                document.getElementById("dragonModalRider").textContent = "🐉 Rider: " + dragon.rider;
                document.getElementById("dragonModalDescription").textContent = dragon.description;

                document.getElementById("dragonModal").classList.add("active");

            });

            dragonContainer.appendChild(card);

        });

    }

    closeModal("dragonModal", "closeDragonModal");


    // ========================================
    // WESTEROS LOCATIONS
    // ========================================

    const locations = {

        Winterfell: {
            name: "Winterfell",
            symbol: "🐺",
            house: "House Stark",
            description: "The ancient seat of House Stark and the heart of the North."
        },

        Dragonstone: {
            name: "Dragonstone",
            symbol: "🐉",
            house: "House Targaryen",
            description: "The ancestral seat of House Targaryen and a stronghold on the Blackwater."
        },

        "Kings Landing": {
            name: "King's Landing",
            symbol: "👑",
            house: "The Iron Throne",
            description: "The capital of the Seven Kingdoms and the seat of the Iron Throne."
        },

        "Casterly Rock": {
            name: "Casterly Rock",
            symbol: "🦁",
            house: "House Lannister",
            description: "The legendary fortress and seat of House Lannister."
        },

        Highgarden: {
            name: "Highgarden",
            symbol: "🌹",
            house: "House Tyrell",
            description: "The beautiful seat of House Tyrell in the Reach."
        },

        Sunspear: {
            name: "Sunspear",
            symbol: "☀️",
            house: "House Martell",
            description: "The capital and seat of House Martell in Dorne."
        }

    };


    // ========================================
    // LOCATION MODAL
    // ========================================

    document.querySelectorAll(".location").forEach(function (button) {

        button.addEventListener("click", function () {

            const location = locations[button.dataset.location];

            if (!location) return;

            document.getElementById("locationModalSymbol").textContent = location.symbol;
            document.getElementById("locationModalName").textContent = location.name;
            document.getElementById("locationModalHouse").textContent = location.house;
            document.getElementById("locationModalDescription").textContent = location.description;

            document.getElementById("locationModal").classList.add("active");

        });

    });

    closeModal("locationModal", "closeLocationModal");


    // ========================================
    // TIMELINE EVENTS
    // ========================================

    const timelineEvents = [

        {
            year: "2 BC",
            title: "Aegon's Conquest",
            icon: "🔥",
            description: "Aegon I Targaryen begins his conquest of Westeros with his sisters Visenya and Rhaenys. The Iron Throne is created from the swords of defeated enemies."
        },

        {
            year: "37 AC",
            title: "Jaehaerys I",
            icon: "👑",
            description: "Jaehaerys I becomes king and begins a long period of peace and prosperity known as the reign of the Conciliator."
        },

        {
            year: "129 AC",
            title: "The Dance of the Dragons",
            icon: "🐉",
            description: "A devastating civil war begins between supporters of Rhaenyra Targaryen and Aegon II Targaryen."
        },

        {
            year: "282 AC",
            title: "Robert's Rebellion",
            icon: "⚔️",
            description: "Robert Baratheon, Eddard Stark and their allies rebel against King Aerys II Targaryen."
        },

        {
            year: "298 AC",
            title: "The Game of Thrones",
            icon: "🐺",
            description: "The great houses struggle for control of the Iron Throne while an ancient threat awakens beyond the Wall."
        }

    ];


    // ========================================
    // TIMELINE MODAL
    // ========================================

    document.querySelectorAll(".timeline-item").forEach(function (item, index) {

        item.style.cursor = "pointer";

        item.addEventListener("click", function () {

            const event = timelineEvents[index];

            if (!event) return;

            document.getElementById("timelineModalIcon").textContent = event.icon;
            document.getElementById("timelineModalTitle").textContent = event.title;
            document.getElementById("timelineModalYear").textContent = event.year;
            document.getElementById("timelineModalDescription").textContent = event.description;

            document.getElementById("timelineModal").classList.add("active");

        });

    });

    closeModal("timelineModal", "closeTimelineModal");


    // ========================================
    // SEARCH WESTEROS
    // ========================================

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");

    const searchData = [

        ...targaryens.map(item => ({
            name: item.name,
            type: "Targaryen",
            keywords: item.dragon + " " + item.title,
            action: function () {
                openCharacter(item);
            }
        })),

        ...dragons.map(item => ({
            name: item.name,
            type: "Dragon",
            keywords: item.title + " " + item.rider,
            action: function () {
                const card = Array.from(document.querySelectorAll(".dragon-card"))
                    .find(element => element.querySelector("h3")?.textContent === item.name);

                if (card) card.click();
            }
        })),

        ...Object.values(houses).map(item => ({
            name: item.name,
            type: "House",
            keywords: item.words + " " + item.seat,
            action: function () {
                openHouse(item);
            }
        })),

        ...Object.values(locations).map(item => ({
            name: item.name,
            type: "Location",
            keywords: item.house,
            action: function () {
                document.getElementById("locationModalSymbol").textContent = item.symbol;
                document.getElementById("locationModalName").textContent = item.name;
                document.getElementById("locationModalHouse").textContent = item.house;
                document.getElementById("locationModalDescription").textContent = item.description;
                document.getElementById("locationModal").classList.add("active");
            }
        })),

        ...timelineEvents.map(item => ({
            name: item.title,
            type: "History",
            keywords: item.year + " " + item.description,
            action: function () {
                document.getElementById("timelineModalIcon").textContent = item.icon;
                document.getElementById("timelineModalTitle").textContent = item.title;
                document.getElementById("timelineModalYear").textContent = item.year;
                document.getElementById("timelineModalDescription").textContent = item.description;
                document.getElementById("timelineModal").classList.add("active");
            }
        }))

    ];


    function performSearch() {

        if (!searchInput || !searchResults) return;

        const query = searchInput.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (!query) {
            searchResults.textContent = "Please enter a name to search.";
            return;
        }

        const results = searchData.filter(function (item) {

            return (
                item.name.toLowerCase().includes(query) ||
                item.type.toLowerCase().includes(query) ||
                item.keywords.toLowerCase().includes(query)
            );

        });

        if (results.length === 0) {
            searchResults.textContent = "No results found. Try another search.";
            return;
        }

        results.forEach(function (item) {

            const result = document.createElement("button");

            result.className = "search-result-item";

            result.textContent = item.name + " — " + item.type;

            result.addEventListener("click", item.action);

            searchResults.appendChild(result);

        });

    }


    if (searchButton) {
        searchButton.addEventListener("click", performSearch);
    }

    if (searchInput) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                performSearch();
            }

        });

    }


    // ========================================
    // DISCOVER DYNASTY BUTTON
    // ========================================

    const discoverButton = document.getElementById("discoverDynasty");

    if (discoverButton) {

        discoverButton.addEventListener("click", function () {

            document.getElementById("targaryenCharacters")
                .scrollIntoView({ behavior: "smooth" });

        });

    }


    console.log("Realms of Westeros loaded successfully!");

});
