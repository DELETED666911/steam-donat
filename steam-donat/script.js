// Переключение темы и обновление иконки
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Устанавливаем иконку в соответствии с текущей темой
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Функция для обновления иконки темы
function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeToggle.textContent = '🌙'; // Луна для светлой темы
        themeToggle.setAttribute('aria-label', 'Переключить на тёмную тему');
    } else {
        themeToggle.textContent = '☀️'; // Солнце для тёмной темы
        themeToggle.setAttribute('aria-label', 'Переключить на светлую тему');
    }
}

// Расчёт комиссии (5 %)
const amountInput = document.getElementById('amount');
const feeDisplay = document.getElementById('fee');
const percentDisplay = document.getElementById('percent');

// Устанавливаем процент комиссии
percentDisplay.textContent = '5';

amountInput.addEventListener('input', () => {
    const amount = parseFloat(amountInput.value) || 0;
    const fee = amount * 0.05; // 5 % комиссия
    feeDisplay.textContent = fee.toFixed(2);
});

// Обработка формы
const form = document.getElementById('topup-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const login = document.getElementById('steam-login').value;
    
    alert(`Заявка принята!\nСумма: ${amount} руб\nЛогин: ${login}\nКомиссия: ${(amount * 0.05).toFixed(2)} руб`);
    
    // Здесь можно добавить отправку данных на сервер
});
