// AirportForecast.js
// Fetches Taoyuan Airport daily passenger forecast XLS and renders it inline.
// File pattern: https://www.taoyuan-airport.com/uploads/fos/YYYY_MM_DD_update.xls
// The departure date is 2026-03-28, so we fetch 2026_03_28_update.xls.

(function () {
    const DEPARTURE_DATE = '2026-03-28';
    const BASE_URL = 'https://www.taoyuan-airport.com/uploads/fos/';

    function dateToFilename(dateStr) {
        // "2026-03-28" → "2026_03_28_update.xls"
        return dateStr.replace(/-/g, '_') + '_update.xls';
    }

    function renderError(panel, message, fileUrl) {
        panel.innerHTML = `
            <div class="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-600">
                <p class="font-medium mb-1"><i class="fa-solid fa-triangle-exclamation mr-1"></i>${message}</p>
                <a href="${fileUrl}" target="_blank"
                   class="inline-flex items-center gap-1 text-[#4A6E8C] underline mt-1">
                    <i class="fa-solid fa-download"></i> 手動下載 XLS 檔案
                </a>
            </div>`;
    }

    function renderTable(panel, rows) {
        if (!rows || rows.length === 0) {
            panel.innerHTML = `<p class="text-xs text-gray-400 text-center py-2">無資料</p>`;
            return;
        }

        const headers = rows[0];
        const dataRows = rows.slice(1).filter(r => r.some(c => c !== '' && c !== null && c !== undefined));

        const headerHtml = headers.map(h =>
            `<th class="px-2 py-1.5 text-left text-[10px] font-semibold text-gray-500 whitespace-nowrap">${h ?? ''}</th>`
        ).join('');

        const bodyHtml = dataRows.map((row, i) => {
            const bg = i % 2 === 0 ? 'bg-white' : 'bg-gray-50';
            const cells = headers.map((_, ci) =>
                `<td class="px-2 py-1.5 text-[10px] text-gray-700 whitespace-nowrap">${row[ci] ?? ''}</td>`
            ).join('');
            return `<tr class="${bg}">${cells}</tr>`;
        }).join('');

        panel.innerHTML = `
            <div class="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                <table class="min-w-full text-left border-collapse">
                    <thead class="bg-[#EEF3F8]">
                        <tr>${headerHtml}</tr>
                    </thead>
                    <tbody>${bodyHtml}</tbody>
                </table>
            </div>
            <p class="text-[10px] text-gray-400 mt-1 text-right">來源：桃園機場官網 · ${dateToFilename(DEPARTURE_DATE)}</p>`;
    }

    async function loadForecast(panel) {
        const filename = dateToFilename(DEPARTURE_DATE);
        const fileUrl = BASE_URL + filename;

        panel.innerHTML = `
            <div class="flex items-center justify-center gap-2 text-xs text-gray-400 py-3">
                <i class="fa-solid fa-spinner fa-spin"></i> 載入中…
            </div>`;

        try {
            const response = await fetch(fileUrl);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });

            // Use the first sheet
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert to array of arrays (header row + data rows)
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });

            renderTable(panel, rows);
        } catch (err) {
            console.warn('[AirportForecast] fetch failed:', err);
            renderError(
                panel,
                'CORS 限制或網路異常，無法直接讀取。',
                BASE_URL + filename
            );
        }
    }

    // ── Public interface ────────────────────────────────────────────────────
    let loaded = false;
    let open = false;

    window.toggleForecast = function () {
        const panel = document.getElementById('forecast-panel');
        const chevron = document.getElementById('forecast-chevron');
        if (!panel) return;

        open = !open;

        if (open) {
            panel.classList.remove('hidden');
            chevron.style.transform = 'rotate(180deg)';
            if (!loaded) {
                loaded = true;
                loadForecast(panel);
            }
        } else {
            panel.classList.add('hidden');
            chevron.style.transform = '';
        }
    };
})();
