/**
 * PrepView Component
 * 管理「旅行前準備」分頁的清單渲染與進度追蹤
 * 勾選狀態透過 localStorage 持久化
 */
function initPrepView(data) {
    renderPrepList('prep-list-tickets', data.tickets);
    renderPrepList('prep-list-gear', data.gear);
    setTimeout(updateProgress, 100);
}

function renderPrepList(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
        const saved = localStorage.getItem('prep-' + item.id);
        const isChecked = saved !== null ? saved === 'true' : item.checked;
        container.innerHTML += `
            <label class="custom-checkbox flex items-start gap-3 cursor-pointer group py-1">
                <input type="checkbox" class="hidden" id="${item.id}" ${isChecked ? 'checked' : ''} onchange="savePrepItem('${item.id}', this.checked)">
                <div class="w-5 h-5 mt-0.5 rounded border-2 border-gray-300 flex items-center justify-center bg-white transition-colors shrink-0">
                    <i class="fa-solid fa-check text-white text-[10px] hidden"></i>
                </div>
                <span class="text-sm text-gray-600 group-hover:text-gray-800 transition-colors leading-snug pt-0.5">${item.text}</span>
            </label>
        `;
    });
}

function savePrepItem(id, checked) {
    localStorage.setItem('prep-' + id, checked);
    updateProgress();
}

function updateProgress() {
    const checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;

    document.getElementById('prep-progress-text').innerText = `${checked}/${total}`;
    document.getElementById('prep-progress-bar').style.width = `${(checked / total) * 100}%`;
}
