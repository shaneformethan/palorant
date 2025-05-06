document.addEventListener('DOMContentLoaded', () => {
    const skillInfo = {
        "stealth-drone": {
            title: "STEALTH DRONE",
            desc: "Equip a stealth drone; throw it forward to control its movement and trigger a pulse to reveal enemies."
        },
        "special-delivery": {
            title: "SPECIAL DELIVERY",
            desc: "Equip a sticky grenade; launch it to stick to surfaces and explode, concussing enemies caught in the blast."
        },
        "guided-salvo": {
            title: "GUIDED SALVO",
            desc: "Equip an AR targeting system; select target locations and launch missiles that autonomously detonate on arrival."
        },
        "armageddon": {
            title: "ARMAGEDDON",
            desc: "Equip a tactical strike map; select and launch an attack with a wave of explosions along the strike path."
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
