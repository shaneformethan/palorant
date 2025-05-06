document.addEventListener('DOMContentLoaded', () => {
    const skillInfo = {
        "paranoia": {
            title: "PARANOIA",
            desc: "Equip a blinding orb; throw it to nearsight and deafen all players it touches, passing through walls."
        },
        "dark-cover": {
            title: "DARK COVER",
            desc: "Equip a shadow orb to create a shadow sphere that blocks vision and move the marker further."
        },
        "shrouded-step": {
            title: "SHROUDED STEP",
            desc: "Equip shrouded step ability and see its range. Channel briefly, then teleport to the marked location."
        },
        "from-the-shadows": {
            title: "FROM THE SHADOWS",
            desc: "Equip a tactical map; teleport to the selected location as a Shade, avoid destruction or cancel teleport."
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
