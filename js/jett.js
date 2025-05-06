document.addEventListener('DOMContentLoaded', () => {
    const skillInfo = {
        "cloudburst": {
            title: "CLOUDBURST",
            desc: "Instantly throw a smoke projectile that expands on impact and can be curved toward your crosshair direction."
        },
        "updraft": {
            title: "UPDRAFT",
            desc: "Instantly launch Jett high into the air, giving her vertical mobility for escapes or repositioning advantage."
        },
        "tailwind": {
            title: "TAILWIND",
            desc: "Activate to ready a dash; reuse to propel in movement direction or forward if standing still."
        },
        "blade-storm": {
            title: "BLADE STORM",
            desc: "Equip deadly throwing knives; fire one to recharge on kill or alt fire to throw all remaining."
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
