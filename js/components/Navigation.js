/**
 * Navigation Component
 * 管理底部分頁導覽列的狀態切換與視圖顯示
 */
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const viewSections = document.querySelectorAll('.view-section');

    function setActiveView(targetId) {
        viewSections.forEach(section => {
            section.classList.toggle('active', section.id === targetId);
        });
        document.getElementById('main-scroll').scrollTo({ top: 0, behavior: 'smooth' });
    }

    function setActiveNavBtn(activeBtn) {
        navBtns.forEach(btn => {
            btn.classList.remove('text-[#4A6E8C]');
            btn.classList.add('text-gray-400');
        });
        activeBtn.classList.remove('text-gray-400');
        activeBtn.classList.add('text-[#4A6E8C]');
    }

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setActiveNavBtn(btn);
            setActiveView(btn.getAttribute('data-target'));
        });
    });
}
