tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Orbitron', 'sans-serif'],
                mono: ['Share Tech Mono', 'monospace'],
            },
            colors: {
                jarvis: {
                    cyan: '#00f0ff',
                    dark: '#030712',
                    blue: '#0055ff',
                    light: '#f0f9ff'
                }
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'spin-reverse-slow': 'spin-reverse 15s linear infinite',
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scan': 'scanline 6s linear infinite',
            },
            keyframes: {
                'spin-reverse': {
                    '0%': { transform: 'rotate(360deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
                'scanline': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                }
            }
        }
    }
};

