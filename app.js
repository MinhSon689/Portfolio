particlesJS('particles-js', {
    particles: {
        number: {
            value: 70,
            density: { enable: true, value_area: 800 }
        },
        color: { value: '#fff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3.5, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#fff',
            opacity: 0.2,
            width: 1.2
        },
        move: {
            enable: true,
            speed: 5,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    }
});