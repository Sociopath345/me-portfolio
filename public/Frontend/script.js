// ==========================================================================
// HEIN HLYAN PORTFOLIO - SINGLE PAGE APPLICATION CORE
// ==========================================================================

const rootElement = document.getElementById('root');

if (rootElement) {
    rootElement.innerHTML = `
    <!-- Ambient Scanline Effect -->
    <div class="scanline-overlay animate-scan"></div>

    <!-- Background Cursor Glow Spotlight -->
    <div id="cursor-glow" class="cursor-glow-bg pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-300"></div>

    <!-- Custom Stark Arc Reactor HUD Cursor -->
    <div id="hud-cursor" class="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150 hidden md:block">
        <!-- Arc Reactor Mode (Default: Tony Stark Arc Reactor Upright Triangle) -->
        <div id="cursor-reactor" class="transition-all duration-200 transform scale-100 opacity-100 flex items-center justify-center">
            <svg class="w-6 h-6 drop-shadow-[0_0_8px_rgba(0,85,255,0.7)] dark:drop-shadow-[0_0_10px_rgba(0,240,255,0.95)] text-jarvis-blue dark:text-jarvis-cyan" viewBox="0 0 24 24" fill="none">
                <polygon points="12,3 3,19 21,19" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" class="fill-jarvis-blue/15 dark:fill-jarvis-cyan/15" />
                <polygon points="12,8 6.5,17 17.5,17" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" class="fill-jarvis-blue/30 dark:fill-jarvis-cyan/30" />
                <circle cx="12" cy="14" r="2" fill="currentColor" class="animate-pulse" />
            </svg>
        </div>

        <!-- Target Scope Mode (When hovering clickable buttons/links) -->
        <div id="cursor-target" class="transition-all duration-200 transform scale-50 opacity-0 hidden flex items-center justify-center">
            <svg class="w-11 h-11 drop-shadow-[0_0_12px_rgba(0,85,255,0.85)] dark:drop-shadow-[0_0_15px_rgba(0,240,255,1)] text-jarvis-blue dark:text-jarvis-cyan" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="18" stroke="currentColor" stroke-width="1.6" stroke-dasharray="8 6" opacity="0.9" class="animate-spin-slow" style="transform-origin: 22px 22px;" />
                <circle cx="22" cy="22" r="10" stroke="currentColor" stroke-width="1.2" opacity="0.7" />
                <line x1="22" y1="2" x2="22" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <line x1="22" y1="37" x2="22" y2="42" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <line x1="2" y1="22" x2="7" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <line x1="37" y1="22" x2="42" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <circle cx="22" cy="22" r="2.5" fill="currentColor" />
            </svg>
        </div>

        <!-- Text Selection Mode (Glowing I-Beam symbol for chatbot/text input) -->
        <div id="cursor-text" class="transition-all duration-200 transform scale-100 opacity-0 hidden flex items-center justify-center">
            <svg class="w-4 h-6 drop-shadow-[0_0_8px_rgba(0,85,255,0.8)] dark:drop-shadow-[0_0_10px_rgba(0,240,255,1)] text-jarvis-blue dark:text-jarvis-cyan" viewBox="0 0 16 24" fill="none">
                <line x1="3" y1="2" x2="13" y2="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <line x1="8" y1="2" x2="8" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <line x1="3" y1="22" x2="13" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
    </div>

    <!-- Navigation / Top HUD Bar -->
    <nav
        class="fixed top-0 w-full z-40 backdrop-blur-md border-b border-jarvis-blue/30 dark:border-jarvis-cyan/30 bg-white/80 dark:bg-jarvis-dark/80">
        <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div class="flex items-center justify-between h-16">
                <!-- Logo / Status (Leads to About / First Division) -->
                <a href="#about" class="flex items-center gap-3 cursor-pointer group flex-shrink-0 whitespace-nowrap mr-4">
                    <div class="w-3 h-3 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan animate-pulse flex-shrink-0"></div>
                    <span class="font-sans font-bold tracking-widest text-sm sm:text-base xl:text-lg whitespace-nowrap group-hover:text-jarvis-blue dark:group-hover:text-jarvis-cyan transition-colors">HEIN HLYAN // PORTFOLIO</span>
                </a>

                <!-- Right Navigation & Controls -->
                <div class="flex items-center gap-2 lg:gap-3 xl:gap-4 flex-shrink-0">
                    <!-- Navigation Links -->
                    <div class="hidden lg:flex items-center gap-2 xl:gap-3.5 2xl:gap-5 text-xs xl:text-sm tracking-wider flex-shrink-0">
                        <a href="#about"
                            class="font-bold text-slate-700 dark:text-jarvis-cyan/70 hover:text-jarvis-blue dark:hover:text-white transition-colors whitespace-nowrap">ABOUT</a>
                        <a href="#cv"
                            class="font-bold text-slate-700 dark:text-jarvis-cyan/70 hover:text-jarvis-blue dark:hover:text-white transition-colors whitespace-nowrap">CV</a>
                        <a href="#projects"
                            class="font-bold text-slate-700 dark:text-jarvis-cyan/70 hover:text-jarvis-blue dark:hover:text-white transition-colors whitespace-nowrap">PROJECTS</a>
                        <a href="#achievements"
                            class="font-bold text-slate-700 dark:text-jarvis-cyan/70 hover:text-jarvis-blue dark:hover:text-white transition-colors whitespace-nowrap">ACHIEVEMENTS</a>
                        <a href="#leadership"
                            class="font-bold text-slate-700 dark:text-jarvis-cyan/70 hover:text-jarvis-blue dark:hover:text-white transition-colors whitespace-nowrap">LEADERSHIP</a>
                        <a href="#certificates"
                            class="font-bold text-slate-700 dark:text-jarvis-cyan/70 hover:text-jarvis-blue dark:hover:text-white transition-colors whitespace-nowrap">CERTIFICATES</a>
                        <a href="#activities"
                            class="font-bold text-slate-700 dark:text-jarvis-cyan/70 hover:text-jarvis-blue dark:hover:text-white transition-colors whitespace-nowrap">ACTIVITIES</a>
                        <a href="#contact"
                            class="font-bold px-2.5 xl:px-3 py-1 hud-border hud-corners hover-glow text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white bg-jarvis-blue/10 dark:bg-jarvis-cyan/15 hover:bg-jarvis-blue/20 dark:hover:bg-jarvis-cyan/25 transition-all whitespace-nowrap shadow-[0_0_10px_rgba(0,85,255,0.2)] dark:shadow-[0_0_10px_rgba(0,240,255,0.25)]">CONTACT ME</a>
                        <a href="#ai-assistant"
                            class="font-bold text-slate-700 dark:text-jarvis-cyan/70 hover:text-jarvis-blue dark:hover:text-white transition-colors whitespace-nowrap">AI ASSISTANT</a>
                    </div>

                    <!-- Dark Mode Toggle Button (pushed to right-most side, original vector SVG, no text) -->
                    <button id="themeToggle" type="button" title="Toggle Dark/Light Mode"
                        class="hud-border hud-corners p-2 text-xs font-bold hover-glow transition-all flex items-center justify-center bg-jarvis-blue/10 dark:bg-jarvis-cyan/15 hover:bg-jarvis-blue/20 dark:hover:bg-jarvis-cyan/25 text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white cursor-pointer shadow-[0_0_10px_rgba(0,85,255,0.2)] dark:shadow-[0_0_10px_rgba(0,240,255,0.25)]">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="themeIcon">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Interface -->
    <main class="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">

        <!-- Hero / About Section -->
        <section id="about" class="min-h-[75vh] flex flex-col items-center justify-center relative mb-20 scroll-mt-20">

            <!-- AI Core Graphic & Photo -->
            <div class="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12">
                <!-- Outer Ring -->
                <div
                    class="absolute inset-0 rounded-full border-4 border-dashed border-jarvis-blue/40 dark:border-jarvis-cyan/40 animate-spin-slow">
                </div>
                <!-- Middle Ring -->
                <div class="absolute inset-4 rounded-full border-2 border-jarvis-blue/60 dark:border-jarvis-cyan/60 animate-spin-reverse-slow"
                    style="border-top-color: transparent; border-bottom-color: transparent;"></div>
                <!-- Inner Ring -->
                <div class="absolute inset-10 rounded-full border border-jarvis-blue/80 dark:border-jarvis-cyan/80 animate-spin-slow"
                    style="border-left-color: transparent; border-right-color: transparent;"></div>

                <!-- Core Center with Photo -->
                <div class="absolute inset-0 flex items-center justify-center z-10">
                    <div
                        class="photo-container group w-32 h-32 md:w-40 md:h-40 bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 hover:bg-transparent dark:hover:bg-transparent rounded-full backdrop-blur-sm border-2 border-jarvis-blue dark:border-jarvis-cyan shadow-[0_0_30px_rgba(0,85,255,0.4)] dark:shadow-[0_0_30px_rgba(0,240,255,0.5)] flex items-center justify-center overflow-hidden p-1 transition-all duration-500">
                        <!-- User Photo -->
                        <img src="../photos/HeinHlyanPpp.jpg" alt="Hein Hlyan"
                            class="photo-avatar w-full h-full object-cover rounded-full mix-blend-luminosity dark:mix-blend-luminosity hover:mix-blend-normal dark:hover:mix-blend-normal group-hover:mix-blend-normal transition-all duration-500">
                    </div>
                </div>

                <!-- HUD Decorative Lines -->
                <div class="absolute -left-12 top-1/2 w-8 h-[1px] bg-jarvis-blue dark:bg-jarvis-cyan"></div>
                <div class="absolute -right-12 top-1/2 w-8 h-[1px] bg-jarvis-blue dark:bg-jarvis-cyan"></div>
                <div class="absolute left-1/2 -top-12 w-[1px] h-8 bg-jarvis-blue dark:bg-jarvis-cyan"></div>
                <div class="absolute left-1/2 -bottom-12 w-[1px] h-8 bg-jarvis-blue dark:bg-jarvis-cyan"></div>
            </div>

            <!-- Typing Greeting -->
            <div class="text-center w-full max-w-3xl mt-8">
                <p class="text-xs md:text-sm tracking-widest text-jarvis-blue font-bold dark:text-jarvis-cyan/70 mb-2">[
                    Hello there, I'm ]</p>
                <h1
                    class="font-sans text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-tight text-slate-900 dark:text-white">
                    <span id="typewriter"></span><span id="cursor-main" class="cursor-blink"></span>
                </h1>
                <h2
                    class="font-sans text-xl md:text-3xl lg:text-4xl font-semibold tracking-wider text-jarvis-blue dark:text-jarvis-cyan/90 mt-2 mb-6">
                    <span id="typewriter-sub"></span><span id="cursor-sub" class="cursor-blink hidden"></span>
                </h2>
                <p
                    class="text-base md:text-lg text-slate-700 dark:text-jarvis-cyan/90 max-w-2xl mx-auto leading-relaxed border-l-2 border-jarvis-blue dark:border-jarvis-cyan pl-4 text-left font-semibold dark:font-normal">
                    "I am a final-year computer science student at the University of Information Technology. I build impactful AI and full-stack software to solve complex problems. I focus on machine learning, computer vision, and modern web architecture. I thrive in environments that demand both rapid execution and scalable design. Beyond the codebase, my experience as a student representative at the university has reinforced my ability to collaborate effectively and drive technical projects from initial concept to final deployment."
                </p>

                <!-- Social Accounts Matrix (Circle HUD Buttons) -->
                <div class="flex items-center justify-center gap-3 sm:gap-4 mt-8 flex-wrap">
                    <!-- Facebook -->
                    <a href="https://www.facebook.com/hein.hlyan.9" target="_blank" rel="noopener noreferrer" title="Facebook // Hein Hlyan"
                        class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>

                    <!-- LinkedIn -->
                    <a href="https://www.linkedin.com/in/hein-hlyan" target="_blank" rel="noopener noreferrer" title="LinkedIn // Hein Hlyan"
                        class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.4 9.74V9.93H5.06v8.57h2.8z"/>
                        </svg>
                    </a>

                    <!-- Instagram -->
                    <a href="https://www.instagram.com/heinhlyan2945/" target="_blank" rel="noopener noreferrer" title="Instagram // Hein Hlyan"
                        class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>

                    <!-- Telegram -->
                    <a href="https://t.me/Sociopath345" target="_blank" rel="noopener noreferrer" title="Telegram // @Sociopath345"
                        class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                    </a>

                    <!-- TikTok -->
                    <a href="https://www.tiktok.com/@heneryhlyan" target="_blank" rel="noopener noreferrer" title="TikTok // @heneryhlyan"
                        class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                    </a>

                    <!-- GitHub -->
                    <a href="https://github.com/Sociopath345" target="_blank" rel="noopener noreferrer" title="GitHub // @Sociopath345"
                        class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                    </a>
                </div>

                <!-- Primary Action Matrix (Rectangle HUD Buttons) -->
                <div class="flex items-center justify-center gap-4 sm:gap-6 mt-8 flex-wrap">
                    <!-- View creations -->
                    <a href="#projects"
                        class="inline-flex items-center gap-2.5 px-6 py-3 hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/50 backdrop-blur-sm text-xs sm:text-sm font-sans font-bold tracking-widest text-jarvis-blue dark:text-jarvis-cyan hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-md dark:shadow-none group">
                        <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        <span>VIEW CREATIONS //</span>
                    </a>

                    <!-- Initiate Handshake -->
                    <a href="#contact"
                        class="inline-flex items-center gap-2.5 px-6 py-3 hud-border hud-corners hover-glow bg-jarvis-blue/15 dark:bg-jarvis-cyan/15 backdrop-blur-sm text-xs sm:text-sm font-sans font-bold tracking-widest text-jarvis-blue dark:text-jarvis-cyan hover:bg-jarvis-blue dark:hover:bg-jarvis-cyan hover:text-white dark:hover:text-jarvis-dark transition-all duration-300 shadow-md dark:shadow-none group">
                        <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        <span>INITIATE HANDSHAKE //</span>
                    </a>

                    <!-- View CV -->
                    <a href="#cv"
                        class="inline-flex items-center gap-2.5 px-6 py-3 hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/50 backdrop-blur-sm text-xs sm:text-sm font-sans font-bold tracking-widest text-jarvis-blue dark:text-jarvis-cyan hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-md dark:shadow-none group">
                        <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span>VIEW CV //</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="mb-24 pt-16 scroll-mt-20">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="font-sans text-2xl font-bold tracking-widest text-slate-900 dark:text-white">PROJECT_ARCHIVES //
                </h2>
                <div
                    class="h-[1px] flex-1 bg-gradient-to-r from-jarvis-blue dark:from-jarvis-cyan to-transparent opacity-50">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Project Card 1: Sutadhama Quizzes -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div
                        class="h-48 bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style="background-image: url('../photos/Sutadhama.png');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                        <span
                            class="font-sans text-lg sm:text-xl font-bold tracking-widest opacity-90 group-hover:scale-105 transition-transform text-white drop-shadow-md z-10 text-center px-3">SUTADHAMA QUIZZES</span>
                        <div
                            class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-cyan z-10">
                            REC: ON</div>
                        <div class="absolute bottom-2 left-2 flex gap-1 z-10">
                            <div class="w-1 h-3 bg-jarvis-cyan opacity-40"></div>
                            <div class="w-1 h-2 bg-jarvis-cyan opacity-80"></div>
                            <div class="w-1 h-4 bg-jarvis-cyan"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-bold tracking-wider text-lg sm:text-xl text-slate-900 dark:text-white">Sutadhama Quizzes</h3>
                                <span
                                    class="text-sm border border-jarvis-blue/50 dark:border-jarvis-cyan/50 px-2.5 py-0.5 font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono">1</span>
                            </div>
                            <p
                                class="text-base text-slate-700 dark:text-jarvis-cyan/90 font-semibold dark:font-normal mb-4 leading-relaxed min-h-[4.5rem]">
                                A zero-profit educational platform for Buddhist exam prep in Myanmar, featuring customizable quizzes, progress tracking, and database-free proportional sampling.</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 text-sm font-bold dark:font-normal mb-4">
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">JavaScript</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">React 18</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Tailwind CSS 3</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">PostCSS</span>
                            </div>
                            <div class="flex items-center gap-4 pt-3 border-t border-jarvis-blue/20 dark:border-jarvis-cyan/20 text-sm">
                                <a href="https://www.sutadhamaquizzes.org/" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-jarvis-blue dark:text-jarvis-cyan hover:underline">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    <span>LIVE DEMO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project Card 2: Lann Sa -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div
                        class="h-48 bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style="background-image: url('../photos/Lannsa.png');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                        <span
                            class="font-sans text-lg sm:text-xl font-bold tracking-widest opacity-90 group-hover:scale-105 transition-transform text-white drop-shadow-md z-10 text-center px-3">LANN SA</span>
                        <div
                            class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-cyan z-10">
                            REC: ON</div>
                        <div class="absolute bottom-2 left-2 flex gap-1 z-10">
                            <div class="w-1 h-3 bg-jarvis-cyan opacity-40"></div>
                            <div class="w-1 h-2 bg-jarvis-cyan opacity-80"></div>
                            <div class="w-1 h-4 bg-jarvis-cyan"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-bold tracking-wider text-lg sm:text-xl text-slate-900 dark:text-white">Lann Sa</h3>
                                <span
                                    class="text-sm border border-jarvis-blue/50 dark:border-jarvis-cyan/50 px-2.5 py-0.5 font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono">2</span>
                            </div>
                            <p
                                class="text-base text-slate-700 dark:text-jarvis-cyan/90 font-semibold dark:font-normal mb-4 leading-relaxed min-h-[4.5rem]">
                                An agentic AI powerhouse that accelerates startup ideation, automates complex execution workflows, and orchestrates intelligent data-driven business roadmaps.</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 text-sm font-bold dark:font-normal mb-4">
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">React</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">TypeScript</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">AI Agents</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Tailwind CSS</span>
                            </div>
                            <div class="flex items-center gap-4 pt-3 border-t border-jarvis-blue/20 dark:border-jarvis-cyan/20 text-sm">
                                <a href="https://startup-agentic.netlify.app" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-jarvis-blue dark:text-jarvis-cyan hover:underline">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    <span>LIVE DEMO</span>
                                </a>
                                <a href="https://github.com/Sociopath345/Start-Up-Agentic" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white transition-colors">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                    <span>SOURCE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project Card 3: Bluetooth Gesture Drive -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div
                        class="h-48 bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style="background-image: url('../photos/achievement.jpg');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                        <span
                            class="font-sans text-lg sm:text-xl font-bold tracking-widest opacity-90 group-hover:scale-105 transition-transform text-white drop-shadow-md z-10 text-center px-3">BLUETOOTH GESTURE DRIVE</span>
                        <div
                            class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-cyan z-10">
                            REC: ON</div>
                        <div class="absolute bottom-2 left-2 flex gap-1 z-10">
                            <div class="w-1 h-3 bg-jarvis-cyan opacity-40"></div>
                            <div class="w-1 h-2 bg-jarvis-cyan opacity-80"></div>
                            <div class="w-1 h-4 bg-jarvis-cyan"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-bold tracking-wider text-lg sm:text-xl text-slate-900 dark:text-white">Bluetooth Gesture Drive</h3>
                                <span
                                    class="text-sm border border-jarvis-blue/50 dark:border-jarvis-cyan/50 px-2.5 py-0.5 font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono">3</span>
                            </div>
                            <p
                                class="text-base text-slate-700 dark:text-jarvis-cyan/90 font-semibold dark:font-normal mb-4 leading-relaxed min-h-[4.5rem]">
                                An Arduino-based 4WD robotic vehicle engineered for intuitive wireless motion control via an MPU6050 gesture-sensing glove and HC-05 Bluetooth transceiver.</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 text-sm font-bold dark:font-normal mb-4">
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Arduino</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">C++</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Embedded</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Robotics</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Bluetooth</span>
                            </div>
                            <div class="flex items-center gap-4 pt-3 border-t border-jarvis-blue/20 dark:border-jarvis-cyan/20 text-sm">
                                <a href="https://github.com/Sociopath345/bluetooth-gesture-drive" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white transition-colors">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                    <span>SOURCE CODE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project Card 4: Vision Shield -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div
                        class="h-48 bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style="background-image: url('../photos/VisionShield.png');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                        <span
                            class="font-sans text-lg sm:text-xl font-bold tracking-widest opacity-90 group-hover:scale-105 transition-transform text-white drop-shadow-md z-10 text-center px-3">VISION SHIELD</span>
                        <div
                            class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-cyan z-10">
                            REC: ON</div>
                        <div class="absolute bottom-2 left-2 flex gap-1 z-10">
                            <div class="w-1 h-3 bg-jarvis-cyan opacity-40"></div>
                            <div class="w-1 h-2 bg-jarvis-cyan opacity-80"></div>
                            <div class="w-1 h-4 bg-jarvis-cyan"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-bold tracking-wider text-lg sm:text-xl text-slate-900 dark:text-white">Vision Shield</h3>
                                <span
                                    class="text-sm border border-jarvis-blue/50 dark:border-jarvis-cyan/50 px-2.5 py-0.5 font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono">4</span>
                            </div>
                            <p
                                class="text-base text-slate-700 dark:text-jarvis-cyan/90 font-semibold dark:font-normal mb-4 leading-relaxed min-h-[4.5rem]">
                                An AI-assisted bilateral retinal screening system detecting diabetic retinopathy, AMD, and glaucoma using three specialized EfficientNet-B0 inference models.</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 text-sm font-bold dark:font-normal mb-4">
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Python</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Flask</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">PyTorch</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">EfficientNet</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">JavaScript</span>
                            </div>
                            <div class="flex items-center gap-4 pt-3 border-t border-jarvis-blue/20 dark:border-jarvis-cyan/20 text-sm">
                                <a href="https://vision-shield-frontend.vercel.app/" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-jarvis-blue dark:text-jarvis-cyan hover:underline">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    <span>LIVE DEMO</span>
                                </a>
                                <a href="https://github.com/Sociopath345/Vision-Shield" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white transition-colors">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                    <span>SOURCE CODE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project Card 5: Kyber Connect -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div
                        class="h-48 bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style="background-image: url('../photos/KyberConnect.png');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                        <span
                            class="font-sans text-lg sm:text-xl font-bold tracking-widest opacity-90 group-hover:scale-105 transition-transform text-white drop-shadow-md z-10 text-center px-3">KYBER CONNECT</span>
                        <div
                            class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-cyan z-10">
                            REC: ON</div>
                        <div class="absolute bottom-2 left-2 flex gap-1 z-10">
                            <div class="w-1 h-3 bg-jarvis-cyan opacity-40"></div>
                            <div class="w-1 h-2 bg-jarvis-cyan opacity-80"></div>
                            <div class="w-1 h-4 bg-jarvis-cyan"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-bold tracking-wider text-lg sm:text-xl text-slate-900 dark:text-white">Kyber Connect</h3>
                                <span
                                    class="text-sm border border-jarvis-blue/50 dark:border-jarvis-cyan/50 px-2.5 py-0.5 font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono">5</span>
                            </div>
                            <p
                                class="text-base text-slate-700 dark:text-jarvis-cyan/90 font-semibold dark:font-normal mb-4 leading-relaxed min-h-[4.5rem]">
                                A secure authentication backend for skill-sharing platforms, featuring strict password validation, duplicate prevention, email OTP verification, and JWT session handling.</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 text-sm font-bold dark:font-normal mb-4">
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">PHP</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">MySQL</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">JWT</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">PHPMailer</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">REST API</span>
                            </div>
                            <div class="flex items-center gap-4 pt-3 border-t border-jarvis-blue/20 dark:border-jarvis-cyan/20 text-sm">
                                <a href="https://github.com/Sociopath345/backend-for-register-login-logout" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white transition-colors">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                    <span>SOURCE CODE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project Card 6: Floriscan -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div
                        class="h-48 bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style="background-image: url('../photos/Floriscan.png');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                        <span
                            class="font-sans text-lg sm:text-xl font-bold tracking-widest opacity-90 group-hover:scale-105 transition-transform text-white drop-shadow-md z-10 text-center px-3">FLORISCAN</span>
                        <div
                            class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-cyan z-10">
                            REC: ON</div>
                        <div class="absolute bottom-2 left-2 flex gap-1 z-10">
                            <div class="w-1 h-3 bg-jarvis-cyan opacity-40"></div>
                            <div class="w-1 h-2 bg-jarvis-cyan opacity-80"></div>
                            <div class="w-1 h-4 bg-jarvis-cyan"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-bold tracking-wider text-lg sm:text-xl text-slate-900 dark:text-white">Floriscan</h3>
                                <span
                                    class="text-sm border border-jarvis-blue/50 dark:border-jarvis-cyan/50 px-2.5 py-0.5 font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono">6</span>
                            </div>
                            <p
                                class="text-base text-slate-700 dark:text-jarvis-cyan/90 font-semibold dark:font-normal mb-4 leading-relaxed min-h-[4.5rem]">
                                A bilingual flower-identification web platform utilizing computer vision pipelines to classify 10 floral species and determine bloom stages with care insights.</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 text-sm font-bold dark:font-normal mb-4">
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Python</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Flask</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">PyTorch</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">OpenCV</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">JavaScript</span>
                            </div>
                            <div class="flex items-center gap-4 pt-3 border-t border-jarvis-blue/20 dark:border-jarvis-cyan/20 text-sm">
                                <a href="https://github.com/Sociopath345/Floriscan" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white transition-colors">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                    <span>SOURCE CODE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project Card 7: Alpha Omen -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div
                        class="h-48 bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style="background-image: url('../photos/Alpha Omen.png');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                        <span
                            class="font-sans text-lg sm:text-xl font-bold tracking-widest opacity-90 group-hover:scale-105 transition-transform text-white drop-shadow-md z-10 text-center px-3">ALPHA OMEN</span>
                        <div
                            class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-cyan z-10">
                            REC: ON</div>
                        <div class="absolute bottom-2 left-2 flex gap-1 z-10">
                            <div class="w-1 h-3 bg-jarvis-cyan opacity-40"></div>
                            <div class="w-1 h-2 bg-jarvis-cyan opacity-80"></div>
                            <div class="w-1 h-4 bg-jarvis-cyan"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-bold tracking-wider text-lg sm:text-xl text-slate-900 dark:text-white">Alpha Omen</h3>
                                <span
                                    class="text-sm border border-jarvis-blue/50 dark:border-jarvis-cyan/50 px-2.5 py-0.5 font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono">7</span>
                            </div>
                            <p
                                class="text-base text-slate-700 dark:text-jarvis-cyan/90 font-semibold dark:font-normal mb-4 leading-relaxed min-h-[4.5rem]">
                                An all-in-one web productivity suite featuring rich note management with voice memos, custom timers, mood tracking, and Python-powered text autocorrection.</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 text-sm font-bold dark:font-normal mb-4">
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">J2EE</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">MySQL</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Python Flask</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Apache Tomcat</span>
                            </div>
                            <div class="flex items-center gap-4 pt-3 border-t border-jarvis-blue/20 dark:border-jarvis-cyan/20 text-sm">
                                <a href="https://github.com/Sociopath345/AlphaOmen" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white transition-colors">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                    <span>SOURCE CODE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project Card 8: Fusion Vision -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div
                        class="h-48 bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style="background-image: url('../photos/FusionVision.png');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                        <span
                            class="font-sans text-lg sm:text-xl font-bold tracking-widest opacity-90 group-hover:scale-105 transition-transform text-white drop-shadow-md z-10 text-center px-3">FUSION VISION</span>
                        <div
                            class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-cyan z-10">
                            REC: ON</div>
                        <div class="absolute bottom-2 left-2 flex gap-1 z-10">
                            <div class="w-1 h-3 bg-jarvis-cyan opacity-40"></div>
                            <div class="w-1 h-2 bg-jarvis-cyan opacity-80"></div>
                            <div class="w-1 h-4 bg-jarvis-cyan"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-bold tracking-wider text-lg sm:text-xl text-slate-900 dark:text-white">Fusion Vision</h3>
                                <span
                                    class="text-sm border border-jarvis-blue/50 dark:border-jarvis-cyan/50 px-2.5 py-0.5 font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono">8</span>
                            </div>
                            <p
                                class="text-base text-slate-700 dark:text-jarvis-cyan/90 font-semibold dark:font-normal mb-4 leading-relaxed min-h-[4.5rem]">
                                A multimodal perception system bridging computer vision and speech control, combining MediaPipe real-time object detection with Fourier-based noise reduction.</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 text-sm font-bold dark:font-normal mb-4">
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Python</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Streamlit</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">MediaPipe</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">SciPy</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">FFT</span>
                            </div>
                            <div class="flex items-center gap-4 pt-3 border-t border-jarvis-blue/20 dark:border-jarvis-cyan/20 text-sm">
                                <a href="https://github.com/Sociopath345/fusion-vision" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white transition-colors">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                    <span>SOURCE CODE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project Card 9: UniVault -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div
                        class="h-48 bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style="background-image: url('../photos/UniVault.png');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                        <span
                            class="font-sans text-lg sm:text-xl font-bold tracking-widest opacity-90 group-hover:scale-105 transition-transform text-white drop-shadow-md z-10 text-center px-3">UNIVAULT</span>
                        <div
                            class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-cyan z-10">
                            REC: ON</div>
                        <div class="absolute bottom-2 left-2 flex gap-1 z-10">
                            <div class="w-1 h-3 bg-jarvis-cyan opacity-40"></div>
                            <div class="w-1 h-2 bg-jarvis-cyan opacity-80"></div>
                            <div class="w-1 h-4 bg-jarvis-cyan"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-bold tracking-wider text-lg sm:text-xl text-slate-900 dark:text-white">UniVault</h3>
                                <span
                                    class="text-sm border border-jarvis-blue/50 dark:border-jarvis-cyan/50 px-2.5 py-0.5 font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono">9</span>
                            </div>
                            <p
                                class="text-base text-slate-700 dark:text-jarvis-cyan/90 font-semibold dark:font-normal mb-4 leading-relaxed min-h-[4.5rem]">
                                A distributed university repository platform enabling scalable academic collaboration with multi-node data replication, versioned file management, and semantic vector search.</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 text-sm font-bold dark:font-normal mb-4">
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">Next.js</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">TypeScript</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">FastAPI</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">PostgreSQL</span>
                                <span
                                    class="bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20">pgvector</span>
                            </div>
                            <div class="flex items-center gap-4 pt-3 border-t border-jarvis-blue/20 dark:border-jarvis-cyan/20 text-sm">
                                <a href="https://github.com/Sociopath345/UniVault" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-jarvis-cyan/80 hover:text-jarvis-blue dark:hover:text-white transition-colors">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                    <span>SOURCE CODE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- GitHub View All Works Button -->
            <div class="mt-12 text-center">
                <a href="https://github.com/Sociopath345?tab=repositories" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-3 px-8 py-3.5 hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/50 backdrop-blur-sm text-xs sm:text-sm font-sans font-bold tracking-widest text-jarvis-blue dark:text-jarvis-cyan hover:text-slate-900 dark:hover:text-white transition-all duration-300 group shadow-lg dark:shadow-none">
                    <svg class="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>VIEW ALL WORKS IN GITHUB //</span>
                </a>
            </div>
        </section>

        <!-- Achievements Division: Recognized Accomplishments -->
        <section id="achievements" class="mb-24 pt-16 scroll-mt-20">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="font-sans text-2xl font-bold tracking-widest text-slate-900 dark:text-white">
                    RECOGNIZED ACCOMPLISHMENTS //
                </h2>
                <div
                    class="h-[1px] flex-1 bg-gradient-to-r from-jarvis-blue dark:from-jarvis-cyan to-transparent opacity-50">
                </div>
            </div>

            <!-- Single-Column Cards Array (Alternating Layouts, Clean Photo & Content) -->
            <div class="space-y-8">
                <!-- Accomplishment 1: Let's Tech Hackathon (Agentic Edition) [Photo Left, Content Right] -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-5 sm:p-7 relative transition-all duration-300 border-l-4 border-l-jarvis-blue dark:border-l-jarvis-cyan shadow-lg dark:shadow-none flex flex-col lg:flex-row gap-6 items-stretch">
                    <!-- Photo Container (Left Side) -->
                    <div
                        class="w-full lg:w-5/12 xl:w-2/5 flex-shrink-0 relative rounded-sm overflow-hidden bg-slate-900/5 dark:bg-slate-950/60 border border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] p-1">
                        <img src="../photos/IMG_3364.JPG" alt="Let's Tech Hackathon (Agentic Edition) - 1st Runner-Up"
                            class="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                            loading="lazy">
                        <div
                            class="absolute top-2.5 left-2.5 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-2 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm">
                            ACHV: 01</div>
                    </div>
                    <!-- Details & Narrative (Right Side) -->
                    <div class="flex-1 flex flex-col justify-center">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5 pb-3 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                            <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                Let's Tech Hackathon (Agentic Edition)
                            </h3>
                            <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded self-start sm:self-auto flex-shrink-0">
                                <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Jul 2026</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap mb-3.5">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold tracking-wider rounded-sm bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 text-jarvis-blue dark:text-jarvis-cyan border border-jarvis-blue/30 dark:border-jarvis-cyan/30 font-mono">
                                <span class="w-2 h-2 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan"></span>1ST RUNNER-UP
                            </span>
                            <span class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide">
                                Team J.A.R.V.I.S. // Lead Pitch Presenter & Core AI Developer
                            </span>
                        </div>
                        <p class="text-base sm:text-lg text-slate-700 dark:text-jarvis-cyan/90 leading-relaxed font-semibold dark:font-normal">
                            Spearheaded technical pitching and collaborated on core agent architecture with Team J.A.R.V.I.S. during an intensive 48-hour hackathon. Engineered an autonomous multi-agent AI system designed to accelerate startup ideation by automating business roadmaps, market viability analysis, and pitch-deck synthesis, securing 1st Runner-Up honors among elite collegiate and developer cohorts.
                        </p>
                    </div>
                </div>

                <!-- Accomplishment 2: Science Festival Myanmar (HackAtom) 2025 [Content Left, Photo Right] -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-5 sm:p-7 relative transition-all duration-300 border-l-4 border-l-emerald-500 shadow-lg dark:shadow-none flex flex-col lg:flex-row-reverse gap-6 items-stretch">
                    <!-- Photo Container (Right Side on Desktop) -->
                    <div
                        class="w-full lg:w-5/12 xl:w-2/5 flex-shrink-0 relative rounded-sm overflow-hidden bg-slate-900/5 dark:bg-slate-950/60 border border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] p-1">
                        <img src="../photos/viber_image_2025-11-28_17-22-10-407.jpg" alt="Science Festival Myanmar (HackAtom) 2025 - 2nd Runner-Up"
                            class="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                            loading="lazy">
                        <div
                            class="absolute top-2.5 left-2.5 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-2 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm">
                            ACHV: 02</div>
                    </div>
                    <!-- Details & Narrative (Left Side on Desktop) -->
                    <div class="flex-1 flex flex-col justify-center">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5 pb-3 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                            <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                Science Festival Myanmar (HackAtom) 2025
                            </h3>
                            <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded self-start sm:self-auto flex-shrink-0">
                                <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Nov 2025</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap mb-3.5">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold tracking-wider rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-mono">
                                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>2ND RUNNER-UP
                            </span>
                            <span class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide">
                                Team Neutron Syndicate // Lead Presenter & Research Lead
                            </span>
                        </div>
                        <p class="text-base sm:text-lg text-slate-700 dark:text-jarvis-cyan/90 leading-relaxed font-semibold dark:font-normal">
                            Spearheaded research methodology and served as keynote presenter for the 10-member multidisciplinary cohort 'Neutron Syndicate' in an intensive 24-hour scientific hackathon. Conducted comprehensive multi-criteria feasibility research evaluating optimal geographical, environmental, and socio-economic parameters for deploying Small Modular Reactors (SMRs) in Myanmar. Delivered a compelling, research-backed presentation to nuclear science and energy experts, capturing 2nd Runner-Up honors for analytical depth and persuasive delivery.
                        </p>
                    </div>
                </div>

                <!-- Accomplishment 3: FITP Competition 2026 [Photo Left, Content Right] -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-5 sm:p-7 relative transition-all duration-300 border-l-4 border-l-purple-500 shadow-lg dark:shadow-none flex flex-col lg:flex-row gap-6 items-stretch">
                    <!-- Photo Container (Left Side) -->
                    <div
                        class="w-full lg:w-5/12 xl:w-2/5 flex-shrink-0 relative rounded-sm overflow-hidden bg-slate-900/5 dark:bg-slate-950/60 border border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] p-1">
                        <img src="../photos/photo_2026-05-17_14-50-49.jpg" alt="FITP Competition 2026 - 2nd Runner-Up"
                            class="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                            loading="lazy">
                        <div
                            class="absolute top-2.5 left-2.5 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-2 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm">
                            ACHV: 03</div>
                    </div>
                    <!-- Details & Narrative (Right Side) -->
                    <div class="flex-1 flex flex-col justify-center">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5 pb-3 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                            <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                FITP Competition 2026
                            </h3>
                            <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded self-start sm:self-auto flex-shrink-0">
                                <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>May 2026</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap mb-3.5">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold tracking-wider rounded-sm bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 font-mono">
                                <span class="w-2 h-2 rounded-full bg-purple-500"></span>2ND RUNNER-UP
                            </span>
                            <span class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide">
                                Team M@rK_H // MCPA (Myanmar Computer Professional Association)
                            </span>
                        </div>
                        <p class="text-base sm:text-lg text-slate-700 dark:text-jarvis-cyan/90 leading-relaxed font-semibold dark:font-normal">
                            Competed across three consecutive days of comprehensive computer science and IT challenges organized by the Myanmar Computer Professional Association (MCPA). Demonstrated advanced analytical depth and speed across system architecture, computer networks, algorithms, and cybersecurity with Team M@rK_H, finishing as 2nd Runner-Up nationwide.
                        </p>
                    </div>
                </div>

                <!-- Accomplishment 4: UIT English Debate Competition [Content Left, Photo Right] -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-5 sm:p-7 relative transition-all duration-300 border-l-4 border-l-amber-500 shadow-lg dark:shadow-none flex flex-col lg:flex-row-reverse gap-6 items-stretch">
                    <!-- Photo Container (Right Side on Desktop) -->
                    <div
                        class="w-full lg:w-5/12 xl:w-2/5 flex-shrink-0 relative rounded-sm overflow-hidden bg-slate-900/5 dark:bg-slate-950/60 border border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] p-1">
                        <img src="../photos/photo_2026-11-11_01-56-11.jpg" alt="UIT English Debate Competition - Winner"
                            class="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                            loading="lazy">
                        <div
                            class="absolute top-2.5 left-2.5 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-2 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm">
                            ACHV: 04</div>
                    </div>
                    <!-- Details & Narrative (Left Side on Desktop) -->
                    <div class="flex-1 flex flex-col justify-center">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5 pb-3 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                            <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                UIT English Debate Competition
                            </h3>
                            <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded self-start sm:self-auto flex-shrink-0">
                                <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Sep 2023</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap mb-3.5">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold tracking-wider rounded-sm bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-mono">
                                <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>WINNER // CHAMPION
                            </span>
                            <span class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide">
                                Team 4 A // University of Information Technology (UIT)
                            </span>
                        </div>
                        <p class="text-base sm:text-lg text-slate-700 dark:text-jarvis-cyan/90 leading-relaxed font-semibold dark:font-normal">
                            Clinched the university debate championship with Team 4 A, defending the opposition bench against the proposition motion: "Addiction to social media reduces one's productivity in life." Synthesized empirical cognitive research and socioeconomic data into structured parliamentary rebuttals, dismantling competing contentions to win unanimous top honors.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Leadership & Community Division -->
        <section id="leadership" class="mb-24 pt-16 scroll-mt-20">
            <span id="experience" class="block -mt-20 pt-20"></span>
            <div class="flex items-center gap-4 mb-8">
                <h2 class="font-sans text-2xl font-bold tracking-widest text-slate-900 dark:text-white">
                    LEADERSHIP & COMMUNITY //
                </h2>
                <div
                    class="h-[1px] flex-1 bg-gradient-to-r from-jarvis-blue dark:from-jarvis-cyan to-transparent opacity-50">
                </div>
            </div>

            <div class="space-y-6">
                <!-- 1. UIT Executive Committee President -->
                <div
                    class="hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-6 sm:p-7 relative transition-all duration-300 border-l-4 border-l-jarvis-blue dark:border-l-jarvis-cyan shadow-lg dark:shadow-none">
                    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                        <div>
                            <div class="flex items-center gap-3 flex-wrap mb-1.5">
                                <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                    UIT Executive Committee President
                                </h3>
                                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold tracking-wider rounded-sm bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 text-jarvis-blue dark:text-jarvis-cyan border border-jarvis-blue/30 dark:border-jarvis-cyan/30 font-mono">
                                    <span class="w-1.5 h-1.5 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan"></span>COMPLETED
                                </span>
                            </div>
                            <p class="text-base sm:text-lg font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide">
                                University of Information Technology, Yangon (UIT)
                            </p>
                        </div>
                        <div class="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-jarvis-cyan/80 font-mono bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3.5 py-1.5 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded self-start sm:self-auto flex-shrink-0">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Dec 2025 – Dec 2026</span>
                        </div>
                    </div>
                    <ul class="space-y-2.5 text-base sm:text-lg text-slate-700 dark:text-jarvis-cyan/90 leading-relaxed font-semibold dark:font-normal">
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan flex-shrink-0 mt-2"></span>
                            <span>Served as the primary liaison between university administration and the student body, streamlining communication of essential institutional directives.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan flex-shrink-0 mt-2"></span>
                            <span>Spearheaded committee operations and orchestrated campus-wide events, academic initiatives, and student assemblies.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan flex-shrink-0 mt-2"></span>
                            <span>Advocated for student welfare by mediating campus grievances and negotiating actionable solutions with academic leadership.</span>
                        </li>
                    </ul>
                </div>

                <!-- 2. UIT Knowledge Engineering Club Vice President -->
                <div
                    class="hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-6 sm:p-7 relative transition-all duration-300 border-l-4 border-l-emerald-500 shadow-lg dark:shadow-none">
                    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                        <div>
                            <div class="flex items-center gap-3 flex-wrap mb-1.5">
                                <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                    UIT Knowledge Engineering Club Vice President
                                </h3>
                                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold tracking-wider rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-mono">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>ACTIVE
                                </span>
                            </div>
                            <p class="text-base sm:text-lg font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide">
                                University of Information Technology, Yangon (UIT)
                            </p>
                        </div>
                        <div class="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-jarvis-cyan/80 font-mono bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3.5 py-1.5 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded self-start sm:self-auto flex-shrink-0">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Dec 2025 – Present</span>
                        </div>
                    </div>
                    <ul class="space-y-2.5 text-base sm:text-lg text-slate-700 dark:text-jarvis-cyan/90 leading-relaxed font-semibold dark:font-normal">
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                            <span>Direct strategic club initiatives, organizing technical workshops and hands-on sessions focused on advanced engineering concepts and AI development.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                            <span>Mentor junior members in software engineering and machine learning pipelines, fostering an environment of technical rigor and collaboration.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                            <span>Collaborate with university faculty to align club research and development tracks with academic curricula and emerging industry paradigms.</span>
                        </li>
                    </ul>
                </div>

                <!-- 3. UIT Dhamma Satkyar Club Secretary -->
                <div
                    class="hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-6 sm:p-7 relative transition-all duration-300 border-l-4 border-l-emerald-500 shadow-lg dark:shadow-none">
                    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                        <div>
                            <div class="flex items-center gap-3 flex-wrap mb-1.5">
                                <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                    UIT Dhamma Satkyar Club Secretary
                                </h3>
                                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold tracking-wider rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-mono">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>ACTIVE
                                </span>
                            </div>
                            <p class="text-base sm:text-lg font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide">
                                University of Information Technology, Yangon (UIT)
                            </p>
                        </div>
                        <div class="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-jarvis-cyan/80 font-mono bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3.5 py-1.5 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded self-start sm:self-auto flex-shrink-0">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>August 2023 – Present</span>
                        </div>
                    </div>
                    <ul class="space-y-2.5 text-base sm:text-lg text-slate-700 dark:text-jarvis-cyan/90 leading-relaxed font-semibold dark:font-normal">
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                            <span>Administer comprehensive club membership operations, successfully overseeing member onboarding and sustaining high retention rates.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                            <span>Produce and curate educational Dhamma materials to promote club initiatives and cultivate broader student community engagement.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                            <span>Instruct members in traditional Dhamma Satkyar recitation, training cohorts in precise phonetic articulation and proper intonation.</span>
                        </li>
                    </ul>
                </div>

                <!-- 4. Myanmar Delegate of BIMSTEC Young Professionals Exchange Programme -->
                <div
                    class="hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-6 sm:p-7 relative transition-all duration-300 border-l-4 border-l-jarvis-blue dark:border-l-jarvis-cyan shadow-lg dark:shadow-none">
                    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                        <div>
                            <div class="flex items-center gap-3 flex-wrap mb-1.5">
                                <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                    Myanmar Delegate of BIMSTEC Young Professionals Exchange Programme, India
                                </h3>
                                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold tracking-wider rounded-sm bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 text-jarvis-blue dark:text-jarvis-cyan border border-jarvis-blue/30 dark:border-jarvis-cyan/30 font-mono">
                                    <span class="w-1.5 h-1.5 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan"></span>COMPLETED
                                </span>
                            </div>
                            <p class="text-base sm:text-lg font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide">
                                Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation (BIMSTEC)
                            </p>
                        </div>
                        <div class="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-jarvis-cyan/80 font-mono bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3.5 py-1.5 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded self-start sm:self-auto flex-shrink-0">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Mar 2026</span>
                        </div>
                    </div>
                    <ul class="space-y-2.5 text-base sm:text-lg text-slate-700 dark:text-jarvis-cyan/90 leading-relaxed font-semibold dark:font-normal">
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan flex-shrink-0 mt-2"></span>
                            <span>Represented Myanmar in an official international capacity, actively participating in academic and professional exchanges with delegates from six member states.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan flex-shrink-0 mt-2"></span>
                            <span>Engaged in cross-cultural and multilateral economic dialogues designed to foster regional integration, mutual understanding, and collaborative technical development.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan flex-shrink-0 mt-2"></span>
                            <span>Collaborated with international peers and governmental representatives to build sustainable, long-term diplomatic and innovation networks across the Bay of Bengal region.</span>
                        </li>
                    </ul>
                </div>

                <!-- 5. Active member of JCI Myanmar -->
                <div
                    class="hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-6 sm:p-7 relative transition-all duration-300 border-l-4 border-l-emerald-500 shadow-lg dark:shadow-none">
                    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                        <div>
                            <div class="flex items-center gap-3 flex-wrap mb-1.5">
                                <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                    Active member of JCI Myanmar
                                </h3>
                                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold tracking-wider rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-mono">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>ACTIVE
                                </span>
                            </div>
                            <p class="text-base sm:text-lg font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide">
                                Junior Chamber International, Myanmar
                            </p>
                        </div>
                        <div class="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-jarvis-cyan/80 font-mono bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3.5 py-1.5 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded self-start sm:self-auto flex-shrink-0">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>May 2026 – Present</span>
                        </div>
                    </div>
                    <ul class="space-y-2.5 text-base sm:text-lg text-slate-700 dark:text-jarvis-cyan/90 leading-relaxed font-semibold dark:font-normal">
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                            <span>Participate in the JCI APDC Lead for Impact training, developing advanced organizational leadership and strategic planning capabilities.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                            <span>Collaborate with fellow young professionals and civic entrepreneurs to execute community-driven initiatives and high-impact social projects.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                            <span>Contribute to local development campaigns, leveraging cross-disciplinary teamwork to solve community challenges and promote sustainable growth.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Certificate Division: Professional Certifications -->
        <section id="certificates" class="mb-24 pt-16 scroll-mt-20">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="font-sans text-2xl font-bold tracking-widest text-slate-900 dark:text-white">
                    PROFESSIONAL CERTIFICATIONS //
                </h2>
                <div
                    class="h-[1px] flex-1 bg-gradient-to-r from-jarvis-blue dark:from-jarvis-cyan to-transparent opacity-50">
                </div>
            </div>

            <!-- 2 Rows x 3 Columns Grid (6 Certificates) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Certificate 1: IT Passport (IP) -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div>
                        <!-- Certificate Photo Placeholder (Interactive Lightbox Zoom Enabled) -->
                        <div
                            class="activity-gallery-photo h-56 bg-slate-900/5 dark:bg-slate-950/50 relative overflow-hidden flex items-center justify-center p-3 rounded-t-sm border-b border-jarvis-blue/15 dark:border-jarvis-cyan/15 cursor-pointer"
                            data-img="../photos/IP.jpg"
                            data-caption="Information Technology Passport Examination (IP) — ITPEC (Oct 2023)">
                            <img src="../photos/IP.jpg" alt="Information Technology Passport Examination (IP)"
                                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                loading="lazy">
                            <div class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-1.5 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm dark:shadow-none">
                                CERT: 01</div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <h3 class="font-sans text-lg sm:text-xl font-bold tracking-wide text-slate-900 dark:text-white leading-snug mb-2 min-h-[3.25rem]">
                                Information Technology Passport Examination (IP)
                            </h3>
                            <p class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide mb-4">
                                Information Technology Professional Examination Council (ITPEC)
                            </p>
                        </div>
                    </div>
                    <div class="px-5 pb-5 pt-3 border-t border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-between">
                        <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Oct 2023</span>
                        </div>
                        <a href="https://itpec.org/statsandresults/all-passers-information/Myanmar/2023A_IP.pdf" target="_blank" rel="noopener noreferrer"
                            class="text-xs sm:text-sm font-bold text-jarvis-blue dark:text-jarvis-cyan hover:underline inline-flex items-center gap-1">
                            <span>VIEW //</span>
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    </div>
                </div>

                <!-- Certificate 2: FE Exam -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div>
                        <!-- Certificate Photo Placeholder (Interactive Lightbox Zoom Enabled) -->
                        <div
                            class="activity-gallery-photo h-56 bg-slate-900/5 dark:bg-slate-950/50 relative overflow-hidden flex items-center justify-center p-3 rounded-t-sm border-b border-jarvis-blue/15 dark:border-jarvis-cyan/15 cursor-pointer"
                            data-img="../photos/FE.jpg"
                            data-caption="Fundamental Information Technology Engineer Examination (FE) — ITPEC (Apr 2026)">
                            <img src="../photos/FE.jpg" alt="Fundamental Information Technology Engineer Examination (FE)"
                                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                loading="lazy">
                            <div class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-1.5 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm dark:shadow-none">
                                CERT: 02</div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <h3 class="font-sans text-lg sm:text-xl font-bold tracking-wide text-slate-900 dark:text-white leading-snug mb-2 min-h-[3.25rem]">
                                Fundamental Information Technology Engineer Examination (FE)
                            </h3>
                            <p class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide mb-4">
                                Information Technology Professional Examination Council (ITPEC)
                            </p>
                        </div>
                    </div>
                    <div class="px-5 pb-5 pt-3 border-t border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-between">
                        <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Apr 2026</span>
                        </div>
                        <a href="https://itpec.org/statsandresults/all-passers-information/Myanmar/2026S_FE.pdf" target="_blank" rel="noopener noreferrer"
                            class="text-xs sm:text-sm font-bold text-jarvis-blue dark:text-jarvis-cyan hover:underline inline-flex items-center gap-1">
                            <span>VIEW //</span>
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    </div>
                </div>

                <!-- Certificate 3: Cursor AI Hackathon Myanmar -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div>
                        <!-- Certificate Photo Placeholder (Interactive Lightbox Zoom Enabled) -->
                        <div
                            class="activity-gallery-photo h-56 bg-slate-900/5 dark:bg-slate-950/50 relative overflow-hidden flex items-center justify-center p-3 rounded-t-sm border-b border-jarvis-blue/15 dark:border-jarvis-cyan/15 cursor-pointer"
                            data-img="../photos/cursor-hackathon-myanmar-certificate.png"
                            data-caption="Cursor AI Hackathon Myanmar (2026) — Cursor (Aug 2026)">
                            <img src="../photos/cursor-hackathon-myanmar-certificate.png" alt="Cursor AI Hackathon Myanmar (2026)"
                                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                loading="lazy">
                            <div class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-1.5 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm dark:shadow-none">
                                CERT: 03</div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <h3 class="font-sans text-lg sm:text-xl font-bold tracking-wide text-slate-900 dark:text-white leading-snug mb-2 min-h-[3.25rem]">
                                Cursor AI Hackathon Myanmar (2026)
                            </h3>
                            <p class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide mb-4">
                                Cursor
                            </p>
                        </div>
                    </div>
                    <div class="px-5 pb-5 pt-3 border-t border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-between">
                        <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Aug 2026</span>
                        </div>
                    </div>
                </div>

                <!-- Certificate 4: Lead for Impact Training -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div>
                        <!-- Certificate Photo Placeholder (Interactive Lightbox Zoom Enabled) -->
                        <div
                            class="activity-gallery-photo h-56 bg-slate-900/5 dark:bg-slate-950/50 relative overflow-hidden flex items-center justify-center p-3 rounded-t-sm border-b border-jarvis-blue/15 dark:border-jarvis-cyan/15 cursor-pointer"
                            data-img="../photos/photo_2026-10-12_17-22-05.jpg"
                            data-caption="Lead for Impact Training — JCI (Junior Chamber International) (Aug 2026)">
                            <img src="../photos/photo_2026-10-12_17-22-05.jpg" alt="Lead for Impact Training"
                                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                loading="lazy">
                            <div class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-1.5 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm dark:shadow-none">
                                CERT: 04</div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <h3 class="font-sans text-lg sm:text-xl font-bold tracking-wide text-slate-900 dark:text-white leading-snug mb-2 min-h-[3.25rem]">
                                Lead for Impact Training
                            </h3>
                            <p class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide mb-4">
                                JCI (Junior Chamber International)
                            </p>
                        </div>
                    </div>
                    <div class="px-5 pb-5 pt-3 border-t border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-between">
                        <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Aug 2026</span>
                        </div>
                    </div>
                </div>

                <!-- Certificate 5: NASA Space Apps Challenge -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div>
                        <!-- Certificate Photo Placeholder (Interactive Lightbox Zoom Enabled) -->
                        <div
                            class="activity-gallery-photo h-56 bg-slate-900/5 dark:bg-slate-950/50 relative overflow-hidden flex items-center justify-center p-3 rounded-t-sm border-b border-jarvis-blue/15 dark:border-jarvis-cyan/15 cursor-pointer"
                            data-img="../photos/certificate_sociopath345_2026__n_a_s_a__space__apps__challenge.png"
                            data-caption="NASA Space Apps Challenge 2026 — NASA (Nov 2026)">
                            <img src="../photos/certificate_sociopath345_2026__n_a_s_a__space__apps__challenge.png" alt="Nasa Space Apps Challenge 2026"
                                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                loading="lazy">
                            <div class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-1.5 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm dark:shadow-none">
                                CERT: 05</div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <h3 class="font-sans text-lg sm:text-xl font-bold tracking-wide text-slate-900 dark:text-white leading-snug mb-2 min-h-[3.25rem]">
                                Nasa Space Apps Challenge 2026
                            </h3>
                            <p class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide mb-4">
                                NASA
                            </p>
                        </div>
                    </div>
                    <div class="px-5 pb-5 pt-3 border-t border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-between">
                        <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Nov 2026</span>
                        </div>
                    </div>
                </div>

                <!-- Certificate 6: AppCube Bootcamp Training -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/80 dark:bg-jarvis-dark/30 backdrop-blur-sm p-1 shadow-lg dark:shadow-none flex flex-col justify-between transition-all duration-300">
                    <div>
                        <!-- Certificate Photo Placeholder (Interactive Lightbox Zoom Enabled) -->
                        <div
                            class="activity-gallery-photo h-56 bg-slate-900/5 dark:bg-slate-950/50 relative overflow-hidden flex items-center justify-center p-3 rounded-t-sm border-b border-jarvis-blue/15 dark:border-jarvis-cyan/15 cursor-pointer"
                            data-img="../photos/photo_2026-10-12_17-22-05 (2).jpg"
                            data-caption="AppCube Bootcamp Training — KBZPay (May 2026)">
                            <img src="../photos/photo_2026-10-12_17-22-05 (2).jpg" alt="AppCube Bootcamp Training"
                                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                loading="lazy">
                            <div class="absolute top-2 right-2 text-[10px] font-bold text-jarvis-blue dark:text-jarvis-cyan font-mono bg-white/90 dark:bg-jarvis-dark/80 px-1.5 py-0.5 border border-jarvis-blue/30 dark:border-jarvis-cyan/30 shadow-sm dark:shadow-none">
                                CERT: 06</div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <h3 class="font-sans text-lg sm:text-xl font-bold tracking-wide text-slate-900 dark:text-white leading-snug mb-2 min-h-[3.25rem]">
                                AppCube Bootcamp Training
                            </h3>
                            <p class="text-sm sm:text-base font-semibold text-jarvis-blue dark:text-jarvis-cyan tracking-wide mb-4">
                                KBZPay
                            </p>
                        </div>
                    </div>
                    <div class="px-5 pb-5 pt-3 border-t border-jarvis-blue/15 dark:border-jarvis-cyan/20 flex items-center justify-between">
                        <div class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-600 dark:text-jarvis-cyan/80 bg-jarvis-blue/5 dark:bg-jarvis-cyan/10 px-3 py-1 border border-jarvis-blue/20 dark:border-jarvis-cyan/20 rounded">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>May 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- View All Certificates Button (LinkedIn Credentials) -->
            <div class="mt-12 text-center">
                <a href="https://www.linkedin.com/in/hein-hlyan/details/certifications/" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-3 px-8 py-3.5 hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/50 backdrop-blur-sm text-xs sm:text-sm font-sans font-bold tracking-widest text-jarvis-blue dark:text-jarvis-cyan hover:text-slate-900 dark:hover:text-white transition-all duration-300 group shadow-lg dark:shadow-none">
                    <span>VIEW ALL CERTIFICATES //</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>
        </section>

        <!-- Activities Division: Active Engagements -->
        <section id="activities" class="mb-24 pt-16 scroll-mt-20">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="font-sans text-2xl font-bold tracking-widest text-slate-900 dark:text-white uppercase">
                    ACTIVE ENGAGEMENTS //
                </h2>
                <div
                    class="h-[1px] flex-1 bg-gradient-to-r from-jarvis-blue dark:from-jarvis-cyan to-transparent opacity-50">
                </div>
            </div>

            <!-- Engagements Dossiers (Distinct Multi-Photo Showcase Cards) -->
            <div class="space-y-10">

                <!-- Engagement 1: BIMSTEC Young Professionals Exchange Programme 2026 -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/85 dark:bg-jarvis-dark/40 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl dark:shadow-none transition-all duration-300 relative overflow-hidden">
                    
                    <!-- Top Telemetry Header -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-jarvis-cyan/20">
                        <div class="flex items-center gap-2.5">
                            <span class="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span class="text-xs font-mono font-bold tracking-widest text-jarvis-blue dark:text-jarvis-cyan uppercase">
                                INTERNATIONAL SUMMIT // BILATERAL EXCHANGE
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 dark:text-slate-300">
                            <svg class="w-3.5 h-3.5 text-jarvis-blue dark:text-jarvis-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>Mumbai & Pune, Maharashtra, India • 2026</span>
                        </div>
                    </div>

                    <!-- Title & Professional Description -->
                    <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wider text-slate-900 dark:text-white mb-3">
                        BIMSTEC Young Professionals Exchange Programme 2026
                    </h3>
                    <p class="font-mono font-semibold dark:font-normal text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        Selected as an international youth delegate representing Myanmar at the BIMSTEC Young Professionals Exchange Programme in India. Engaged in bilateral technical diplomacy, knowledge transfer, and strategic executive visits across premier IT conglomerates, innovation centers, and industrial hubs throughout Mumbai and Pune, Maharashtra.
                    </p>

                    <!-- Interactive Photo Mosaic Gallery (4 Photos - 2x2 Matrix) -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <!-- Photo 1 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/658173325_2350941135405686_5841965896504900325_n.jpg"
                            data-caption="BIMSTEC Delegation — Maharashtra Innovation & Tech Hub">
                            <img src="../photos/658173325_2350941135405686_5841965896504900325_n.jpg"
                                alt="BIMSTEC Young Professionals Exchange 2026 - Capture 1"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">FIELD_LOG // 01</span>
                            </div>
                        </div>

                        <!-- Photo 2 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/659805797_2350941448738988_8861166058099418026_n.jpg"
                            data-caption="BIMSTEC Delegation — Industrial Executive Exchange in Pune">
                            <img src="../photos/659805797_2350941448738988_8861166058099418026_n.jpg"
                                alt="BIMSTEC Young Professionals Exchange 2026 - Capture 2"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">FIELD_LOG // 02</span>
                            </div>
                        </div>

                        <!-- Photo 3 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/661483159_2350941308739002_116668918181623983_n.jpg"
                            data-caption="BIMSTEC Delegation — Bilateral Tech Cooperation & Knowledge Sessions">
                            <img src="../photos/661483159_2350941308739002_116668918181623983_n.jpg"
                                alt="BIMSTEC Young Professionals Exchange 2026 - Capture 3"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">FIELD_LOG // 03</span>
                            </div>
                        </div>

                        <!-- Photo 4 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/658113977_2350942802072186_5503321273429251923_n.jpg"
                            data-caption="BIMSTEC Delegation — Cross-Nation Delegation Honors in Mumbai">
                            <img src="../photos/658113977_2350942802072186_5503321273429251923_n.jpg"
                                alt="BIMSTEC Young Professionals Exchange 2026 - Capture 4"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">FIELD_LOG // 04</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Engagement 2: Competitions (Hackathons & Tech Arenas) -->
                <div
                    class="hud-border hud-corners hover-glow group bg-white/85 dark:bg-jarvis-dark/40 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl dark:shadow-none transition-all duration-300 relative overflow-hidden">
                    
                    <!-- Top Telemetry Header -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-jarvis-cyan/20">
                        <div class="flex items-center gap-2.5">
                            <span class="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span class="text-xs font-mono font-bold tracking-widest text-jarvis-blue dark:text-jarvis-cyan uppercase">
                                COMPETITIVE ARENAS // MULTI-HACKATHON RETROSPECTIVE
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 dark:text-slate-300">
                            <svg class="w-3.5 h-3.5 text-jarvis-blue dark:text-jarvis-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            <span>2023 — 2026 • 6x TOURNAMENT ENGAGEMENTS</span>
                        </div>
                    </div>

                    <!-- Title & Professional Description -->
                    <h3 class="font-sans text-xl sm:text-2xl font-bold tracking-wider text-slate-900 dark:text-white mb-3">
                        Competitive Hackathons & Innovation Tournaments
                    </h3>
                    <p class="font-mono font-semibold dark:font-normal text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        A visual retrospective across high-stakes competitive arenas—including Science Festival Myanmar (HackAtom), Let's Tech Hackathon (Agentic Edition), National FITP Competition, Cursor AI Hackathon, NASA Space Apps Challenge, and the UIT English Debate Championship. Beyond rapid prototyping and algorithmic development, these engagements cultivated resilient leadership, cross-functional synergy, and high-impact pitching under intense time constraints.
                    </p>

                    <!-- Interactive Photo Mosaic Gallery (6 Photos - 3x2 Matrix) -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <!-- Photo 1 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/1794340536120.jpg"
                            data-caption="Science Festival Myanmar (HackAtom) — Research & Innovation Showcase">
                            <img src="../photos/1794340536120.jpg"
                                alt="Science Festival Myanmar (HackAtom)"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">ARENA // 01</span>
                            </div>
                        </div>

                        <!-- Photo 2 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/photo_2026-07-19_19-30-13.jpg"
                            data-caption="Let's Tech Hackathon (Agentic Edition) — 48h Sprint Showcase">
                            <img src="../photos/photo_2026-07-19_19-30-13.jpg"
                                alt="Competitive Engagement - Capture 2"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">ARENA // 02</span>
                            </div>
                        </div>

                        <!-- Photo 3 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/photo_2026-05-11_09-30-25.jpg"
                            data-caption="National FITP Competition — MCPA Information Technology Arenas">
                            <img src="../photos/photo_2026-05-11_09-30-25.jpg"
                                alt="Competitive Engagement - Capture 3"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">ARENA // 03</span>
                            </div>
                        </div>

                        <!-- Photo 4 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/photo_2026-08-29_20-25-13.jpg"
                            data-caption="Cursor AI Hackathon Myanmar — AI Engineering & Prompt Solutions">
                            <img src="../photos/photo_2026-08-29_20-25-13.jpg"
                                alt="Competitive Engagement - Capture 4"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">ARENA // 04</span>
                            </div>
                        </div>

                        <!-- Photo 5 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/photo_2026-11-26_00-40-55.jpg"
                            data-caption="NASA Space Apps Challenge — Global Space & Earth Prototyping">
                            <img src="../photos/photo_2026-11-26_00-40-55.jpg"
                                alt="NASA Space Apps Challenge"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">ARENA // 05</span>
                            </div>
                        </div>

                        <!-- Photo 6 -->
                        <div class="activity-gallery-photo relative h-48 sm:h-56 rounded-lg overflow-hidden border border-jarvis-blue/30 dark:border-jarvis-cyan/30 group/img bg-slate-900/10 dark:bg-slate-950/40 cursor-pointer shadow-sm hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-all"
                            data-img="../photos/1794339593579.jpg"
                            data-caption="UIT English Debate Championship — Champion Podium Celebration">
                            <img src="../photos/1794339593579.jpg"
                                alt="Competitive Engagement - Capture 6"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                                <span class="text-[11px] font-mono font-bold text-white tracking-widest">ARENA // 06</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Contact Me Division: COMM_LINK // -->
        <section id="contact" class="mb-24 pt-16 scroll-mt-20">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="font-sans text-2xl font-bold tracking-widest text-slate-900 dark:text-white">
                    COMM_LINK //
                </h2>
                <div
                    class="h-[1px] flex-1 bg-gradient-to-r from-jarvis-blue dark:from-jarvis-cyan to-transparent opacity-50">
                </div>
            </div>

            <!-- Big Contact Card -->
            <div
                class="max-w-5xl mx-auto hud-border hud-corners hover-glow bg-white/80 dark:bg-jarvis-dark/40 backdrop-blur-sm p-6 sm:p-10 relative transition-all duration-300 shadow-xl dark:shadow-none">
                <!-- Decorative Corner Targets -->
                <div
                    class="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-jarvis-blue dark:border-jarvis-cyan opacity-60">
                </div>
                <div
                    class="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-jarvis-blue dark:border-jarvis-cyan opacity-60">
                </div>
                <div
                    class="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-jarvis-blue dark:border-jarvis-cyan opacity-60">
                </div>
                <div
                    class="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-jarvis-blue dark:border-jarvis-cyan opacity-60">
                </div>

                <!-- 1. Welcoming Quote for Recruiters & Visitors -->
                <div class="mb-10 text-center max-w-3xl mx-auto pb-8 border-b border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-jarvis-blue/10 dark:bg-jarvis-cyan/10 border border-jarvis-blue/25 dark:border-jarvis-cyan/30 text-xs font-mono font-bold tracking-widest text-jarvis-blue dark:text-jarvis-cyan uppercase">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        TRANSMISSION CHANNELS ACTIVE
                    </div>
                    <blockquote
                        class="text-lg sm:text-xl md:text-2xl font-sans font-bold tracking-wide text-slate-900 dark:text-white leading-relaxed mb-3">
                        “Coming together is a beginning, staying together is progress, and working together is success.”
                    </blockquote>
                    <p class="text-sm sm:text-base text-slate-600 dark:text-jarvis-cyan/80 leading-relaxed font-semibold dark:font-normal max-w-2xl mx-auto">
                        Whether you are exploring potential technical collaboration, seeking an ambitious engineer for your team, or tackling innovative challenges, my communication matrix is always open.
                    </p>
                </div>

                <!-- 2. Four Cards in 2x2 Grid with Logos & Two Lines of Text -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
                    <!-- 1. Personal Email -->
                    <a href="mailto:heinhlyanhenery@gmail.com"
                        class="hud-border hud-corners hover-glow p-5 sm:p-6 bg-slate-50/80 dark:bg-jarvis-dark/60 backdrop-blur-sm flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:scale-[1.02] shadow-sm dark:shadow-none group border-l-4 border-l-jarvis-blue dark:border-l-jarvis-cyan">
                        <div
                            class="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-jarvis-blue/10 dark:bg-jarvis-cyan/15 flex items-center justify-center flex-shrink-0 text-jarvis-blue dark:text-jarvis-cyan group-hover:scale-110 group-hover:bg-jarvis-blue group-hover:text-white dark:group-hover:bg-jarvis-cyan dark:group-hover:text-jarvis-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,85,255,0.2)] dark:shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="text-xs sm:text-sm font-bold tracking-wider text-jarvis-blue dark:text-jarvis-cyan font-mono uppercase mb-1">
                                Personal Email
                            </div>
                            <div class="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate group-hover:text-jarvis-blue dark:group-hover:text-jarvis-cyan transition-colors">
                                heinhlyanhenery@gmail.com
                            </div>
                        </div>
                        <div class="text-slate-400 group-hover:text-jarvis-blue dark:group-hover:text-jarvis-cyan transition-colors flex-shrink-0">
                            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>

                    <!-- 2. University Email -->
                    <a href="mailto:heinhlyan@uit.edu.mm"
                        class="hud-border hud-corners hover-glow p-5 sm:p-6 bg-slate-50/80 dark:bg-jarvis-dark/60 backdrop-blur-sm flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:scale-[1.02] shadow-sm dark:shadow-none group border-l-4 border-l-jarvis-blue dark:border-l-jarvis-cyan">
                        <div
                            class="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-jarvis-blue/10 dark:bg-jarvis-cyan/15 flex items-center justify-center flex-shrink-0 text-jarvis-blue dark:text-jarvis-cyan group-hover:scale-110 group-hover:bg-jarvis-blue group-hover:text-white dark:group-hover:bg-jarvis-cyan dark:group-hover:text-jarvis-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,85,255,0.2)] dark:shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="text-xs sm:text-sm font-bold tracking-wider text-jarvis-blue dark:text-jarvis-cyan font-mono uppercase mb-1">
                                University Email
                            </div>
                            <div class="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate group-hover:text-jarvis-blue dark:group-hover:text-jarvis-cyan transition-colors">
                                heinhlyan@uit.edu.mm
                            </div>
                        </div>
                        <div class="text-slate-400 group-hover:text-jarvis-blue dark:group-hover:text-jarvis-cyan transition-colors flex-shrink-0">
                            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>

                    <!-- 3. Phone Number -->
                    <a href="tel:+959683370880"
                        class="hud-border hud-corners hover-glow p-5 sm:p-6 bg-slate-50/80 dark:bg-jarvis-dark/60 backdrop-blur-sm flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:scale-[1.02] shadow-sm dark:shadow-none group border-l-4 border-l-jarvis-blue dark:border-l-jarvis-cyan">
                        <div
                            class="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-jarvis-blue/10 dark:bg-jarvis-cyan/15 flex items-center justify-center flex-shrink-0 text-jarvis-blue dark:text-jarvis-cyan group-hover:scale-110 group-hover:bg-jarvis-blue group-hover:text-white dark:group-hover:bg-jarvis-cyan dark:group-hover:text-jarvis-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,85,255,0.2)] dark:shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="text-xs sm:text-sm font-bold tracking-wider text-jarvis-blue dark:text-jarvis-cyan font-mono uppercase mb-1">
                                Phone Number
                            </div>
                            <div class="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate group-hover:text-jarvis-blue dark:group-hover:text-jarvis-cyan transition-colors">
                                +959683370880
                            </div>
                        </div>
                        <div class="text-slate-400 group-hover:text-jarvis-blue dark:group-hover:text-jarvis-cyan transition-colors flex-shrink-0">
                            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>

                    <!-- 4. Telegram -->
                    <a href="https://t.me/Sociopath345" target="_blank" rel="noopener noreferrer"
                        class="hud-border hud-corners hover-glow p-5 sm:p-6 bg-slate-50/80 dark:bg-jarvis-dark/60 backdrop-blur-sm flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:scale-[1.02] shadow-sm dark:shadow-none group border-l-4 border-l-jarvis-blue dark:border-l-jarvis-cyan">
                        <div
                            class="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-jarvis-blue/10 dark:bg-jarvis-cyan/15 flex items-center justify-center flex-shrink-0 text-jarvis-blue dark:text-jarvis-cyan group-hover:scale-110 group-hover:bg-jarvis-blue group-hover:text-white dark:group-hover:bg-jarvis-cyan dark:group-hover:text-jarvis-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,85,255,0.2)] dark:shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="text-xs sm:text-sm font-bold tracking-wider text-jarvis-blue dark:text-jarvis-cyan font-mono uppercase mb-1">
                                Telegram
                            </div>
                            <div class="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate group-hover:text-jarvis-blue dark:group-hover:text-jarvis-cyan transition-colors">
                                @Sociopath345
                            </div>
                        </div>
                        <div class="text-slate-400 group-hover:text-jarvis-blue dark:group-hover:text-jarvis-cyan transition-colors flex-shrink-0">
                            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </div>

                <!-- 3. Social Accounts (Circled Logos as in About Section) -->
                <div class="pt-8 border-t border-jarvis-blue/15 dark:border-jarvis-cyan/20">
                    <div class="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/hein.hlyan.9" target="_blank" rel="noopener noreferrer" title="Facebook // Hein Hlyan"
                            class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>

                        <!-- LinkedIn -->
                        <a href="https://www.linkedin.com/in/hein-hlyan" target="_blank" rel="noopener noreferrer" title="LinkedIn // Hein Hlyan"
                            class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.4 9.74V9.93H5.06v8.57h2.8z"/>
                            </svg>
                        </a>

                        <!-- Instagram -->
                        <a href="https://www.instagram.com/heinhlyan2945/" target="_blank" rel="noopener noreferrer" title="Instagram // Hein Hlyan"
                            class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>

                        <!-- Telegram -->
                        <a href="https://t.me/Sociopath345" target="_blank" rel="noopener noreferrer" title="Telegram // @Sociopath345"
                            class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                        </a>

                        <!-- TikTok -->
                        <a href="https://www.tiktok.com/@heneryhlyan" target="_blank" rel="noopener noreferrer" title="TikTok // @heneryhlyan"
                            class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            </svg>
                        </a>

                        <!-- GitHub -->
                        <a href="https://github.com/Sociopath345" target="_blank" rel="noopener noreferrer" title="GitHub // @Sociopath345"
                            class="w-10 h-10 md:w-11 md:h-11 rounded-full border border-jarvis-blue/40 dark:border-jarvis-cyan/40 bg-white/90 dark:bg-jarvis-dark/60 hover:bg-jarvis-blue/10 dark:hover:bg-jarvis-cyan/20 text-jarvis-blue dark:text-jarvis-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(0,85,255,0.2)] dark:shadow-[0_0_12px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(0,85,255,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] group">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- AI Chatbot Section -->
        <section id="ai-assistant" class="mb-12 pt-16 scroll-mt-20">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="font-sans text-2xl font-bold tracking-widest text-slate-900 dark:text-white">M.A.R.K. //
                    AI ASSISTANT</h2>
                <div
                    class="h-[1px] flex-1 bg-gradient-to-r from-jarvis-blue dark:from-jarvis-cyan to-transparent opacity-50">
                </div>
            </div>

            <div
                class="max-w-3xl mx-auto hud-border hud-corners bg-white/80 dark:bg-jarvis-dark/50 backdrop-blur-sm relative shadow-xl dark:shadow-none flex flex-col h-[550px]">
                <!-- Decorative Corner targets -->
                <div
                    class="absolute top-4 left-4 w-4 h-4 border-t border-l border-jarvis-blue dark:border-jarvis-cyan opacity-50">
                </div>
                <div
                    class="absolute top-4 right-4 w-4 h-4 border-t border-r border-jarvis-blue dark:border-jarvis-cyan opacity-50">
                </div>
                <div
                    class="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-jarvis-blue dark:border-jarvis-cyan opacity-50 z-20 pointer-events-none">
                </div>
                <div
                    class="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-jarvis-blue dark:border-jarvis-cyan opacity-50 z-20 pointer-events-none">
                </div>

                <!-- Chat History Area -->
                <div id="chat-history"
                    class="flex-1 overflow-y-auto p-6 space-y-4 font-bold dark:font-normal z-10 mt-6 mb-2">
                    <!-- Initial Bot Message -->
                    <div class="flex gap-3">
                        <div
                            class="w-8 h-8 rounded-full border border-jarvis-blue dark:border-jarvis-cyan flex-shrink-0 flex items-center justify-center bg-jarvis-blue/10 dark:bg-jarvis-cyan/10">
                            <div class="w-2 h-2 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan animate-pulse"></div>
                        </div>
                        <div
                            class="bg-slate-100 dark:bg-jarvis-dark/80 border border-jarvis-blue/20 dark:border-jarvis-cyan/30 p-4 rounded-r-lg rounded-bl-lg text-base sm:text-lg leading-relaxed text-slate-800 dark:text-jarvis-cyan max-w-[85%]">
                            Greetings. I am M.A.R.K., the AI assistant for Hein Hlyan's portfolio. How may
                            I assist you today in learning more about his capabilities?
                        </div>
                    </div>
                </div>

                <!-- Typing Indicator (Hidden by default) -->
                <div id="typing-indicator" class="hidden px-6 pb-2 z-10">
                    <div class="flex gap-3 items-center">
                        <div
                            class="w-8 h-8 rounded-full border border-jarvis-blue dark:border-jarvis-cyan flex-shrink-0 flex items-center justify-center bg-jarvis-blue/10 dark:bg-jarvis-cyan/10">
                            <div class="w-2 h-2 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan"></div>
                        </div>
                        <div class="text-sm sm:text-base text-jarvis-blue dark:text-jarvis-cyan animate-pulse">Processing query...
                        </div>
                    </div>
                </div>

                <!-- Input Area -->
                <form id="chat-form"
                    class="border-t border-jarvis-blue/30 dark:border-jarvis-cyan/30 p-4 bg-slate-50/50 dark:bg-jarvis-dark/80 relative z-10 flex gap-2">
                    <input type="text" id="chat-input" required
                        class="flex-1 bg-transparent border border-jarvis-blue/50 dark:border-jarvis-cyan/50 focus:border-jarvis-blue dark:focus:border-jarvis-cyan focus:outline-none px-4 py-3 text-base text-slate-900 dark:text-jarvis-cyan placeholder-slate-400 dark:placeholder-jarvis-cyan/30 transition-colors"
                        placeholder="Ask M.A.R.K. about my skills or projects...">
                    <button type="submit"
                        class="hud-border hover-glow px-8 py-3 text-base tracking-widest font-bold bg-white dark:bg-jarvis-cyan/10 transition-all text-jarvis-blue dark:text-jarvis-cyan hover:text-slate-900 dark:hover:text-white cursor-pointer">
                        SEND
                    </button>
                </form>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer
        class="border-t border-jarvis-blue/30 dark:border-jarvis-cyan/30 mt-12 py-6 text-center text-xs text-slate-600 dark:text-jarvis-cyan/50 relative z-10 bg-white/80 dark:bg-jarvis-dark/80 font-bold dark:font-normal">
        <p>END OF PORTFOLIO // HEIN HLYAN © <span id="year"></span></p>
    </footer>

    <!-- ================================================================== -->
    <!-- CURRICULUM VITAE MODAL (POP-UP SUB-PAGE) -->
    <!-- ================================================================== -->
    <div id="cvModal" class="fixed inset-0 z-[100] hidden items-center justify-center p-3 sm:p-6 bg-slate-950/70 dark:bg-black/85 backdrop-blur-md transition-opacity duration-300 opacity-0" role="dialog" aria-modal="true" aria-labelledby="cvModalTitle">
        <!-- Backdrop clickable dismiss -->
        <div id="cvModalBackdrop" class="absolute inset-0 cursor-pointer"></div>

        <!-- Document Sheet Sub-Page Container -->
        <div id="cvModalCard" class="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0c121e] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-jarvis-cyan/40 rounded-2xl shadow-2xl overflow-hidden z-10 transition-all duration-300 transform scale-95 font-mono">
            
            <!-- Top Control HUD Bar (100% Solid Opaque Background) -->
            <div class="relative z-30 flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-slate-200 dark:border-jarvis-cyan/30 bg-slate-100 dark:bg-jarvis-dark shrink-0">
                <div class="flex items-center gap-3">
                    <span class="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="font-sans text-xs sm:text-sm font-bold tracking-widest text-slate-700 dark:text-jarvis-cyan uppercase">CURRICULUM VITAE // HEIN HLYAN</span>
                </div>

                <div class="flex items-center gap-3">
                    <!-- Download CV Dropdown -->
                    <div class="relative z-40" id="downloadCvContainer">
                        <button id="downloadCvDropdownBtn" type="button" class="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold tracking-wider rounded-lg bg-jarvis-blue text-white hover:bg-blue-700 dark:bg-jarvis-cyan dark:text-jarvis-dark dark:hover:bg-cyan-300 transition-all shadow-md font-mono opacity-100">
                            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            <span>Download CV</span>
                            <svg id="downloadCvChevron" class="w-3.5 h-3.5 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>

                        <!-- Dropdown Options (Fully Opaque Pop-up Menu) -->
                        <div id="downloadCvMenu" class="hidden absolute right-0 mt-2 w-72 rounded-xl bg-white dark:bg-[#0c121e] border-2 border-jarvis-blue/50 dark:border-jarvis-cyan/50 shadow-[0_15px_35px_rgba(0,0,0,0.25)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.7)] py-2 z-50 font-mono" style="opacity: 1 !important;">
                            <a href="javascript:void(0)" onclick="alert('Standard CV PDF will be linked once the file is finalized.');" class="flex items-start gap-3 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-jarvis-cyan/20 transition-colors">
                                <svg class="w-5 h-5 text-jarvis-blue dark:text-jarvis-cyan mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                <div>
                                    <div class="font-bold text-slate-900 dark:text-white">Standard CV</div>
                                    <div class="text-[11px] text-slate-600 dark:text-slate-300 font-semibold mt-0.5">Complete visual design & portfolio layout (PDF)</div>
                                </div>
                            </a>
                            <div class="border-t border-slate-200 dark:border-jarvis-cyan/30 my-1"></div>
                            <a href="javascript:void(0)" onclick="alert('ATS-Optimized CV PDF will be linked once the file is finalized.');" class="flex items-start gap-3 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-jarvis-cyan/20 transition-colors">
                                <svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                                <div>
                                    <div class="font-bold text-slate-900 dark:text-white">ATS-Optimized CV</div>
                                    <div class="text-[11px] text-slate-600 dark:text-slate-300 font-semibold mt-0.5">Machine-scannable recruiter format (PDF)</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Close Modal Button -->
                    <button id="closeCvModalBtn" type="button" class="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-jarvis-cyan/20 transition-colors" title="Close [ESC]">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            </div>

            <!-- Scrollable CV Body (Clean Modern Sub-Page Layout) -->
            <div class="overflow-y-auto px-6 sm:px-12 py-8 space-y-10 font-mono">
                
                <!-- Resume Header / Profile Strip -->
                <div class="border-b border-slate-200 dark:border-jarvis-cyan/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 id="cvModalTitle" class="font-sans text-3xl sm:text-4xl font-bold tracking-widest text-slate-900 dark:text-white">Hein Hlyan</h2>
                        <p class="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-mono font-semibold dark:font-normal mt-1">Knowledge Engineering Student</p>
                        <p class="text-sm sm:text-base font-mono font-semibold dark:font-normal text-slate-700 dark:text-slate-300 mt-1">University of Information Technology (UIT), Yangon</p>
                    </div>

                    <!-- Compact Contact Details -->
                    <div class="flex flex-col gap-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono font-semibold dark:font-normal">
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>South Dagon, Yangon, Myanmar</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <a href="mailto:heinhlyanhenery@gmail.com" class="hover:text-jarvis-blue dark:hover:text-jarvis-cyan transition-colors">heinhlyanhenery@gmail.com</a>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <a href="tel:+959683370880" class="hover:text-jarvis-blue dark:hover:text-jarvis-cyan transition-colors">+959683370880</a>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan fill-current shrink-0" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.4 9.74V9.93H5.06v8.57h2.8z"/>
                            </svg>
                            <a href="https://www.linkedin.com/in/hein-hlyan/" target="_blank" rel="noopener noreferrer" class="hover:text-jarvis-blue dark:hover:text-jarvis-cyan transition-colors">linkedin.com/in/hein-hlyan</a>
                        </div>
                    </div>
                </div>

                <!-- EDUCATION SECTION -->
                <div class="space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="w-2.5 h-6 bg-jarvis-blue dark:bg-jarvis-cyan rounded-full"></div>
                        <h3 class="font-sans text-xl font-bold tracking-widest text-slate-900 dark:text-white uppercase">Education</h3>
                        <div class="flex-grow h-px bg-slate-200 dark:bg-jarvis-cyan/20"></div>
                    </div>

                    <div class="relative pl-6 border-l-2 border-jarvis-blue/30 dark:border-jarvis-cyan/30 space-y-8 font-mono">
                        <!-- Education Entry 1 -->
                        <div class="relative group">
                            <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-jarvis-blue dark:border-jarvis-cyan bg-white dark:bg-[#0c121e]"></span>
                            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <h4 class="text-lg font-bold font-mono text-slate-900 dark:text-white">Bachelor of Computer Science - Knowledge Engineering</h4>
                                <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-jarvis-blue/10 dark:bg-jarvis-cyan/15 text-jarvis-blue dark:text-jarvis-cyan border border-jarvis-blue/20 dark:border-jarvis-cyan/30 w-fit">2022 — 2027</span>
                            </div>
                            <div class="text-sm sm:text-base font-semibold font-mono text-jarvis-blue dark:text-jarvis-cyan mb-2">University of Information Technology, Yangon</div>
                            <p class="text-base text-slate-700 dark:text-slate-300 font-mono font-semibold dark:font-normal leading-relaxed">
                                Currently attending final year at University of Information Technology, Yangon, majoring in Knowledge Engineering.
                            </p>
                        </div>

                        <!-- Education Entry 2 -->
                        <div class="relative group">
                            <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-slate-400 dark:border-slate-500 bg-white dark:bg-[#0c121e]"></span>
                            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <h4 class="text-lg font-bold font-mono text-slate-900 dark:text-white">No. (2) Basic Education High School Mingalardon</h4>
                                <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700 w-fit">2018 — 2022</span>
                            </div>
                            <div class="text-sm sm:text-base font-semibold font-mono text-slate-500 dark:text-slate-400 mb-2">Mingalardon, Yangon</div>
                            <p class="text-base text-slate-700 dark:text-slate-300 font-mono font-semibold dark:font-normal leading-relaxed">
                                Attended for 4 years and passed the matriculation exam in 2022 with 2 Distinctions.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- EXPERIENCE SECTION -->
                <div class="space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="w-2.5 h-6 bg-jarvis-blue dark:bg-jarvis-cyan rounded-full"></div>
                        <h3 class="font-sans text-xl font-bold tracking-widest text-slate-900 dark:text-white uppercase">Experience</h3>
                        <div class="flex-grow h-px bg-slate-200 dark:bg-jarvis-cyan/20"></div>
                    </div>

                    <div class="relative pl-6 border-l-2 border-jarvis-blue/30 dark:border-jarvis-cyan/30 font-mono">
                        <div class="relative group">
                            <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-jarvis-blue dark:border-jarvis-cyan bg-white dark:bg-[#0c121e]"></span>
                            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <h4 class="text-lg font-bold font-mono text-slate-900 dark:text-white">Rio Commodity Co., Ltd.</h4>
                                <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 w-fit">Aug 2026 • Yangon, Myanmar</span>
                            </div>
                            <p class="text-base text-slate-700 dark:text-slate-300 font-mono font-semibold dark:font-normal leading-relaxed mt-2">
                                Engineered an automated JavaScript PDF generation pipeline from stakeholder requirements to deployment, streamlining operational reporting and invoicing.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- SKILLS SECTION -->
                <div class="space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="w-2.5 h-6 bg-jarvis-blue dark:bg-jarvis-cyan rounded-full"></div>
                        <h3 class="font-sans text-xl font-bold tracking-widest text-slate-900 dark:text-white uppercase">Skill</h3>
                        <div class="flex-grow h-px bg-slate-200 dark:bg-jarvis-cyan/20"></div>
                    </div>

                    <div class="space-y-6">
                        
                        <!-- 1. Programming -->
                        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-2 border-b border-slate-100 dark:border-slate-800/80">
                            <div class="w-44 shrink-0 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-jarvis-cyan/80 font-mono">
                                Programming:
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor"><path d="M11.91 2C6.98 2 7.28 4.14 7.28 4.14L7.3 6.35H12v.63H5.2S2 6.62 2 11.83c0 5.2 2.8 5 2.8 5h1.67V14.6s-.09-2.73 2.68-2.73h4.63s2.58.04 2.58-2.53V4.53S16.84 2 11.91 2zm-1.34 1.48a.74.74 0 110 1.48.74.74 0 010-1.48zm1.43 18.52c4.93 0 4.63-2.14 4.63-2.14l-.02-2.21H12v-.63h6.8s3.2.36 3.2-4.85c0-5.2-2.8-5-2.8-5h-1.67v2.23s.09 2.73-2.68 2.73H10.2s-2.58-.04-2.58 2.53v4.81s-.48 2.53 4.45 2.53zm1.34-1.48a.74.74 0 110-1.48.74.74 0 010 1.48z"/></svg>
                                    Python
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#00599C]" viewBox="0 0 24 24" fill="currentColor"><path d="M22.374 17.067a11.97 11.97 0 01-4.208 4.208c-.738.455-1.558.795-2.435 1.008a11.93 11.93 0 01-5.462 0 11.88 11.88 0 01-2.435-1.008 11.97 11.97 0 01-4.208-4.208A11.93 11.93 0 012.618 12c0-1.923.447-3.743 1.242-5.36.795-1.616 1.905-3.027 3.284-4.207C8.523 1.253 10.16.544 11.96.544c1.8 0 3.438.709 4.816 1.889a11.97 11.97 0 013.284 4.207c.795 1.617 1.242 3.437 1.242 5.36 0 1.923-.447 3.744-1.242 5.36zM12 4.44c-4.17 0-7.56 3.39-7.56 7.56 0 4.17 3.39 7.56 7.56 7.56 4.17 0 7.56-3.39 7.56-7.56 0-4.17-3.39-7.56-7.56-7.56zm4.8 6.4h-1.2v-1.2h-.8v1.2h-1.2v.8h1.2v1.2h.8v-1.2h1.2v-.8zm3.2 0h-1.2v-1.2h-.8v1.2h-1.2v.8h1.2v1.2h.8v-1.2h1.2v-.8z"/></svg>
                                    C++
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#EA2D2E]" viewBox="0 0 24 24" fill="currentColor"><path d="M8.85 16.84c0 .03-.02.04-.02.06.31.25.75.48 1.23.68.86.35 1.92.54 3.03.54 1.13 0 2.2-.19 3.06-.54.48-.2.9-.43 1.21-.68 0-.02-.02-.03-.02-.06-1.52.48-3.76.6-5.83.6-2.06 0-4.3-.12-5.83-.6zm10.74 3.4c-.05.02-.1.03-.14.05-1.92.73-4.59 1.16-7.55 1.16s-5.63-.43-7.55-1.16c-.05-.02-.09-.03-.14-.05-.8-.32-1.3-.67-1.3-1.04 0-.49.88-.97 2.15-1.32.14-.04.28-.08.43-.11.23.33.56.63.97.9 1.48.97 3.82 1.57 6.47 1.57 2.65 0 4.99-.6 6.47-1.57.41-.27.74-.57.97-.9.15.03.29.07.43.11 1.27.35 2.15.83 2.15 1.32 0 .37-.5.72-1.3 1.04zM10.8 1.21c.58.62.66 1.37.4 2.1-.38 1.05-1.33 1.83-1.63 2.87-.37 1.26.11 2.45.69 3.51.15.28.32.55.49.82-.72-.6-1.37-1.32-1.62-2.18-.34-1.19.12-2.3.62-3.33.45-.92.83-1.85.5-2.88-.13-.39-.33-.74-.59-1.04.38.04.77.08 1.14.13zm4.5 2.4c.54.58.62 1.28.38 1.97-.36.98-1.25 1.71-1.53 2.69-.35 1.18.1 2.3.65 3.29.14.26.3.52.46.77-.67-.56-1.28-1.24-1.52-2.04-.32-1.12.11-2.16.58-3.12.42-.86.78-1.73.47-2.7-.12-.36-.31-.69-.55-.97.35.03.71.07 1.06.11z"/></svg>
                                    Java
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#F7DF1E] bg-black rounded-[2px]" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v18H3V3zm14.65 14.14c.73 0 1.24-.34 1.58-.87l1.32.83c-.59.98-1.6 1.6-2.9 1.6-2.07 0-3.39-1.39-3.39-3.4 0-2.1 1.34-3.49 3.3-3.49 1.95 0 3.07 1.27 3.07 3.31v.44h-4.83c.09 1.15.86 1.83 1.85 1.83zm.13-3.12c-.11-.84-.64-1.34-1.47-1.34-.84 0-1.42.54-1.53 1.34h3zm-8.8 4.7c-1.37 0-2.26-.8-2.26-2.08v-5.9h1.72v5.75c0 .54.34.85.83.85.45 0 .8-.25 1.05-.62v-6h1.72v7.65c-.8.8-1.9 1.35-3.06 1.35z"/></svg>
                                    JavaScript
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#276DC3]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.8 14.8h-2.1l-1.9-3.4h-.9v3.4H7V7.2h4.5c2.1 0 3.5 1.2 3.5 3.1 0 1.4-.8 2.4-2 2.8l2.3 3.7h.5zm-2.8-5.3c1 0 1.6-.5 1.6-1.3s-.6-1.3-1.6-1.3h-2.1v2.6h2.1z"/></svg>
                                    R
                                </span>
                            </div>
                        </div>

                        <!-- 2. AI/ML -->
                        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-2 border-b border-slate-100 dark:border-slate-800/80">
                            <div class="w-44 shrink-0 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-jarvis-cyan/80 font-mono">
                                AI / ML:
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                    Machine Learning
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    Deep Learning
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                    Computer Vision
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    Agentic AI
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#EE4C2C]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.015 2.003a.75.75 0 00-.53.22L6.23 7.477a3.75 3.75 0 105.303 5.304l3.197-3.197a.75.75 0 10-1.06-1.06l-3.197 3.196a2.25 2.25 0 11-3.182-3.182l4.723-4.723a.75.75 0 00-.53-1.282h.53zm3.72 1.542a.75.75 0 000 1.06l.395.395a.75.75 0 101.06-1.06l-.395-.395a.75.75 0 00-1.06 0zM7.5 18a.75.75 0 100 1.5.75.75 0 000-1.5z"/></svg>
                                    PyTorch
                                </span>
                            </div>
                        </div>

                        <!-- 3. Web Development -->
                        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-2 border-b border-slate-100 dark:border-slate-800/80">
                            <div class="w-44 shrink-0 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-jarvis-cyan/80 font-mono">
                                Web Development:
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-slate-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.8 14.5l-5.6-7.3v7.3H9.4V8.5h1.8l5.6 7.3V8.5h1.8v8z"/></svg>
                                    Next.js
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 9a3 3 0 100 6 3 3 0 000-6zm-6.2 3c0-1.7 1.8-3.7 4.7-4.8-.4-.7-.9-1.5-1.4-2.2C5.9 5.8 4 7.2 4 9c0 1.2.9 2.2 1.8 3zm12.4 0c.9-.8 1.8-1.8 1.8-3 0-1.8-1.9-3.2-5.1-4 0 .7-.5 1.5-1.4 2.2 2.9 1.1 4.7 3.1 4.7 4.8zM12 4.2c2.1 0 4.1.4 5.7 1.1.7-.5 1.4-.9 2-1.3C17.7 2.8 15 2 12 2s-5.7.8-7.7 2c.6.4 1.3.8 2 1.3 1.6-.7 3.6-1.1 5.7-1.1zm0 15.6c-2.1 0-4.1-.4-5.7-1.1-.7.5-1.4.9-2 1.3C6.3 21.2 9 22 12 22s5.7-.8 7.7-2c-.6-.4-1.3-.8-2-1.3-1.6.7-3.6 1.1-5.7 1.1zm-6.2-4.8c-.9-.8-1.8-1.8-1.8-3 0-.6.2-1.1.6-1.6-.3.9-.6 1.8-.6 2.8 0 1.1.6 1.9 1.8 1.8zm12.4 0c1.2.1 1.8-.7 1.8-1.8 0-1-.3-1.9-.6-2.8.4.5.6 1 .6 1.6 0 1.2-.9 2.2-1.8 3z"/></svg>
                                    React
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#38B2AC]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-1.1 1 .2 1.7 1 2.5 1.8 1.3 1.3 2.8 2.7 6.2 2.7 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3 1.1-1-.2-1.7-1-2.5-1.8-1.3-1.3-2.8-2.7-6.2-2.7zm-6.5 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-1.1 1 .2 1.7 1 2.5 1.8 1.3 1.3 2.8 2.7 6.2 2.7 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3 1.1-1-.2-1.7-1-2.5-1.8-1.3-1.3-2.8-2.7-6.2-2.7z"/></svg>
                                    Tailwind CSS
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                    Flask
                                </span>
                            </div>
                        </div>

                        <!-- 4. Tools & Databases -->
                        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-2 border-b border-slate-100 dark:border-slate-800/80">
                            <div class="w-44 shrink-0 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-jarvis-cyan/80 font-mono">
                                Tools & Databases:
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.9 4.5l3.2 3.2c.4-.1.8 0 1.2.2.8.4 1.2 1.3 1 2.1l3 3c.8-.2 1.7.2 2.1 1 .5 1.1.2 2.4-.8 3-.4.2-.8.3-1.3.3-.8 0-1.5-.4-1.8-1.1-.3-.6-.3-1.4.1-2l-2.8-2.8v4.9c.7.4 1.1 1.2 1.1 2.1 0 1.3-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4c0-.9.5-1.7 1.2-2.1V9.5c-.7-.4-1.2-1.2-1.2-2.1 0-.6.2-1.2.6-1.6L7.4 3.7 2.4 8.7c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.4c.5-.6.5-1.4 0-2z"/></svg>
                                    Git
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-slate-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                    GitHub
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#336791]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 6.5c-4.41 0-8-1.34-8-2.5s3.59-2.5 8-2.5 8 1.34 8 2.5-3.59 2.5-8 2.5zM4 9.3v4.2c0 1.16 3.59 2.5 8 2.5s8-1.34 8-2.5V9.3c-1.95 1.13-4.8 1.7-8 1.7s-6.05-.57-8-1.7zm0 6.7v2c0 1.16 3.59 2.5 8 2.5s8-1.34 8-2.5v-2c-1.95 1.13-4.8 1.7-8 1.7s-6.05-.57-8-1.7z"/></svg>
                                    PostgreSQL
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 0c-.571 0-1.127.356-1.543.916C8.887 2.923 6 7.435 6 13.064c0 3.398 1.54 6.755 3.992 8.761.64.524 1.36.985 2.009 1.175.647-.19 1.368-.651 2.008-1.175C16.46 19.819 18 16.462 18 13.064c0-5.629-2.887-10.141-4.458-12.148C13.127.356 12.572 0 12.001 0zm.014 2.805c.89 1.132 2.375 3.565 3.14 6.551-.973-.836-2.023-1.229-3.14-1.229s-2.168.393-3.141 1.229c.765-2.986 2.25-5.419 3.141-6.551z"/></svg>
                                    MongoDB
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-jarvis-blue dark:text-jarvis-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    REST APIs
                                </span>
                            </div>
                        </div>

                        <!-- 5. Professional Skills -->
                        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-2">
                            <div class="w-44 shrink-0 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-jarvis-cyan/80 font-mono">
                                Professional Skills:
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                                    Leadership
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    Problem-Solving
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    Teamwork
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                    Adaptability
                                </span>
                                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-jarvis-cyan/25 bg-slate-50 dark:bg-jarvis-dark/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-jarvis-blue dark:hover:border-jarvis-cyan transition-colors">
                                    <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                    Communication
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- ================================================================== -->
    <!-- ACTIVITY PHOTO LIGHTBOX MODAL (INTERACTIVE PREVIEW) -->
    <!-- ================================================================== -->
    <div id="activityLightboxModal" class="fixed inset-0 z-[120] hidden items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300 opacity-0" role="dialog" aria-modal="true">
        <!-- Backdrop -->
        <div id="activityLightboxBackdrop" class="absolute inset-0 cursor-pointer"></div>

        <!-- Lightbox Content Container -->
        <div class="relative z-10 max-w-5xl max-h-[92vh] flex flex-col items-center">
            <!-- Close Button -->
            <button id="closeActivityLightboxBtn" type="button" class="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors" title="Close [ESC]">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <img id="activityLightboxImg" src="" alt="Enlarged Engagement Preview" class="max-h-[80vh] max-w-[90vw] object-contain rounded-xl border-2 border-jarvis-blue/40 dark:border-jarvis-cyan/40 shadow-2xl bg-black/40">
            <div id="activityLightboxCaption" class="mt-3.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-jarvis-cyan/40 text-xs sm:text-sm font-mono font-bold tracking-wider text-center text-slate-100 max-w-xl shadow-lg"></div>
        </div>
    </div>
    `;
}

// ==========================================================================
// INTERACTIVE SCRIPTS INITIALIZATION
// ==========================================================================

const htmlElement = document.documentElement;

// Set Current Year in Footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// --------------------------------------------------------------------------
// 1. Typewriter Effect for Hero
// --------------------------------------------------------------------------
const nameText = "Hein Hlyan";
const roleText = "Knowledge Engineering Student";
const speed = 75; // ms per character
let charIndex = 0;
let isTypingRole = false;

const typeWriterElement = document.getElementById("typewriter");
const typeWriterSubElement = document.getElementById("typewriter-sub");
const cursorMain = document.getElementById("cursor-main");
const cursorSub = document.getElementById("cursor-sub");

function typeWriter() {
    if (!typeWriterElement || !typeWriterSubElement) return;

    if (!isTypingRole) {
        if (charIndex < nameText.length) {
            typeWriterElement.textContent += nameText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            isTypingRole = true;
            charIndex = 0;
            if (cursorMain) cursorMain.classList.add("hidden");
            if (cursorSub) cursorSub.classList.remove("hidden");
            setTimeout(typeWriter, 300);
        }
    } else {
        if (charIndex < roleText.length) {
            typeWriterSubElement.textContent += roleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        }
    }
}

// Start typing after short delay to simulate boot up
setTimeout(typeWriter, 800);

// --------------------------------------------------------------------------
// 2. Theme Toggle Logic (Dark / Light Mode - Original Vector SVG Icon)
// --------------------------------------------------------------------------
const darkPath = "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";
const lightPath = "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z";

const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function setDarkMode() {
    htmlElement.classList.add('dark');
    htmlElement.classList.remove('light');
    if (themeIcon) {
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${darkPath}"></path>`;
    }
}

function setLightMode() {
    htmlElement.classList.remove('dark');
    htmlElement.classList.add('light');
    if (themeIcon) {
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${lightPath}"></path>`;
    }
}

// Default theme is LIGHT mode unless user explicitly toggles
let currentTheme = localStorage.getItem('portfolio_theme');
if (currentTheme !== 'dark' && currentTheme !== 'light') {
    currentTheme = 'light';
    localStorage.setItem('portfolio_theme', 'light');
    localStorage.setItem('theme', 'light');
}

if (currentTheme === 'dark') {
    setDarkMode();
} else {
    setLightMode();
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            setLightMode();
            localStorage.setItem('portfolio_theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            setDarkMode();
            localStorage.setItem('portfolio_theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// --------------------------------------------------------------------------
// 3. Smooth Scrolling for Anchor Links & CV Modal Trigger
// --------------------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        // Intercept CV modal links (Navbar & Hero buttons)
        if (targetId === '#cv') {
            e.preventDefault();
            openCvModal();
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --------------------------------------------------------------------------
// 3.1 Curriculum Vitae (CV) Pop-up Sub-Page Controller
// --------------------------------------------------------------------------
const cvModal = document.getElementById('cvModal');
const cvModalCard = document.getElementById('cvModalCard');
const closeCvModalBtn = document.getElementById('closeCvModalBtn');
const cvModalBackdrop = document.getElementById('cvModalBackdrop');
const downloadCvDropdownBtn = document.getElementById('downloadCvDropdownBtn');
const downloadCvMenu = document.getElementById('downloadCvMenu');
const downloadCvChevron = document.getElementById('downloadCvChevron');

function openCvModal() {
    if (!cvModal) return;
    cvModal.classList.remove('hidden');
    cvModal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Smooth entry transition
    requestAnimationFrame(() => {
        cvModal.classList.remove('opacity-0');
        cvModal.classList.add('opacity-100');
        if (cvModalCard) {
            cvModalCard.classList.remove('scale-95');
            cvModalCard.classList.add('scale-100');
        }
    });
}

function closeCvModal() {
    if (!cvModal) return;
    cvModal.classList.remove('opacity-100');
    cvModal.classList.add('opacity-0');
    if (cvModalCard) {
        cvModalCard.classList.remove('scale-100');
        cvModalCard.classList.add('scale-95');
    }
    if (downloadCvMenu) {
        downloadCvMenu.classList.add('hidden');
    }
    if (downloadCvChevron) {
        downloadCvChevron.classList.remove('rotate-180');
    }
    setTimeout(() => {
        cvModal.classList.add('hidden');
        cvModal.classList.remove('flex');
        document.body.style.overflow = '';
    }, 250);
}

if (closeCvModalBtn) {
    closeCvModalBtn.addEventListener('click', closeCvModal);
}
if (cvModalBackdrop) {
    cvModalBackdrop.addEventListener('click', closeCvModal);
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal && !cvModal.classList.contains('hidden')) {
        closeCvModal();
    }
});

// Download CV Dropdown Menu Toggle
if (downloadCvDropdownBtn && downloadCvMenu) {
    downloadCvDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = downloadCvMenu.classList.contains('hidden');
        if (isHidden) {
            downloadCvMenu.classList.remove('hidden');
            if (downloadCvChevron) downloadCvChevron.classList.add('rotate-180');
        } else {
            downloadCvMenu.classList.add('hidden');
            if (downloadCvChevron) downloadCvChevron.classList.remove('rotate-180');
        }
    });

    document.addEventListener('click', (e) => {
        if (!downloadCvDropdownBtn.contains(e.target) && !downloadCvMenu.contains(e.target)) {
            downloadCvMenu.classList.add('hidden');
            if (downloadCvChevron) downloadCvChevron.classList.remove('rotate-180');
        }
    });
}

// --------------------------------------------------------------------------
// 3.2 Activity Photo Lightbox Controller
// --------------------------------------------------------------------------
const activityLightboxModal = document.getElementById('activityLightboxModal');
const activityLightboxImg = document.getElementById('activityLightboxImg');
const activityLightboxCaption = document.getElementById('activityLightboxCaption');
const closeActivityLightboxBtn = document.getElementById('closeActivityLightboxBtn');
const activityLightboxBackdrop = document.getElementById('activityLightboxBackdrop');

function openActivityLightbox(src, caption) {
    if (!activityLightboxModal || !activityLightboxImg) return;
    activityLightboxImg.src = src;
    if (activityLightboxCaption) {
        activityLightboxCaption.textContent = caption || 'Active Engagement Record';
    }
    activityLightboxModal.classList.remove('hidden');
    activityLightboxModal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
        activityLightboxModal.classList.remove('opacity-0');
        activityLightboxModal.classList.add('opacity-100');
    });
}

function closeActivityLightbox() {
    if (!activityLightboxModal) return;
    activityLightboxModal.classList.remove('opacity-100');
    activityLightboxModal.classList.add('opacity-0');
    setTimeout(() => {
        activityLightboxModal.classList.add('hidden');
        activityLightboxModal.classList.remove('flex');
        if (activityLightboxImg) activityLightboxImg.src = '';
        if (!cvModal || cvModal.classList.contains('hidden')) {
            document.body.style.overflow = '';
        }
    }, 250);
}

document.querySelectorAll('.activity-gallery-photo').forEach(photoDiv => {
    photoDiv.addEventListener('click', () => {
        const src = photoDiv.getAttribute('data-img');
        const caption = photoDiv.getAttribute('data-caption');
        if (src) openActivityLightbox(src, caption);
    });
});

if (closeActivityLightboxBtn) {
    closeActivityLightboxBtn.addEventListener('click', closeActivityLightbox);
}
if (activityLightboxBackdrop) {
    activityLightboxBackdrop.addEventListener('click', closeActivityLightbox);
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activityLightboxModal && !activityLightboxModal.classList.contains('hidden')) {
        closeActivityLightbox();
    }
});

// --------------------------------------------------------------------------
// 4. AI Chatbot Logic (M.A.R.K. Knowledge Engineering Assistant)
// --------------------------------------------------------------------------
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatHistoryDiv = document.getElementById('chat-history');
const typingIndicator = document.getElementById('typing-indicator');

let conversationHistory = [];

if (chatForm && chatInput && chatHistoryDiv) {
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        // 1. Add user message to UI
        appendMessage(userMessage, 'user');
        chatInput.value = '';

        // 2. Add to conversation history
        conversationHistory.push({ role: 'user', content: userMessage });

        // 3. Show typing indicator
        if (typingIndicator) {
            typingIndicator.classList.remove('hidden');
        }
        chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;

        try {
            // 4. Call Serverless Backend Endpoint (/api/chat)
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    conversation_history: conversationHistory
                })
            });

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            }

            const data = await res.json();

            // 5. Hide typing indicator & append M.A.R.K. answer
            if (typingIndicator) {
                typingIndicator.classList.add('hidden');
            }

            if (data && data.answer) {
                appendMessage(data.answer, 'model');
                conversationHistory.push({ role: 'assistant', content: data.answer });
            } else {
                appendMessage("[SYSTEM NOTICE: UNABLE TO RETRIEVE KERNEL RESPONSE.]", 'model');
            }

        } catch (error) {
            console.error("Chat Error:", error);
            if (typingIndicator) {
                typingIndicator.classList.add('hidden');
            }
            appendMessage("[COMM-LINK ERROR: UNABLE TO REACH M.A.R.K. BACKEND. PLEASE ENSURE SERVERLESS SERVICE IS ACTIVE.]", 'model');
        }
    });
}

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'user' ? 'flex gap-3 flex-row-reverse' : 'flex gap-3';

    let iconHtml = '';
    if (sender === 'user') {
        iconHtml = `
            <div class="w-8 h-8 rounded-full border border-slate-400 flex-shrink-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800">
                <svg class="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
        `;
    } else {
        iconHtml = `
            <div class="w-8 h-8 rounded-full border border-jarvis-blue dark:border-jarvis-cyan flex-shrink-0 flex items-center justify-center bg-jarvis-blue/10 dark:bg-jarvis-cyan/10">
                <div class="w-2 h-2 rounded-full bg-jarvis-blue dark:bg-jarvis-cyan animate-pulse"></div>
            </div>
        `;
    }

    const bubbleClass = sender === 'user'
        ? 'bg-jarvis-blue/10 dark:bg-jarvis-cyan/20 border border-jarvis-blue/30 dark:border-jarvis-cyan/40 p-4 rounded-l-lg rounded-br-lg text-base sm:text-lg leading-relaxed text-slate-900 dark:text-white max-w-[85%]'
        : 'bg-slate-100 dark:bg-jarvis-dark/80 border border-jarvis-blue/20 dark:border-jarvis-cyan/30 p-4 rounded-r-lg rounded-bl-lg text-base sm:text-lg leading-relaxed text-slate-800 dark:text-jarvis-cyan max-w-[85%]';

    msgDiv.innerHTML = `
        ${iconHtml}
        <div class="${bubbleClass}">${text}</div>
    `;

    chatHistoryDiv.appendChild(msgDiv);
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
}

// --------------------------------------------------------------------------
// 5. Interactive Cursor: Arc Reactor HUD & Background Glow Spotlight
// --------------------------------------------------------------------------
const cursorGlow = document.getElementById('cursor-glow');
const hudCursor = document.getElementById('hud-cursor');

if (hudCursor) {
    // Enable system cursor override on fine pointer devices
    document.body.classList.add('custom-cursor-enabled');

    let mouseX = -1000;
    let mouseY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (cursorGlow) cursorGlow.style.opacity = '1';
        hudCursor.style.opacity = '1';

        // Check if hovered element is a text input, clickable button/link, or photo
        const target = e.target;
        const isTextInput = target.closest('input[type="text"], textarea, #chat-input');
        const isClickable = target.closest('a, button, input[type="submit"], input[type="button"], #themeToggle, [role="button"], label');
        const isPhoto = target.closest('.photo-container, .photo-avatar');

        if (isTextInput) {
            hudCursor.classList.remove('targeting');
            hudCursor.classList.add('text-mode');
        } else if (isClickable && !isPhoto) {
            hudCursor.classList.remove('text-mode');
            hudCursor.classList.add('targeting');
        } else {
            hudCursor.classList.remove('targeting', 'text-mode');
        }
    });

    window.addEventListener('mouseleave', () => {
        if (cursorGlow) cursorGlow.style.opacity = '0';
        hudCursor.style.opacity = '0';
    });

    window.addEventListener('mouseenter', () => {
        if (cursorGlow) cursorGlow.style.opacity = '1';
        hudCursor.style.opacity = '1';
    });

    function renderCursorFrame() {
        // 1. Instant precision tracking for HUD Arc Reactor / Target Scoper
        hudCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

        // 2. Smooth lerp for ambient background radial glow spotlight
        if (cursorGlow) {
            currentX += (mouseX - currentX) * 0.15;
            currentY += (mouseY - currentY) * 0.15;
            cursorGlow.style.setProperty('--mouse-x', `${currentX}px`);
            cursorGlow.style.setProperty('--mouse-y', `${currentY}px`);
        }

        requestAnimationFrame(renderCursorFrame);
    }

    renderCursorFrame();
}
