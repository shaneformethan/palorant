document.addEventListener('DOMContentLoaded', () => {
    const skillInfo = {
        "incendiary": {
            title: "INCENDIARY",
            desc: "Equip and fire an incendiary grenade launcher to create a fire zone that damages players over time."
        },
        "sky-smoke": {
            title: "SKY SMOKES",
            desc: "Equip a tactical map, mark smoke locations, and fire to deploy long-lasting smoke clouds blocking vision."
        },
        "stim-beacon": {
            title: "STIM BEACON",
            desc: "Instantly toss a beacon that creates a field, granting Combat Stim and Speed Boost to players."
        },
        "orbital-strike": {
            title: "ORBITAL STRIKE",
            desc: "Equip a tactical map, fire to launch an orbital laser that deals high damage-over-time to enemies."
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
