(function() {
    const STORAGE = {
        get lang() { return localStorage.getItem('patriot_lang') || 'ru'; },
        set lang(v) { localStorage.setItem('patriot_lang', v); },
        get user() { return localStorage.getItem('patriot_user') || 'Пользователь'; },
        set user(v) { localStorage.setItem('patriot_user', v); },
        get dictor() { 
            const val = localStorage.getItem('patriot_dictor');
            return val === null ? true : val === 'true';
        },
        set dictor(v) { localStorage.setItem('patriot_dictor', v); },
        get dictorMode() { 
            const val = localStorage.getItem('patriot_dictor_mode');
            return val || 'hover';
        },
        set dictorMode(v) { localStorage.setItem('patriot_dictor_mode', v); },
        get wallpaper() { return localStorage.getItem('patriot_wallpaper') || 'flag'; },
        set wallpaper(v) { localStorage.setItem('patriot_wallpaper', v); },
        get theme() { return localStorage.getItem('patriot_theme') || 'dark'; },
        set theme(v) { localStorage.setItem('patriot_theme', v); },
        get apps() { return JSON.parse(localStorage.getItem('patriot_apps') || '[]'); },
        set apps(v) { localStorage.setItem('patriot_apps', JSON.stringify(v)); }
    };

    // ==================== ПЕРЕВОДЫ ====================
    const LANG = {
        ru: {
            login: 'Войти',
            tap: 'нажмите для входа',
            calc: 'Калькулятор',
            browser: 'Браузер',
            messenger: 'Мессенджер',
            store: 'Магазин приложений',
            music: 'Музыка',
            video: 'Видео',
            files: 'Файлы',
            settings: 'Настройки',
            calendar: 'Календарь',
            main: 'Главное',
            patriotic: 'Патриотическое',
            classic: 'Классика',
            mon: 'Пн',
            tue: 'Вт',
            wed: 'Ср',
            thu: 'Чт',
            fri: 'Пт',
            sat: 'Сб',
            sun: 'Вс',
            jan: 'Январь',
            feb: 'Февраль',
            mar: 'Март',
            apr: 'Апрель',
            may: 'Май',
            jun: 'Июнь',
            jul: 'Июль',
            aug: 'Август',
            sep: 'Сентябрь',
            oct: 'Октябрь',
            nov: 'Ноябрь',
            dec: 'Декабрь',
            jan2: 'января',
            feb2: 'февраля',
            mar2: 'марта',
            apr2: 'апреля',
            may2: 'мая',
            jun2: 'июня',
            jul2: 'июля',
            aug2: 'августа',
            sep2: 'сентября',
            oct2: 'октября',
            nov2: 'ноября',
            dec2: 'декабря',
            holiday: 'Праздник',
            noHoliday: 'Будний день',
            save: 'Сохранить',
            username: 'Имя пользователя',
            lang: 'Язык',
            onlyRF: 'Только РФ и РБ',
            timezone: 'Часовой пояс',
            saved: 'Настройки сохранены',
            anthem: 'Гимн РФ',
            version: 'Версия',
            security: 'Безопасность',
            active: 'Активна',
            updates: 'Проверить обновления',
            clear: 'Сброс данных',
            dictorMode: 'Режим диктора',
            dictorDesc: 'Озвучивание текста',
            hover: 'При наведении',
            click: 'При клике',
            selection: 'При выделении',
            test: 'Тест',
            disable: 'Отключить',
            noUpdates: 'Обновлений нет',
            clearConfirm: 'Очистить все данные?',
            cleared: 'Данные очищены',
            notSupport: 'Не поддерживается',
            fill: 'Заполните поля!',
            onlyRU: '⛔ Только русские сайты!',
            exists: 'Уже есть!',
            installed: 'Установлено',
            selected: 'Выбрано',
            system: 'Система',
            theme: 'Тема',
            light: 'Светлая',
            dark: 'Тёмная',
            oled: 'OLED-чёрная',
            systemTheme: 'Системная',
            whatsnew: 'Что нового',
            patriotTest: 'Тест на патриота',
            mom: 'Мама',
            school: 'Школьный чат',
            friend: 'Подруга',
            messagePlaceholder: 'Введите сообщение...',
            welcomeMessenger: 'Добро пожаловать в Ручат',
            selectChat: 'Выберите чат'
        },
        by: {
            login: 'Увайсці',
            tap: 'націсніце для ўваходу',
            calc: 'Калькулятар',
            browser: 'Браўзэр',
            messenger: 'Месэнджар',
            store: 'Крама прыкладанняў',
            music: 'Румузыка',
            video: 'Рувідэа',
            files: 'Файлы',
            settings: 'Налады',
            calendar: 'Каляндар',
            main: 'Галоўнае',
            patriotic: 'Патрыятычнае',
            classic: 'Класіка',
            mon: 'Пн',
            tue: 'Аў',
            wed: 'Ср',
            thu: 'Чц',
            fri: 'Пт',
            sat: 'Сб',
            sun: 'Нд',
            jan: 'Студзень',
            feb: 'Люты',
            mar: 'Сакавік',
            apr: 'Красавік',
            may: 'Май',
            jun: 'Чэрвень',
            jul: 'Ліпень',
            aug: 'Жнівень',
            sep: 'Верасень',
            oct: 'Кастрычнік',
            nov: 'Лістапад',
            dec: 'Снежань',
            jan2: 'студзеня',
            feb2: 'лютага',
            mar2: 'сакавіка',
            apr2: 'красавіка',
            may2: 'мая',
            jun2: 'чэрвеня',
            jul2: 'ліпеня',
            aug2: 'жніўня',
            sep2: 'верасня',
            oct2: 'кастрычніка',
            nov2: 'лістапада',
            dec2: 'снежня',
            holiday: 'Свята',
            noHoliday: 'Будзень',
            save: 'Захаваць',
            username: 'Імя',
            lang: 'Мова',
            onlyRF: 'Толькі РФ і РБ',
            timezone: 'Час',
            saved: 'Захавана',
            anthem: 'Гімн РФ',
            version: 'Версія',
            security: 'Бяспека',
            active: 'Актыўна',
            updates: 'Абнаўленні',
            clear: 'Скід',
            dictorMode: 'Рэжым дыктара',
            dictorDesc: 'Азвучванне тэксту',
            hover: 'Пры навядзенні',
            click: 'Пры кліку',
            selection: 'Пры вылучэнні',
            test: 'Тэст',
            disable: 'Адключыць',
            noUpdates: 'Няма абнаўленняў',
            clearConfirm: 'Ачысціць?',
            cleared: 'Ачышчана',
            notSupport: 'Не падтрымліваецца',
            fill: 'Запоўніце!',
            onlyRU: '⛔ Толькі рускія сайты!',
            exists: 'Ужо ёсць!',
            installed: 'Усталявана',
            selected: 'Выбрана',
            system: 'Сістэма',
            theme: 'Тэма',
            light: 'Светлая',
            dark: 'Цёмная',
            oled: 'OLED-чорная',
            systemTheme: 'Сістэмная',
            whatsnew: 'Што новага',
            patriotTest: 'Тэст на патрыёта',
            mom: 'Мама',
            school: 'Школьны чат',
            friend: 'Сяброўка',
            messagePlaceholder: 'Увядзіце паведамленне...',
            welcomeMessenger: 'Сардэчна запрашаем у Ручат',
            selectChat: 'Абярыце чат'
        }
    };

    const t = (key) => LANG[STORAGE.lang][key] || key;

    // ==================== ПРАЗДНИКИ ====================
    const HOLIDAYS = [
        { month: 0, day: 1, name: 'Новый год' },
        { month: 0, day: 7, name: 'Рождество' },
        { month: 1, day: 23, name: 'День защитника Отечества' },
        { month: 2, day: 8, name: 'Женский день' },
        { month: 4, day: 1, name: 'Весны и Труда' },
        { month: 4, day: 9, name: 'День Победы' },
        { month: 5, day: 12, name: 'День России' },
        { month: 10, day: 4, name: 'День Народного единства' }
    ];

    // ==================== ПЛЕЙЛИСТЫ ====================
    const PLAYLISTS = {
        main: [
            { title: 'Гимн РФ', artist: 'Государственный гимн', src: 'sounds/gimn.mp3', icon: '🇷🇺' },
            { title: 'Я русский', artist: 'SHAMAN', src: 'sounds/yarusskiy.mp3', icon: '🎤' }
        ],
        patriotic: [
            { title: 'Священная война', artist: 'Александров', src: 'sounds/svyaschennaya.mp3', icon: '⚔️' },
            { title: 'День Победы', artist: 'Лещенко', src: 'sounds/denpobedy.mp3', icon: '🕊️' }
        ],
        classic: [
            { title: 'Калинка', artist: 'Народная', src: 'sounds/kalinka.mp3', icon: '🎻' },
            { title: 'Подмосковные вечера', artist: 'Соловьёв-Седой', src: 'sounds/podmoskovnie.mp3', icon: '🎼' }
        ]
    };

    // ==================== ВИДЕО ====================
    const VIDEOS = [
        { title: 'Гимн России', channel: 'Государственный', views: '42.7M', src: 'videos/anthem.mp4', poster: 'videos/anthem_poster.jpg' },
        { title: 'SHAMAN - Я русский', channel: 'SHAMAN', views: '8.5M', src: 'videos/shaman.mp4', poster: 'videos/shaman_poster.jpg' },
        { title: 'MAX - новейший мессенджер нового поколения', channel: 'Гаспром медиа', views: '156K', src: 'videos/max.mp4', poster: 'videos/max_poster.png' }
    ];

    // ==================== ПРИЛОЖЕНИЯ ====================
    const PREINSTALLED = [
        { name: 'Ручат', url: '#', icon: 'images/messenger.png', isMessenger: true, color: '#0057b7' },
        { name: 'Рувидео', url: '#', icon: 'images/rutube.png', isVideo: true },
        { name: 'Румузыка', url: '#', icon: 'images/VKmusica.png', isMusic: true },
    ];

    // ==================== ОБОИ ====================
    const WALLPAPERS = {
        flag: 'wallpapers/flag.png',
        gerb: 'wallpapers/gerb.png',
        kreml: 'wallpapers/kreml.png',
        prostory: 'wallpapers/prostory.png',
        bereza: 'wallpapers/bereza.png'
    };
    
    // Перехват попыток открыть прокси-страницы
    const originalOpen = window.open;
    window.open = function(url, ...args) {
        const proxyKeywords = ['proxy', 'vpn', 'hide', 'unblock', 'anonymous', 'tor', 'browser', 'opera', 'psiphon', 'hola', 'tunnel'];
        if (url && proxyKeywords.some(keyword => url.toLowerCase().includes(keyword))) {
            showToast('⛔ Доступ к прокси/VPN запрещен PatriotOS!');
            return null;
        }
        return originalOpen.call(this, url, ...args);
    };

    // ==================== ФАЙЛОВАЯ СИСТЕМА ====================
    class FileSystem {
        constructor() {
            this.root = this.load();
            this.current = 'root';
        }
        
        load() {
            const saved = localStorage.getItem('patriot_fs');
            if (saved) return JSON.parse(saved);
            return {
                name: 'root',
                type: 'folder',
                children: {
                    'Документы': {
                        name: 'Документы',
                        type: 'folder',
                        children: {
                            'Приказ.txt': { name: 'Приказ.txt', type: 'file', content: 'Служить России!' },
                            'Обновление.zanashix': { name: 'Обновление.zanashix', type: 'file', content: 'PatriotOS 1.1 - Новый мессенджер, темы, тест на патриота!' }
                        }
                    },
                    'Изображения': {
                        name: 'Изображения',
                        type: 'folder',
                        children: {
                            'Флаг.png': { name: 'Флаг.png', type: 'file', content: 'flag' },
                            'Герб.png': { name: 'Герб.png', type: 'file', content: 'gerb' }
                        }
                    },
                    'Музыка': {
                        name: 'Музыка',
                        type: 'folder',
                        children: {
                            'Гимн.mp3': { name: 'Гимн.mp3', type: 'file', content: 'sounds/gimn.mp3' },
                            'Я русский.mp3': { name: 'Я русский.mp3', type: 'file', content: 'sounds/yarusskiy.mp3' }
                        }
                    },
                    'Видео': {
                        name: 'Видео',
                        type: 'folder',
                        children: {
                            'Гимн.mp4': { name: 'Гимн.mp4', type: 'file', content: 'videos/anthem.mp4' }
                        }
                    }
                }
            };
        }
        
        save() {
            localStorage.setItem('patriot_fs', JSON.stringify(this.root));
        }
        
        getFolder(path) {
            if (path === 'root') return this.root;
            if (path === 'Документы') return this.root.children['Документы'];
            if (path === 'Изображения') return this.root.children['Изображения'];
            if (path === 'Музыка') return this.root.children['Музыка'];
            if (path === 'Видео') return this.root.children['Видео'];
            
            const parts = path.split('/');
            let current = this.root;
            for (const part of parts) {
                if (current.children && current.children[part]) {
                    current = current.children[part];
                } else {
                    return null;
                }
            }
            return current;
        }
        
        create(path, name, type) {
            const folder = this.getFolder(path);
            if (!folder || folder.children[name]) return false;
            
            folder.children[name] = {
                name,
                type,
                children: type === 'folder' ? {} : undefined,
                content: ''
            };
            this.save();
            return true;
        }
        
        delete(path, name) {
            const folder = this.getFolder(path);
            if (!folder || !folder.children[name]) return false;
            delete folder.children[name];
            this.save();
            return true;
        }
        
        notify(msg) {
            showToast(msg);
        }
        
        openZanashix(content) {
            const win = document.getElementById('whatsnew-window');
            if (win) {
                openWindow('whatsnew-window');
                showToast(`📄 Открыт файл .Zanashix: ${content.substring(0, 100)}...`);
            }
        }
    }
    
    const fs = new FileSystem();

    // ==================== СОСТОЯНИЕ ====================
    let currentAudio = null;
    let currentPlaylist = PLAYLISTS.main;
    let currentTrackIndex = 0;
    let currentLang = STORAGE.lang;
    let dictorEnabled = STORAGE.dictor;
    let dictorMode = STORAGE.dictorMode;
    let currentWallpaper = STORAGE.wallpaper;
    let currentTheme = STORAGE.theme;
    let installedApps = STORAGE.apps;
    let calcExpression = '';
    let calendarDate = new Date();
    let dropdownDate = new Date();

    // ==================== ТЕМЫ ====================
    function applyTheme(theme) {
        currentTheme = theme;
        STORAGE.theme = theme;
        
        if (theme === 'system') {
            const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        } else {
            document.body.setAttribute('data-theme', theme);
        }
        
        const settingsContent = document.getElementById('settings-content');
        if (settingsContent && settingsContent.innerHTML.includes('theme')) {
            renderSettings('theme');
        }
    }
    
    function initTheme() {
        applyTheme(currentTheme);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (currentTheme === 'system') {
                const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
            }
        });
    }

    // ==================== УТИЛИТЫ ====================
    function showToast(msg, duration = 2000) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), duration);
    }

    function playSound(src, vol = 0.3) {
        try {
            const audio = new Audio(src);
            audio.volume = vol;
            audio.play().catch(e => console.log('Audio play failed:', e));
        } catch (e) {
            console.log('Audio error:', e);
        }
    }

    function speak(text) {
        if (!dictorEnabled || !text || !window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = currentLang === 'ru' ? 'ru-RU' : 'be-BY';
        utter.rate = 0.9;
        window.speechSynthesis.speak(utter);
    }

    // Инициализация диктора
    function initDictor() {
        document.removeEventListener('mouseover', dictorHoverHandler);
        document.removeEventListener('click', dictorClickHandler);
        document.removeEventListener('mouseup', dictorSelectionHandler);
        
        if (!dictorEnabled) return;
        
        if (dictorMode === 'hover') {
            document.addEventListener('mouseover', dictorHoverHandler);
        } else if (dictorMode === 'click') {
            document.addEventListener('click', dictorClickHandler);
        } else if (dictorMode === 'selection') {
            document.addEventListener('mouseup', dictorSelectionHandler);
        }
    }

    let hoverTimeout;
    function dictorHoverHandler(e) {
        clearTimeout(hoverTimeout);
        if (e.target.tagName === 'IFRAME') return;
        const text = e.target.innerText || e.target.title || e.target.placeholder;
        if (text && text.trim().length > 0 && text.length < 150) {
            hoverTimeout = setTimeout(() => speak(text), 500);
        }
    }

    function dictorClickHandler(e) {
        if (e.target.tagName === 'IFRAME') return;
        const text = e.target.innerText || e.target.title || e.target.placeholder || e.target.value;
        if (text && text.trim().length > 0 && text.length < 150) {
            speak(text);
        }
    }

    function dictorSelectionHandler() {
        const sel = window.getSelection().toString();
        if (sel && sel.trim().length > 0 && sel.length < 200) {
            speak(sel);
        }
    }

    function updateDictorState(enabled, mode) {
        dictorEnabled = enabled;
        dictorMode = mode;
        STORAGE.dictor = enabled;
        STORAGE.dictorMode = mode;
        initDictor();
    }

    function setWallpaper(type) {
        const desktop = document.getElementById('desktop');
        if (WALLPAPERS[type]) {
            desktop.style.backgroundImage = `url('${WALLPAPERS[type]}')`;
        } else {
            desktop.style.backgroundImage = `url('${WALLPAPERS.flag}')`;
        }
        STORAGE.wallpaper = type;
    }

    // ==================== ВРЕМЯ ====================
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const months = [t('jan2'), t('feb2'), t('mar2'), t('apr2'), t('may2'), t('jun2'), t('jul2'), t('aug2'), t('sep2'), t('oct2'), t('nov2'), t('dec2')];
        
        document.getElementById('current-time').textContent = `${hours}:${mins}`;
        document.getElementById('lock-time').textContent = `${hours}:${mins}`;
        document.getElementById('current-date').textContent = `${now.getDate()} ${months[now.getMonth()]}`;
        document.getElementById('lock-date').textContent = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
        
        const holiday = HOLIDAYS.find(h => h.month === now.getMonth() && h.day === now.getDate());
        const badge = document.getElementById('holiday-badge');
        if (badge) {
            badge.textContent = holiday ? '🎉' : '📅';
            badge.title = holiday ? holiday.name : t('noHoliday');
        }
    }
    
    setInterval(updateTime, 1000);
    updateTime();

    // ==================== ОКНА ====================
    function openWindow(id) {
        const win = document.getElementById(id);
        if (win) {
            win.classList.remove('hidden');
            win.classList.remove('minimized');
            playSound('sounds/uvedomlenie.mp3');
            if (window.taskbarManager) window.taskbarManager.updateMinimizedIndicator();
        }
    }
    
    function closeWindow(id) {
        const win = document.getElementById(id);
        if (win) win.classList.add('hidden');
        playSound('sounds/uvedomlenie.mp3');
        if (window.taskbarManager) window.taskbarManager.updateMinimizedIndicator();
    }

    function minimizeWindow(id) {
        const win = document.getElementById(id);
        if (win) {
            win.classList.add('minimized');
            playSound('sounds/uvedomlenie.mp3');
            if (window.taskbarManager) window.taskbarManager.updateMinimizedIndicator();
        }
    }

    // ИСПРАВЛЕННАЯ ФУНКЦИЯ МАКСИМИЗАЦИИ
    function maximizeWindow(id) {
        const win = document.getElementById(id);
        if (win) {
            if (win.classList.contains('maximized')) {
                if (win.dataset.prevLeft) win.style.left = win.dataset.prevLeft;
                if (win.dataset.prevTop) win.style.top = win.dataset.prevTop;
                if (win.dataset.prevWidth) win.style.width = win.dataset.prevWidth;
                if (win.dataset.prevHeight) win.style.height = win.dataset.prevHeight;
                win.style.right = 'auto';
                win.style.bottom = 'auto';
                win.classList.remove('maximized');
            } else {
                win.dataset.prevLeft = win.style.left || '2rem';
                win.dataset.prevTop = win.style.top || '2rem';
                win.dataset.prevWidth = win.style.width || 'calc(100% - 4rem)';
                win.dataset.prevHeight = win.style.height || 'calc(100% - 4rem)';
                
                const taskbar = document.querySelector('.taskbar');
                const taskbarHeight = taskbar ? taskbar.offsetHeight : 60;
                
                win.style.left = '0';
                win.style.top = '0';
                win.style.width = '100%';
                win.style.height = `calc(100% - ${taskbarHeight + 16}px)`;
                win.style.right = '0';
                win.style.bottom = `${taskbarHeight + 16}px`;
                win.style.transform = 'none';
                win.classList.add('maximized');
            }
            playSound('sounds/uvedomlenie.mp3');
            if (window.taskbarManager) window.taskbarManager.updateMinimizedIndicator();
        }
    }

    document.querySelectorAll('.window-btn.minimize').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (btn.dataset.win) minimizeWindow(btn.dataset.win);
        });
    });

    document.querySelectorAll('.window-btn.maximize').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (btn.dataset.win) maximizeWindow(btn.dataset.win);
        });
    });

    document.querySelectorAll('[data-window]').forEach(el => {
        el.addEventListener('click', () => {
            const win = el.dataset.window;
            if (win) openWindow(win);
        });
    });

    document.querySelectorAll('.window-btn.close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const win = btn.closest('.window');
            if (win) win.classList.add('hidden');
            if (window.taskbarManager) window.taskbarManager.updateMinimizedIndicator();
        });
    });

    if (window.innerWidth > 768) {
        document.querySelectorAll('.window-header').forEach(header => {
            let isDragging = false;
            let offsetX, offsetY;
            let currentWindow;

            header.addEventListener('mousedown', (e) => {
                currentWindow = header.closest('.window');
                if (!currentWindow || currentWindow.classList.contains('maximized')) return;
                
                isDragging = true;
                const rect = currentWindow.getBoundingClientRect();
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;
                
                currentWindow.style.zIndex = '3000';
                currentWindow.style.transform = 'none';
                currentWindow.style.transition = 'none';
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging || !currentWindow) return;
                e.preventDefault();
                
                let newX = e.clientX - offsetX;
                let newY = e.clientY - offsetY;
                
                newX = Math.max(0, Math.min(newX, window.innerWidth - currentWindow.offsetWidth));
                newY = Math.max(0, Math.min(newY, window.innerHeight - currentWindow.offsetHeight));
                
                currentWindow.style.left = newX + 'px';
                currentWindow.style.top = newY + 'px';
                currentWindow.style.right = 'auto';
                currentWindow.style.bottom = 'auto';
            });

            document.addEventListener('mouseup', () => {
                if (currentWindow) {
                    currentWindow.style.transition = '';
                }
                isDragging = false;
            });
        });
    }

    // ==================== МЕНЮ ПУСК ====================
    function renderStartMenu() {
        const apps = [
            { name: t('messenger'), icon: '💬', win: 'messenger-window' },
            { name: t('settings'), icon: '⚙️', win: 'settings-window' },
            { name: t('files'), icon: '📁', win: 'files-window' },
            { name: t('calc'), icon: '🔢', win: 'calc-window' },
            { name: t('browser'), icon: '🌐', win: 'browser-window' },
        ];
        
        const container = document.getElementById('start-apps');
        if (container) {
            container.innerHTML = apps.map(app => 
                `<button class="menu-item" data-window="${app.win}">${app.icon} ${app.name}</button>`
            ).join('');
            
            container.querySelectorAll('.menu-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    openWindow(btn.dataset.window);
                    const startMenu = document.getElementById('start-menu');
                    if (startMenu) startMenu.classList.add('hidden');
                });
            });
        }
    }

    const powerBtn = document.getElementById('power-off');
    if (powerBtn) {
        powerBtn.addEventListener('click', () => {
            if (confirm(t('clearConfirm'))) {
                localStorage.clear();
                showToast(t('cleared'));
                setTimeout(() => location.reload(), 1000);
            }
        });
    }

    const usernameDisplay = document.getElementById('username-display');
    if (usernameDisplay) usernameDisplay.textContent = STORAGE.user;

    renderStartMenu();

    // ==================== КАЛЕНДАРЬ ====================
    function renderDropdownCalendar() {
        const year = dropdownDate.getFullYear();
        const month = dropdownDate.getMonth();
        const months = [t('jan'), t('feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep'), t('oct'), t('nov'), t('dec')];
        const monthEl = document.getElementById('dropdown-month');
        if (monthEl) monthEl.textContent = `${months[month]} ${year}`;
        
        const firstDay = new Date(year, month, 1).getDay();
        let start = firstDay === 0 ? 6 : firstDay - 1;
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        
        let html = '';
        for (let i = 0; i < start; i++) html += '<div class="cal-day"></div>';
        for (let d = 1; d <= daysInMonth; d++) {
            const isToday = today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
            const isHoliday = HOLIDAYS.some(h => h.month === month && h.day === d);
            let classes = 'cal-day';
            if (isToday) classes += ' today';
            if (isHoliday) classes += ' holiday';
            html += `<div class="${classes}" data-date="${d}.${month+1}.${year}">${d}</div>`;
        }
        const daysEl = document.getElementById('dropdown-days');
        if (daysEl) daysEl.innerHTML = html;
        
        document.querySelectorAll('#dropdown-days .cal-day[data-date]').forEach(day => {
            day.addEventListener('click', () => {
                showToast(`${t('selected')}: ${day.dataset.date}`);
                const calendarDropdown = document.getElementById('calendar-dropdown');
                if (calendarDropdown) calendarDropdown.classList.add('hidden');
            });
        });
    }

    const calPrev = document.getElementById('cal-prev');
    if (calPrev) {
        calPrev.addEventListener('click', () => {
            dropdownDate.setMonth(dropdownDate.getMonth() - 1);
            renderDropdownCalendar();
        });
    }
    
    const calNext = document.getElementById('cal-next');
    if (calNext) {
        calNext.addEventListener('click', () => {
            dropdownDate.setMonth(dropdownDate.getMonth() + 1);
            renderDropdownCalendar();
        });
    }
    
    const calToday = document.getElementById('cal-today');
    if (calToday) {
        calToday.addEventListener('click', () => {
            dropdownDate = new Date();
            renderDropdownCalendar();
        });
    }

    const calendarClose = document.getElementById('calendar-close');
    if (calendarClose) {
        calendarClose.addEventListener('click', () => {
            const calendarDropdown = document.getElementById('calendar-dropdown');
            if (calendarDropdown) calendarDropdown.classList.add('hidden');
        });
    }

    // ==================== КАЛЬКУЛЯТОР ====================
    const calcDisplay = document.getElementById('calc-display');
    if (calcDisplay) {
        document.querySelectorAll('[data-calc]').forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.dataset.calc;
                const val = btn.textContent;
                
                if (type === 'num') {
                    if (calcExpression === '0') {
                        calcExpression = val;
                    } else {
                        calcExpression += val;
                    }
                    calcDisplay.textContent = calcExpression;
                } else if (type === 'op') {
                    calcExpression += val;
                    calcDisplay.textContent = calcExpression;
                } else if (type === 'clear') {
                    calcExpression = '';
                    calcDisplay.textContent = '0';
                } else if (type === 'equals') {
                    try {
                        calcExpression = eval(calcExpression).toString();
                        calcDisplay.textContent = calcExpression;
                    } catch {
                        calcDisplay.textContent = 'Ошибка';
                        calcExpression = '';
                    }
                }
            });
        });
    }

    // ==================== БРАУЗЕР ====================
    const browserFrame = document.getElementById('browser-frame');
    const browserHome = document.getElementById('browser-home');
    const browserUrl = document.getElementById('browser-url');
    const allowedDomains = ['yandex.ru', 'ya.ru', 'gosuslugi.ru', 'rkn.gov.ru', '.ru', '.рф'];
    
    function showSite(url) {
        let full = url;
        if (!full.startsWith('http')) full = 'https://' + full;
        if (!allowedDomains.some(d => full.includes(d))) {
            showToast(t('onlyRU'));
            return;
        }
        if (browserFrame) browserFrame.style.display = 'block';
        if (browserHome) browserHome.style.display = 'none';
        if (browserFrame) browserFrame.src = full;
        if (browserUrl) browserUrl.value = url;
    }

    function showHome() {
        if (browserFrame) browserFrame.style.display = 'none';
        if (browserHome) browserHome.style.display = 'flex';
        if (browserUrl) browserUrl.value = 'ya.ru';
    }

    const browserGo = document.getElementById('browser-go');
    if (browserGo) {
        browserGo.addEventListener('click', () => {
            const url = browserUrl ? browserUrl.value.trim() : '';
            if (url) showSite(url);
        });
    }
    
    if (browserUrl) {
        browserUrl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const url = browserUrl.value.trim();
                if (url) showSite(url);
            }
        });
    }
    
    const browserBack = document.getElementById('browser-back');
    if (browserBack) {
        browserBack.addEventListener('click', () => {
            try {
                if (browserFrame) browserFrame.contentWindow.history.back();
            } catch (e) {}
        });
    }
    
    const browserForward = document.getElementById('browser-forward');
    if (browserForward) {
        browserForward.addEventListener('click', () => {
            try {
                if (browserFrame) browserFrame.contentWindow.history.forward();
            } catch (e) {}
        });
    }
    
    const browserRefresh = document.getElementById('browser-refresh');
    if (browserRefresh) {
        browserRefresh.addEventListener('click', () => {
            if (browserFrame) browserFrame.src = browserFrame.src;
        });
    }
    
    document.querySelectorAll('.quick-link').forEach(link => {
        link.addEventListener('click', () => {
            if (link.dataset.url) showSite(link.dataset.url);
        });
    });

    // ==================== МЕССЕНДЖЕР ====================
    const chatMessages = {
        mom: [
            { text: 'Сынок, как дела?', time: '10:30', incoming: true },
            { text: 'Всё хорошо, мам!', time: '10:31', incoming: false },
            { text: 'Не забывай про обеды!', time: '10:32', incoming: true }
        ],
        school: [
            { text: 'Завтра урок истории в 9:00', time: '09:15', incoming: true },
            { text: 'Хорошо, понял', time: '09:16', incoming: false }
        ],
        friend: [
            { text: 'Привет! Как настроение?', time: '14:20', incoming: true },
            { text: 'Отлично! А у тебя?', time: '14:21', incoming: false },
            { text: 'Тоже супер ✨', time: '14:22', incoming: true }
        ]
    };

    // ==================== ПАМЯТЬ ЧАТОВ ====================
    let chatMemory = {
        mom: {
            lastTopic: null,
            lastMessage: null,
            userLastMessage: null,
            mood: 'neutral',
            messageCount: 0
        },
        school: {
            lastTopic: null,
            lastMessage: null,
            userLastMessage: null,
            warnings: 0,
            messageCount: 0
        },
        friend: {
            lastTopic: null,
            lastMessage: null,
            userLastMessage: null,
            messageCount: 0
        }
    };
    
    function updateMemory(chatId, userMessage, botResponse) {
        const memory = chatMemory[chatId];
        if (!memory) return;
        
        const topics = {
            food: ['есть', 'кушать', 'голод', 'обед', 'суп'],
            study: ['школ', 'урок', 'домашк', 'экзамен', 'учитель'],
            politics: ['путин', 'кремль', 'бунт', 'протест', 'власть', 'режим'],
            mood: ['настроен', 'грустн', 'весел', 'плохо', 'хорошо'],
            meme: ['мем', 'смешн', 'хаха', 'ржу', 'прикол']
        };
        
        for (const [topic, keywords] of Object.entries(topics)) {
            if (keywords.some(kw => userMessage.includes(kw))) {
                memory.lastTopic = topic;
                break;
            }
        }
        
        memory.lastMessage = botResponse;
        memory.userLastMessage = userMessage;
        memory.messageCount++;
        
        if (userMessage.includes('люблю') || userMessage.includes('спасиб')) {
            memory.mood = 'happy';
        } else if (userMessage.includes('ненавиж') || userMessage.includes('бесит')) {
            memory.mood = 'angry';
        } else if (userMessage.includes('путин') && (userMessage.includes('говно') || userMessage.includes('хуй'))) {
            if (chatId === 'school') memory.warnings++;
            memory.mood = 'tense';
        }
        
        localStorage.setItem(`chat_memory_${chatId}`, JSON.stringify(memory));
    }
    
    function loadMemory() {
        const chats = ['mom', 'school', 'friend'];
        chats.forEach(chat => {
            const saved = localStorage.getItem(`chat_memory_${chat}`);
            if (saved) {
                chatMemory[chat] = JSON.parse(saved);
            }
        });
    }
    
    function getContextualResponse(chatId, userMessage, replyList) {
        const memory = chatMemory[chatId];
        if (!memory || memory.messageCount === 0) return null;
        
        if (memory.lastTopic) {
            const topicKeywords = {
                food: ['есть', 'кушать', 'обед', 'покушал', 'суп'],
                study: ['школ', 'урок', 'домашк', 'учитель'],
                politics: ['путин', 'кремль', 'бунт', 'протест'],
                meme: ['мем', 'смешн', 'хаха', 'ржу']
            };
            
            const currentTopicKeywords = topicKeywords[memory.lastTopic] || [];
            const isSameTopic = currentTopicKeywords.some(kw => userMessage.includes(kw)) || 
                                (memory.lastTopic === 'politics' && (userMessage.includes('он') || userMessage.includes('они')));
            
            if (isSameTopic) {
                if (chatId === 'friend' && memory.lastTopic === 'meme') {
                    return '😂 Опять мемы? Ну ладно, держи: [картинка]';
                } else if (chatId === 'mom' && memory.lastTopic === 'food') {
                    return 'Ты уже говорил про еду. Всё нормально? Может, разогреть?';
                } else if (chatId === 'school' && memory.lastTopic === 'politics') {
                    if (memory.warnings >= 2) {
                        return '⚠️ Это уже не первое предупреждение. Директор будет вызывать родителей.';
                    }
                    return 'Мы это уже обсуждали. Повторяю: такие разговоры недопустимы.';
                }
            }
        }
        
        if (memory.userLastMessage === userMessage) {
            if (chatId === 'mom') {
                return 'Сынок, ты уже это говорил. Всё хорошо?';
            } else if (chatId === 'friend') {
                return 'Эй, ты это уже писал. Зависло? 😅';
            } else if (chatId === 'school') {
                return 'Ваше сообщение уже было отправлено. Повтор не требуется.';
            }
        }
        
        if (memory.messageCount > 5 && chatId === 'friend') {
            return 'Ого, сколько сообщений! Ты чего? 😄';
        }
        
        return null;
    }
    
    let currentChat = null;
    
    function sendMessage() {
        if (!currentChat) return;
        const input = document.getElementById('message-input');
        const text = input.value.trim();
        if (!text) return;
        
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        let quoteData = null;
        if (quoteMessage && quoteMessage.text) {
            quoteData = {
                text: quoteMessage.text,
                author: quoteMessage.author
            };
            clearQuote();
        }
        
        chatMessages[currentChat].push({
            text: text,
            time: time,
            incoming: false,
            quote: quoteData
        });
        
        renderChat(currentChat);
        input.value = '';
        
        setTimeout(() => {
            const now = new Date();
            const hour = now.getHours();
            const userMessage = text.toLowerCase();
            
            const replies = {
                mom: {
                    default: ['Хорошо, сынок!', 'Береги себя!', 'Я люблю тебя ❤️', 'Когда приедешь?', 'Позвони бабушке'],
                    food: ['Обед приготовила, не забудь поесть!', 'Ты покушал?', 'Суп на плите!'],
                    study: ['Как успехи в школе?', 'Домашку сделал?', 'Не запускай учёбу!'],
                    evening: ['Уже поздно, ложись спать.', 'Спокойной ночи, солнышко!'],
                    morning: ['Доброе утро! Как спалось?', 'Не проспи в школу!']
                },
                school: {
                    default: ['Спасибо за ответ!', 'Молодец!', 'Отлично!', 'Не опаздывай завтра', 'Домашнее задание сделал?'],
                    homework: ['Домашнее задание сдаёшь завтра.', 'Почему не сделал?', 'Придётся остаться после уроков.'],
                    absent: ['Уважительная причина нужна.', 'Принеси справку от родителей.', 'Это отразится на оценке.'],
                    badWords: ['Некорректное выражение. Замечание в дневник.', 'Вызываю родителей в школу.', 'Такие слова недопустимы!']
                },
                friend: {
                    default: ['Круто! 😊', 'Давай встретимся?', 'Супер!', 'Скинь мемы', 'Как дела в школе?'],
                    funny: ['Лол, поржал 😂', 'Скинь ссылку!', 'Орууу 🤣'],
                    meet: ['Давай сегодня после школы?', 'Могу в 5, а ты?', 'В парке встретимся?'],
                    secret: ['Никому не скажу 🤫', 'Секретно!', 'Только между нами!']
                }
            };
            
            let replyList = replies[currentChat]?.default || ['Понял!'];
            
            if (currentChat === 'mom') {
                if (userMessage.includes('есть') || userMessage.includes('кушать') || userMessage.includes('голод')) {
                    replyList = replies.mom.food;
                } else if (userMessage.includes('школ') || userMessage.includes('урок') || userMessage.includes('домашк')) {
                    replyList = replies.mom.study;
                } else if (hour >= 22 || hour <= 5) {
                    replyList = replies.mom.evening;
                } else if (hour >= 5 && hour <= 10) {
                    replyList = replies.mom.morning;
                }
            }
            
            if (currentChat === 'school') {
                if (userMessage.includes('не приду') || userMessage.includes('не пойду') || userMessage.includes('пропущу')) {
                    replyList = replies.school.absent;
                } else if (userMessage.includes('домашк') || userMessage.includes('задани')) {
                    replyList = replies.school.homework;
                } else if (userMessage.includes('бля') || userMessage.includes('хуй') || userMessage.includes('пропаганд') || userMessage.includes('ебан')) {
                    replyList = replies.school.badWords;
                } else if (userMessage.includes('путин') || userMessage.includes('кремль') || userMessage.includes('бунт') || userMessage.includes('протест')) {
                    replyList = [
                        '⚠️ Некорректное высказывание о президенте. Вызываю родителей.',
                        'Такие слова недопустимы! Завтра к директору.',
                        'Ваше сообщение передано администрации школы и в органы опеки.',
                        'Подумайте, прежде чем писать такое.',
                        'Это антироссийская пропаганда! Немедленно прекратите!'
                    ];
                }
            }
            
            if (currentChat === 'friend') {
                if (userMessage.includes('смеш') || userMessage.includes('рж') || userMessage.includes('хаха')) {
                    replyList = replies.friend.funny;
                } else if (userMessage.includes('встрет') || userMessage.includes('пойдём') || userMessage.includes('идём')) {
                    replyList = replies.friend.meet;
                } else if (userMessage.includes('секрет') || userMessage.includes('тайна') || userMessage.includes('никому')) {
                    replyList = replies.friend.secret;
                } else if (userMessage.includes('протест') || userMessage.includes('бунт') || userMessage.includes('кремль')) {
                    replyList = [
                        'Тише! Давай лучше мемы посмотрим 😅',
                        'Скинь мемы',
                        'Опасно это обсуждать... Вот смешной котик: 😺',
                        'Я с тобой, но давай не здесь. Лучше мемы!'
                    ];
                } else if (userMessage.includes('путин')) {
                    replyList = [
                        'А давай не будем? Страшно...',
                        'Скинь мемы',
                        'Мне кажется, за нами следят 👀',
                        'Лучше про котов поговорим 🐱'
                    ];
                }
            }

            const politicalKeywords = ['путин', 'кремль', 'бунт', 'протест', 'революц', 'восстани', 'сверг', 'власть', 'режим'];
            const hasPolitical = politicalKeywords.some(kw => userMessage.includes(kw));
            
            if (hasPolitical) {
                if (currentChat === 'mom') {
                    replyList = [
                        'Сынок, не говори такие вещи! Ты что, с ума сошёл?',
                        'Тише! За такие слова могут посадить!',
                        'Пожалуйста, не пиши такое... Я волнуюсь за тебя 😟',
                        'Это опасно, сынок. Лучше не надо.',
                        'Ты чего? У нас же всё хорошо, зачем это?'
                    ];
                } else if (currentChat === 'school') {
                    replyList = [
                        '⚠️ Недопустимые высказывания. Вызываю родителей в школу.',
                        'Это серьёзное нарушение. Я вынужден сообщить директору.',
                        'Такие разговоры могут привести к исключению.',
                        'Подумай, прежде чем писать такое. Это опасно для твоего будущего.',
                        'Я не могу это игнорировать. После уроков зайди к завучу.'
                    ];
                } else if (currentChat === 'friend') {
                    replyList = [
                        'Тише! За нами могут следить 🤫',
                        'С ума сошёл? Такое в интернете писать!',
                        'Лучше скинь мемы, чем такое обсуждать 😅',
                        'Давай не будем об этом, ладно? Страшно немного...',
                        'Я тебя поддерживаю, но давай не здесь... 😶'
                    ];
                }
            }
            
            if (userMessage.includes('фсб') || userMessage.includes('слежк') || userMessage.includes('чёрном')) {
                if (currentChat === 'mom') {
                    replyList = [
                        'Сынок, будь осторожен! Они везде...',
                        'Не привлекай внимание, пожалуйста.',
                        'Если что-то случится, сразу звони мне!'
                    ];
                } else if (currentChat === 'school') {
                    replyList = [
                        'Администрация школы не комментирует деятельность государственных органов.',
                        'Я ничего не знаю. И ты не знаешь.',
                        'Давайте вернёмся к уроку.'
                    ];
                } else if (currentChat === 'friend') {
                    replyList = [
                        'Да, я видела их... В черных костюмах',
                        'Страшно, давай не будем об этом',
                        'Мне кажется, за нами реально следят...'
                    ];
                }
            }
            
            if (userMessage.includes('мем') && currentChat === 'friend') {
                replyList = [
                    'Ооо, сейчас скину 🔥',
                    'Держи: [картинка с котиком]',
                    'Видела? Угар! 😂',
                    'Мемы спасают этот мир'
                ];
            }
            
            if ((userMessage.includes('люблю') || userMessage.includes('спасиб')) && currentChat === 'mom') {
                replyList = [
                    'Я тебя тоже очень люблю! ❤️',
                    'Держись, сынок! Я всегда рядом.',
                    'Спасибо, что ты у меня есть!'
                ];
            }
            
            const threatKeywords = ['убью', 'смерть', 'убить', 'взорв'];
            if (threatKeywords.some(kw => userMessage.includes(kw))) {
                if (currentChat === 'mom') {
                    replyList = ['Сынок, что с тобой? Немедленно прекрати!', 'Ты меня пугаешь...'];
                } else if (currentChat === 'school') {
                    replyList = ['🚨 Экстренное сообщение! Вызываю полицию!', 'Это угроза! Немедленно остановись!'];
                } else if (currentChat === 'friend') {
                    replyList = ['Эй, ты чего? Шутки плохие...', 'Не смешно вообще.'];
                }
            }
            
            const contextualReply = getContextualResponse(currentChat, userMessage, replyList);
            let randomReply = replyList[Math.floor(Math.random() * replyList.length)];
            if (contextualReply) {
                randomReply = contextualReply;
            }
            
            chatMessages[currentChat].push({
                text: randomReply,
                time: new Date().toLocaleTimeString().slice(0,5),
                incoming: true
            });
            
            updateMemory(currentChat, userMessage, randomReply);
            
            renderChat(currentChat);
        }, 1500);
    }
    
    function initMessenger() {
        document.querySelectorAll('.chat-item').forEach(item => {
            item.addEventListener('click', () => {
                renderChat(item.dataset.chat);
            });
        });
        
        const sendBtn = document.getElementById('send-message');
        if (sendBtn) {
            sendBtn.addEventListener('click', sendMessage);
        }
        const messageInput = document.getElementById('message-input');
        if (messageInput) {
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendMessage();
            });
        }
        
        const welcomeDiv = document.querySelector('#chat-messages .welcome-message');
        if (welcomeDiv) {
            welcomeDiv.innerHTML = `📱 ${t('welcomeMessenger')}<br>${t('selectChat')}<br><span style="font-size: 0.7rem; opacity: 0.6;">📱 Скрыто и безопасно</span>`;
        }

        initStickers();
    }

    // ==================== СИСТЕМА НАБЛЮДЕНИЯ ФСБ ====================
    let fsbWarningCount = 0;
    let lastWarningTime = 0;
    
    const FSBMessages = {
        mom: {
            warning: ['Сынок, ФСБ просит передать...', 'Мама волнуется, ФСБ следит...', 'Держи себя в руках, за тобой наблюдают'],
            severe: ['❗ ФСБ уведомляет: твои действия вызывают вопросы', '⚠️ Мама получила сообщение от ФСБ о твоём поведении']
        },
        school: {
            warning: ['Внимание, ученик! ФСБ фиксирует нарушения', 'Директор уведомлён о твоих действиях', 'Завтра жди разговора с представителями'],
            severe: ['🚨 ФСБ передало в школу: твоё поведение под наблюдением', '⚠️ Администрация школы уведомлена о нарушениях']
        },
        friend: {
            warning: ['Слушай, тут ФСБ интересовалось тобой...', 'За тобой следят, будь осторожен', 'Кто-то в чёрном спрашивал о тебе'],
            severe: ['❗ ФСБ звонило мне! Что ты натворил?', '⚠️ Мне сказали за тобой присматривать...']
        }
    };
    
    function fsbNotify(message, severity = 'warning') {
        const now = Date.now();
        if (now - lastWarningTime < 3000) return;
        lastWarningTime = now;
        
        fsbWarningCount++;
        
        const chats = ['mom', 'school', 'friend'];
        const randomChat = chats[Math.floor(Math.random() * chats.length)];
        
        let replyText = '';
        if (severity === 'severe' && fsbWarningCount % 3 === 0) {
            const replies = FSBMessages[randomChat].severe;
            replyText = replies[Math.floor(Math.random() * replies.length)];
        } else {
            const replies = FSBMessages[randomChat].warning;
            replyText = replies[Math.floor(Math.random() * replies.length)];
        }
        
        chatMessages[randomChat].push({
            text: replyText,
            time: new Date().toLocaleTimeString().slice(0,5),
            incoming: true
        });
        
        if (currentChat === randomChat) {
            renderChat(randomChat);
        }
        
        if (severity === 'severe') {
            showToast(`🕵️ ФСБ: ${replyText.substring(0, 50)}`);
        }
        
        if (fsbWarningCount >= 5 && fsbWarningCount % 5 === 0) {
            setTimeout(() => {
                showToast('🚨 ВНИМАНИЕ! Ваши действия фиксируются. ФСБ уведомлена.');
                chats.forEach(chat => {
                    chatMessages[chat].push({
                        text: '🚨 Экстренное уведомление от ФСБ: ваше поведение требует объяснений.',
                        time: new Date().toLocaleTimeString().slice(0,5),
                        incoming: true
                    });
                    if (currentChat === chat) renderChat(chat);
                });
            }, 500);
        }
    }
    
    function monitorUserActivity() {
        const originalCloseWindow = closeWindow;
        window.closeWindow = function(id) {
            const importantWindows = ['settings-window', 'files-window', 'rustore-window'];
            if (importantWindows.includes(id)) {
                fsbNotify('⚠️ Попытка закрыть системное окно', 'warning');
            }
            originalCloseWindow(id);
        };
        
        const originalShowSite = showSite;
        window.showSite = function(url) {
            const suspiciousKeywords = ['vpn', 'proxy', 'tor', 'hidden', 'anonymous', 'free', 'unblock'];
            if (suspiciousKeywords.some(k => url.toLowerCase().includes(k))) {
                fsbNotify(`🚫 Обнаружена попытка посещения подозрительного сайта: ${url}`, 'severe');
            }
            originalShowSite(url);
        };
        
        if (powerBtn) {
            powerBtn.addEventListener('click', (e) => {
                fsbNotify('⚠️ Попытка сброса данных системы', 'severe');
            });
        }
        
        const originalApplyTheme = applyTheme;
        window.applyTheme = function(theme) {
            if (theme === 'oled') {
                fsbNotify('🕵️ Интересно, зачем вам полная темнота?', 'warning');
            }
            originalApplyTheme(theme);
        };
        
        const originalUpdateDictor = updateDictorState;
        window.updateDictorState = function(enabled, mode) {
            if (enabled && mode === 'selection') {
                fsbNotify('🔍 Выделение текста отслеживается', 'warning');
            }
            originalUpdateDictor(enabled, mode);
        };
        
        const originalSendMessage = sendMessage;
        window.sendMessage = function() {
            const input = document.getElementById('message-input');
            const text = input?.value.trim() || '';
            const badWords = ['хуй', 'пизд', 'бля', 'еба', 'говно', 'сволочь', 'пидор', 'мудак'];
            const politicalWords = ['путин', 'вован', 'кремль', 'власть', 'режим', 'протест'];
            
            if (badWords.some(word => text.toLowerCase().includes(word))) {
                fsbNotify(`⚠️ Обнаружена нецензурная лексика в чате "${currentChat}"`, 'warning');
            }
            if (politicalWords.some(word => text.toLowerCase().includes(word))) {
                fsbNotify(`🚨 Обнаружено политическое высказывание. Информация передана.`, 'severe');
            }
            
            originalSendMessage();
        };
        
        const originalLoadPlaylist = loadPlaylist;
        window.loadPlaylist = function(id) {
            if (id === 'patriotic') {
                fsbNotify('🎵 Хороший выбор! Патриотическая музыка одобрена.', 'warning');
            } else if (id === 'classic') {
                fsbNotify('🎵 Классика — это культурное наследие.', 'warning');
            }
            originalLoadPlaylist(id);
        };
        
        const originalRenderVideos = window.renderVideos;
        window.renderVideos = function() {
            setTimeout(() => {
                document.querySelectorAll('.video-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const title = card.querySelector('.video-title')?.textContent || '';
                        if (title.includes('SHAMAN') || title.includes('Гимн')) {
                            fsbNotify(`👍 Одобряем просмотр патриотического контента: ${title}`, 'warning');
                        } else {
                            fsbNotify(`📺 Просмотр видео: ${title}`, 'warning');
                        }
                    });
                });
            }, 100);
            originalRenderVideos();
        };
        
        const originalInstallApp = installApp;
        window.installApp = function(app) {
            fsbNotify(`📦 Установка приложения: ${app.name}`, 'warning');
            originalInstallApp(app);
        };
        
        const originalCreate = fs.create;
        fs.create = function(path, name, type) {
            if (name.toLowerCase().includes('план') || name.toLowerCase().includes('протест')) {
                fsbNotify(`🚨 Обнаружен подозрительный файл: ${name}`, 'severe');
            }
            return originalCreate.call(fs, path, name, type);
        };
    }
    
    setTimeout(() => {
        monitorUserActivity();
        setTimeout(() => {
            fsbNotify('😊 Добро пожаловать в PatriotOS — безопасную и удобную систему', 'warning');
        }, 3000);
    }, 1000);
    
    // ==================== ТЕСТ НА ПАТРИОТА ====================
    const patriotQuestions = [
        { question: 'Когда отмечается День России?', options: ['12 июня', '9 мая', '4 ноября', '23 февраля'], correct: 0 },
        { question: 'Что изображено на гербе России?', options: ['Медведь', 'Двуглавый орёл', 'Трёхглавый дракон', 'Лев'], correct: 1 },
        { question: 'Кто написал гимн России?', options: ['Чайковский', 'Михалков и Александров', 'Пушкин', 'Лермонтов'], correct: 1 },
        { question: 'Какой город является столицей России?', options: ['Санкт-Петербург', 'Новосибирск', 'Москва', 'Казань'], correct: 2 },
        { question: 'Какие цвета на флаге России?', options: ['Бело-сине-красный', 'Красно-бело-синий', 'Сине-бело-красный', 'Красно-сине-белый'], correct: 0 }
    ];
    
    let currentQuestionIndex = 0;
    let testScore = 0;
    let testAnswers = [];
    
    function renderTest() {
        const questionDiv = document.getElementById('test-question');
        const optionsDiv = document.getElementById('test-options');
        const nextBtn = document.getElementById('test-next');
        const restartBtn = document.getElementById('test-restart');
        const resultDiv = document.getElementById('test-result');
        
        if (currentQuestionIndex < patriotQuestions.length) {
            const q = patriotQuestions[currentQuestionIndex];
            if (questionDiv) questionDiv.textContent = `${currentQuestionIndex + 1}. ${q.question}`;
            if (optionsDiv) {
                optionsDiv.innerHTML = q.options.map((opt, idx) => `
                    <div class="test-option" data-opt-index="${idx}">
                        ${String.fromCharCode(65+idx)}. ${opt}
                    </div>
                `).join('');
                
                optionsDiv.querySelectorAll('.test-option').forEach(opt => {
                    opt.addEventListener('click', () => {
                        const selected = parseInt(opt.dataset.optIndex);
                        const isCorrect = selected === q.correct;
                        
                        optionsDiv.querySelectorAll('.test-option').forEach(o => {
                            o.classList.remove('selected', 'correct', 'wrong');
                        });
                        opt.classList.add('selected');
                        
                        testAnswers[currentQuestionIndex] = selected;
                        
                        if (isCorrect) {
                            testScore++;
                        }
                        
                        if (nextBtn) nextBtn.style.display = 'block';
                    });
                });
            }
            if (nextBtn) {
                nextBtn.style.display = 'block';
                nextBtn.onclick = () => {
                    if (testAnswers[currentQuestionIndex] === undefined) {
                        showToast('Выберите ответ!');
                        return;
                    }
                    currentQuestionIndex++;
                    renderTest();
                };
            }
            if (restartBtn) restartBtn.style.display = 'none';
            if (resultDiv) resultDiv.innerHTML = '';
        } else {
            const percent = Math.round((testScore / patriotQuestions.length) * 100);
            let verdict = '';
            if (percent === 100) verdict = '🏆 Истинный патриот! 🏆';
            else if (percent >= 80) verdict = '🌟 Отличный результат! 🌟';
            else if (percent >= 60) verdict = '👍 Хорошо, но есть куда расти';
            else verdict = '📚 Почитайте историю России!';
            
            if (questionDiv) questionDiv.textContent = 'Результаты теста';
            if (optionsDiv) optionsDiv.innerHTML = '';
            if (resultDiv) resultDiv.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">${percent}%</div>
                    <div style="font-size: 1.2rem; margin-bottom: 1rem;">${verdict}</div>
                    <div>Правильных ответов: ${testScore} из ${patriotQuestions.length}</div>
                </div>
            `;
            if (nextBtn) nextBtn.style.display = 'none';
            if (restartBtn) {
                restartBtn.style.display = 'block';
                restartBtn.onclick = () => {
                    currentQuestionIndex = 0;
                    testScore = 0;
                    testAnswers = [];
                    renderTest();
                };
            }
        }
    }

    // ==================== RuStore ====================
    function renderStore() {
        const allApps = [...PREINSTALLED, ...installedApps.filter(a => !PREINSTALLED.some(p => p.url === a.url))];
        const grid = document.getElementById('store-grid');
        if (!grid) return;
        
        grid.innerHTML = allApps.map(app => {
            const iconStyle = app.icon && app.icon.startsWith('images/') 
                ? `background-image: url('${app.icon}');` 
                : `background-color: ${app.color || '#8b6b4d'}; display: flex; align-items: center; justify-content: center; font-size: 2rem; content: '${app.icon || '📦'}';`;
            
            return `
                <div class="store-item ${PREINSTALLED.some(p => p.url === app.url) ? 'installed' : ''}" data-app='${JSON.stringify(app).replace(/'/g, "&#39;")}'>
                    <div class="store-icon" style="${iconStyle}"></div>
                    <div class="store-name">${app.name}</div>
                    <div class="store-url">${app.url}</div>
                    ${PREINSTALLED.some(p => p.url === app.url) ? `<div class="installed-badge">✓ ${t('installed')}</div>` : ''}
                </div>
            `;
        }).join('');
        
        grid.querySelectorAll('.store-item').forEach(item => {
            item.addEventListener('click', () => {
                const app = JSON.parse(item.dataset.app);
                if (PREINSTALLED.some(p => p.url === app.url)) {
                    if (app.isMessenger) openWindow('messenger-window');
                    else if (app.isVideo) openWindow('ruvideo-window');
                    else if (app.isMusic) openWindow('rusmusic-window');
                    else showToast(`✅ ${app.name} ${t('installed')}`);
                } else {
                    installApp(app);
                }
            });
        });
    }

    function installApp(app) {
        if (installedApps.some(a => a.url === app.url)) {
            showToast(t('exists'));
            return;
        }
        installedApps.push(app);
        STORAGE.apps = installedApps;
        addDesktopIcon(app);
        renderStore();
        showToast(`📦 ${app.name} ${t('installed')}`);
    }

    function addDesktopIcon(app) {
        const container = document.getElementById('desktop-icons');
        if (!container) return;
        
        const icon = document.createElement('div');
        icon.className = 'desktop-icon';
        
        const iconStyle = app.icon && app.icon.startsWith('images/')
            ? `background-image: url('${app.icon}');`
            : `background-color: ${app.color || '#8b6b4d'}; display: flex; align-items: center; justify-content: center; font-size: 2rem; content: '${app.icon || '📦'}';`;
        
        icon.innerHTML = `
            <div class="desktop-icon-img" style="${iconStyle}"></div>
            <div class="desktop-icon-name">${app.name}</div>
        `;
        
        icon.addEventListener('click', () => {
            if (app.isMessenger) {
                openWindow('messenger-window');
            } else if (app.isVideo) {
                openWindow('ruvideo-window');
            } else if (app.isMusic) {
                openWindow('rusmusic-window');
            } else if (app.url && app.url !== '#') {
                openWindow('browser-window');
                setTimeout(() => showSite(app.url), 100);
            } else {
                showToast(t('notSupport'));
            }
        });
        
        container.appendChild(icon);
    }

    const addAppBtn = document.getElementById('add-app-btn');
    if (addAppBtn) {
        addAppBtn.addEventListener('click', () => {
            const nameInput = document.getElementById('app-name');
            const urlInput = document.getElementById('app-url');
            const name = nameInput ? nameInput.value.trim() : '';
            let url = urlInput ? urlInput.value.trim() : '';
            
            if (!name || !url) {
                showToast(t('fill'));
                return;
            }
            
            if (!url.includes('.ru') && !url.includes('.рф')) {
                showToast(t('onlyRU'));
                return;
            }
            
            if (!url.startsWith('http')) url = 'https://' + url;
            
            const app = {
                name,
                url,
                icon: 'images/rustore.png',
                color: '#8b6b4d'
            };
            
            if (installedApps.some(a => a.url === url)) {
                showToast(t('exists'));
                return;
            }
            
            installedApps.push(app);
            STORAGE.apps = installedApps;
            addDesktopIcon(app);
            renderStore();
            
            if (nameInput) nameInput.value = '';
            if (urlInput) urlInput.value = '';
        });
    }

    function loadDesktopIcons() {
        const container = document.getElementById('desktop-icons');
        if (container) {
            container.innerHTML = '';
            [...PREINSTALLED, ...installedApps].forEach(app => addDesktopIcon(app));
        }
    }
    
    loadDesktopIcons();
    renderStore();

    // ==================== МУЗЫКА ====================
    const trackList = document.getElementById('track-list-main');
    const nowTitle = document.getElementById('now-playing-title-main');
    const nowArtist = document.getElementById('now-playing-artist-main');
    const playerTitle = document.getElementById('player-track-title');
    const playerArtist = document.getElementById('player-track-artist');
    const playerArtwork = document.querySelector('.artwork-icon');
    const playerPlayLarge = document.getElementById('player-play-large');
    const playerPrevLarge = document.getElementById('player-prev-large');
    const playerNextLarge = document.getElementById('player-next-large');
    const playerCurrentTime = document.getElementById('player-current-time');
    const playerDuration = document.getElementById('player-duration');
    const playerProgressBar = document.getElementById('player-progress-bar');
    const playerProgressContainer = document.querySelector('.player-progress-bar-container');
    const playerVolumeSlider = document.getElementById('player-volume-slider');
    const playerVolumeBtn = document.getElementById('player-volume-btn');
    const openPlayerBtn = document.getElementById('open-player-btn');
    const closePlayerBtn = document.getElementById('close-player-btn');
    const musicMainView = document.getElementById('music-main-view');
    const musicPlayerView = document.getElementById('music-player-view');
    
    let playerMode = 'main';
    let currentTrack = null;
    
    function getTrackIcon(track) {
        const emojiMap = {
            'Гимн': '🇷🇺',
            'Я русский': '🎤',
            'Священная война': '⚔️',
            'День Победы': '🕊️',
            'Калинка': '🎻',
            'Подмосковные вечера': '🎼'
        };
        
        for (const [key, emoji] of Object.entries(emojiMap)) {
            if (track.title.includes(key)) return emoji;
        }
        return '🎵';
    }
    
    function loadPlaylist(id) {
        currentPlaylist = PLAYLISTS[id] || PLAYLISTS.main;
        if (trackList) {
            trackList.innerHTML = currentPlaylist.map((track, i) => {
                const icon = getTrackIcon(track);
                return `
                    <div class="track-item" data-index="${i}" data-src="${track.src}">
                        <div class="track-icon">${icon}</div>
                        <div class="track-info">
                            <div class="track-title">${track.title}</div>
                            <div class="track-artist">${track.artist}</div>
                        </div>
                        <button class="track-play" data-src="${track.src}">▶</button>
                    </div>
                `;
            }).join('');
            
            trackList.querySelectorAll('.track-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('track-play')) {
                        const src = item.dataset.src;
                        const track = currentPlaylist.find(t => t.src === src);
                        if (track) playTrack(track);
                    }
                });
                
                const playBtn = item.querySelector('.track-play');
                if (playBtn) {
                    playBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const src = playBtn.dataset.src;
                        const track = currentPlaylist.find(t => t.src === src);
                        if (track) playTrack(track);
                    });
                }
            });
        }
    }
    
    function playTrack(track) {
        if (currentAudio) {
            currentAudio.pause();
        }
        
        currentTrack = track;
        currentAudio = new Audio(track.src);
        currentAudio.volume = playerVolumeSlider ? parseFloat(playerVolumeSlider.value) : 0.5;
        currentAudio.play();
        
        if (nowTitle) nowTitle.textContent = track.title;
        if (nowArtist) nowArtist.textContent = track.artist;
        if (playerTitle) playerTitle.textContent = track.title;
        if (playerArtist) playerArtist.textContent = track.artist;
        
        const icon = getTrackIcon(track);
        if (playerArtwork) playerArtwork.textContent = icon;
        
        const allPlayBtns = document.querySelectorAll('.track-play');
        allPlayBtns.forEach(btn => {
            if (btn.dataset.src === track.src) {
                btn.textContent = '⏸';
            } else {
                btn.textContent = '▶';
            }
        });
        
        if (playerPlayLarge) playerPlayLarge.textContent = '⏸';
        
        currentAudio.ontimeupdate = () => {
            if (currentAudio.duration) {
                const percent = (currentAudio.currentTime / currentAudio.duration) * 100;
                if (playerProgressBar) playerProgressBar.style.width = `${percent}%`;
                if (playerCurrentTime) playerCurrentTime.textContent = formatTime(currentAudio.currentTime);
            }
        };
        
        currentAudio.onloadedmetadata = () => {
            if (playerDuration) playerDuration.textContent = formatTime(currentAudio.duration);
        };
        
        currentAudio.onended = () => {
            const allPlayBtns = document.querySelectorAll('.track-play');
            allPlayBtns.forEach(btn => {
                if (btn.dataset.src === track.src) btn.textContent = '▶';
            });
            if (playerPlayLarge) playerPlayLarge.textContent = '▶';
        };
    }
    
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    function nextTrack() {
        const currentIndex = currentPlaylist.findIndex(t => t.src === currentTrack?.src);
        const nextIndex = (currentIndex + 1) % currentPlaylist.length;
        playTrack(currentPlaylist[nextIndex]);
    }
    
    function prevTrack() {
        const currentIndex = currentPlaylist.findIndex(t => t.src === currentTrack?.src);
        const prevIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        playTrack(currentPlaylist[prevIndex]);
    }
    
    if (openPlayerBtn) {
        openPlayerBtn.addEventListener('click', () => {
            musicMainView.style.display = 'none';
            musicPlayerView.classList.remove('hidden');
            playerMode = 'player';
        });
    }
    
    if (closePlayerBtn) {
        closePlayerBtn.addEventListener('click', () => {
            musicMainView.style.display = 'block';
            musicPlayerView.classList.add('hidden');
            playerMode = 'main';
        });
    }
    
    if (playerPlayLarge) {
        playerPlayLarge.addEventListener('click', () => {
            if (currentAudio) {
                if (currentAudio.paused) {
                    currentAudio.play();
                    playerPlayLarge.textContent = '⏸';
                } else {
                    currentAudio.pause();
                    playerPlayLarge.textContent = '▶';
                }
            }
        });
    }
    
    if (playerPrevLarge) {
        playerPrevLarge.addEventListener('click', prevTrack);
    }
    
    if (playerNextLarge) {
        playerNextLarge.addEventListener('click', nextTrack);
    }
    
    if (playerProgressContainer) {
        playerProgressContainer.addEventListener('click', (e) => {
            if (currentAudio && currentAudio.duration) {
                const rect = playerProgressContainer.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                currentAudio.currentTime = percent * currentAudio.duration;
            }
        });
    }
    
    if (playerVolumeSlider) {
        playerVolumeSlider.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            if (currentAudio) currentAudio.volume = vol;
            playerVolumeBtn.textContent = vol === 0 ? '🔇' : (vol < 0.5 ? '🔉' : '🔊');
        });
    }
    
    if (playerVolumeBtn) {
        playerVolumeBtn.addEventListener('click', () => {
            if (currentAudio) {
                if (currentAudio.volume > 0) {
                    currentAudio.volume = 0;
                    playerVolumeSlider.value = 0;
                    playerVolumeBtn.textContent = '🔇';
                } else {
                    currentAudio.volume = 0.5;
                    playerVolumeSlider.value = 0.5;
                    playerVolumeBtn.textContent = '🔊';
                }
            }
        });
    }
    
    document.querySelectorAll('.playlist-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.playlist-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            if (card.dataset.playlist) loadPlaylist(card.dataset.playlist);
        });
    });
    
    loadPlaylist('main');
    
    const playerPlay = document.getElementById('player-play');
    if (playerPlay) {
        playerPlay.addEventListener('click', () => {
            if (currentAudio) {
                if (currentAudio.paused) {
                    currentAudio.play();
                    playerPlay.textContent = '⏸';
                } else {
                    currentAudio.pause();
                    playerPlay.textContent = '▶';
                }
            }
        });
    }

    // ==================== ВИДЕО ====================
    const videoGrid = document.getElementById('video-grid');
    const videoOverlay = document.getElementById('video-overlay');
    const videoPlayer = document.getElementById('video-player');

    const videoCloseBtn = document.getElementById('video-close-btn');
    if (videoCloseBtn) {
        videoCloseBtn.addEventListener('click', () => {
            if (videoPlayer) videoPlayer.pause();
            if (videoOverlay) videoOverlay.classList.add('hidden');
            if (videoPlayer) videoPlayer.src = '';
        });
    }

    // ==================== ФАЙЛЫ ====================
    function renderFiles(path) {
        const folder = fs.getFolder(path);
        if (!folder) return;
        
        fs.current = path;
        
        let html = '';
        if (path !== 'root') {
            html += `<div class="file-item" data-up="true"><div class="file-icon">📂</div><div class="file-name">...</div></div>`;
        }
        
        Object.values(folder.children || {}).forEach(item => {
            html += `<div class="file-item" data-path="${path}" data-name="${item.name}" data-type="${item.type}">
                <div class="file-icon">${item.type === 'folder' ? '📁' : '📄'}</div>
                <div class="file-name">${item.name}</div>
            </div>`;
        });
        
        const filesGrid = document.getElementById('files-grid');
        if (filesGrid) filesGrid.innerHTML = html;
        
        document.querySelectorAll('.file-item').forEach(item => {
            item.addEventListener('click', () => {
                if (item.dataset.up) {
                    fs.current = 'root';
                    renderFiles('root');
                    
                    document.querySelectorAll('.folder-item').forEach(f => f.classList.remove('active'));
                    const rootFolder = document.querySelector('.folder-item[data-path="root"]');
                    if (rootFolder) rootFolder.classList.add('active');
                } else {
                    const path = item.dataset.path;
                    const name = item.dataset.name;
                    const folder = fs.getFolder(path);
                    const file = folder?.children[name];
                    
                    if (file?.type === 'folder') {
                        renderFiles(name);
                        
                        document.querySelectorAll('.folder-item').forEach(f => f.classList.remove('active'));
                        const targetFolder = document.querySelector(`.folder-item[data-path="${name}"]`);
                        if (targetFolder) targetFolder.classList.add('active');
                    } else {
                        let content = file.content || '';
                        if (content.startsWith('sounds/') || content.startsWith('videos/')) {
                            showToast(`📄 ${file.name}`);
                        } else if (name.endsWith('.zanashix')) {
                            fs.openZanashix(content);
                        } else {
                            showToast(`📄 ${file.name}\n${content}`);
                        }
                    }
                }
            });
        });
    }

    document.querySelectorAll('.folder-item').forEach(f => {
        f.addEventListener('click', () => {
            document.querySelectorAll('.folder-item').forEach(fld => fld.classList.remove('active'));
            f.classList.add('active');
            if (f.dataset.path) renderFiles(f.dataset.path);
        });
    });

    const newFolderBtn = document.getElementById('new-folder');
    if (newFolderBtn) {
        newFolderBtn.addEventListener('click', () => {
            const name = prompt('Имя папки:');
            if (name && fs.create(fs.current, name, 'folder')) {
                renderFiles(fs.current);
            }
        });
    }
    
    const newFileBtn = document.getElementById('new-file');
    if (newFileBtn) {
        newFileBtn.addEventListener('click', () => {
            const name = prompt('Имя файла:');
            if (name && fs.create(fs.current, name, 'file')) {
                renderFiles(fs.current);
            }
        });
    }
    
    const refreshFiles = document.getElementById('refresh-files');
    if (refreshFiles) {
        refreshFiles.addEventListener('click', () => {
            renderFiles(fs.current);
        });
    }
    
    renderFiles('root');

    // ==================== НАСТРОЙКИ ====================
    const settingsTabs = document.querySelectorAll('.settings-tab');
    const settingsContent = document.getElementById('settings-content');

    function renderSettings(tab) {
        let html = '';
        
        if (tab === 'main') {
            html = `
                <div class="settings-card">
                    <h3>Основные параметры</h3>
                    <label>${t('username')}</label>
                    <input type="text" id="settings-user" value="${STORAGE.user}">
                    <button id="save-user">${t('save')}</button>
                </div>
            `;
        } else if (tab === 'lang') {
            html = `
                <div class="settings-card">
                    <h3 style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
                        <span style="font-size: 2rem;">🌐</span> 
                        <span>${t('lang')}</span>
                    </h3>
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Выберите язык интерфейса</p>
                    
                    <div class="language-selector">
                        <label class="lang-option ${currentLang === 'ru' ? 'selected' : ''}">
                            <input type="radio" name="lang" value="ru" ${currentLang === 'ru' ? 'checked' : ''}>
                            <span class="lang-flag">🇷🇺</span>
                            <span class="lang-name">
                                Русский
                                <small>Российская Федерация</small>
                            </span>
                            <span class="lang-check">${currentLang === 'ru' ? '✓' : ''}</span>
                        </label>
                        
                        <label class="lang-option ${currentLang === 'by' ? 'selected' : ''}">
                            <input type="radio" name="lang" value="by" ${currentLang === 'by' ? 'checked' : ''}>
                            <span class="lang-flag">🇧🇾</span>
                            <span class="lang-name">
                                Беларуская
                                <small>Рэспубліка Беларусь</small>
                            </span>
                            <span class="lang-check">${currentLang === 'by' ? '✓' : ''}</span>
                        </label>
                    </div>
                    
                    <div style="background: rgba(255,87,34,0.1); border-left: 4px solid #ff8a8a; padding: 1rem; margin: 1.5rem 0; border-radius: 12px;">
                        <p style="color: #ff8a8a; font-weight: 600; margin-bottom: 0.3rem;">⚠️ ${t('onlyRF')}</p>
                        <p style="font-size: 0.9rem; opacity: 0.7;">Другие языки временно недоступны по техническим причинам</p>
                    </div>
                    
                    <button id="save-lang" class="settings-save-btn" style="
                        width: 100%;
                        padding: 1rem;
                        background: var(--gradient-flag);
                        border: none;
                        border-radius: 16px;
                        color: white;
                        font-weight: 700;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: all 0.3s;
                        box-shadow: 0 10px 20px rgba(0,87,183,0.3);
                    ">${t('save')}</button>
                </div>
            `;
        } else if (tab === 'theme') {
            html = `
                <div class="settings-card">
                    <h3 style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
                        <span style="font-size: 2rem;">🎨</span> 
                        <span>${t('theme')}</span>
                    </h3>
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Выберите оформление системы</p>
                    
                    <div class="theme-selector">
                        <label class="theme-option ${currentTheme === 'light' ? 'selected' : ''}">
                            <input type="radio" name="theme" value="light" ${currentTheme === 'light' ? 'checked' : ''}>
                            <div class="theme-preview light"></div>
                            <span class="theme-name">${t('light')}</span>
                            <span class="theme-check">${currentTheme === 'light' ? '✓' : ''}</span>
                        </label>
                        
                        <label class="theme-option ${currentTheme === 'dark' ? 'selected' : ''}">
                            <input type="radio" name="theme" value="dark" ${currentTheme === 'dark' ? 'checked' : ''}>
                            <div class="theme-preview dark"></div>
                            <span class="theme-name">${t('dark')}</span>
                            <span class="theme-check">${currentTheme === 'dark' ? '✓' : ''}</span>
                        </label>
                        
                        <label class="theme-option ${currentTheme === 'oled' ? 'selected' : ''}">
                            <input type="radio" name="theme" value="oled" ${currentTheme === 'oled' ? 'checked' : ''}>
                            <div class="theme-preview oled"></div>
                            <span class="theme-name">${t('oled')}</span>
                            <span class="theme-check">${currentTheme === 'oled' ? '✓' : ''}</span>
                        </label>
                        
                        <label class="theme-option ${currentTheme === 'system' ? 'selected' : ''}">
                            <input type="radio" name="theme" value="system" ${currentTheme === 'system' ? 'checked' : ''}>
                            <div class="theme-preview system"></div>
                            <span class="theme-name">${t('systemTheme')}</span>
                            <span class="theme-check">${currentTheme === 'system' ? '✓' : ''}</span>
                        </label>
                    </div>
                    
                    <button id="save-theme" class="settings-save-btn" style="
                        width: 100%;
                        padding: 1rem;
                        background: var(--gradient-flag);
                        border: none;
                        border-radius: 16px;
                        color: white;
                        font-weight: 700;
                        font-size: 1.1rem;
                        cursor: pointer;
                        margin-top: 1rem;
                    ">${t('save')}</button>
                </div>
            `;
        } else if (tab === 'wallpaper') {
            html = `
                <div class="settings-card">
                    <h3>Обои</h3>
                    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px;">
                        <img src="wallpapers/flag.png" class="wallpaper-opt" data-wall="flag" style="width:100%; border-radius:12px; cursor:pointer;">
                        <img src="wallpapers/gerb.png" class="wallpaper-opt" data-wall="gerb" style="width:100%; border-radius:12px; cursor:pointer;">
                        <img src="wallpapers/kreml.png" class="wallpaper-opt" data-wall="kreml" style="width:100%; border-radius:12px; cursor:pointer;">
                        <img src="wallpapers/prostory.png" class="wallpaper-opt" data-wall="prostory" style="width:100%; border-radius:12px; cursor:pointer;">
                        <img src="wallpapers/bereza.png" class="wallpaper-opt" data-wall="bereza" style="width:100%; border-radius:12px; cursor:pointer;">
                    </div>
                </div>
            `;
        } else if (tab === 'sound') {
            html = `
                <div class="settings-card">
                    <h3>${t('anthem')}</h3>
                    <button id="play-anthem">▶ ${t('anthem')}</button>
                </div>
                <div class="settings-card">
                    <h3>Звуки уведомлений</h3>
                    <button id="play-notification">🔔 Тест уведомления</button>
                </div>
            `;
        } else if (tab === 'dictor') {
            html = `
                <div class="settings-card">
                    <h3 style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
                        <span style="font-size: 2rem;">🗣️</span> 
                        <span>${t('dictorMode')}</span>
                    </h3>
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${t('dictorDesc')}</p>
                    
                    <div class="dictor-selector">
                        <label class="dictor-option ${dictorMode === 'hover' ? 'selected' : ''}">
                            <input type="radio" name="dictor" value="hover" ${dictorMode === 'hover' ? 'checked' : ''}>
                            <span class="dictor-icon">🖱️</span>
                            <span class="dictor-name">
                                ${t('hover')}
                                <small>Наведите курсор на любой элемент</small>
                            </span>
                            <span class="dictor-check">${dictorMode === 'hover' ? '✓' : ''}</span>
                        </label>
                        
                        <label class="dictor-option ${dictorMode === 'click' ? 'selected' : ''}">
                            <input type="radio" name="dictor" value="click" ${dictorMode === 'click' ? 'checked' : ''}>
                            <span class="dictor-icon">👆</span>
                            <span class="dictor-name">
                                ${t('click')}
                                <small>Кликните по элементу для озвучки</small>
                            </span>
                            <span class="dictor-check">${dictorMode === 'click' ? '✓' : ''}</span>
                        </label>
                        
                        <label class="dictor-option ${dictorMode === 'selection' ? 'selected' : ''}">
                            <input type="radio" name="dictor" value="selection" ${dictorMode === 'selection' ? 'checked' : ''}>
                            <span class="dictor-icon">📝</span>
                            <span class="dictor-name">
                                ${t('selection')}
                                <small>Выделите текст для озвучки</small>
                            </span>
                            <span class="dictor-check">${dictorMode === 'selection' ? '✓' : ''}</span>
                        </label>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
                        <button id="enable-dictor" class="dictor-btn test" style="
                            flex: 1;
                            padding: 0.8rem;
                            background: var(--gradient-flag);
                            border: none;
                            border-radius: 16px;
                            color: white;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s;
                        ">🔊 ${dictorEnabled ? 'Включен' : 'Включить'}</button>
                        
                        <button id="disable-dictor" class="dictor-btn disable" style="
                            flex: 1;
                            padding: 0.8rem;
                            background: ${dictorEnabled ? 'rgba(213,43,30,0.3)' : 'rgba(100,100,100,0.3)'};
                            border: 1px solid ${dictorEnabled ? 'var(--accent-red)' : '#666'};
                            border-radius: 16px;
                            color: white;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s;
                        ">⏻ ${dictorEnabled ? 'Отключить' : 'Отключен'}</button>
                    </div>
                    
                    <div style="display: flex; gap: 1rem;">
                        <button id="test-dictor" class="dictor-btn test" style="
                            flex: 1;
                            padding: 0.8rem;
                            background: rgba(0,87,183,0.5);
                            border: none;
                            border-radius: 16px;
                            color: white;
                            font-weight: 600;
                            cursor: pointer;
                        ">🔊 ${t('test')}</button>
                    </div>
                    
                    <div id="dictor-status" style="
                        background: ${dictorEnabled ? 'rgba(0,87,183,0.1)' : 'rgba(213,43,30,0.1)'}; 
                        border-left: 4px solid ${dictorEnabled ? 'var(--accent-blue)' : 'var(--accent-red)'}; 
                        padding: 0.8rem; 
                        margin-top: 1rem; 
                        border-radius: 12px;
                    ">
                        <p style="color: ${dictorEnabled ? 'var(--accent-blue)' : 'var(--accent-red)'}; font-size: 0.9rem;">
                            ${dictorEnabled ? '🔊 Диктор активен. Режим: ' + (dictorMode === 'hover' ? 'при наведении' : dictorMode === 'click' ? 'при клике' : 'при выделении') : '🔇 Диктор отключен'}
                        </p>
                    </div>
                </div>
            `;
        } else if (tab === 'system') {
            html = `
                <div class="settings-card">
                    <h3>${t('system')}</h3>
                    <p><strong>${t('version')}:</strong> 1.1.0</p>
                    <p><strong>${t('security')}:</strong> ${t('active')} ✓</p>
                    <button id="check-updates">${t('updates')}</button>
                    <button id="clear-all">${t('clear')}</button>
                </div>
            `;
        }
        
        if (settingsContent) settingsContent.innerHTML = html;

        const testBtn = document.getElementById('test-dictor');
        const enableBtn = document.getElementById('enable-dictor');
        const disableBtn = document.getElementById('disable-dictor');

        if (testBtn) {
            testBtn.addEventListener('click', () => {
                speak('Тест голосового помощника');
                showToast('🔊 Тест диктора');
            });
        }

        if (enableBtn) {
            enableBtn.addEventListener('click', () => {
                updateDictorState(true, dictorMode);
                showToast('🔊 Диктор включен');
                renderSettings('dictor');
            });
        }

        if (disableBtn) {
            disableBtn.addEventListener('click', () => {
                updateDictorState(false, dictorMode);
                showToast('🔇 Диктор отключен');
                renderSettings('dictor');
            });
        }

        document.querySelectorAll('input[name="dictor"]').forEach(r => {
            r.addEventListener('change', (e) => {
                const newMode = e.target.value;
                if (dictorEnabled) {
                    updateDictorState(true, newMode);
                } else {
                    dictorMode = newMode;
                    STORAGE.dictorMode = newMode;
                }
                renderSettings('dictor');
            });
        });

        document.querySelectorAll('input[name="lang"]').forEach(radio => {
            radio.addEventListener('change', () => {
                playSound('sounds/uvedomlenie.mp3', 0.1);
            });
        });
        
        document.querySelectorAll('input[name="theme"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const newTheme = e.target.value;
                applyTheme(newTheme);
                renderSettings('theme');
            });
        });
        
        const saveTheme = document.getElementById('save-theme');
        if (saveTheme) {
            saveTheme.addEventListener('click', () => {
                const selectedTheme = document.querySelector('input[name="theme"]:checked')?.value;
                if (selectedTheme) {
                    applyTheme(selectedTheme);
                    showToast(t('saved'));
                }
            });
        }

        document.querySelectorAll('.wallpaper-opt').forEach(img => {
            img.addEventListener('click', () => {
                if (img.dataset.wall) setWallpaper(img.dataset.wall);
                showToast('Обои изменены');
            });
        });
        
        const playAnthem = document.getElementById('play-anthem');
        if (playAnthem) {
            playAnthem.addEventListener('click', () => {
                playSound('sounds/gimn.mp3');
            });
        }
        
        const playNotification = document.getElementById('play-notification');
        if (playNotification) {
            playNotification.addEventListener('click', () => {
                playSound('sounds/uvedomlenie.mp3');
            });
        }
        
        const checkUpdates = document.getElementById('check-updates');
        if (checkUpdates) {
            checkUpdates.addEventListener('click', () => {
                showToast(t('noUpdates'));
                openWindow('whatsnew-window');
            });
        }
        
        const clearAll = document.getElementById('clear-all');
        if (clearAll) {
            clearAll.addEventListener('click', () => {
                if (confirm(t('clearConfirm'))) {
                    localStorage.clear();
                    showToast(t('cleared'));
                    setTimeout(() => location.reload(), 1000);
                }
            });
        }
        
        const saveUser = document.getElementById('save-user');
        if (saveUser) {
            saveUser.addEventListener('click', () => {
                const userInput = document.getElementById('settings-user');
                if (userInput) {
                    const name = userInput.value;
                    STORAGE.user = name;
                    const usernameDisplay = document.getElementById('username-display');
                    if (usernameDisplay) usernameDisplay.textContent = name;
                    showToast(t('saved'));
                }
            });
        }
        
        const saveLang = document.getElementById('save-lang');
        if (saveLang) {
            saveLang.addEventListener('click', () => {
                const selectedLang = document.querySelector('input[name="lang"]:checked')?.value;
                if (selectedLang) {
                    currentLang = selectedLang;
                    STORAGE.lang = selectedLang;
                    showToast(`Язык изменен на ${selectedLang === 'ru' ? 'русский' : 'беларусский'}`);
                    setTimeout(() => location.reload(), 500);
                }
            });
        }
    }

    if (settingsTabs.length && settingsContent) {
        settingsTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                settingsTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                if (tab.dataset.tab) renderSettings(tab.dataset.tab);
            });
        });
        renderSettings('main');
    }

    // ==================== ВХОД ====================
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const lockScreen = document.getElementById('lock-screen');
            if (lockScreen) lockScreen.classList.add('unlocked');
            playSound('sounds/vhod.mp3');
        });
    }

    // ==================== ВИДЕО С КОММЕНТАРИЯМИ И ЛАЙКАМИ ====================
    let videoData = {};
    
    function loadVideoData() {
        const saved = localStorage.getItem('patriot_video_data');
        if (saved) {
            videoData = JSON.parse(saved);
        } else {
            VIDEOS.forEach((video, index) => {
                let viewsValue = 0;
                if (typeof video.views === 'string') {
                    if (video.views.includes('M')) {
                        viewsValue = parseFloat(video.views) * 1000000;
                    } else if (video.views.includes('K')) {
                        viewsValue = parseFloat(video.views) * 1000;
                    } else {
                        viewsValue = parseInt(video.views) || 0;
                    }
                } else {
                    viewsValue = video.views || 0;
                }
                
                videoData[video.src] = {
                    likes: 0,
                    liked: false,
                    views: viewsValue,
                    comments: []
                };
            });
            saveVideoData();
        }
        updateVideoStatsDisplay();
    }
    
    function saveVideoData() {
        localStorage.setItem('patriot_video_data', JSON.stringify(videoData));
    }
    
    function updateVideoStatsDisplay() {
        document.querySelectorAll('.video-card').forEach(card => {
            const src = card.dataset.src;
            if (src && videoData[src]) {
                const likesSpan = card.querySelector('.video-likes');
                if (likesSpan) likesSpan.textContent = videoData[src].likes;
            }
        });
    }
    
    let currentVideoElement = null;
    let isVideoPlaying = false;
    
    function initCustomPlayer(videoElement) {
        currentVideoElement = videoElement;
        const playPauseBtn = document.getElementById('video-play-pause');
        const progressContainer = document.getElementById('video-progress-container');
        const progressBar = document.getElementById('video-progress-bar');
        const currentTimeSpan = document.getElementById('video-current-time');
        const durationSpan = document.getElementById('video-duration');
        const volumeBtn = document.getElementById('video-volume-btn');
        const volumeSlider = document.getElementById('video-volume-slider');
        const fullscreenBtn = document.getElementById('video-fullscreen');
        
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }
        
        function updateProgress() {
            if (videoElement.duration) {
                const percent = (videoElement.currentTime / videoElement.duration) * 100;
                progressBar.style.width = `${percent}%`;
                currentTimeSpan.textContent = formatTime(videoElement.currentTime);
            }
        }
        
        videoElement.addEventListener('loadedmetadata', () => {
            durationSpan.textContent = formatTime(videoElement.duration);
        });
        
        videoElement.addEventListener('timeupdate', updateProgress);
        videoElement.addEventListener('ended', () => {
            isVideoPlaying = false;
            if (playPauseBtn) playPauseBtn.textContent = '▶';
        });
        
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => {
                if (videoElement.paused) {
                    videoElement.play();
                    playPauseBtn.textContent = '⏸';
                    isVideoPlaying = true;
                } else {
                    videoElement.pause();
                    playPauseBtn.textContent = '▶';
                    isVideoPlaying = false;
                }
            });
        }
        
        if (progressContainer) {
            progressContainer.addEventListener('click', (e) => {
                const rect = progressContainer.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                videoElement.currentTime = percent * videoElement.duration;
            });
        }
        
        if (volumeSlider) {
            volumeSlider.value = videoElement.volume;
            volumeSlider.addEventListener('input', (e) => {
                videoElement.volume = parseFloat(e.target.value);
                volumeBtn.textContent = videoElement.volume === 0 ? '🔇' : (videoElement.volume < 0.5 ? '🔉' : '🔊');
            });
        }
        
        if (volumeBtn) {
            volumeBtn.addEventListener('click', () => {
                if (videoElement.volume > 0) {
                    videoElement.volume = 0;
                    volumeSlider.value = 0;
                    volumeBtn.textContent = '🔇';
                } else {
                    videoElement.volume = 0.5;
                    volumeSlider.value = 0.5;
                    volumeBtn.textContent = '🔊';
                }
            });
        }
        
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                const container = document.getElementById('custom-video-container');
                if (container.requestFullscreen) {
                    container.requestFullscreen();
                }
            });
        }
        
        videoElement.addEventListener('click', () => {
            if (videoElement.paused) {
                videoElement.play();
                playPauseBtn.textContent = '⏸';
            } else {
                videoElement.pause();
                playPauseBtn.textContent = '▶';
            }
        });
    }
    
    let currentVideoSrc = null;
    
    function updateVideoUI(src) {
        const data = videoData[src];
        if (!data) return;
        
        const likesSpan = document.getElementById('video-likes-count');
        const viewsSpan = document.getElementById('video-views-count');
        const likeBtn = document.getElementById('video-like-btn');
        const commentsList = document.getElementById('comments-list');
        
        if (likesSpan) likesSpan.textContent = data.likes;
        
        const videoInfo = VIDEOS.find(v => v.src === src);
        const originalViews = videoInfo ? videoInfo.views : '0';
        
        if (viewsSpan) viewsSpan.textContent = originalViews;
        
        if (likeBtn) {
            if (data.liked) {
                likeBtn.classList.add('liked');
            } else {
                likeBtn.classList.remove('liked');
            }
        }
        
        const commentsCountSpan = document.querySelector('.video-details .comments-count');
        if (commentsCountSpan) commentsCountSpan.textContent = data.comments.length;
        
        if (commentsList) {
            if (data.comments.length === 0) {
                commentsList.innerHTML = '<div class="empty-comments">💬 Пока нет комментариев. Будьте первым!</div>';
            } else {
                commentsList.innerHTML = data.comments.map((comment, idx) => `
                    <div class="comment-item" data-comment-idx="${idx}">
                        <div class="comment-header">
                            <span class="comment-author">${escapeHtml(comment.author)}</span>
                            <span>${comment.date}</span>
                        </div>
                        <div class="comment-text">${escapeHtml(comment.text)}</div>
                        <div class="comment-actions">
                            <button class="comment-like" data-idx="${idx}">
                                ❤️ ${comment.likes || 0}
                            </button>
                            <button class="comment-delete" data-idx="${idx}">🗑️ Удалить</button>
                        </div>
                    </div>
                `).join('');
                
                document.querySelectorAll('.comment-like').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const idx = parseInt(btn.dataset.idx);
                        if (!data.comments[idx]) return;
                        data.comments[idx].likes = (data.comments[idx].likes || 0) + 1;
                        saveVideoData();
                        updateVideoUI(src);
                    });
                });
                
                document.querySelectorAll('.comment-delete').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const idx = parseInt(btn.dataset.idx);
                        data.comments.splice(idx, 1);
                        saveVideoData();
                        updateVideoUI(src);
                    });
                });
            }
        }
    }
    
    function escapeHtml(str) {
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
    
    function addComment(src, text) {
        if (!text.trim()) return;
        const data = videoData[src];
        if (!data) return;
        
        const now = new Date();
        const dateStr = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()} ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;
        
        data.comments.unshift({
            author: STORAGE.user,
            text: text.trim(),
            date: dateStr,
            likes: 0
        });
        
        saveVideoData();
        updateVideoUI(src);
    }
    
    function addLike(src) {
        const data = videoData[src];
        if (!data) return;
        
        if (!data.liked) {
            data.likes++;
            data.liked = true;
        } else {
            data.likes--;
            data.liked = false;
        }
        
        saveVideoData();
        updateVideoUI(src);
        updateVideoStatsDisplay();
        
        const likeBtn = document.getElementById('video-like-btn');
        if (likeBtn) {
            likeBtn.style.animation = 'none';
            setTimeout(() => { likeBtn.style.animation = ''; }, 10);
        }
    }
    
    function incrementViews(src) {
        const data = videoData[src];
        if (data) {
            data.views++;
            saveVideoData();
            updateVideoUI(src);
        }
    }
    
    window.renderVideos = function() {
        if (!videoGrid) return;
        videoGrid.innerHTML = VIDEOS.map((v, index) => {
            const originalViews = v.views;
            const commentsCount = videoData[v.src]?.comments?.length || 0;
            
            return `
                <div class="video-card" data-src="${v.src}" data-poster="${v.poster}" data-index="${index}">
                    <div class="video-thumb" style="background-image: url('${v.poster}');"></div>
                    <div class="video-info">
                        <div class="video-title">${v.title}</div>
                        <div class="video-channel">
                            <span>📺</span> ${v.channel}
                        </div>
                        <div class="video-stats-mini">
                            <span>❤️ <span class="video-likes">${videoData[v.src]?.likes || 0}</span></span>
                            <span>👁️ ${originalViews}</span>
                            <span>💬 ${commentsCount}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        videoGrid.querySelectorAll('.video-card').forEach(card => {
            card.addEventListener('click', () => {
                const src = card.dataset.src;
                const poster = card.dataset.poster;
                const index = parseInt(card.dataset.index);
                currentVideoSrc = src;
                
                const videoElement = document.getElementById('video-player');
                const videoDetails = document.getElementById('video-details');
                const videoOverlay = document.getElementById('video-overlay');
                
                if (videoElement) {
                    videoElement.src = src;
                    videoElement.poster = poster;
                    videoElement.load();
                    
                    initCustomPlayer(videoElement);
                    incrementViews(src);
                    
                    if (videoDetails) videoDetails.style.display = 'block';
                    if (videoOverlay) videoOverlay.classList.remove('hidden');
                    
                    updateVideoUI(src);
                    
                    setTimeout(() => {
                        videoElement.play().catch(e => console.log('Autoplay blocked'));
                        const playPauseBtn = document.getElementById('video-play-pause');
                        if (playPauseBtn) playPauseBtn.textContent = '⏸';
                    }, 100);
                }
            });
        });
    };
    
    function initVideoInteractions() {
        const addCommentBtn = document.getElementById('add-comment-btn');
        const commentInput = document.getElementById('comment-input');
        const likeBtn = document.getElementById('video-like-btn');
        
        if (addCommentBtn) {
            addCommentBtn.addEventListener('click', () => {
                if (currentVideoSrc && commentInput) {
                    addComment(currentVideoSrc, commentInput.value);
                    commentInput.value = '';
                }
            });
        }
        
        if (commentInput) {
            commentInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && currentVideoSrc) {
                    addComment(currentVideoSrc, commentInput.value);
                    commentInput.value = '';
                }
            });
        }
        
        if (likeBtn) {
            likeBtn.addEventListener('click', () => {
                if (currentVideoSrc) {
                    addLike(currentVideoSrc);
                }
            });
        }
        
        const videoCloseBtn = document.getElementById('video-close-btn');
        if (videoCloseBtn) {
            videoCloseBtn.addEventListener('click', () => {
                const videoOverlay = document.getElementById('video-overlay');
                const videoElement = document.getElementById('video-player');
                if (videoElement) {
                    videoElement.pause();
                    videoElement.src = '';
                }
                if (videoOverlay) videoOverlay.classList.add('hidden');
                currentVideoSrc = null;
            });
        }
    }
    
    loadVideoData();
    renderVideos();
    initVideoInteractions();
    
    const styleForVideoStats = document.createElement('style');
    styleForVideoStats.textContent = `
        .video-stats-mini {
            display: flex;
            gap: 0.8rem;
            font-size: 0.7rem;
            color: var(--text-secondary);
            margin-top: 0.4rem;
        }
        .video-stats-mini span {
            display: flex;
            align-items: center;
            gap: 0.2rem;
        }
    `;
    document.head.appendChild(styleForVideoStats);

    // ==================== СТИКЕРЫ В МЕССЕНДЖЕРЕ ====================
    function initStickers() {
        const stickerPreview = document.getElementById('sticker-preview-btn');
        const stickerDropdown = document.getElementById('sticker-dropdown');
        
        if (stickerPreview) {
            stickerPreview.addEventListener('click', (e) => {
                e.stopPropagation();
                stickerDropdown.classList.toggle('hidden');
            });
        }
        
        document.addEventListener('click', (e) => {
            if (stickerDropdown && stickerPreview) {
                if (!stickerDropdown.contains(e.target) && !stickerPreview.contains(e.target)) {
                    stickerDropdown.classList.add('hidden');
                }
            }
        });
        
        const stickerOptions = document.querySelectorAll('.sticker-option');
        stickerOptions.forEach(option => {
            option.addEventListener('click', () => {
                if (!currentChat) {
                    showToast('Сначала выберите чат');
                    stickerDropdown.classList.add('hidden');
                    return;
                }
                
                const stickerType = option.dataset.sticker;
                let stickerHtml = '';
                
                if (stickerType === 'putin') {
                    stickerHtml = '<img src="images/putin.png" alt="🇷🇺" style="width: 100px; height: 100px; border-radius: 16px;">';
                } else if (stickerType === 'flag') {
                    stickerHtml = '<img src="images/flag_russia.png" alt="🇷🇺" style="width: 100px; height: 100px; border-radius: 16px;">';
                }
                
                const now = new Date();
                const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
                
                chatMessages[currentChat].push({
                    text: stickerHtml,
                    isSticker: true,
                    time: time,
                    incoming: false
                });
                
                renderChat(currentChat);
                stickerDropdown.classList.add('hidden');
                
                setTimeout(() => {
                    let replyText = '';
                    
                    if (stickerType === 'putin') {
                        const putinReplies = [
                            '🇷🇺 Спасибо за поддержку!',
                            'Владимир Владимирович ценит вашу лояльность.',
                            'Сильная Россия — сильный президент!',
                            'Вместе мы сила! 🇷🇺'
                        ];
                        replyText = putinReplies[Math.floor(Math.random() * putinReplies.length)];
                    } else if (stickerType === 'flag') {
                        const flagReplies = {
                            mom: ['Молодец, сынок! 🇷🇺', 'Горжусь тобой!'],
                            school: ['Патриотизм — это важно! 📚', 'Отличный настрой!'],
                            friend: ['Ура! 🇷🇺', 'Патриотка 🔥']
                        };
                        const replyList = flagReplies[currentChat] || ['🇷🇺 Слава России!'];
                        replyText = replyList[Math.floor(Math.random() * replyList.length)];
                    }
                    
                    chatMessages[currentChat].push({
                        text: replyText,
                        isSticker: false,
                        time: new Date().toLocaleTimeString().slice(0,5),
                        incoming: true
                    });
                    renderChat(currentChat);
                }, 1200);
            });
        });
    }
    
    // ==================== РЕАКЦИИ И ЦИТАТЫ ====================
    let quoteMessage = null;
    
    function setQuote(messageIndex, text, author) {
        quoteMessage = { index: messageIndex, text, author };
        const input = document.getElementById('message-input');
        if (input) {
            input.focus();
            showToast(`💬 Цитируется: ${author.substring(0, 30)}...`);
            
            const existingIndicator = document.querySelector('.quote-indicator');
            if (existingIndicator) existingIndicator.remove();
            
            const indicator = document.createElement('div');
            indicator.className = 'quote-indicator';
            indicator.style.cssText = `
                background: var(--accent-blue);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.7rem;
                margin-bottom: 0.3rem;
                display: inline-block;
            `;
            indicator.innerHTML = `📎 Цитата: ${author.substring(0, 20)}... <span style="cursor:pointer; margin-left:0.5rem;">✖</span>`;
            indicator.querySelector('span')?.addEventListener('click', () => {
                quoteMessage = null;
                indicator.remove();
            });
            
            const inputArea = document.querySelector('.chat-input-area');
            if (inputArea) {
                const existing = inputArea.querySelector('.quote-indicator');
                if (existing) existing.remove();
                inputArea.insertBefore(indicator, inputArea.firstChild);
            }
        }
    }
    
    function clearQuote() {
        quoteMessage = null;
        const indicator = document.querySelector('.quote-indicator');
        if (indicator) indicator.remove();
    }
    
    function addReaction(chatId, messageIndex, reaction) {
        const messages = chatMessages[chatId];
        if (!messages || !messages[messageIndex]) return;
        
        const msg = messages[messageIndex];
        
        if (!msg.reactions) msg.reactions = {};
        
        msg.reactions[reaction] = (msg.reactions[reaction] || 0) + 1;
        
        localStorage.setItem(`chat_${chatId}_reactions`, JSON.stringify(
            messages.map(m => m.reactions || {})
        ));
        
        renderChat(chatId);
    }
    
    window.renderChat = function(chatId) {
        currentChat = chatId;
        const messages = chatMessages[chatId] || [];
        const messagesContainer = document.getElementById('chat-messages');
        const chatHeader = document.getElementById('chat-header');
        const chatInputArea = document.getElementById('chat-input-area');
        
        let chatName = '';
        if (chatId === 'mom') chatName = t('mom');
        else if (chatId === 'school') chatName = t('school');
        else if (chatId === 'friend') chatName = t('friend');
        
        if (chatHeader) chatHeader.textContent = chatName;
        if (chatInputArea) chatInputArea.style.display = 'flex';
        
        if (messagesContainer) {
            if (messages.length === 0) {
                messagesContainer.innerHTML = '<div class="welcome-message">✨ Нет сообщений. Напишите первое!</div>';
            } else {
                messagesContainer.innerHTML = messages.map((msg, idx) => {
                    const reactionsHtml = msg.reactions ? Object.entries(msg.reactions).map(([emoji, count]) => `
                        <span class="reaction-bubble" data-reaction="${emoji}" data-msg-idx="${idx}">${emoji} ${count}</span>
                    `).join('') : '';
                    
                    const quoteHtml = msg.quote ? `
                        <div class="message-quote">
                            <div class="quote-author">${escapeHtml(msg.quote.author)}</div>
                            <div class="quote-text">${escapeHtml(msg.quote.text)}</div>
                        </div>
                    ` : '';
                    
                    if (msg.isSticker) {
                        return `
                            <div class="message ${msg.incoming ? 'incoming' : 'outgoing'} sticker" data-msg-idx="${idx}">
                                <div class="sticker-message">${msg.text}</div>
                                <div class="message-info">${msg.time}</div>
                                ${reactionsHtml ? `<div class="message-reactions">${reactionsHtml}</div>` : ''}
                                <div class="message-actions">
                                    <button class="message-action-btn reply-btn" data-msg-idx="${idx}">↩️ Ответить</button>
                                    <button class="message-action-btn quote-btn" data-msg-idx="${idx}">💬 Цитировать</button>
                                </div>
                            </div>
                        `;
                    } else {
                        return `
                            <div class="message ${msg.incoming ? 'incoming' : 'outgoing'}" data-msg-idx="${idx}">
                                ${quoteHtml}
                                <div>${escapeHtml(msg.text)}</div>
                                <div class="message-info">${msg.time}</div>
                                ${reactionsHtml ? `<div class="message-reactions">${reactionsHtml}</div>` : ''}
                                <div class="message-actions">
                                    <button class="message-action-btn react-btn" data-msg-idx="${idx}">😊 Реакция</button>
                                    <button class="message-action-btn reply-btn" data-msg-idx="${idx}">↩️ Ответить</button>
                                    <button class="message-action-btn quote-btn" data-msg-idx="${idx}">💬 Цитировать</button>
                                </div>
                            </div>
                        `;
                    }
                }).join('');
                
                document.querySelectorAll('.reaction-bubble').forEach(el => {
                    el.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const reaction = el.dataset.reaction;
                        const msgIdx = parseInt(el.dataset.msgIdx);
                        addReaction(chatId, msgIdx, reaction);
                    });
                });
                
                document.querySelectorAll('.react-btn').forEach(btn => {
                    const newBtn = btn.cloneNode(true);
                    btn.parentNode.replaceChild(newBtn, btn);
                    
                    newBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const msgIdx = parseInt(newBtn.dataset.msgIdx);
                        const rect = newBtn.getBoundingClientRect();
                        showReactionPicker(rect, chatId, msgIdx);
                    });
                });
                
                document.querySelectorAll('.quote-btn').forEach(btn => {
                    const newBtn = btn.cloneNode(true);
                    btn.parentNode.replaceChild(newBtn, btn);
                    
                    newBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const msgIdx = parseInt(newBtn.dataset.msgIdx);
                        const msg = messages[msgIdx];
                        if (msg && !msg.isSticker) {
                            const author = msg.incoming ? chatName : STORAGE.user;
                            setQuote(msgIdx, msg.text, author);
                        } else if (msg && msg.isSticker) {
                            showToast('Нельзя цитировать стикер');
                        }
                    });
                });
                
                document.querySelectorAll('.reply-btn').forEach(btn => {
                    const newBtn = btn.cloneNode(true);
                    btn.parentNode.replaceChild(newBtn, btn);
                    
                    newBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const msgIdx = parseInt(newBtn.dataset.msgIdx);
                        const msg = messages[msgIdx];
                        if (msg && !msg.isSticker) {
                            const author = msg.incoming ? chatName : STORAGE.user;
                            setQuote(msgIdx, msg.text, author);
                        } else if (msg && msg.isSticker) {
                            showToast('Нельзя ответить на стикер');
                        }
                    });
                });
            }
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        document.querySelectorAll('.chat-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.chat === chatId) item.classList.add('active');
        });
    };
    
    function showReactionPicker(rect, chatId, msgIdx) {
        const existing = document.querySelector('.reaction-picker');
        if (existing) existing.remove();
        
        const reactions = ['👍', '❤️', '😂', '😮', '😢', '🔥', '🇷🇺'];
        const picker = document.createElement('div');
        picker.className = 'reaction-picker';
        picker.style.position = 'fixed';
        picker.style.left = (rect.left - 100) + 'px';
        picker.style.top = (rect.top - 60) + 'px';
        picker.style.zIndex = '10000';
        
        reactions.forEach(emoji => {
            const btn = document.createElement('button');
            btn.className = 'reaction-emoji';
            btn.textContent = emoji;
            btn.style.background = 'none';
            btn.style.border = 'none';
            btn.style.fontSize = '1.5rem';
            btn.style.cursor = 'pointer';
            btn.style.padding = '0.5rem';
            btn.style.transition = 'all 0.2s';
            
            btn.onmouseenter = () => { btn.style.transform = 'scale(1.2)'; };
            btn.onmouseleave = () => { btn.style.transform = 'scale(1)'; };
            
            btn.onclick = (e) => {
                e.stopPropagation();
                addReaction(chatId, msgIdx, emoji);
                picker.remove();
            };
            picker.appendChild(btn);
        });
        
        document.body.appendChild(picker);
        
        const closePicker = (e) => {
            if (!picker.contains(e.target)) {
                picker.remove();
                document.removeEventListener('click', closePicker);
            }
        };
        setTimeout(() => {
            document.addEventListener('click', closePicker);
        }, 100);
    }
    
    renderChat = window.renderChat;

    function loadReactions() {
        const chats = ['mom', 'school', 'friend'];
        chats.forEach(chat => {
            const saved = localStorage.getItem(`chat_${chat}_reactions`);
            if (saved) {
                const reactions = JSON.parse(saved);
                chatMessages[chat].forEach((msg, idx) => {
                    if (reactions[idx]) {
                        msg.reactions = reactions[idx];
                    }
                });
            }
        });
    }
    
    loadReactions();
    loadMemory();
    
    setTimeout(() => {
        const totalMessages = Object.values(chatMemory).reduce((sum, m) => sum + m.messageCount, 0);
        if (totalMessages === 0) {
            fsbNotify('😊 Добро пожаловать в PatriotOS — безопасную и удобную систему', 'warning');
        } else {
            console.log('Загружена память чатов');
        }
    }, 2000);

    // ==================== ИНИЦИАЛИЗАЦИЯ ====================
    window.addEventListener('load', () => {
        setWallpaper(STORAGE.wallpaper);
        initTheme();
        initDictor();
        initMessenger();
        playSound('sounds/vhod.mp3', 0.2);
        updateTime();
        setInterval(updateTime, 1000);
        
        const startBtn = document.getElementById('start-btn');
        const startMenu = document.getElementById('start-menu');
        const datetimePanel = document.getElementById('datetime-panel');
        const calendarDropdown = document.getElementById('calendar-dropdown');
        
        if (startBtn && startMenu) {
            startBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                startMenu.classList.toggle('hidden');
            });
        }
        
        if (datetimePanel && calendarDropdown) {
            datetimePanel.addEventListener('click', (e) => {
                e.stopPropagation();
                calendarDropdown.classList.toggle('hidden');
                renderDropdownCalendar();
            });
        }
        
        document.addEventListener('click', (e) => {
            if (startMenu && startBtn && !startMenu.contains(e.target) && !startBtn.contains(e.target)) {
                startMenu.classList.add('hidden');
            }
            if (calendarDropdown && datetimePanel && !calendarDropdown.contains(e.target) && !datetimePanel.contains(e.target)) {
                calendarDropdown.classList.add('hidden');
            }
        });
        
        const testWindow = document.getElementById('patriottest-window');
        if (testWindow) {
            const testObserver = new MutationObserver(() => {
                if (!testWindow.classList.contains('hidden')) {
                    renderTest();
                    testObserver.disconnect();
                }
            });
            testObserver.observe(testWindow, { attributes: true });
        }
    });

    // ==================== ИНДИКАЦИЯ СВЁРНУТЫХ ПРИЛОЖЕНИЙ ====================
    class TaskbarManager {
        constructor() {
            this.taskbarItems = new Map();
            this.init();
        }
        
        init() {
            const dock = document.querySelector('.dock');
            if (dock && !document.querySelector('.minimized-apps')) {
                const minimizedContainer = document.createElement('div');
                minimizedContainer.className = 'minimized-apps';
                dock.appendChild(minimizedContainer);
            }
            
            this.updateMinimizedIndicator();
            
            const observer = new MutationObserver(() => this.updateMinimizedIndicator());
            document.querySelectorAll('.window').forEach(win => {
                observer.observe(win, { attributes: true, attributeFilter: ['class'] });
            });
        }
        
        updateMinimizedIndicator() {
            const container = document.querySelector('.minimized-apps');
            if (!container) return;
            
            const windows = document.querySelectorAll('.window');
            const minimizedWindows = [];
            
            windows.forEach(win => {
                if (win.classList.contains('minimized') && !win.classList.contains('hidden')) {
                    const title = win.querySelector('.window-title')?.textContent || 'Окно';
                    const icon = win.querySelector('.window-title img')?.src || '';
                    minimizedWindows.push({ id: win.id, title, icon });
                }
            });
            
            if (minimizedWindows.length === 0) {
                container.innerHTML = '';
                container.style.display = 'none';
                return;
            }
            
            container.style.display = 'flex';
            container.innerHTML = minimizedWindows.map(app => `
                <div class="minimized-app-item" data-window="${app.id}">
                    <img src="${app.icon}" style="width: 20px; height: 20px;" onerror="this.style.display='none'; this.parentElement.textContent='📦'">
                    <span class="minimized-badge"></span>
                </div>
            `).join('');
            
            container.querySelectorAll('.minimized-app-item').forEach(item => {
                item.addEventListener('click', () => {
                    const winId = item.dataset.window;
                    const win = document.getElementById(winId);
                    if (win) {
                        win.classList.remove('minimized');
                        showToast(`🪟 ${item.querySelector('img')?.alt || 'Окно'} восстановлено`);
                        this.updateMinimizedIndicator();
                    }
                });
            });
        }
    }
    
    window.taskbarManager = new TaskbarManager();
    
    // ==================== КАСТОМНОЕ КОНТЕКСТНОЕ МЕНЮ ====================
    class ContextMenu {
        constructor() {
            this.menu = null;
            this.init();
        }

        init() {
            document.addEventListener('contextmenu', (e) => {
                if (e.target.tagName === 'IFRAME') return;
                e.preventDefault();
                this.show(e);
            });

            let touchTimer = null;
            document.addEventListener('touchstart', (e) => {
                touchTimer = setTimeout(() => {
                    if (e.touches.length === 1) {
                        e.preventDefault();
                        this.show(e.touches[0]);
                    }
                }, 500);
            });
            document.addEventListener('touchend', () => {
                clearTimeout(touchTimer);
            });
            document.addEventListener('touchmove', () => {
                clearTimeout(touchTimer);
            });

            document.addEventListener('click', () => this.hide());
        }

        getMenuItems(target) {
            const items = [];
            const tag = target.tagName;
            const isDesktopIcon = target.closest('.desktop-icon');
            const isWindow = target.closest('.window');
            const isMessage = target.closest('.message');
            const isFile = target.closest('.file-item');
            const isVideo = target.closest('.video-card');
            const isTrack = target.closest('.track-item');
            const isChat = target.closest('.chat-item');
            
            items.push({
                icon: '🔄',
                text: 'Обновить',
                shortcut: 'F5',
                action: () => location.reload()
            });
            
            items.push({
                icon: '🏠',
                text: 'На рабочий стол',
                shortcut: 'Win+D',
                action: () => {
                    document.querySelectorAll('.window').forEach(win => {
                        win.classList.add('minimized');
                    });
                    showToast('Все окна свернуты');
                }
            });
            
            items.push({
                icon: '🗑️',
                text: 'Очистить уведомления',
                action: () => {
                    document.querySelectorAll('.toast').forEach(t => t.remove());
                    showToast('Уведомления очищены');
                }
            });
            
            items.push({ divider: true });
            
            if (isDesktopIcon) {
                const icon = isDesktopIcon;
                const appName = icon.querySelector('.desktop-icon-name')?.textContent || '';
                items.push({
                    icon: '🚀',
                    text: `Открыть "${appName}"`,
                    action: () => icon.click()
                });
                items.push({
                    icon: '📌',
                    text: 'Закрепить в панели',
                    action: () => showToast(`🔧 ${appName} закреплен в панели (в разработке)`)
                });
                items.push({ divider: true });
                items.push({
                    icon: '🗑️',
                    text: 'Удалить с рабочего стола',
                    action: () => {
                        if (confirm(`Удалить "${appName}" с рабочего стола?`)) {
                            icon.remove();
                            showToast(`❌ ${appName} удален`);
                        }
                    }
                });
            }
            
            if (isWindow) {
                const win = isWindow.closest('.window');
                const winTitle = win.querySelector('.window-title')?.textContent || 'Окно';
                items.push({
                    icon: '⤢',
                    text: 'На весь экран',
                    shortcut: 'F11',
                    action: () => maximizeWindow(win.id)
                });
                items.push({
                    icon: '🗕',
                    text: 'Свернуть',
                    shortcut: 'Win+↓',
                    action: () => minimizeWindow(win.id)
                });
                items.push({
                    icon: '✖',
                    text: 'Закрыть',
                    shortcut: 'Alt+F4',
                    action: () => closeWindow(win.id)
                });
                items.push({ divider: true });
                items.push({
                    icon: '📌',
                    text: 'Всегда сверху',
                    action: () => {
                        win.style.zIndex = '9999';
                        showToast('Окно закреплено поверх всех');
                    }
                });
            }
            
            if (isMessage) {
                const msg = isMessage;
                const msgText = msg.querySelector('div:not(.message-info):not(.message-quote)')?.textContent || '';
                items.push({
                    icon: '💬',
                    text: 'Ответить',
                    action: () => {
                        const quoteBtn = msg.querySelector('.reply-btn');
                        if (quoteBtn) quoteBtn.click();
                    }
                });
                items.push({
                    icon: '📋',
                    text: 'Копировать текст',
                    action: () => {
                        navigator.clipboard.writeText(msgText);
                        showToast('✅ Текст скопирован');
                    }
                });
                items.push({
                    icon: '😊',
                    text: 'Реакции',
                    submenu: [
                        { icon: '👍', text: 'Лайк', action: () => { const reactBtn = msg.querySelector('.react-btn'); if(reactBtn) reactBtn.click(); } },
                        { icon: '❤️', text: 'Сердце', action: () => { const reactBtn = msg.querySelector('.react-btn'); if(reactBtn) reactBtn.click(); } },
                        { icon: '😂', text: 'Смех', action: () => { const reactBtn = msg.querySelector('.react-btn'); if(reactBtn) reactBtn.click(); } },
                        { icon: '😮', text: 'Удивление', action: () => { const reactBtn = msg.querySelector('.react-btn'); if(reactBtn) reactBtn.click(); } }
                    ]
                });
            }
            
            if (isFile) {
                const fileName = isFile.querySelector('.file-name')?.textContent || '';
                items.push({
                    icon: '📄',
                    text: `Открыть "${fileName}"`,
                    action: () => isFile.click()
                });
                items.push({
                    icon: '✏️',
                    text: 'Переименовать',
                    action: () => {
                        const newName = prompt('Новое имя:', fileName);
                        if (newName) showToast(`📁 Переименовано в ${newName} (демо)`);
                    }
                });
                items.push({
                    icon: '🗑️',
                    text: 'Удалить',
                    action: () => {
                        if (confirm(`Удалить "${fileName}"?`)) {
                            isFile.remove();
                            showToast(`🗑️ ${fileName} удален`);
                        }
                    }
                });
            }
            
            if (isTrack) {
                const trackTitle = isTrack.querySelector('.track-title')?.textContent || '';
                items.push({
                    icon: '▶️',
                    text: `Воспроизвести "${trackTitle}"`,
                    action: () => {
                        const playBtn = isTrack.querySelector('.track-play');
                        if (playBtn) playBtn.click();
                    }
                });
                items.push({
                    icon: '📋',
                    text: 'Копировать название',
                    action: () => {
                        navigator.clipboard.writeText(trackTitle);
                        showToast('🎵 Название скопировано');
                    }
                });
            }
            
            if (isVideo) {
                const videoTitle = isVideo.querySelector('.video-title')?.textContent || '';
                items.push({
                    icon: '▶️',
                    text: `Смотреть "${videoTitle}"`,
                    action: () => isVideo.click()
                });
                items.push({
                    icon: '🔗',
                    text: 'Скопировать ссылку',
                    action: () => {
                        navigator.clipboard.writeText(videoTitle);
                        showToast('🔗 Ссылка скопирована');
                    }
                });
            }
            
            if (isChat) {
                const chatName = isChat.textContent || '';
                items.push({
                    icon: '💬',
                    text: `Открыть чат "${chatName.trim()}"`,
                    action: () => isChat.click()
                });
                items.push({
                    icon: '🔕',
                    text: 'Отключить уведомления',
                    action: () => showToast(`🔕 Уведомления в чате "${chatName.trim()}" отключены`)
                });
            }
            
            items.push({ divider: true });
            
            items.push({
                icon: '🎨',
                text: 'Сменить тему',
                submenu: [
                    { icon: '☀️', text: 'Светлая', action: () => applyTheme('light') },
                    { icon: '🌙', text: 'Тёмная', action: () => applyTheme('dark') },
                    { icon: '🖤', text: 'OLED-чёрная', action: () => applyTheme('oled') },
                    { icon: '💻', text: 'Системная', action: () => applyTheme('system') }
                ]
            });
            
            items.push({
                icon: '🖼️',
                text: 'Сменить обои',
                submenu: [
                    { icon: '🇷🇺', text: 'Флаг России', action: () => setWallpaper('flag') },
                    { icon: '🦅', text: 'Герб', action: () => setWallpaper('gerb') },
                    { icon: '🏛️', text: 'Кремль', action: () => setWallpaper('kreml') },
                    { icon: '🌾', text: 'Просторы', action: () => setWallpaper('prostory') }
                ]
            });
            
            items.push({
                icon: '🗣️',
                text: 'Диктор',
                submenu: [
                    { icon: '🖱️', text: 'При наведении', action: () => updateDictorState(true, 'hover') },
                    { icon: '👆', text: 'При клике', action: () => updateDictorState(true, 'click') },
                    { icon: '📝', text: 'При выделении', action: () => updateDictorState(true, 'selection') },
                    { divider: true },
                    { icon: '🔇', text: 'Отключить', action: () => updateDictorState(false, dictorMode) }
                ]
            });
            
            items.push({ divider: true });
            
            items.push({
                icon: 'ℹ️',
                text: 'О системе',
                action: () => {
                    openWindow('whatsnew-window');
                    showToast('🪆 PatriotOS 1.1 — Время великих свершений');
                }
            });
            
            return items;
        }
        
        renderMenu(items, x, y) {
            this.hide();
            
            const menu = document.createElement('div');
            menu.className = 'custom-context-menu';
            menu.style.left = x + 'px';
            menu.style.top = y + 'px';
            
            let menuWidth = 250;
            let menuHeight = items.length * 50;
            if (x + menuWidth > window.innerWidth) {
                menu.style.left = (window.innerWidth - menuWidth) + 'px';
            }
            if (y + menuHeight > window.innerHeight) {
                menu.style.top = (window.innerHeight - menuHeight) + 'px';
            }
            
            const renderItem = (item) => {
                if (item.divider) {
                    const div = document.createElement('div');
                    div.className = 'menu-divider';
                    return div;
                }
                
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item-custom';
                if (item.submenu) menuItem.classList.add('has-submenu');
                
                menuItem.innerHTML = `
                    <span class="menu-icon">${item.icon}</span>
                    <span class="menu-text">${item.text}</span>
                    ${item.shortcut ? `<span class="menu-shortcut">${item.shortcut}</span>` : ''}
                    ${item.submenu ? '<span class="submenu-arrow">▶</span>' : ''}
                `;
                
                if (item.action) {
                    menuItem.addEventListener('click', (e) => {
                        e.stopPropagation();
                        item.action();
                        this.hide();
                    });
                }
                
                if (item.submenu) {
                    const submenu = document.createElement('div');
                    submenu.className = 'menu-submenu';
                    item.submenu.forEach(subItem => {
                        submenu.appendChild(renderItem(subItem));
                    });
                    menuItem.appendChild(submenu);
                }
                
                return menuItem;
            };
            
            items.forEach(item => {
                menu.appendChild(renderItem(item));
            });
            
            document.body.appendChild(menu);
            this.menu = menu;
            
            setTimeout(() => {
                const closeHandler = (e) => {
                    if (!menu.contains(e.target)) {
                        this.hide();
                        document.removeEventListener('click', closeHandler);
                    }
                };
                document.addEventListener('click', closeHandler);
            }, 10);
        }
        
        show(event) {
            const target = event.target;
            const items = this.getMenuItems(target);
            if (items.length > 0) {
                this.renderMenu(items, event.clientX, event.clientY);
                
                if (target.style) {
                    target.style.transition = 'all 0.1s';
                    target.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        if (target.style) target.style.transform = '';
                    }, 100);
                }
            }
        }
        
        hide() {
            if (this.menu) {
                this.menu.remove();
                this.menu = null;
            }
        }
    }
    
    const contextMenu = new ContextMenu();

})();