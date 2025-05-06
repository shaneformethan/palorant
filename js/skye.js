document.addEventListener('DOMContentLoaded', () => {
    const skillInfo = {
        "trailblazer": {
        title: "TRAILBLAZER",
        desc: "Equip a Tasmanian tiger trinket; take control, leap forward, and explode in a concussive blast."
        },
        "guiding-light": {
            title: "GUIDING LIGHT",
            desc: "Equip a hawk trinket; guide it in flight and transform it into a flash for enemies."
        },
        "regrowth": {
            title: "REGROWTH",
            desc: "Equip a healing trinket; hold to channel and heal allies in range and line of sight."
        },
        "seekers": {
            title: "SEEKERS",
            desc: "Equip a Seeker trinket; send out three Seekers to track enemies and nearsight them upon contact."
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
