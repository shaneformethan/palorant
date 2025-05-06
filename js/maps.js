document.addEventListener('DOMContentLoaded', function() {
    const locationLinks = document.querySelectorAll('.location-container a');
    const mapTitle = document.querySelector('.map-description h1');
    const mapDescription = document.querySelector('.map-description p');
    const mapSlides = document.querySelector('.slider .slides');

    const mapData = {
        fracture: {
            title: 'Fracture',
            description: 'A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.',
            images: [
                "../assets/image/maps/Fracture/1.avif",
                "../assets/image/maps/Fracture/2.avif",
                "../assets/image/maps/Fracture/3.avif",
                "../assets/image/maps/Fracture/4.avif",
                "../assets/image/maps/Fracture/5.avif",
                "../assets/image/maps/Fracture/6.avif",
                "../assets/image/maps/Fracture/7.avif"
            ]
        },
        breeze: {
            title: 'Breeze',
            description: 'Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You\'ll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze',
            images: [
                "../assets/image/maps/Breeze/1.avif",
                "../assets/image/maps/Breeze/2.avif",
                "../assets/image/maps/Breeze/3.avif",
                "../assets/image/maps/Breeze/4.avif",
                "../assets/image/maps/Breeze/5.avif",
                "../assets/image/maps/Breeze/6.avif",
                "../assets/image/maps/Breeze/7.avif"
            ]
        },
        icebox: {
            title: 'Icebox',
            description: 'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.',
            images: [
                "../assets/image/maps/Icebox/1.avif",
                "../assets/image/maps/Icebox/2.avif",
                "../assets/image/maps/Icebox/3.avif",
                "../assets/image/maps/Icebox/4.avif",
                "../assets/image/maps/Icebox/5.avif",
                "../assets/image/maps/Icebox/6.avif",
                "../assets/image/maps/Icebox/7.avif"
            ]
        },
        lotus: {
            title: 'Lotus',
            description: 'A mysterious structure housing an astral conduit radiates with ancient power. Great stone doors provide a variety of movement opportunities and unlock the paths to three mysterious sites.',
            images: [
                "../assets/image/maps/Lotus/1.avif",
                "../assets/image/maps/Lotus/2.avif",
                "../assets/image/maps/Lotus/3.avif",
                "../assets/image/maps/Lotus/4.avif",
                "../assets/image/maps/Lotus/5.avif",
                "../assets/image/maps/Lotus/6.avif",
                "../assets/image/maps/Lotus/7.avif"
            ]
        },
        pearl: {
            title: 'Pearl',
            description: 'Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.',
            images: [
                "../assets/image/maps/Pearl/1.avif",
                "../assets/image/maps/Pearl/2.avif",
                "../assets/image/maps/Pearl/3.avif",
                "../assets/image/maps/Pearl/4.avif",
                "../assets/image/maps/Pearl/5.avif",
                "../assets/image/maps/Pearl/6.avif",
                "../assets/image/maps/Pearl/7.avif"
            ]
        }
    };

    locationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const map = link.getAttribute('data-map');
            const mapInfo = mapData[map];

            mapTitle.textContent = mapInfo.title;
            mapDescription.textContent = mapInfo.description;

            mapSlides.innerHTML = '';
            let loadedCount = 0;
            mapInfo.images.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image;
                img.classList.add('slide');
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === mapInfo.images.length) {
                        currIndex = 0;
                        rebuildDots(mapInfo.images.length);
                        updateSlider();
                        resetTimer();
                    }
                };
                mapSlides.appendChild(img);

                document.querySelector('.map-description').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

    const dotsContainer = document.querySelector(".dots-container");
    let currIndex = 0;
    let startX = 0;
    let slides = [];
    let dots = [];
    const mapSlidesContainer = document.querySelector('.slider .slides');

    function resetTimer() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 4000);
    }

    document.querySelector(".prev").addEventListener("click", () => {
        currIndex = (currIndex - 1 + slides.length) % slides.length;
        updateSlider();
        resetTimer();
    });

    document.querySelector(".next").addEventListener("click", () => {
        currIndex = (currIndex + 1) % slides.length;
        updateSlider();
        resetTimer();
    });

    const slider = document.querySelector(".slider");

    slider.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (diff > 50) {
            currIndex = (currIndex + 1) % slides.length;
        } else if (diff < -50) {
            currIndex = (currIndex - 1 + slides.length) % slides.length;
        }
        updateSlider();
    });

    let autoSlide = setInterval(nextSlide, 8000);

    function nextSlide() {
        currIndex = (currIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        slides = document.querySelectorAll(".slide");
        const slideWidth = slides[0]?.clientWidth || 0;
        mapSlidesContainer.style.transform = `translateX(-${currIndex * slideWidth}px)`;

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[currIndex]) dots[currIndex].classList.add("active");
    }

    function rebuildDots(count) {
        dotsContainer.innerHTML = "";
        for (let i = 0; i < count; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dot.addEventListener("click", () => {
                currIndex = i;
                updateSlider();
                resetTimer();
            });
            dotsContainer.appendChild(dot);
        }
        dots = document.querySelectorAll(".dot");
    }

    window.addEventListener('load', () => {
        const defaultMap = 'fracture';
        const defaultLink = document.querySelector(`[data-map="${defaultMap}"]`);

        if (defaultLink) {
            defaultLink.click();
        } else {
            console.error('Default map link tidak ditemukan!');
        }
    });

    let resizeTimeout;
    let isResizing = false;

    window.addEventListener("resize", () => {
        isResizing = true;

        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {
            isResizing = false;
            updateSlider();
        }, 100);
    });

    function updateSliderIfNotResizing() {
        if (!isResizing) {
            updateSlider();
        }
    }
});
