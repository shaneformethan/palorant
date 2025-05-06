document.addEventListener('DOMContentLoaded', () => {
    const skillInfo = {
        "curveball": {
            title: "CURVEBALL",
            desc: "Equip flare orb; throw to curve left or right and blind all players in line of sight."
        },
        "hot-hands": {
            title: "HOT HANDS",
            desc: "Equip fireball; throw to create a zone that heals Phoenix and burns enemies within its radius."
        },
        "blaze": {
            title: "BLAZE",
            desc: "Equip a flame wall; create a barrier that heals allies and damages enemies passing through fire."
        },
        "run-it-back": {
            title: "RUN IT BACK",
            desc: "Mark your location; if killed during ability, instantly revive at that location with full health."
        }
    };

    const icons = document.querySelectorAll('.icon, .icon-active');
    const titleEl = document.getElementById('skill-title');
    const descEl = document.getElementById('skill-desc');

    if (icons.length > 0) {
        icons[0].click();
    }

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            icons.forEach(i => {
                i.classList.remove('active');
                i.classList.remove('icon-active');
            });

            if (icon.classList.contains('icon-active')) {
                icon.classList.add('icon-active');
            } else {
                icon.classList.add('active');
            }

            const key = icon.dataset.skill;
            const skill = skillInfo[key];
            if (skill) {
                titleEl.textContent = skill.title;
                descEl.textContent = skill.desc;
            }
        });
    });
});
