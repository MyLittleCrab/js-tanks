# 🎮 Tank Game / Танковая игра

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 🇬🇧 English

### Description
A simple browser-based tank game built with vanilla JavaScript and ES6 classes. Control your tank, destroy enemies, and survive as long as possible in this classic arcade-style game.

### Features
- 🎯 **Real-time gameplay** with smooth tank movement and bullet physics
- 🤖 **AI-controlled enemies** with random movement patterns
- 🔊 **Background music** and audio feedback
- 📱 **Responsive design** that adapts to different screen sizes
- ⌨️ **Keyboard controls** for intuitive gameplay
- 🎨 **Retro pixel art style** with rotating tank sprites

### Demo
🎮 **[Play the game here](https://justaddacid.github.io/tanks/)**

![Screenshot](screenshot.jpg)

### How to Play
- **Movement**: Use `WASD` keys or arrow keys to move your tank
- **Shooting**: Press `SPACE` to fire bullets
- **Restart**: Press `ENTER` to restart the game after game over
- **Objective**: Destroy as many enemy tanks as possible without getting hit

### Technical Implementation
- **Modern ES6 Classes**: Refactored from legacy function-based objects
- **Modular Architecture**: Separate CSS and JavaScript files
- **JSDoc Documentation**: Comprehensive documentation for all methods
- **Object-Oriented Design**: Clean separation of game entities (Tank, Bullet, GameState)
- **DOM Manipulation**: Dynamic creation and management of game elements

### Project Structure
```
tanks/
├── index.html          # Main HTML file
├── styles.css          # Game styles and layout
├── game.js            # Main game logic with ES6 classes
├── media/             # Game assets
│   ├── background.png # Game background
│   ├── unnamed.png    # Enemy tank sprite
│   ├── unnamed2.png   # Player tank sprite
│   ├── pixel.png      # Bullet sprite
│   └── music.mp3      # Background music
├── README.md          # This file
└── LICENSE.md         # MIT License
```

### Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/tanks.git
   cd tanks
   ```
2. Open `index.html` in a modern web browser
3. Enjoy the game!

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Development
The game is built with:
- **Vanilla JavaScript (ES6+)** - No frameworks or libraries
- **HTML5 Audio API** - For background music
- **CSS3 Transforms** - For tank rotation animations
- **DOM API** - For dynamic element creation

---

## 🇷🇺 Русский

### Описание
Простая браузерная танковая игра, созданная на чистом JavaScript с использованием ES6 классов. Управляйте своим танком, уничтожайте врагов и выживайте как можно дольше в этой классической аркадной игре.

### Особенности
- 🎯 **Геймплей в реальном времени** с плавным движением танков и физикой пуль
- 🤖 **ИИ-управляемые враги** со случайными паттернами движения  
- 🔊 **Фоновая музыка** и звуковые эффекты
- 📱 **Адаптивный дизайн**, подстраивающийся под разные размеры экрана
- ⌨️ **Управление с клавиатуры** для интуитивного геймплея
- 🎨 **Ретро пиксельная графика** с поворачивающимися спрайтами танков

### Демо
🎮 **[Играть здесь](https://justaddacid.github.io/tanks/)**

![Скриншот](screenshot.jpg)

### Как играть
- **Движение**: Используйте клавиши `WASD` или стрелки для движения танка
- **Стрельба**: Нажмите `ПРОБЕЛ` для выстрела
- **Перезапуск**: Нажмите `ENTER` для перезапуска игры после поражения
- **Цель**: Уничтожьте как можно больше вражеских танков, не получив попадание

### Техническая реализация
- **Современные ES6 классы**: Рефакторинг с устаревших функциональных объектов
- **Модульная архитектура**: Отдельные CSS и JavaScript файлы
- **JSDoc документация**: Полная документация для всех методов
- **Объектно-ориентированный дизайн**: Четкое разделение игровых сущностей (Tank, Bullet, GameState)
- **DOM-манипуляции**: Динамическое создание и управление игровыми элементами

### Структура проекта
```
tanks/
├── index.html          # Основной HTML файл
├── styles.css          # Стили и макет игры
├── game.js            # Основная логика игры с ES6 классами
├── media/             # Игровые ресурсы
│   ├── background.png # Фон игры
│   ├── unnamed.png    # Спрайт вражеского танка
│   ├── unnamed2.png   # Спрайт танка игрока
│   ├── pixel.png      # Спрайт пули
│   └── music.mp3      # Фоновая музыка
├── README.md          # Этот файл
└── LICENSE.md         # Лицензия MIT
```

### Установка и настройка
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/YourUsername/tanks.git
   cd tanks
   ```
2. Откройте `index.html` в современном веб-браузере
3. Наслаждайтесь игрой!

### Совместимость с браузерами
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Разработка
Игра создана с использованием:
- **Vanilla JavaScript (ES6+)** - Без фреймворков и библиотек
- **HTML5 Audio API** - Для фоновой музыки
- **CSS3 Transforms** - Для анимации поворота танков
- **DOM API** - Для динамического создания элементов

---

## 📋 Todo / План развития

### ✅ Completed / Выполнено
- [x] Рефакторинг кода с использованием ES6-классов / Code refactoring using ES6 classes
- [x] Вынос CSS и JS в отдельные файлы / Move CSS and JS to separate files
- [x] Добавление JSDoc документации / Adding JSDoc documentation
- [x] Улучшение README с двуязычным описанием / Improved bilingual README

### 🚧 In Progress / В разработке
- [ ] Прикрутить babel и webpack / Add babel and webpack
- [ ] Сделать сервер на node.js -- мультиплеер на websockets / Create node.js server with websockets multiplayer
- [ ] Рендерить игру не dom-элементами, а в canvas / Render game using canvas instead of DOM elements
- [ ] Добавить звуковые эффекты / Add sound effects
- [ ] Улучшить ИИ врагов / Improve enemy AI
- [ ] Добавить различные типы танков / Add different tank types
- [ ] Система уровней и прогрессии / Level system and progression

## 🤝 Contributing / Участие в разработке
Contributions are welcome! Please feel free to submit a Pull Request.
Приветствуется участие в разработке! Не стесняйтесь отправлять Pull Request.

## 📄 License / Лицензия
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
Этот проект лицензирован под MIT License - подробности в файле [LICENSE.md](LICENSE.md).

## 👨‍💻 Author / Автор
Created with ❤️ during a boring lecture / Создано с ❤️ на скучной лекции

---

⭐ **Star this repository if you enjoyed the game! / Поставьте звезду, если вам понравилась игра!**
