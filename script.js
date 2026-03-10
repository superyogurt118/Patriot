// ========== СИСТЕМА ПЕРЕВОДА (Русский/Белорусский) ==========
const translations = {
    ru: {
        // Экран блокировки
        'login': 'Войти',
        'tap_to_enter': 'Нажмите для входа',
        
        // Интерфейс
        'start': 'Пуск',
        'calculator': 'Калькулятор',
        'browser': 'Браузер',
        'rustore': 'RuStore',
        'settings': 'Настройки',
        'files': 'Документы',
        'calendar': 'Календарь',
        'rusmusic': 'Румузыка',
        'ruvideo': 'Рувидео',
        
        // Календарь
        'monday': 'Пн',
        'tuesday': 'Вт',
        'wednesday': 'Ср',
        'thursday': 'Чт',
        'friday': 'Пт',
        'saturday': 'Сб',
        'sunday': 'Вс',
        'january': 'Январь',
        'february': 'Февраль',
        'march': 'Март',
        'april': 'Апрель',
        'may': 'Май',
        'june': 'Июнь',
        'july': 'Июль',
        'august': 'Август',
        'september': 'Сентябрь',
        'october': 'Октябрь',
        'november': 'Ноябрь',
        'december': 'Декабрь',
        'january_gen': 'января',
        'february_gen': 'февраля',
        'march_gen': 'марта',
        'april_gen': 'апреля',
        'may_gen': 'мая',
        'june_gen': 'июня',
        'july_gen': 'июля',
        'august_gen': 'августа',
        'september_gen': 'сентября',
        'october_gen': 'октября',
        'november_gen': 'ноября',
        'december_gen': 'декабря',
        'holidays_this_month': 'Праздники в этом месяце:',
        'no_holidays': 'Нет праздников в этом месяце',
        'selected_date': 'Выбрана дата',
        'no_holiday': 'Нет праздника',
        
        // Настройки
        'settings_title': 'Настройки',
        'main': 'Основные',
        'langtime': 'Язык и время',
        'wallpapers': 'Обои',
        'sounds': 'Звуки',
        'system': 'Система',
        'search_settings': 'Поиск в настройках...',
        'main_params': 'Основные параметры',
        'main_desc': 'Здесь можно настроить общие параметры системы.',
        'username': 'Имя пользователя',
        'save': 'Сохранить',
        'interface_lang': 'Язык интерфейса',
        'foreign_warning': 'Иностранные языки приведут к блокировке!',
        'timezone': 'Часовой пояс',
        'save_langtime': 'Сохранить',
        'settings_saved': 'Настройки сохранены. Перезагрузите страницу для применения.',
        'desktop_wallpaper': 'Обои рабочего стола',
        'anthem': 'Гимн РФ',
        'notification': 'Уведомление',
        'system_info': 'Информация о системе',
        'version': 'Версия',
        'security': 'Безопасность',
        'active': 'Активна ✓',
        'system_lang': 'Язык',
        'russian': 'Русский (Системный)',
        'check_updates': 'Проверить обновления',
        'clear_data': 'Очистить все данные',
        'apply_lang': 'Применить язык',
        'russian_lang': 'Русский',
        'belarusian_lang': 'Беларуская',
        
        // Меню Пуск
        'search_apps': 'Поиск приложений...',
        'app_store': 'Магазин приложений',
        'reset': 'Сброс',
        
        // Браузер
        'browser_title': 'Браузер',
        'address_placeholder': 'yandex.ru',
        'go': '▶',
        'only_russian': '⛔ Только российские ресурсы!',
        'yandex': 'Яндекс',
        'yandex_desc': 'Поисковая система №1 в России',
        
        // RuStore
        'rustore_title': 'RuStore',
        'add_app': '➕ Добавить приложение',
        'name': 'Название',
        'link': 'Ссылка (например, vk.com)',
        'add_to_desktop': 'Добавить на рабочий стол',
        'installed': 'Установлено',
        'already_installed': 'уже установлено',
        'fill_fields': 'Заполните поля!',
        'only_russian_domains': '⛔ Только российские домены!',
        'already_exists': 'Уже есть!',
        'player': '🎵 Плеер',
        
        // Документы
        'my_computer': 'Мой компьютер',
        'my_docs': 'Мои документы',
        'images': 'Изображения',
        'music': 'Моя музыка',
        'new_folder': '📁 Новая папка',
        'new_file': '📄 Новый файл',
        'refresh': '🔄 Обновить',
        'delete_confirm': 'Удалить',
        'folder_name': 'Название папки:',
        'file_name': 'Название файла:',
        'only_russian_letters': '⛔ Только русские буквы!',
        
        // Румузыка
        'rusmusic_title': 'Румузыка',
        'listen_patriotic': 'Слушайте патриотическую музыку',
        'gimn': 'Гимн Российской Федерации',
        'gimn_desc': 'Государственный гимн',
        'shaman': 'Я русский',
        'shaman_desc': 'SHAMAN',
        'only_patriotic': 'Слушайте только патриотическую музыку',
        'main_playlist': 'Главное',
        'patriotic_playlist': 'Патриотическое',
        'classic_playlist': 'Классика',
        
        // Рувидео
        'ruvideo': '📺 Рувидео',
        'watch_patriotic': 'Смотрите патриотические видео',
        'ruvideo_anthem': 'Гимн России',
        'ruvideo_anthem_desc': 'Видеоклип с гимном',
        'ruvideo_shaman': 'Я русский',
        'ruvideo_shaman_desc': 'SHAMAN — официальный клип',
        'only_patriotic_videos': 'Смотрите только патриотические видео',
        'close_player': 'Закрыть плеер',
        
        // Уведомления
        'no_updates': 'Обновлений нет. Вы используете самую патриотичную версию!',
        'clear_confirm': 'Очистить все данные? Это удалит все файлы и приложения.',
        'data_cleared': 'Данные очищены! Страница будет перезагружена.',
        'app_not_support': 'Это приложение не поддерживает браузер'
    },
    
    by: {
        // Экран блокировки
        'login': 'Увайсці',
        'tap_to_enter': 'Націсніце для ўваходу',
        
        // Інтэрфейс
        'start': 'Старт',
        'calculator': 'Калькулятар',
        'browser': 'Браўзэр',
        'rustore': 'RuStore',
        'settings': 'Налады',
        'files': 'Дакументы',
        'calendar': 'Каляндар',
        'rusmusic': 'Румузыка',
        'ruvideo': 'Рувідэа',
        
        // Каляндар
        'monday': 'Пн',
        'tuesday': 'Аў',
        'wednesday': 'Ср',
        'thursday': 'Чц',
        'friday': 'Пт',
        'saturday': 'Сб',
        'sunday': 'Нд',
        'january': 'Студзень',
        'february': 'Люты',
        'march': 'Сакавік',
        'april': 'Красавік',
        'may': 'Май',
        'june': 'Чэрвень',
        'july': 'Ліпень',
        'august': 'Жнівень',
        'september': 'Верасень',
        'october': 'Кастрычнік',
        'november': 'Лістапад',
        'december': 'Снежань',
        'january_gen': 'студзеня',
        'february_gen': 'лютага',
        'march_gen': 'сакавіка',
        'april_gen': 'красавіка',
        'may_gen': 'мая',
        'june_gen': 'чэрвеня',
        'july_gen': 'ліпеня',
        'august_gen': 'жніўня',
        'september_gen': 'верасня',
        'october_gen': 'кастрычніка',
        'november_gen': 'лістапада',
        'december_gen': 'снежня',
        'holidays_this_month': 'Святы ў гэтым месяцы:',
        'no_holidays': 'Няма святаў у гэтым месяцы',
        'selected_date': 'Абраная дата',
        'no_holiday': 'Няма свята',
        
        // Налады
        'settings_title': 'Налады',
        'main': 'Асноўныя',
        'langtime': 'Мова і час',
        'wallpapers': 'Шпалеры',
        'sounds': 'Гукі',
        'system': 'Сістэма',
        'search_settings': 'Пошук у наладах...',
        'main_params': 'Асноўныя параметры',
        'main_desc': 'Тут можна наладзіць агульныя параметры сістэмы.',
        'username': 'Імя карыстальніка',
        'save': 'Захаваць',
        'interface_lang': 'Мова інтэрфейсу',
        'foreign_warning': 'Замежныя мовы прывядуць да блакіроўкі!',
        'timezone': 'Часавы пояс',
        'save_langtime': 'Захаваць',
        'settings_saved': 'Налады захаваны. Перазагрузіце старонку для прымянення.',
        'desktop_wallpaper': 'Шпалеры працоўнага стала',
        'anthem': 'Гімн РФ',
        'notification': 'Апавяшчэнне',
        'system_info': 'Інфармацыя пра сістэму',
        'version': 'Версія',
        'security': 'Бяспека',
        'active': 'Актыўная ✓',
        'system_lang': 'Мова',
        'russian': 'Руская (Сістэмная)',
        'check_updates': 'Праверыць абнаўленні',
        'clear_data': 'Ачысціць усе дадзеныя',
        'apply_lang': 'Прымяніць мову',
        'russian_lang': 'Руская',
        'belarusian_lang': 'Беларуская',
        
        // Меню Пуск
        'search_apps': 'Пошук праграм...',
        'app_store': 'Крама праграм',
        'reset': 'Скід',
        
        // Браўзэр
        'browser_title': 'Браўзэр',
        'address_placeholder': 'yandex.ru',
        'go': '▶',
        'only_russian': '⛔ Толькі расійскія рэсурсы!',
        'yandex': 'Яндэкс',
        'yandex_desc': 'Пошукавая сістэма №1 у Расіі',
        
        // RuStore
        'rustore_title': 'RuStore',
        'add_app': '➕ Дадаць праграму',
        'name': 'Назва',
        'link': 'Спасылка (напрыклад, vk.com)',
        'add_to_desktop': 'Дадаць на працоўны стол',
        'installed': 'Усталявана',
        'already_installed': 'ужо ўсталявана',
        'fill_fields': 'Запоўніце палі!',
        'only_russian_domains': '⛔ Толькі расійскія дамены!',
        'already_exists': 'Ужо ёсць!',
        'player': '🎵 Плеер',
        
        // Дакументы
        'my_computer': 'Мой кампутар',
        'my_docs': 'Мае дакументы',
        'images': 'Выявы',
        'music': 'Мая музыка',
        'new_folder': '📁 Новы тэчак',
        'new_file': '📄 Новы файл',
        'refresh': '🔄 Абнавіць',
        'delete_confirm': 'Выдаліць',
        'folder_name': 'Назва тэчака:',
        'file_name': 'Назва файла:',
        'only_russian_letters': '⛔ Толькі рускія літары!',
        
        // Румузыка
        'rusmusic_title': 'Румузыка',
        'listen_patriotic': 'Слухайце патрыятычную музыку',
        'gimn': 'Гімн Расійскай Федэрацыі',
        'gimn_desc': 'Дзяржаўны гімн',
        'shaman': 'Я рускі',
        'shaman_desc': 'SHAMAN',
        'only_patriotic': 'Слухайце толькі патрыятычную музыку',
        'main_playlist': 'Галоўнае',
        'patriotic_playlist': 'Патрыятычнае',
        'classic_playlist': 'Класіка',
        
        // Рувідэа
        'ruvideo': '📺 Рувідэа',
        'watch_patriotic': 'Глядзіце патрыятычныя відэа',
        'ruvideo_anthem': 'Гімн Расіі',
        'ruvideo_anthem_desc': 'Відэакліп з гімнам',
        'ruvideo_shaman': 'Я рускі',
        'ruvideo_shaman_desc': 'SHAMAN — афіцыйны кліп',
        'only_patriotic_videos': 'Глядзіце толькі патрыятычныя відэа',
        'close_player': 'Зачыніць плэер',
        
        // Абвесткі
        'no_updates': 'Абнаўленняў няма. Вы карыстаецеся самай патрыятычнай версіяй!',
        'clear_confirm': 'Ачысціць усе дадзеныя? Гэта выдаліць усе файлы і праграмы.',
        'data_cleared': 'Дадзеныя ачышчаны! Старонка будзе перазагружана.',
        'app_not_support': 'Гэта праграма не падтрымлівае браўзэр'
    }
};

let currentLang = localStorage.getItem('patriotLang') || 'ru';

function __(key) {
    return translations[currentLang][key] || key;
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = __(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        el.placeholder = __(key);
    });

    // Обновляем заголовки окон
    const winTitles = {
        'calc-window': 'calculator',
        'browser-window': 'browser',
        'rustore-window': 'rustore',
        'settings-window': 'settings',
        'files-window': 'files',
        'calendar-window': 'calendar',
        'rusmusic-window': 'rusmusic',
        'ruvideo-window': 'ruvideo'
    };
    
    for (const [winId, key] of Object.entries(winTitles)) {
        const win = document.getElementById(winId);
        if (win) {
            const title = win.querySelector('.window-title');
            if (title) {
                const icon = title.textContent.split(' ')[0];
                title.textContent = icon + ' ' + __(key);
            }
        }
    }

    // Обновляем дату
    updateDateTime();
    
    // Обновляем календарь
    if (typeof renderCalendar === 'function') {
        renderCalendar(currentDate);
    }

    localStorage.setItem('patriotLang', currentLang);
}

// ========== МОБИЛЬНАЯ ПОДДЕРЖКА ==========
document.addEventListener('touchmove', (e) => {
    if (e.target.closest('.window') || e.target.closest('.dock') || e.target.closest('.desktop-icons') || e.target.closest('.datetime-panel') || e.target.closest('.top-panel') || e.target.closest('.start-modal')) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchstart', (e) => {
    if (e.target.closest('.icon') || e.target.closest('.win-btn') || e.target.closest('.calc-btn') || 
        e.target.closest('.files-btn') || e.target.closest('.browser-nav-btn') || e.target.closest('.datetime-panel') || 
        e.target.closest('.start-button') || e.target.closest('.start-app-item') || e.target.closest('.start-footer-item')) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());
document.addEventListener('gestureend', (e) => e.preventDefault());

// ========== ВХОД ПО КНОПКЕ ==========
const loginBtn = document.getElementById('login-btn');
const lockScreen = document.getElementById('lock-screen');

loginBtn.addEventListener('click', () => {
    playVhod();
    lockScreen.classList.add('unlocked');
});

loginBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playVhod();
        lockScreen.classList.add('unlocked');
    }
});

loginBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    playVhod();
    lockScreen.classList.add('unlocked');
}, { passive: false });

// ========== ВРЕМЯ И ДАТА ==========
function updateDateTime() {
    const now = new Date();
    
    // Время
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('current-time').innerText = `${hours}:${minutes}`;
    document.getElementById('time-display').innerText = `${hours}:${minutes}`;
    
    // Дата
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const day = now.getDate();
    const month = months[now.getMonth()];
    document.getElementById('current-date').innerText = `${day} ${month}`;
    
    // Проверка на праздник
    const holiday = checkHoliday(now);
    const indicator = document.getElementById('holiday-indicator');
    if (holiday) {
        indicator.innerText = '🎉';
        indicator.title = holiday;
    } else {
        indicator.innerText = '📅';
        indicator.title = 'Нет праздника';
    }
}

// Список праздников
const holidays = [
    { month: 0, day: 1, name: 'Новый год' },
    { month: 0, day: 2, name: 'Новогодние каникулы' },
    { month: 0, day: 3, name: 'Новогодние каникулы' },
    { month: 0, day: 4, name: 'Новогодние каникулы' },
    { month: 0, day: 5, name: 'Новогодние каникулы' },
    { month: 0, day: 6, name: 'Новогодние каникулы' },
    { month: 0, day: 7, name: 'Рождество Христово' },
    { month: 0, day: 8, name: 'Новогодние каникулы' },
    { month: 1, day: 23, name: 'День защитника Отечества' },
    { month: 2, day: 8, name: 'Международный женский день' },
    { month: 4, day: 1, name: 'Праздник Весны и Труда' },
    { month: 4, day: 9, name: 'День Победы' },
    { month: 5, day: 5, name: 'День Бананов' },
    { month: 5, day: 12, name: 'День России' },
    { month: 10, day: 4, name: 'День народного единства' }
];

function checkHoliday(date) {
    const month = date.getMonth();
    const day = date.getDate();
    const holiday = holidays.find(h => h.month === month && h.day === day);
    return holiday ? holiday.name : null;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// ========== ЗВУКИ ==========
let gimnAudio = null, uvedAudio = null, vhodAudio = null;

function playGimn() {
    try {
        if (gimnAudio) {
            gimnAudio.pause();
            gimnAudio.currentTime = 0;
        }
        gimnAudio = new Audio('sounds/gimn.mp3');
        gimnAudio.volume = 0.4;
        gimnAudio.play().catch(() => {});
    } catch (e) {}
}

function playVhod() {
    try {
        if (vhodAudio) {
            vhodAudio.pause();
            vhodAudio.currentTime = 0;
        }
        vhodAudio = new Audio('sounds/vhod.mp3');
        vhodAudio.volume = 0.4;
        vhodAudio.play().catch(() => {});
    } catch (e) {}
}

function playUvedomlenie() {
    try {
        if (uvedAudio) {
            uvedAudio.pause();
            uvedAudio.currentTime = 0;
        }
        uvedAudio = new Audio('sounds/uvedomlenie.mp3');
        uvedAudio.volume = 0.3;
        uvedAudio.play().catch(() => {});
    } catch (e) {}
}

// ========== УПРАВЛЕНИЕ ОКНАМИ ==========
function closeWin(id) {
    document.getElementById(id).classList.add('hidden');
    playUvedomlenie();
}

function openWin(id) {
    document.getElementById(id).classList.remove('hidden');
    playUvedomlenie();
}

document.querySelectorAll('.win-btn.close').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const winId = btn.dataset.win;
        closeWin(winId);
    });

    btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const winId = btn.dataset.win;
        closeWin(winId);
    }, { passive: false });
});

// Открытие окон по клику на иконку в доке
document.querySelectorAll('.icon[data-window]').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        openWin(icon.dataset.window);
    });

    icon.addEventListener('touchstart', (e) => {
        e.preventDefault();
        openWin(icon.dataset.window);
    }, { passive: false });
});

// Открытие окон из меню «Пуск»
document.querySelectorAll('.start-app-item, .start-footer-item[data-window]').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const winId = item.dataset.window;
        if (winId) {
            openWin(winId);
            toggleStartMenu();
        }
    });

    item.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const winId = item.dataset.window;
        if (winId) {
            openWin(winId);
            toggleStartMenu();
        }
    }, { passive: false });
});

// ========== МЕНЮ ПУСК ==========
const startButton = document.getElementById('start-button');
const startModal = document.getElementById('start-modal');
const startApps = document.getElementById('start-apps');
const startSearch = document.getElementById('start-search');

function toggleStartMenu() {
    startModal.classList.toggle('hidden');
}

startButton.addEventListener('click', toggleStartMenu);
startButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    toggleStartMenu();
}, { passive: false });

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    if (!startModal.classList.contains('hidden') && 
        !startModal.contains(e.target) && 
        !startButton.contains(e.target)) {
        startModal.classList.add('hidden');
    }
});

// Заполнение меню приложениями
function renderStartMenu() {
    const apps = [
        { name: 'Магазин приложений', icon: '📦', windowId: 'rustore-window' },
        { name: 'Настройки', icon: '⚙️', windowId: 'settings-window' },
        { name: 'Документы', icon: '📁', windowId: 'files-window' },
        { name: 'Румузыка', icon: '🎵', windowId: 'rusmusic-window' },
        { name: 'Рувидео', icon: '📺', windowId: 'ruvideo-window' }
    ];

    let html = '';
    apps.forEach(app => {
        html += `
            <div class="start-app-item" data-window="${app.windowId}">
                <div class="start-app-icon">${app.icon}</div>
                <div class="start-app-name">${app.name}</div>
            </div>
        `;
    });
    startApps.innerHTML = html;

    // Добавляем обработчики для новых элементов
    document.querySelectorAll('.start-app-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const winId = item.dataset.window;
            openWin(winId);
            toggleStartMenu();
        });

        item.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const winId = item.dataset.window;
            openWin(winId);
            toggleStartMenu();
        }, { passive: false });
    });

    // Поиск
    startSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.start-app-item');
        items.forEach(item => {
            const name = item.querySelector('.start-app-name').textContent.toLowerCase();
            if (name.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// ========== КАЛЕНДАРЬ ==========
const datetimePanel = document.getElementById('datetime-panel');
const calendarWindow = document.getElementById('calendar-window');
const calendarDays = document.getElementById('calendar-days');
const calendarMonth = document.getElementById('calendar-month');
const calendarYear = document.getElementById('calendar-year');
const monthHolidays = document.getElementById('month-holidays');
const calendarPrev = document.getElementById('calendar-prev');
const calendarNext = document.getElementById('calendar-next');

let currentDate = new Date();

datetimePanel.addEventListener('click', () => {
    openWin('calendar-window');
    renderCalendar(currentDate);
});

datetimePanel.addEventListener('touchstart', (e) => {
    e.preventDefault();
    openWin('calendar-window');
    renderCalendar(currentDate);
}, { passive: false });

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const monthNames = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    calendarMonth.innerText = monthNames[month];
    calendarYear.innerText = year;

    const firstDay = new Date(year, month, 1);
    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    let html = '';
    for (let i = 0; i < startDay; i++) {
        html += '<div class="calendar-day"></div>';
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${month + 1}-${d}`;
        const isToday = today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
        const holiday = holidays.find(h => h.month === month && h.day === d);
        
        let classes = 'calendar-day';
        if (isToday) classes += ' today';
        if (holiday) classes += ' holiday';
        
        html += `<div class="${classes}" data-date="${dateStr}">${d}</div>`;
    }

    calendarDays.innerHTML = html;

    const monthHolidaysList = holidays.filter(h => h.month === month);
    let holidaysHtml = '';
    monthHolidaysList.forEach(h => {
        const isToday = today.getDate() === h.day && today.getMonth() === month;
        holidaysHtml += `<li${isToday ? ' class="today-holiday"' : ''}>${h.day} ${monthNames[month].toLowerCase()} — ${h.name}</li>`;
    });
    
    if (monthHolidaysList.length === 0) {
        holidaysHtml = '<li>Нет праздников в этом месяце</li>';
    }
    
    monthHolidays.innerHTML = holidaysHtml;

    document.querySelectorAll('.calendar-day[data-date]').forEach(day => {
        day.addEventListener('click', () => {
            const date = day.dataset.date;
            alert(`Выбрана дата: ${date}`);
        });
    });
}

calendarPrev.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

calendarNext.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// ========== КАЛЬКУЛЯТОР ==========
let cExp = "";
const calcDisplay = document.getElementById('calc-res');

function cNum(n) { 
    cExp += n; 
    calcDisplay.innerText = cExp; 
}

function cClear() { 
    cExp = ""; 
    calcDisplay.innerText = "0"; 
}

function cOp(op) { 
    cExp += op; 
    calcDisplay.innerText = cExp; 
}

function cRes() { 
    try { 
        cExp = eval(cExp).toString(); 
        calcDisplay.innerText = cExp; 
    } catch { 
        calcDisplay.innerText = "Ошибка"; 
        cExp = ""; 
    }
}

document.querySelectorAll('[data-calc]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const type = btn.dataset.calc;
        const value = btn.innerText;
        
        if (type === 'num') cNum(value);
        else if (type === 'op') cOp(value);
        else if (type === 'clear') cClear();
        else if (type === 'equals') cRes();
    });

    btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const type = btn.dataset.calc;
        const value = btn.innerText;
        
        if (type === 'num') cNum(value);
        else if (type === 'op') cOp(value);
        else if (type === 'clear') cClear();
        else if (type === 'equals') cRes();
    }, { passive: false });
});

// ========== БРАУЗЕР ==========
const browserFrame = document.getElementById('browser-frame');
const browserHome = document.getElementById('browser-home');
const browserAddress = document.getElementById('browser-address');
const browserGo = document.getElementById('browser-go');
const browserBack = document.getElementById('browser-back');
const browserForward = document.getElementById('browser-forward');
const browserRefresh = document.getElementById('browser-refresh');

let history = [];
let currentHistoryIndex = -1;
const allowedDomains = ['yandex.ru', 'ya.ru', 'vk.com', 'rutube.ru', 'gosuslugi.ru', 'sberbank.ru', '2gis.ru', 'mail.ru', 'ok.ru', '.ru', '.рф', '#'];

function showHome() {
    browserFrame.style.display = 'none';
    browserHome.style.display = 'flex';
    browserAddress.value = 'yandex.ru';
}

function showSite(url) {
    let fullUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        fullUrl = 'https://' + url;
    }
    
    let isAllowed = allowedDomains.some(domain => fullUrl.includes(domain));

    if (!isAllowed) {
        alert(__('only_russian'));
        showHome();
        return;
    }

    browserFrame.style.display = 'block';
    browserHome.style.display = 'none';
    browserFrame.src = fullUrl;
    browserAddress.value = url;

    history = history.slice(0, currentHistoryIndex + 1);
    history.push(url);
    currentHistoryIndex = history.length - 1;
}

browserGo.addEventListener('click', () => {
    const url = browserAddress.value.trim();
    if (url) showSite(url);
});

browserGo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const url = browserAddress.value.trim();
    if (url) showSite(url);
}, { passive: false });

browserAddress.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const url = browserAddress.value.trim();
        if (url) showSite(url);
    }
});

browserBack.addEventListener('click', () => {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        showSite(history[currentHistoryIndex]);
    }
});

browserBack.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        showSite(history[currentHistoryIndex]);
    }
}, { passive: false });

browserForward.addEventListener('click', () => {
    if (currentHistoryIndex < history.length - 1) {
        currentHistoryIndex++;
        showSite(history[currentHistoryIndex]);
    }
});

browserForward.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (currentHistoryIndex < history.length - 1) {
        currentHistoryIndex++;
        showSite(history[currentHistoryIndex]);
    }
}, { passive: false });

browserRefresh.addEventListener('click', () => {
    if (browserFrame.style.display !== 'none') browserFrame.src = browserFrame.src;
});

browserRefresh.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (browserFrame.style.display !== 'none') browserFrame.src = browserFrame.src;
}, { passive: false });

showHome();

// ========== ОБОИ ==========
const desktop = document.getElementById('desktop');
const wallpaperOptions = document.querySelectorAll('.wallpaper-option');

function setWallpaper(wallpaperName) {
    desktop.style.backgroundImage = `url('wallpapers/${wallpaperName}.png')`;
    playUvedomlenie();
}

wallpaperOptions.forEach(opt => {
    opt.addEventListener('click', () => setWallpaper(opt.dataset.wallpaper));
    opt.addEventListener('touchstart', (e) => {
        e.preventDefault();
        setWallpaper(opt.dataset.wallpaper);
    }, { passive: false });
});

// ========== RuStore ==========
const rustoreGrid = document.getElementById('rustore-grid');
const rustoreName = document.getElementById('rustore-name');
const rustoreUrl = document.getElementById('rustore-url');
const rustoreAddBtn = document.getElementById('rustore-add-btn');
const desktopIcons = document.getElementById('desktop-icons');

const preinstalledApps = [
    { name: 'ВКонтакте', url: 'vk.com', icon: 'images/vkontakte.png' },
    { name: 'Рувидео', url: '#', icon: 'images/rutube.png', isVideo: true },
    { name: 'MAX', url: 'web.max.ru', icon: 'images/max.jpg' },
    { name: 'Госуслуги', url: 'gosuslugi.ru', icon: 'images/gosuslugi.jpg' },
    { name: 'Румузыка', url: '#', icon: 'images/VKmusica.png', isPlayer: true }
];

let installedApps = JSON.parse(localStorage.getItem('patriotApps')) || [];

function renderRustore() {
    let html = '';
    preinstalledApps.forEach(app => {
        const isInstalled = true;
        let typeIcon = '';
        if (app.isPlayer) typeIcon = '🎵';
        else if (app.isVideo) typeIcon = '📺';
        
        html += `
            <div class="rustore-item ${isInstalled ? 'installed' : ''}" data-app='${JSON.stringify(app)}'>
                <div class="rustore-item-icon" style="background-image: url('${app.icon}');"></div>
                <div class="rustore-item-name">${app.name}</div>
                <div class="rustore-item-url">${typeIcon} ${app.isPlayer ? 'Плеер' : app.isVideo ? 'Видео' : app.url}</div>
                <div class="installed-badge">✓ ${__('installed')}</div>
            </div>
        `;
    });
    rustoreGrid.innerHTML = html;

    document.querySelectorAll('.rustore-item').forEach(item => {
        const app = JSON.parse(item.dataset.app);
        
        item.addEventListener('click', () => {
            if (!installedApps.some(a => a.url === app.url)) {
                installApp(app.name, app.url, app.icon, app.isPlayer || false, app.isVideo || false);
            } else {
                alert(`✅ ${app.name} ${__('already_installed')}`);
            }
        });
        
        item.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!installedApps.some(a => a.url === app.url)) {
                installApp(app.name, app.url, app.icon, app.isPlayer || false, app.isVideo || false);
            } else {
                alert(`✅ ${app.name} ${__('already_installed')}`);
            }
        }, { passive: false });
    });
}

window.installApp = function(name, url, icon, isPlayer = false, isVideo = false) {
    if (installedApps.some(a => a.url === url)) {
        alert(__('already_installed'));
        return;
    }
    installedApps.push({ name, url, icon, isPlayer, isVideo });
    localStorage.setItem('patriotApps', JSON.stringify(installedApps));
    addDesktopIcon(name, url, icon, isPlayer, isVideo);
    playUvedomlenie();
    renderRustore();
};

function addDesktopIcon(name, url, icon, isPlayer = false, isVideo = false) {
    const el = document.createElement('div');
    el.className = 'desktop-icon';
    el.setAttribute('data-url', url);
    
    if (isPlayer) {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            openWin('rusmusic-window');
        });
        
        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
            openWin('rusmusic-window');
        }, { passive: false });
    } else if (isVideo) {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            openWin('ruvideo-window');
        });
        
        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
            openWin('ruvideo-window');
        }, { passive: false });
    } else {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if (url === '#' || url === '') {
                alert(__('app_not_support'));
                return;
            }
            openWin('browser-window');
            showSite(url);
        });
        
        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (url === '#' || url === '') {
                alert(__('app_not_support'));
                return;
            }
            openWin('browser-window');
            showSite(url);
        }, { passive: false });
    }
    
    el.innerHTML = `
        <div class="desktop-icon-img" style="background-image: url('${icon}');"></div>
        <div class="desktop-icon-name">${name}</div>
    `;
    desktopIcons.appendChild(el);
}

function loadDesktopIcons() {
    desktopIcons.innerHTML = '';
    preinstalledApps.forEach(app => addDesktopIcon(app.name, app.url, app.icon, app.isPlayer || false, app.isVideo || false));
    installedApps.forEach(app => {
        if (!preinstalledApps.some(p => p.url === app.url)) {
            addDesktopIcon(app.name, app.url, app.icon, app.isPlayer || false, app.isVideo || false);
        }
    });
}

rustoreAddBtn.addEventListener('click', () => {
    const name = rustoreName.value.trim();
    let url = rustoreUrl.value.trim();
    if (!name || !url) return alert(__('fill_fields'));
    
    if (!allowedDomains.some(d => url.includes(d)) && !url.includes('.ru') && !url.includes('.рф')) {
        return alert(__('only_russian_domains'));
    }
    
    if (!url.startsWith('http')) url = 'https://' + url;
    
    const icon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='%238b6b4d'/%3E%3Ctext x='30' y='40' font-size='24' text-anchor='middle' fill='white'%3E${name.charAt(0).toUpperCase()}%3C/text%3E%3C/svg%3E`;
    
    if (installedApps.some(a => a.url === url)) return alert(__('already_exists'));
    
    installedApps.push({ name, url, icon });
    localStorage.setItem('patriotApps', JSON.stringify(installedApps));
    addDesktopIcon(name, url, icon);
    rustoreName.value = rustoreUrl.value = '';
    playUvedomlenie();
    renderRustore();
});

rustoreAddBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    rustoreAddBtn.click();
}, { passive: false });

// ========== ПРОВОДНИК ==========
class PatriotFileSystem {
    constructor() {
        this.root = this.loadFS();
        this.currentPath = 'root';
    }
    
    loadFS() {
        const saved = localStorage.getItem('patriotFS');
        if (saved) return JSON.parse(saved);
        return {
            name: 'root', 
            type: 'folder', 
            children: {
                'Документы': { 
                    name: 'Документы', 
                    type: 'folder', 
                    children: {
                        'Важный документ.txt': { 
                            name: 'Важный документ.txt', 
                            type: 'file', 
                            content: 'Слава Российской Федерации! 🇷🇺' 
                        }
                    } 
                },
                'Изображения': { 
                    name: 'Изображения', 
                    type: 'folder', 
                    children: {
                        'Флаг РФ.png': { 
                            name: 'Флаг РФ.png', 
                            type: 'file', 
                            content: 'wallpapers/flag.png' 
                        },
                        'Герб РФ.png': { 
                            name: 'Герб РФ.png', 
                            type: 'file', 
                            content: 'wallpapers/gerb.png' 
                        }
                    } 
                },
                'Музыка': { 
                    name: 'Музыка', 
                    type: 'folder', 
                    children: {
                        'Гимн РФ.mp3': { 
                            name: 'Гимн РФ.mp3', 
                            type: 'file', 
                            content: 'sounds/gimn.mp3' 
                        },
                        'Я Русский — Шаман.mp3': { 
                            name: 'Я Русский — Шаман.mp3', 
                            type: 'file', 
                            content: 'sounds/yarusskiy.mp3' 
                        }
                    } 
                }
            }
        };
    }
    
    saveFS() { 
        localStorage.setItem('patriotFS', JSON.stringify(this.root)); 
    }
    
    getFolder(path) {
        if (path === 'root') return this.root;
        if (path === 'Документы') return this.root.children['Документы'];
        if (path === 'Изображения') return this.root.children['Изображения'];
        if (path === 'Музыка') return this.root.children['Музыка'];
        return null;
    }
    
    createItem(path, name, type) {
        if (!/^[а-яА-ЯёЁ0-9\s\.\-]+$/.test(name)) {
            alert(__('only_russian_letters'));
            return false;
        }
        const folder = this.getFolder(path);
        if (!folder || folder.type !== 'folder' || folder.children[name]) return false;
        folder.children[name] = { 
            name, 
            type, 
            children: type === 'folder' ? {} : undefined, 
            content: '' 
        };
        this.saveFS();
        return true;
    }
    
    deleteItem(path, name) {
        const folder = this.getFolder(path);
        if (!folder || !folder.children[name]) return false;
        delete folder.children[name];
        this.saveFS();
        return true;
    }
}

const patriotFS = new PatriotFileSystem();
const filesGrid = document.getElementById('files-grid');
const filesSidebarItems = document.querySelectorAll('.files-sidebar-item');
const newFolderBtn = document.getElementById('files-new-folder');
const newFileBtn = document.getElementById('files-new-file');
const refreshBtn = document.getElementById('files-refresh');

function renderFiles(path) {
    const folder = patriotFS.getFolder(path);
    if (!folder) return;
    patriotFS.currentPath = path;
    
    let html = '';
    if (path !== 'root') {
        html += `<div class="files-item folder" data-folder="up"><div class="files-item-icon">📂</div><div class="files-item-name">...</div></div>`;
    }
    
    Object.values(folder.children || {}).forEach(item => {
        const icon = item.type === 'folder' ? '📁' : '📄';
        html += `<div class="files-item ${item.type}" data-path="${path}" data-name="${item.name}" data-type="${item.type}">
            <div class="files-item-icon">${icon}</div>
            <div class="files-item-name">${item.name}</div>
        </div>`;
    });
    
    filesGrid.innerHTML = html;

    document.querySelectorAll('.files-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (item.dataset.folder === 'up') {
                navigateUp();
            } else {
                openFileItem(item.dataset.path, item.dataset.name);
            }
        });

        item.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (item.dataset.folder === 'up') {
                navigateUp();
            } else {
                openFileItem(item.dataset.path, item.dataset.name);
            }
        }, { passive: false });
    });
}

window.openFileItem = function(path, name) {
    const folder = patriotFS.getFolder(path);
    const item = folder.children[name];
    if (item.type === 'folder') {
        renderFiles(path === 'root' ? name : path + '/' + name);
    } else {
        if (name.endsWith('.mp3')) {
            new Audio(item.content).play();
            alert(`🎵 ${name}`);
        } else {
            alert(`📄 ${name}\n\n${item.content || ''}`);
        }
    }
};

window.navigateUp = function() {
    const current = patriotFS.currentPath;
    if (current === 'root') return;
    renderFiles('root');
};

newFolderBtn.addEventListener('click', () => {
    const name = prompt(__('folder_name'));
    if (name && patriotFS.createItem(patriotFS.currentPath, name, 'folder')) {
        renderFiles(patriotFS.currentPath);
        playUvedomlenie();
    }
});

newFolderBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    newFolderBtn.click();
}, { passive: false });

newFileBtn.addEventListener('click', () => {
    const name = prompt(__('file_name'));
    if (name && patriotFS.createItem(patriotFS.currentPath, name, 'file')) {
        renderFiles(patriotFS.currentPath);
        playUvedomlenie();
    }
});

newFileBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    newFileBtn.click();
}, { passive: false });

refreshBtn.addEventListener('click', () => {
    renderFiles(patriotFS.currentPath);
    playUvedomlenie();
});

refreshBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    refreshBtn.click();
}, { passive: false });

filesSidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        filesSidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        renderFiles(item.dataset.path);
    });

    item.addEventListener('touchstart', (e) => {
        e.preventDefault();
        filesSidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        renderFiles(item.dataset.path);
    }, { passive: false });
});

filesGrid.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const item = e.target.closest('.files-item');
    if (!item || item.dataset.folder === 'up') return;
    const name = item.dataset.name;
    if (confirm(`${__('delete_confirm')} "${name}"?`)) {
        if (patriotFS.deleteItem(patriotFS.currentPath, name)) {
            renderFiles(patriotFS.currentPath);
            playUvedomlenie();
        }
    }
});

// ========== НАСТРОЙКИ: боковое меню и поиск ==========
const settingsSidebarItems = document.querySelectorAll('.settings-sidebar-item');
const settingsTabs = document.querySelectorAll('.settings-tab');
const settingsSearch = document.getElementById('settings-search');
const settingsLangSelect = document.getElementById('settings-language');
const settingsTzSelect = document.getElementById('settings-timezone');

// Переключение вкладок
settingsSidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        settingsSidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const tabId = item.dataset.tab;
        settingsTabs.forEach(tab => {
            tab.classList.add('hidden');
            if (tab.id === 'tab-' + tabId) {
                tab.classList.remove('hidden');
            }
        });
    });
});

// Поиск по настройкам
settingsSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const activeTab = document.querySelector('.settings-tab:not(.hidden)');
    if (!activeTab) return;
    const cards = activeTab.querySelectorAll('.settings-card');
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Заполнение списков языков и часовых поясов
function populateSettingsLangTimezone() {
    // Языки
    const languages = [
        { value: 'ru', text: 'Русский' },
        { value: 'be', text: 'Белорусский' },
        { value: 'ba', text: 'Башкирский' },
        { value: 'sah', text: 'Якутский' },
        { value: 'tt', text: 'Татарский' },
        { value: 'kpy', text: 'Корякский' }
    ];
    
    let langHtml = '';
    languages.forEach(lang => {
        langHtml += `<option value="${lang.value}">${lang.text}</option>`;
    });
    settingsLangSelect.innerHTML = langHtml;

    // Часовые пояса
    const timezones = [
        { value: 'Europe/Kaliningrad', text: 'Калининград (MSK-1)' },
        { value: 'Europe/Moscow', text: 'Москва (MSK)' },
        { value: 'Europe/Samara', text: 'Самара (MSK+1)' },
        { value: 'Asia/Yekaterinburg', text: 'Екатеринбург (MSK+2)' },
        { value: 'Asia/Omsk', text: 'Омск (MSK+3)' },
        { value: 'Asia/Krasnoyarsk', text: 'Красноярск (MSK+4)' },
        { value: 'Asia/Irkutsk', text: 'Иркутск (MSK+5)' },
        { value: 'Asia/Yakutsk', text: 'Якутск (MSK+6)' },
        { value: 'Asia/Vladivostok', text: 'Владивосток (MSK+7)' },
        { value: 'Asia/Magadan', text: 'Магадан (MSK+8)' },
        { value: 'Asia/Kamchatka', text: 'Камчатка (MSK+9)' }
    ];
    
    let tzHtml = '';
    timezones.forEach(tz => {
        tzHtml += `<option value="${tz.value}">${tz.text}</option>`;
    });
    settingsTzSelect.innerHTML = tzHtml;

    const saved = JSON.parse(localStorage.getItem('patriotSetup') || '{}');
    if (saved.language) settingsLangSelect.value = saved.language;
    if (saved.timezone) settingsTzSelect.value = saved.timezone;
}

document.getElementById('save-langtime').addEventListener('click', () => {
    const language = settingsLangSelect.value;
    const timezone = settingsTzSelect.value;
    localStorage.setItem('patriotSetup', JSON.stringify({ language, timezone }));
    alert(__('settings_saved'));
});

// ========== НАСТРОЙКИ: остальные кнопки ==========
document.getElementById('play-gimn').addEventListener('click', playGimn);
document.getElementById('play-gimn').addEventListener('touchstart', (e) => {
    e.preventDefault();
    playGimn();
}, { passive: false });

document.getElementById('check-updates').addEventListener('click', () => {
    alert(__('no_updates'));
});

document.getElementById('check-updates').addEventListener('touchstart', (e) => {
    e.preventDefault();
    alert(__('no_updates'));
}, { passive: false });

document.getElementById('clear-data').addEventListener('click', () => {
    if (confirm(__('clear_confirm'))) {
        localStorage.clear();
        alert(__('data_cleared'));
        location.reload();
    }
});

document.getElementById('clear-data').addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (confirm(__('clear_confirm'))) {
        localStorage.clear();
        alert(__('data_cleared'));
        location.reload();
    }
}, { passive: false });

// ========== ПЛЕЕР РУМУЗЫКА ==========
let currentPlayerAudio = null;
let currentPlayBtn = null;

function setupMusicPlayer() {
    document.querySelectorAll('.music-play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const src = btn.dataset.src;
            
            if (currentPlayerAudio && currentPlayerAudio.src.includes(src)) {
                if (!currentPlayerAudio.paused) {
                    currentPlayerAudio.pause();
                    btn.textContent = '▶';
                } else {
                    currentPlayerAudio.play();
                    btn.textContent = '⏸';
                }
                return;
            }
            
            if (currentPlayerAudio) {
                currentPlayerAudio.pause();
                if (currentPlayBtn) {
                    currentPlayBtn.textContent = '▶';
                }
            }
            
            try {
                currentPlayerAudio = new Audio(src);
                currentPlayerAudio.volume = 0.5;
                currentPlayerAudio.play().catch(() => {});
                
                btn.textContent = '⏸';
                if (currentPlayBtn) {
                    currentPlayBtn.textContent = '▶';
                }
                currentPlayBtn = btn;
                
                currentPlayerAudio.addEventListener('ended', () => {
                    btn.textContent = '▶';
                    currentPlayBtn = null;
                    currentPlayerAudio = null;
                });
            } catch (e) {}
        });
        
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            btn.click();
        }, { passive: false });
    });
}

// ========== ПЛЕЕР РУВИДЕО ==========
const videoContainer = document.getElementById('video-player-container');
const videoPlayer = document.getElementById('ruvideo-player');
const videoCloseBtn = document.getElementById('video-player-close');

function setupVideoPlayer() {
    document.querySelectorAll('.video-play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const src = btn.dataset.src;
            const poster = btn.dataset.poster;
            
            videoContainer.style.display = 'block';
            videoPlayer.poster = poster;
            videoPlayer.querySelector('source').src = src;
            videoPlayer.load();
            videoPlayer.play().catch(() => {});
        });
        
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            btn.click();
        }, { passive: false });
    });

    videoCloseBtn?.addEventListener('click', () => {
        videoPlayer.pause();
        videoContainer.style.display = 'none';
        videoPlayer.querySelector('source').src = '';
        videoPlayer.load();
    });
}

// ========== ПЕРЕКЛЮЧЕНИЕ ПЛЕЙЛИСТОВ ==========
function setupPlaylists() {
    document.querySelectorAll('.playlist-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.playlist-tab').forEach(t => {
                t.style.background = 'rgba(0,0,0,0.1)';
            });
            tab.style.background = 'var(--blue)';
            
            const playlist = tab.dataset.playlist;
            document.querySelectorAll('.playlist').forEach(p => {
                p.classList.add('hidden');
            });
            document.getElementById(`playlist-${playlist}`).classList.remove('hidden');
        });
        
        tab.addEventListener('touchstart', (e) => {
            e.preventDefault();
            tab.click();
        }, { passive: false });
    });
}

// ========== ПРИМЕНЕНИЕ ЯЗЫКА ==========
document.getElementById('apply-language')?.addEventListener('click', () => {
    const selected = document.querySelector('input[name="system-language"]:checked');
    if (selected) {
        currentLang = selected.value;
        updateLanguage();
        alert(currentLang === 'ru' ? 'Язык изменен на русский' : 'Мова зменена на беларускую');
        playUvedomlenie();
    }
});

// ========== ЗАПУСК ==========
window.addEventListener('load', () => {
    renderFiles('root');
    renderRustore();
    setupMusicPlayer();
    setupVideoPlayer();
    setupPlaylists();
    loadDesktopIcons();
    renderCalendar(new Date());
    renderStartMenu();
    populateSettingsLangTimezone();
    setTimeout(playVhod, 500);
});
