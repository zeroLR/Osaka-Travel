/**
 * ItineraryView Component
 * 管理「行程」分頁的日期選擇器與當日內容動態渲染
 */
function initItineraryView(data) {
    const dayPickerContainer = document.getElementById('day-picker');
    const contentContainer = document.getElementById('itinerary-content');
    let currentDayIndex = 0;

    // --- 日期選擇器 ---
    function renderDayPicker() {
        dayPickerContainer.innerHTML = '';
        data.forEach((day, index) => {
            const isActive = index === currentDayIndex;
            const activeClasses = isActive
                ? 'bg-[#EAF2F8] text-[#4A6E8C] border-[#BCE0FD] shadow-sm'
                : 'bg-white text-gray-400 border-transparent shadow-sm';
            const dayNumSize = isActive ? 'text-2xl font-black' : 'text-lg font-bold';

            const btn = document.createElement('button');
            btn.className = `flex flex-col items-center justify-center min-w-[3.5rem] py-1.5 px-2 rounded-xl border transition-all duration-200 ${activeClasses}`;
            btn.onclick = () => {
                currentDayIndex = index;
                renderDayPicker();
                renderItineraryContent();
            };
            btn.innerHTML = `
                <span class="${dayNumSize} leading-none mb-1 transition-all">${day.day}</span>
                <span class="text-[9px] font-medium tracking-tighter">${day.date}</span>
            `;
            dayPickerContainer.appendChild(btn);
        });

        const activeBtn = dayPickerContainer.children[currentDayIndex];
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }

    // --- 當日內容渲染 ---
    function renderItineraryContent() {
        const day = data[currentDayIndex];
        let html = buildDayHeader(day);
        day.sections.forEach(sec => {
            html += buildSection(sec);
        });
        contentContainer.innerHTML = html;
    }

    function buildDayHeader(day) {
        const tagsHtml = day.tags
            .map(tag => `<span class="bg-[#EAF2F8] text-[#4A6E8C] text-[10px] px-2 py-0.5 rounded-full font-bold">${tag}</span>`)
            .join(' ');

        return `
            <div class="flex items-center gap-4 mb-6 pt-2">
                <div class="w-14 h-14 rounded-full bg-[#4A6E8C] text-white flex flex-col justify-center items-center shadow-md shrink-0">
                    <span class="text-2xl font-black leading-none">${day.day}</span>
                    <span class="text-[9px] font-bold mt-0.5 tracking-widest">DAY</span>
                </div>
                <div>
                    <p class="text-xs text-gray-500 mb-0.5">${day.date} (${day.weekday})</p>
                    <h2 class="text-xl font-bold text-gray-800 tracking-wide mb-1.5">${day.title}</h2>
                    <div class="flex gap-1.5">${tagsHtml}</div>
                </div>
            </div>
        `;
    }

    function buildSection(sec) {
        let html = `
            <div class="mb-5">
                <h3 class="flex items-center gap-2 font-bold text-gray-800 mb-3 border-l-4 border-[#4A6E8C] pl-2 leading-none">
                    <i class="fa-solid ${sec.icon} text-[#4A6E8C] w-5 text-center"></i> ${sec.title}
                </h3>
        `;
        if (sec.table)      html += buildTransportTable(sec.table);
        if (sec.collapsible) html += buildCollapsible(sec.collapsible);
        if (sec.list)       html += buildList(sec.list);
        if (sec.card)       html += buildCard(sec.card);
        if (sec.cards)      html += buildCards(sec.cards);
        if (sec.hint)       html += buildHint(sec.hint);
        if (sec.buttons)    html += buildButtons(sec.buttons);
        html += `</div>`;
        return html;
    }

    function buildTransportTable(rows) {
        const rowsHtml = rows.map(row => `
            <tr class="border-b border-gray-100 last:border-0">
                <td class="py-2 text-gray-700 font-medium">${row.time}</td>
                <td class="py-2 text-gray-800">${row.route}</td>
                <td class="py-2 text-gray-600">${row.cost}</td>
                <td class="py-2 text-gray-500 text-xs">${row.note}</td>
            </tr>
        `).join('');

        return `
            <div class="bg-[#F0F5FA] rounded-xl p-3 mb-3 border border-blue-50">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="text-left text-gray-500 text-xs border-b border-gray-200">
                            <th class="pb-1 w-1/5">時間</th>
                            <th class="pb-1 w-2/5">區間</th>
                            <th class="pb-1 w-1/5">費用</th>
                            <th class="pb-1 w-1/5">備註</th>
                        </tr>
                    </thead>
                    <tbody>${rowsHtml}</tbody>
                </table>
            </div>
        `;
    }

    function buildCollapsible(collapsible) {
        return `
            <details class="group bg-blue-50 rounded-xl border border-blue-100 shadow-sm mb-3 overflow-hidden">
                <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-3 text-[#4A6E8C] hover:bg-blue-100 transition outline-none">
                    <span class="flex items-center gap-2 text-sm"><i class="fa-solid ${collapsible.icon || 'fa-map-location-dot'}"></i> ${collapsible.title}</span>
                    <span class="transition group-open:rotate-180">
                        <i class="fa-solid fa-chevron-down text-[#4A6E8C]"></i>
                    </span>
                </summary>
                <div class="p-4 pt-1 text-sm text-gray-700 border-t border-blue-100 mt-2 space-y-1 bg-white">
                    ${collapsible.content}
                </div>
            </details>
        `;
    }

    function buildList(items) {
        const itemsHtml = items.map(item => {
            const nameHtml = item.link
                ? `<a href="${item.link}" target="_blank" class="flex items-center gap-1.5 hover:underline">
                       ${item.name}
                       <i class="fa-solid fa-map-location-dot text-[10px] opacity-60"></i>
                   </a>`
                : item.name;
            return `
                <div class="flex flex-col">
                    <span class="text-sm font-bold text-[#4A6E8C] mb-0.5">${nameHtml}</span>
                    ${item.desc ? `<span class="text-xs text-gray-500 leading-relaxed">${item.desc}</span>` : ''}
                </div>
            `;
        }).join('');

        return `<div class="bg-white rounded-xl p-3 mb-3 shadow-sm border border-gray-100 space-y-3">${itemsHtml}</div>`;
    }

    function buildCard(card) {
        const tagsHtml = card.tags
            .map(t => `<span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">${t}</span>`)
            .join('');
        const mapBtnHtml = card.link
            ? `<a href="${card.link}" target="_blank" class="bg-[#4A6E8C] text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 active:scale-95 transition-transform mt-3 w-fit">
                   <i class="fa-solid fa-map-location-dot"></i> 在地圖上查看
               </a>`
            : '';

        return `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-3">
                <div class="h-32 w-full bg-gray-200 bg-cover bg-center" style="background-image: url('${card.image}')"></div>
                <div class="p-4">
                    <h4 class="font-bold text-gray-800 text-lg mb-2">${card.title}</h4>
                    <div class="flex gap-2 flex-wrap mb-2">${tagsHtml}</div>
                    <p class="text-xs text-gray-500 leading-relaxed mt-3 pt-3 border-t border-gray-100">${card.desc}</p>
                    ${mapBtnHtml}
                </div>
            </div>
        `;
    }

    function buildCards(cards) {
        const cardsHtml = cards.map(card => {
            const titleHtml = card.link
                ? `<a href="${card.link}" target="_blank" class="font-bold text-gray-800 text-xs flex items-center gap-1 hover:text-[#4A6E8C] transition-colors">
                       ${card.title} <i class="fa-solid fa-map-location-dot text-[9px] text-[#4A6E8C] opacity-70 shrink-0"></i>
                   </a>`
                : `<span class="font-bold text-gray-800 text-xs block">${card.title}</span>`;
            return `
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div class="h-28 w-full bg-gray-200 bg-cover bg-center" style="background-image: url('${card.image}')"></div>
                    <div class="p-2.5">
                        ${titleHtml}
                        ${card.desc ? `<p class="text-[11px] text-gray-500 leading-relaxed mt-0.5">${card.desc}</p>` : ''}
                    </div>
                </div>
            `;
        }).join('');
        return `<div class="grid grid-cols-2 gap-2 mb-3">${cardsHtml}</div>`;
    }

    function buildHint(hint) {
        return `
            <div class="bg-[#FDF8E4] rounded-lg p-3 text-xs text-gray-700 leading-relaxed mb-3 flex gap-2 items-start border border-yellow-100">
                <span class="text-sm">💡</span>
                <p>${hint}</p>
            </div>
        `;
    }

    function buildButtons(buttons) {
        const btnsHtml = buttons.map(btn => {
            const style = btn.isAction
                ? 'bg-white text-gray-700 border border-gray-300'
                : 'bg-[#4A6E8C] text-white shadow-sm';
            const icon = btn.isAction ? 'fa-bus' : 'fa-location-dot';
            return `
                <a href="${btn.link}" target="_blank" class="${style} px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 active:scale-95 transition-transform block">
                    <i class="fa-solid ${icon}"></i> ${btn.text}
                </a>
            `;
        }).join('');

        return `<div class="flex flex-wrap gap-2 mt-2">${btnsHtml}</div>`;
    }

    // 初始化
    renderDayPicker();
    renderItineraryContent();
}
