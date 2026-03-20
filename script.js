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
            system: 'Система'
        },
        by: {
            login: 'Увайсці',
            tap: 'націсніце для ўваходу',
            calc: 'Калькулятар',
            browser: 'Браўзэр',
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
            system: 'Сістэма'
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
        { title: 'Гимн России', channel: 'Государственный', views: '1.2M', src: 'videos/anthem.mp4', poster: 'videos/anthem_poster.jpg' },
        { title: 'SHAMAN - Я русский', channel: 'SHAMAN', views: '5.4M', src: 'videos/shaman.mp4', poster: 'videos/shaman_poster.jpg' }
    ];

    // ==================== ПРИЛОЖЕНИЯ ====================
    const PREINSTALLED = [
        { name: 'ВКонтакте', url: 'vk.com', icon: 'images/vkontakte.png', color: '#0077ff' },
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
                            'Приказ.txt': { name: 'Приказ.txt', type: 'file', content: 'Служить России!' }
                        }
                    },
                    'Изображения': {
                        name: 'Изображения',
                        type: 'folder',
                        children: {
                            'Флаг.png': { name: 'Флаг.png', type: 'file', content: 'flag' },
                            'Герб.png': { name: 'Герб.png', type: 'file', content: 'gerb' },
                            'Кремль.png': { name: 'Кремль.png', type: 'file', content: 'kreml' },
                            'Просторы.png': { name: 'Просторы.png', type: 'file', content: 'prostory' },
                            'Берёзка.png': { name: 'Берёзка.png', type: 'file', content: 'bereza' }
                        }
                    },
                    'Музыка': {
                        name: 'Музыка',
                        type: 'folder',
                        children: {
                            'Гимн.mp3': { name: 'Гимн.mp3', type: 'file', content: 'sounds/gimn.mp3' },
                            'Я русский.mp3': { name: 'Я русский.mp3', type: 'file', content: 'sounds/yarusskiy.mp3' },
                            'Священная война.mp3': { name: 'Священная война.mp3', type: 'file', content: 'sounds/svyaschennaya.mp3' },
                            'День Победы.mp3': { name: 'День Победы.mp3', type: 'file', content: 'sounds/denpobedy.mp3' },
                            'Калинка.mp3': { name: 'Калинка.mp3', type: 'file', content: 'sounds/kalinka.mp3' },
                            'Подмосковные вечера.mp3': { name: 'Подмосковные вечера.mp3', type: 'file', content: 'sounds/podmoskovnie.mp3' }
                        }
                    },
                    'Видео': {
                        name: 'Видео',
                        type: 'folder',
                        children: {
                            'Гимн.mp4': { name: 'Гимн.mp4', type: 'file', content: 'videos/anthem.mp4' },
                            'Я русский.mp4': { name: 'Я русский.mp4', type: 'file', content: 'videos/shaman.mp4' }
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
            if (!/^[а-яА-ЯёЁ0-9\s\.\-]+$/.test(name)) {
                this.notify('Только русские буквы');
                return false;
            }
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
    let installedApps = STORAGE.apps;
    let calcExpression = '';
    let calendarDate = new Date();
    let dropdownDate = new Date();

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
        }
    }
    
    function closeWindow(id) {
        const win = document.getElementById(id);
        if (win) win.classList.add('hidden');
        playSound('sounds/uvedomlenie.mp3');
    }

    function minimizeWindow(id) {
        const win = document.getElementById(id);
        if (win) win.classList.add('minimized');
        playSound('sounds/uvedomlenie.mp3');
    }

    function maximizeWindow(id) {
        const win = document.getElementById(id);
        if (win) {
            win.classList.toggle('maximized');
            playSound('sounds/uvedomlenie.mp3');
            if (win.classList.contains('maximized')) {
                win.style.left = '';
                win.style.top = '';
                win.style.transform = '';
            }
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
    const allowedDomains = ['yandex.ru', 'ya.ru', 'vk.com', 'gosuslugi.ru', 'rkn.gov.ru', '.ru', '.рф'];
    
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
        if (browserUrl) browserUrl.value = 'yandex.ru';
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
                    showToast(`✅ ${app.name} ${t('installed')}`);
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
            if (app.isVideo) {
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
    const trackList = document.getElementById('track-list');
    const nowTitle = document.getElementById('now-playing-title');
    const nowArtist = document.getElementById('now-playing-artist');

    function loadPlaylist(id) {
        currentPlaylist = PLAYLISTS[id] || PLAYLISTS.main;
        if (trackList) {
            trackList.innerHTML = currentPlaylist.map((track, i) => `
                <div class="track-item" data-index="${i}">
                    <div class="track-icon">${track.icon}</div>
                    <div class="track-info">
                        <div class="track-title">${track.title}</div>
                        <div class="track-artist">${track.artist}</div>
                    </div>
                    <button class="track-play" data-src="${track.src}">▶</button>
                </div>
            `).join('');
            
            trackList.querySelectorAll('.track-play').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const src = btn.dataset.src;
                    const track = currentPlaylist.find(t => t.src === src);
                    
                    if (currentAudio) {
                        currentAudio.pause();
                    }
                    
                    currentAudio = new Audio(src);
                    currentAudio.volume = 0.5;
                    currentAudio.play();
                    
                    btn.textContent = '⏸';
                    if (nowTitle) nowTitle.textContent = track.title;
                    if (nowArtist) nowArtist.textContent = track.artist;
                    
                    currentAudio.onended = () => {
                        btn.textContent = '▶';
                    };
                });
            });
        }
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

    function renderVideos() {
        if (!videoGrid) return;
        videoGrid.innerHTML = VIDEOS.map(v => `
            <div class="video-card" data-src="${v.src}" data-poster="${v.poster}">
                <div class="video-thumb" style="background-image: url('${v.poster}');"></div>
                <div class="video-info">
                    <div class="video-title">${v.title}</div>
                    <div class="video-channel">${v.channel}</div>
                </div>
            </div>
        `).join('');
        
        videoGrid.querySelectorAll('.video-card').forEach(card => {
            card.addEventListener('click', () => {
                if (videoOverlay) videoOverlay.classList.remove('hidden');
                if (videoPlayer) videoPlayer.src = card.dataset.src;
                if (videoPlayer) videoPlayer.play();
            });
        });
    }
    
    renderVideos();

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
                    <p><strong>${t('version')}:</strong> 1.0.0</p>
                    <p><strong>${t('security')}:</strong> ${t('active')} ✓</p>
                    <button id="check-updates">${t('updates')}</button>
                    <button id="clear-all">${t('clear')}</button>
                </div>
            `;
        }
        
        if (settingsContent) settingsContent.innerHTML = html;

        // Обработчики диктора
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

    // ==================== ИНИЦИАЛИЗАЦИЯ ====================
    window.addEventListener('load', () => {
        setWallpaper(STORAGE.wallpaper);
        initDictor();
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
    });
})();