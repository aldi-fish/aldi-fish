function updateDateTime() {
var now = new Date();
var days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
var months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
var dayName = days[now.getDay()];
var day = now.getDate();
var monthName = months[now.getMonth()];
var year = now.getFullYear();
var syriaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Damascus' }));
var hours = syriaTime.getHours();
var minutes = syriaTime.getMinutes();
var period = hours >= 12 ? 'مساءً' : 'صباحاً';
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
var dateStr = '📅 ' + dayName + '، ' + day + ' ' + monthName + ' ' + year;
var timeStr = '🕐 ' + hours + ':' + minutes + ' ' + period;
var dateElement = document.getElementById('current-date');
var timeElement = document.getElementById('current-time');
if (dateElement) dateElement.textContent = dateStr;
if (timeElement) timeElement.textContent = timeStr;
}

updateDateTime();
setInterval(updateDateTime, 60000);

document.addEventListener('DOMContentLoaded', function() {
var count = localStorage.getItem('visitorCount');
if (count === null) {
count = 76;
} else {
count = parseInt(count) + 1;
}
localStorage.setItem('visitorCount', count);
var counterElement = document.getElementById('visitor-count');
if (counterElement) {
counterElement.textContent = count.toLocaleString('ar-EG');
}
});
function togglePrice(card) {
var isActive = card.classList.contains('active');
var allCards = document.querySelectorAll('.fish-card');
allCards.forEach(function(c) {
c.classList.remove('active');
});
if (!isActive) {
card.classList.add('active');
}
}
