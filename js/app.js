/**
 * app.js — 主入口
 * 等頁面 DOM 就緒後，依序初始化各 Component
 */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initItineraryView(itineraryData);
    initPrepView(prepData);
});
