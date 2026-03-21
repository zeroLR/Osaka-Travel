const itineraryData = [
    {
        day: 1, date: "03/28", weekday: "六", title: "出發 → 抵達大阪", tags: ["機場", "大阪市"],
        sections: [
            {
                type: "transport", title: "交通 (機場巴士直達)", icon: "fa-train-tram",
                table: [
                    { time: "17:00", route: "關西機場 (KIX) T2", cost: "-", note: "Peach 抵達" },
                    { time: "~18:30", route: "T2 1號月台 → 新阪急飯店", cost: "依售票機", note: "機場利木津巴士" },
                    { time: "~19:30", route: "新阪急飯店 → 關西旅店", cost: "-", note: "M14出口 步行" }
                ],
                collapsible: {
                    title: "🚌 詳細搭車與步行路線 (實體票留念)",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">🎫 1. 購票 (實體票紀念)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">在 T2 到達大廳外「自動售票機」購票。機器會吐出厚質紙本票券，上車時司機會撕走存根聯，剩下的部分記得收好做紀念！(建議準備千元鈔票)</p>

                        <h4 class="font-bold text-[#4A6E8C] mb-1">🚎 2. 搭車與下車</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">在 T2 巴士乘車處 <b>1號月台</b> 搭乘機場利木津巴士，直達梅田免搬行李轉車。<br>請於「<b>新阪急飯店 (Hotel New Hankyu)</b>」站下車。</p>

                        <h4 class="font-bold text-[#4A6E8C] mb-1">🚶 3. 步行至飯店 (M14出口)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">下車後往南走，找地下街入口 (Whity Umeda)，沿「谷町線/東梅田」指標走，從 <b>M14 出口</b> 上樓，步行 3-5 分鐘即達關西旅店。<br><span class="text-orange-500">※ 地下街像迷宮，初次也可在地面直接用 Google Maps 導航。</span></p>
                    `
                },
                hint: "17:00 落地後，辦理入境與拿行李抓 1 小時。選擇搭乘巴士是最輕鬆的方式喔！",
                buttons: [
                    { text: "利木津巴士資訊", link: "https://www.kate.co.jp/tcn/" },
                    { text: "KIX T2 → 梅田導航", link: "https://www.google.com/maps/dir/?api=1&origin=Kansai+International+Airport+Terminal+2&destination=Hotel+New+Hankyu+Osaka&travelmode=transit" }
                ]
            },
            {
                type: "dining", title: "餐廳與晚餐", icon: "fa-utensils",
                list: [
                    {
                        name: "曾根崎お初天神通り",
                        desc: "飯店對面的熱鬧美食街，放好行李後就可以來這裡覓食！",
                        link: "https://www.google.com/maps/search/?api=1&query=お初天神通り商店街+大阪"
                    },
                    { name: "飯店周邊超商", desc: "回飯店前記得採買隔日早餐與水。" }
                ]
            },
            {
                type: "todo", title: "待辦", icon: "fa-clipboard-list",
                list: [
                    { name: "幫 Brad 買 2 萬日圓 Switch 點數 (超商)" }
                ]
            }
        ]
    },
    {
        day: 2, date: "03/29", weekday: "日", title: "梅田血拚 × 心齋橋夜遊", tags: ["梅田商圈", "購物", "心齋橋", "道頓堀"],
        sections: [
            {
                type: "dining", title: "早晨", icon: "fa-mug-hot",
                list: [
                    { name: "悠閒飯店早餐", desc: "早上先在飯店享用豐盛早餐，為一整天的逛街行程儲備體力！" }
                ]
            },
            {
                type: "transport", title: "交通 (步行商圈)", icon: "fa-person-walking",
                table: [
                    { time: "10:00", route: "關西旅店 → 阪急百貨", cost: "-", note: "約 10-12 分" }
                ],
                collapsible: {
                    title: "🚶 詳細步行路線 (旅店 → 阪急百貨)",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">📍 1. 旅店走到商店街 (約 3 分)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">從關西旅店大門出來後向右轉（往西走），直行約 150 公尺，看到熱鬧的入口後，<b>右轉</b>進入「曾根崎お初天神通り」商店街。</p>

                        <h4 class="font-bold text-[#4A6E8C] mb-1">⛩️ 2. 穿越商店街下地下道 (約 5 分)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">沿著商店街直走到底（北端），會看到一個巨大的地面路口（對面是露天神社）。在路口尋找標示著「<b>M14 出口</b>」的階梯或電梯，往下進入「Whity 梅田地下街」。</p>

                        <h4 class="font-bold text-[#4A6E8C] mb-1">🏬 3. 地下街銜接百貨 (約 4 分)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">進入地下街後，跟著天花板上的黃色指標往「<b>東梅田 / 阪急百貨店</b>」方向走。前行約 200 公尺，就會直接抵達阪急百貨的 B1 甜點名產入口。</p>

                        <div class="bg-blue-50 p-2.5 rounded-lg text-xs text-gray-700 mt-3 border border-blue-100">
                            <strong class="text-[#4A6E8C]">💡 梅田求生指南：</strong><br>
                            <ul class="list-disc pl-4 mt-1 space-y-1 text-gray-600">
                                <li><b>避開地面馬路</b>：梅田站前紅綠燈多且動線亂，走地下街防雨又快。</li>
                                <li><b>回程認準「M14」</b>：回飯店請認準紫色標誌「谷町線」方向，找 M14 上樓。</li>
                                <li><b>服藥與休息</b>：商店街內有松屋、彌生軒等，方便您隨時進食與服藥。</li>
                            </ul>
                        </div>
                    `
                },
                hint: "今日全天在號稱「大迷宮」的梅田商圈活動，請務必穿著最舒適的運動鞋喔！",
                buttons: [
                    { text: "旅店 → 阪急百貨導航", link: "https://www.google.com/maps/dir/?api=1&origin=Kansai+Hotel+Osaka&destination=Hankyu+Department+Store+Umeda&travelmode=walking" }
                ]
            },
            {
                type: "attraction", title: "梅田購物攻略", icon: "fa-bag-shopping",
                list: [
                    {
                        name: "1️⃣ 阪急百貨",
                        desc: "頂級貴婦百貨。一線精品、化妝品與超強伴手禮集中地。",
                        link: "https://www.google.com/maps/search/?api=1&query=阪急百貨店梅田本店"
                    },
                    {
                        name: "2️⃣ 大丸百貨",
                        desc: "動漫迷天堂！有 Pokémon Center、任天堂官方店。",
                        link: "https://www.google.com/maps/search/?api=1&query=大丸梅田店"
                    },
                    {
                        name: "3️⃣ Grand Front",
                        desc: "南館主打戶外潮牌；北館有關西最大 MUJI 旗艦店。",
                        link: "https://www.google.com/maps/search/?api=1&query=グランフロント大阪"
                    },
                    {
                        name: "4️⃣ LUCUA & LUCUA 1100",
                        desc: "年輕潮流首選，直通大阪站，有 @COSME 旗艦與 Lululemon。",
                        link: "https://www.google.com/maps/search/?api=1&query=LUCUA大阪"
                    },
                    {
                        name: "5️⃣ 友都八喜 (Yodobashi)",
                        desc: "電器與 3C 購物天堂！相機、美容儀一網打盡，免稅超方便。",
                        link: "https://www.google.com/maps/search/?api=1&query=ヨドバシカメラマルチメディア梅田"
                    },
                    {
                        name: "6️⃣ 唐吉訶德 梅田店",
                        desc: "藥妝、零食、伴手禮、生活雜貨一次掃貨，深夜也有開，適合逛街收尾。買滿 ¥5,000 可護照退稅。",
                        link: "https://www.google.com/maps/search/?api=1&query=ドン・キホーテ+梅田+大阪"
                    }
                ],
                hint: "建議依據這份攻略鎖定 2~3 間百貨集中火力，買滿 5000 日圓記得拿實體護照去退稅！"
            },
            {
                type: "dining", title: "梅田美食（午餐 / 下午茶）", icon: "fa-utensils",
                list: [
                    {
                        name: "炸牛排 本村 (LUCUA店)",
                        desc: "【午餐】超人氣炸牛排，外酥內嫩，可在石板上自己控制熟度。",
                        link: "https://www.google.com/maps/search/?api=1&query=本村+炸牛排+LUCUA+大阪"
                    },
                    {
                        name: "HARBS (大丸百貨)",
                        desc: "【下午茶】必吃水果千層蛋糕，逛累了剛好坐下來休息。",
                        link: "https://www.google.com/maps/search/?api=1&query=HARBS大丸梅田店"
                    },
                    {
                        name: "Grenier 千層酥",
                        desc: "【散步甜點】阪急百貨旁的超人氣排隊烤布蕾千層酥。",
                        link: "https://www.google.com/maps/search/?api=1&query=グルニエ+梅田+ミルフィーユ"
                    }
                ]
            },
            {
                type: "transport", title: "18:00 放包 → 心齋橋出發", icon: "fa-train-tram",
                table: [
                    { time: "18:00", route: "梅田各百貨 → 關西旅店", cost: "-", note: "步行約10分，放下採買戰利品" },
                    { time: "18:30", route: "東梅田駅 → 梅田駅（御堂筋線）", cost: "-", note: "站內轉乘，步行2分" },
                    { time: "18:40", route: "梅田駅 → 心斎橋駅", cost: "約¥230", note: "御堂筋線，約7分" }
                ],
                collapsible: {
                    title: "🗺️ 旅店 → 心齋橋詳細路線",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">1️⃣ 旅店 → 東梅田駅（步行 3 分）</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">從旅店出發，沿曾根崎通往西走，進入地下街後找「<b>御堂筋線 梅田駅</b>」指標，步行約 5 分鐘可銜接。</p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">2️⃣ 梅田駅 → 心斎橋駅（御堂筋線，約 7 分）</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">搭地下鐵御堂筋線「<b>なんば方向</b>」，3 站即到「<b>心斎橋駅</b>」。出 6 號出口直接通往心斎橋筋商店街南端。</p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">3️⃣ 心斎橋筋 → 道頓堀（步行 10 分）</h4>
                        <p class="mb-2 text-xs leading-relaxed text-gray-600">沿心斎橋筋商店街一路往南逛，走到底過馬路就是戎橋（グリコサイン）與道頓堀。</p>
                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-xs text-gray-700">
                            <strong class="text-amber-700">💡 回程：</strong>道頓堀なんば駅（御堂筋線）→ 梅田駅，同一條線原路返回，末班約 23:30。
                        </div>
                    `
                },
                hint: "放完包輕裝出發，心齋橋到道頓堀夜間人潮超多，包包建議換小肩包。",
                buttons: [
                    { text: "旅店 → 心齋橋導航", link: "https://www.google.com/maps/dir/?api=1&origin=Kansai+Hotel+Osaka&destination=心斎橋筋商店街+大阪&travelmode=transit" },
                    { text: "道頓堀回旅店導航", link: "https://www.google.com/maps/dir/?api=1&origin=道頓堀+大阪&destination=Kansai+Hotel+Osaka&travelmode=transit" }
                ]
            },
            {
                type: "attraction", title: "心齋橋 & 道頓堀夜遊", icon: "fa-camera",
                list: [
                    {
                        name: "心斎橋筋商店街",
                        desc: "約 600 公尺的室內拱廊商店街，藥妝（松本清）、潮牌、甜點全集中，逛到道頓堀剛好熱身。",
                        link: "https://www.google.com/maps/search/?api=1&query=心斎橋筋商店街+大阪"
                    },
                    {
                        name: "戎橋 × 固力果跑跑人看板",
                        desc: "大阪最標誌性的打卡地點！站在戎橋上以固力果看板為背景拍照，夜晚燈光版最好看。",
                        link: "https://www.google.com/maps/search/?api=1&query=戎橋+グリコサイン+道頓堀+大阪"
                    },
                    {
                        name: "道頓堀遊覽船（とんぼりリバーウォーク）",
                        desc: "可選搭遊覽船從水面仰望道頓堀霓虹，或沿河岸步道散步，夜景超美。",
                        link: "https://www.google.com/maps/search/?api=1&query=とんぼりリバーウォーク+道頓堀"
                    },
                    {
                        name: "美國村 (アメリカ村)",
                        desc: "若想逛潮流二手服裝、個性小店，從心斎橋筋往西走 5 分鐘即達。",
                        link: "https://www.google.com/maps/search/?api=1&query=アメリカ村+大阪"
                    }
                ]
            },
            {
                type: "dining", title: "道頓堀晚餐推薦", icon: "fa-utensils",
                list: [
                    {
                        name: "大阪燒 きじ（梅田備案已移此）/ 鶴橋風月",
                        desc: "【晚餐】鶴橋風月道頓堀店是大阪燒名店，可在鐵板上自己加料，份量大適合逛街後補充體力。",
                        link: "https://www.google.com/maps/search/?api=1&query=鶴橋風月+道頓堀+大阪"
                    },
                    {
                        name: "金龍拉麵 道頓堀本店",
                        desc: "24 小時營業的超人氣道頓堀地標拉麵，門口有巨龍裝飾超好認，深夜也能吃到熱騰騰的拉麵。",
                        link: "https://www.google.com/maps/search/?api=1&query=金龍ラーメン+道頓堀本店+大阪"
                    },
                    {
                        name: "くくる 章魚燒（道頓堀本店）",
                        desc: "道頓堀最知名的章魚燒品牌之一，外脆內滑，現點現做，散步邊吃超適合。",
                        link: "https://www.google.com/maps/search/?api=1&query=くくる+道頓堀+たこ焼き+大阪"
                    }
                ]
            }
        ]
    },
    {
        day: 3, date: "03/30", weekday: "一", title: "嵐山絕景 (需預約)", tags: ["京都", "嵐山"],
        sections: [
            {
                type: "transport", title: "交通", icon: "fa-train-tram",
                table: [
                    { time: "07:30", route: "大阪梅田 → 嵯峨嵐山", cost: "約¥1000", note: "JR大阪環狀線→JR嵯峨野線" },
                    { time: "下午", route: "嵐山 → 大阪梅田", cost: "約¥1000", note: "遊覽結束後返回" }
                ],
                collapsible: {
                    title: "🚆 梅田出發詳細路線",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">🚉 推薦路線 (JR，最直達)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">大阪駅 → JR嵯峨野線（快速）→ 嵯峨嵐山駅，全程約 50-60 分鐘。<br>請在 <b>07:30 前出發</b>，08:45 前抵達嵯峨站，步行 3 分鐘到小火車乘車處。</p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">⚠️ 注意</h4>
                        <p class="mb-2 text-xs leading-relaxed text-gray-600">嵯峨野小火車站 (トロッコ嵯峨駅) 在 JR 嵯峨嵐山駅旁，出站後按指標步行約 3 分鐘即可。</p>
                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-xs text-gray-700">
                            <strong class="text-amber-700">💡 回程建議：</strong>遊船結束地點是嵐山站（嵐電/阪急），可搭阪急嵐山線→大阪梅田，約 40 分鐘。
                        </div>
                    `
                },
                hint: "今日有兩個固定預約時間 (09:00 小火車 / 11:00 遊船)，早上請務必提早出發！3月底氣溫約 10-15°C，建議穿薄外套＋帶折疊傘（山區易起霧飄雨）。",
                buttons: [
                    { text: "大阪 → 嵯峨嵐山導航", link: "https://www.google.com/maps/dir/?api=1&origin=大阪駅&destination=嵯峨嵐山駅&travelmode=transit" }
                ]
            },
            {
                type: "attraction", title: "景點導覽", icon: "fa-camera",
                cards: [
                    {
                        image: "https://images.unsplash.com/photo-1590403323067-154a1d41829e?q=80&w=600&auto=format&fit=crop",
                        title: "嵯峨野嵐山小火車",
                        desc: "09:00 出發，沿峽谷行駛約25分鐘，春季可欣賞嫩綠山景。",
                        link: "https://www.google.com/maps/search/?api=1&query=嵯峨野観光鉄道+嵯峨駅"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop",
                        title: "保津川漂流（遊船）",
                        desc: "11:00 於亀岡乘船，穿越保津川峽谷約2小時，抵達嵐山。",
                        link: "https://www.google.com/maps/search/?api=1&query=保津川下り+亀岡乗船場"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=600&auto=format&fit=crop",
                        title: "渡月橋",
                        desc: "嵐山最具代表性的地標，橫跨桂川，春季兩岸山景如畫。",
                        link: "https://www.google.com/maps/search/?api=1&query=渡月橋+嵐山"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=600&auto=format&fit=crop",
                        title: "嵐山竹林小徑",
                        desc: "高聳翠竹形成天然拱廊，晨間人少時最美，建議早上前往。",
                        link: "https://www.google.com/maps/search/?api=1&query=嵐山竹林+京都"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=600&auto=format&fit=crop",
                        title: "天龍寺",
                        desc: "世界遺產禪寺，曹源池庭園以借景嵐山聞名，入場 ¥500。",
                        link: "https://www.google.com/maps/search/?api=1&query=天龍寺+嵐山"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=600&auto=format&fit=crop",
                        title: "嵐山公園",
                        desc: "免費開放的丘陵公園，登上龜山地區可俯瞰保津川峽谷全景。",
                        link: "https://www.google.com/maps/search/?api=1&query=嵐山公園+京都"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1559628233-100c798642d8?q=80&w=600&auto=format&fit=crop",
                        title: "中之島地區",
                        desc: "渡月橋旁桂川中洲，春季河灘散步、賞山景的好去處。",
                        link: "https://www.google.com/maps/search/?api=1&query=中之島公園+嵐山"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop",
                        title: "嵐電嵐山駅 花の間",
                        desc: "嵐電嵐山站著名的花卉裝飾廁所「花の間」，是IG必拍打卡點。",
                        link: "https://www.google.com/maps/search/?api=1&query=嵐電嵐山駅+京都"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=600&auto=format&fit=crop",
                        title: "野宮神社",
                        desc: "竹林小徑入口的古老神社，供奉縁結與學業，境內有黑木鳥居。",
                        link: "https://www.google.com/maps/search/?api=1&query=野宮神社+嵐山"
                    }
                ]
            },
            {
                type: "attraction", title: "和服體驗 & 購物", icon: "fa-shirt",
                list: [
                    {
                        name: "Kinkaku-ji Kyolan（京らん）着物體驗",
                        desc: "嵐山人氣和服租借與拍攝體驗，可換上傳統和服漫步竹林，含髮型造型服務。建議提前線上預約。",
                        link: "https://www.google.com/maps/search/?api=1&query=京らん+嵐山+着物レンタル"
                    },
                    {
                        name: "Kimono Rental & Sale 嵐山",
                        desc: "另一間嵐山和服租借選擇，款式豐富，支援中文服務，租借時段約 3-4 小時。",
                        link: "https://www.google.com/maps/search/?api=1&query=着物レンタル+嵐山+京都"
                    },
                    {
                        name: "Sweets Cafe Emman 嵐山（甘夢庵）",
                        desc: "渡月橋附近的特色麻糬甜點咖啡廳，招牌抹茶麻糬套餐使用宇治茶，環境雅致適合休憩。",
                        link: "https://www.google.com/maps/search/?api=1&query=Sweets+Cafe+Emman+嵐山"
                    }
                ]
            },
            {
                type: "dining", title: "餐廳推薦", icon: "fa-utensils",
                list: [
                    {
                        name: "【午餐】嵐山よしむら",
                        desc: "遊船結束後、渡月橋旁的蕎麥麵名店，可邊欣賞桂川美景邊用餐。無需預約，建議 12:30 前入座避免久候。",
                        link: "https://www.google.com/maps/search/?api=1&query=嵐山よしむら+京都"
                    },
                    {
                        name: "【下午茶】%アラビカ京都 嵐山",
                        desc: "渡月橋橋頭的網紅咖啡廳，外帶一杯 Latte 邊走邊喝、拍照超美！",
                        link: "https://www.google.com/maps/search/?api=1&query=%25+Arabica+Kyoto+Arashiyama"
                    },
                    {
                        name: "【晚餐】京都嵐山 和牛 六重亭",
                        desc: "嵐山高評價和牛餐廳，提供京都產黑毛和牛鐵板燒與懷石套餐，是當天最適合的壓軸晚餐。建議提前訂位。",
                        link: "https://www.google.com/maps/search/?api=1&query=六重亭+嵐山+和牛+京都"
                    },
                    {
                        name: "【晚餐備案】回大阪後 — 曾根崎周邊",
                        desc: "若回梅田時已接近晚餐時間，可直接到飯店附近的お初天神通り覓食（烤雞串、居酒屋選擇豐富）。",
                        link: "https://www.google.com/maps/search/?api=1&query=お初天神通り+大阪"
                    }
                ]
            }
        ]
    },
    {
        day: 4, date: "03/31", weekday: "二", title: "清水寺與祇園風情", tags: ["京都", "東山區"],
        sections: [
            {
                type: "transport", title: "交通 (飯店 → 清水寺)", icon: "fa-train-tram",
                table: [
                    { time: "08:30", route: "梅田 → 京都駅", cost: "約¥570", note: "JR新快速，約30分" },
                    { time: "09:10", route: "京都駅 → 清水道", cost: "約¥230", note: "市バス206號 或 100號" }
                ],
                collapsible: {
                    title: "🚌 清水寺詳細交通路線",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">🚉 Step 1：大阪梅田 → 京都駅</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">從大阪駅搭 <b>JR神戶線/琵琶湖線新快速</b> 方向，約 28 分鐘到京都駅（約 ¥570）。早上 08:30 出發，09:00 前可抵達。</p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">🚌 Step 2：京都駅 → 清水道（市バス）</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">在京都駅「D1 月台」搭乘 <b>市バス 206號</b>（東山廻り）或 <b>100號</b>，約 15-20 分鐘在「<b>清水道</b>」站下車，步行 10 分鐘即達清水寺。單程 ¥230。</p>
                        <div class="bg-blue-50 border border-blue-100 rounded-lg p-2.5 text-xs text-gray-700">
                            <strong class="text-[#4A6E8C]">💡 小提示：</strong>回程可步行至四条或三条，轉搭地下鐵或京阪電車回京都駅，避開公車塞車。
                        </div>
                    `
                },
                hint: "此行程步行量極大（約 12,000 步），請穿著好走的運動鞋。3月底氣溫約 12-18°C，日夜溫差大，記得帶外套。",
                buttons: [
                    { text: "大阪 → 清水寺導航", link: "https://www.google.com/maps/dir/?api=1&origin=大阪駅&destination=清水寺+京都&travelmode=transit" }
                ]
            },
            {
                type: "attraction", title: "景點路線", icon: "fa-camera",
                list: [
                    {
                        name: "清水寺",
                        desc: "早上先走經典清水舞台，趁遊客少時拍空景。建議 09:30 前到達。入場 ¥400。",
                        link: "https://www.google.com/maps/search/?api=1&query=清水寺+京都"
                    },
                    {
                        name: "清水坂 / 二年坂 / 三年坂",
                        desc: "逛街、拍照，買伴手禮 (茶之菓、京都限定零食)。注意：三年坂傳說跌倒不吉，小心石板路。",
                        link: "https://www.google.com/maps/search/?api=1&query=二年坂+産寧坂+京都"
                    },
                    {
                        name: "八坂神社",
                        desc: "祇園入口的朱紅神社，免費參觀，傍晚燈籠亮起後特別美。",
                        link: "https://www.google.com/maps/search/?api=1&query=八坂神社+京都"
                    },
                    {
                        name: "祇園 / 花見小路",
                        desc: "傍晚漫步，感受古都風情，運氣好可遇到舞妓。禁止追拍，請保持距離欣賞。",
                        link: "https://www.google.com/maps/search/?api=1&query=花見小路+祇園+京都"
                    }
                ],
                buttons: [
                    { text: "清水寺", link: "https://www.google.com/maps/search/?api=1&query=清水寺+京都" },
                    { text: "八坂神社", link: "https://www.google.com/maps/search/?api=1&query=八坂神社+京都" },
                    { text: "東山散步路線", link: "https://www.google.com/maps/dir/?api=1&origin=清水寺+京都&destination=八坂神社+京都&waypoints=二年坂+京都|花見小路+祇園&travelmode=walking" }
                ]
            },
            {
                type: "dining", title: "餐廳推薦", icon: "fa-utensils",
                list: [
                    {
                        name: "【午餐】錦市場 — 京の台所",
                        desc: "從清水坂步行約 15 分鐘。這條400年歷史的市場小巷有串燒、玉子燒、豆腐等小吃，邊走邊吃解決午餐超推薦！",
                        link: "https://www.google.com/maps/search/?api=1&query=錦市場+京都"
                    },
                    {
                        name: "【下午茶】茶房 寧寧之道",
                        desc: "石塀小路旁的傳統町家茶屋，抹茶甜點組合，適合走累了坐下來休息。",
                        link: "https://www.google.com/maps/search/?api=1&query=石塀小路+京都+茶房"
                    },
                    {
                        name: "【晚餐】IZUJU 壽司（祇園）",
                        desc: "百年老舖的鯖魚押壽司（バッテラ）是京都名物，祇園散步後就順路。建議 17:30 前入座，無預約，現場排隊。",
                        link: "https://www.google.com/maps/search/?api=1&query=いづう+祇園+京都"
                    },
                    {
                        name: "【晚餐備案】Ramen 麵屋 たけいち",
                        desc: "若不想排隊，附近有多間拉麵店可選，是京都特有雞白湯系拉麵。",
                        link: "https://www.google.com/maps/search/?api=1&query=麺屋たけいち+京都"
                    }
                ]
            }
        ]
    },
    {
        day: 5, date: "04/01", weekday: "三", title: "千本鳥居與宇治抹茶", tags: ["京都", "伏見", "宇治"],
        sections: [
            {
                type: "transport", title: "交通", icon: "fa-train-tram",
                table: [
                    { time: "07:30", route: "大阪梅田 → 淀屋橋", cost: "-", note: "地下鐵御堂筋線，約10分" },
                    { time: "07:45", route: "淀屋橋 → 伏見稻荷", cost: "約¥420", note: "京阪本線特急，約30分" },
                    { time: "11:00", route: "伏見稻荷 → 中書島", cost: "約¥200", note: "京阪本線，約10分" },
                    { time: "11:15", route: "中書島 → 宇治", cost: "約¥200", note: "京阪宇治線，約20分" },
                    { time: "下午", route: "宇治 → 大阪梅田", cost: "約¥500", note: "京阪宇治線→京阪本線→地下鐵" }
                ],
                collapsible: {
                    title: "🚆 第五天完整交通路線",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">1️⃣ 梅田 → 伏見稻荷 (約40分)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">
                            <b>梅田駅</b>（地下鐵御堂筋線）→ <b>淀屋橋駅</b> 換乘 <b>京阪本線特急</b>，
                            直達 <b>伏見稻荷駅</b>，出站步行 3 分鐘到大社入口。<br>
                            <span class="text-gray-400">※ ICOCA 可直接刷，無需購票。</span>
                        </p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">2️⃣ 伏見稻荷 → 宇治 (換車，約30分)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">
                            搭京阪本線至 <b>中書島駅</b> 下車，換乘 <b>京阪宇治線</b>（月台同層，步行2分），
                            終點站即 <b>宇治駅</b>，步行 10 分鐘到平等院。
                        </p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">3️⃣ 宇治 → 回大阪梅田 (約50分)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">
                            宇治駅 → 中書島駅（京阪宇治線）→ 淀屋橋駅（京阪本線特急）→
                            梅田駅（地下鐵御堂筋線）。全程約 50 分鐘。
                        </p>
                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-xs text-gray-700">
                            <strong class="text-amber-700">💡 注意：</strong>京阪電車不接受 JR Pass，需刷 ICOCA 或另購票。
                            伏見稻荷駅與 JR 稻荷駅相鄰，搭<b>京阪</b>請認明「伏見稻荷」而非 JR 稻荷站。
                        </div>
                    `
                },
                hint: "今日最早出發（07:30），建議前晚準備好 ICOCA 餘額。伏見稻荷人潮很多，08:30 前抵達才能拍到空鳥居。",
                buttons: [
                    { text: "大阪 → 伏見稻荷導航", link: "https://www.google.com/maps/dir/?api=1&origin=大阪駅&destination=伏見稲荷大社&travelmode=transit" },
                    { text: "伏見 → 宇治導航", link: "https://www.google.com/maps/dir/?api=1&origin=伏見稲荷大社&destination=平等院鳳凰堂+宇治&travelmode=transit" },
                    { text: "宇治 → 大阪導航", link: "https://www.google.com/maps/dir/?api=1&origin=宇治駅+京都&destination=大阪梅田駅&travelmode=transit" }
                ]
            },
            {
                type: "attraction", title: "景點", icon: "fa-camera",
                list: [
                    {
                        name: "伏見稻荷大社",
                        desc: "早起避開人潮，拍攝千本鳥居空景。",
                        link: "https://www.google.com/maps/search/?api=1&query=伏見稲荷大社+京都"
                    },
                    {
                        name: "平等院",
                        desc: "宇治經典景點，10圓硬幣上的圖案。",
                        link: "https://www.google.com/maps/search/?api=1&query=平等院鳳凰堂+宇治"
                    }
                ]
            },
            {
                type: "dining", title: "餐廳推薦", icon: "fa-utensils",
                list: [
                    {
                        name: "【早餐】伏見稻荷周邊超商/咖啡",
                        desc: "07:30 出發，建議在大阪便利商店買好早餐帶著吃，或在伏見稻荷站附近的咖啡廳用餐，趁人潮還少先衝鳥居拍照。",
                        link: "https://www.google.com/maps/search/?api=1&query=伏見稲荷大社+周辺+カフェ"
                    },
                    {
                        name: "【午餐/下午茶】中村藤吉本店（宇治）",
                        desc: "宇治最知名的百年抹茶老舖，生茶果凍（生茶ゼリイ）與抹茶膳套餐必點。建議 11:30 前抵達排隊，假日人潮多。",
                        link: "https://www.google.com/maps/search/?api=1&query=中村藤吉本店+宇治"
                    },
                    {
                        name: "【抹茶甜點備案】伊藤久右衛門（宇治）",
                        desc: "宇治另一大抹茶名家，抹茶聖代與抹茶蕎麥麵組合同樣超人氣。若中村藤吉等待時間過長，這裡是絕佳替代。",
                        link: "https://www.google.com/maps/search/?api=1&query=伊藤久右衛門+宇治"
                    },
                    {
                        name: "【晚餐】回大阪後 — 梅田拉麵一蘭",
                        desc: "宇治逛完約 16:00 返回大阪，一蘭拉麵梅田店提供隔板獨享座位，適合走了一整天後安靜享用。",
                        link: "https://www.google.com/maps/search/?api=1&query=一蘭+梅田+大阪"
                    }
                ],
                hint: "今日行程早出（07:30），記得前晚睡好！伏見稻荷建議 08:30 前抵達避人潮，拍到空鳥居的成就感超強。"
            }
        ]
    },
    {
        day: 6, date: "04/02", weekday: "四", title: "金閣寺與最後補齊", tags: ["京都", "大阪"],
        sections: [
            {
                type: "transport", title: "交通", icon: "fa-train-tram",
                table: [
                    { time: "09:00", route: "大阪梅田 → 京都駅", cost: "約¥570", note: "JR新快速" },
                    { time: "09:40", route: "京都駅 → 金閣寺道", cost: "約¥230", note: "市バス101/205號" },
                    { time: "下午", route: "北野白梅町 → 京都駅", cost: "約¥230", note: "市バス50號或嵐電" },
                    { time: "~15:00", route: "京都駅 → 大阪梅田", cost: "約¥570", note: "JR新快速返回" }
                ],
                collapsible: {
                    title: "🗺️ 金閣寺 → 北野天滿宮 → 回大阪路線",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">1️⃣ 京都駅 → 金閣寺道</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">京都駅 <b>A3 月台</b> 搭市バス <b>101號或205號</b>，約 40 分鐘到「<b>金閣寺道</b>」站下車，步行 5 分鐘。票價 ¥230。</p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">2️⃣ 金閣寺 → 北野天滿宮</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">步行約 20 分鐘（1.5km），或搭市バス（金閣寺前→北野天満宮前，2站）。</p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">3️⃣ 北野天滿宮 → 回大阪</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">步行 7 分鐘到「<b>北野白梅町駅</b>」搭嵐電（¥250）到四条大宮，再轉 JR 或阪急到大阪梅田。<br>或搭市バス50號回京都駅，再搭 JR 新快速。</p>
                        <div class="bg-green-50 border border-green-100 rounded-lg p-2.5 text-xs text-gray-700">
                            <strong class="text-green-700">💡 建議：</strong>14:30 前離開京都，回大阪還有 2-3 小時買伴手禮退稅。
                        </div>
                    `
                },
                hint: "今日是京都最後一天！氣溫約 12-18°C，早上仍需外套。下午回大阪後記得留時間退稅（免稅門市排隊約 20-30 分）。",
                buttons: [
                    { text: "大阪 → 金閣寺導航", link: "https://www.google.com/maps/dir/?api=1&origin=大阪駅&destination=金閣寺+京都&travelmode=transit" }
                ]
            },
            {
                type: "attraction", title: "景點", icon: "fa-camera",
                list: [
                    {
                        name: "金閣寺 (鹿苑寺)",
                        desc: "欣賞閃耀的金箔建築與倒影。早上光線充足，倒影最美。入場 ¥500。",
                        link: "https://www.google.com/maps/search/?api=1&query=金閣寺+鹿苑寺+京都"
                    },
                    {
                        name: "北野天滿宮",
                        desc: "學問之神，周邊有梅苑（4月已結束）與可愛的牛牛雕像可拍照，免費參觀。",
                        link: "https://www.google.com/maps/search/?api=1&query=北野天満宮+京都"
                    }
                ],
                buttons: [
                    { text: "金閣寺 → 北野天滿宮", link: "https://www.google.com/maps/dir/?api=1&origin=金閣寺+京都&destination=北野天満宮+京都&travelmode=walking" }
                ]
            },
            {
                type: "dining", title: "餐廳推薦", icon: "fa-utensils",
                list: [
                    {
                        name: "【午餐】金閣寺周邊 — 源光庵/茶屋",
                        desc: "金閣寺參觀完後，附近有多間傳統茶屋提供簡單的京御膳或烏龍麵，輕鬆解決午餐。",
                        link: "https://www.google.com/maps/search/?api=1&query=金閣寺+周辺+ランチ+京都"
                    },
                    {
                        name: "【晚餐】梅田 — 大阪燒最後一戰",
                        desc: "回大阪後的最後完整晚餐，推薦再吃一次大阪燒（きじ）或章魚燒（道頓堀風格）為這趟旅程畫下句點。",
                        link: "https://www.google.com/maps/search/?api=1&query=きじ+新梅田食道街+お好み焼き"
                    },
                    {
                        name: "【晚餐備案】梅田 旬彩 角倉",
                        desc: "精緻的梅田日式料理，適合最後一個完整晚餐正式慶祝，建議提前確認座位。",
                        link: "https://www.google.com/maps/search/?api=1&query=角倉+梅田+大阪"
                    }
                ]
            },
            {
                type: "todo", title: "待辦", icon: "fa-clipboard-list",
                list: [
                    { name: "大阪市區最後補買藥妝、伴手禮 (馬力歐泡澡球)。" },
                    { name: "確認行李重量，避免明日超重（AirAsia 行李限制請對照訂票資訊）。" }
                ],
                hint: "買東西記得帶護照，預留30分鐘排隊退稅。退稅建議在大型百貨（阪急/LUCUA）辦，單店單次消費滿 ¥5,000 即可。"
            }
        ]
    },
    {
        day: 7, date: "04/03", weekday: "五", title: "和牛饗宴與滿載而歸", tags: ["梅田", "機場"],
        sections: [
            {
                type: "dining", title: "餐廳", icon: "fa-utensils",
                list: [
                    {
                        name: "燒肉力丸 初天神店",
                        desc: "11:30 已預訂，旅程最後的燒肉大餐！",
                        link: "https://www.google.com/maps/search/?api=1&query=焼肉力丸+初天神店+大阪"
                    }
                ]
            },
            {
                type: "transport", title: "交通", icon: "fa-train-tram",
                table: [
                    { time: "16:30", route: "市區 → 關西機場", cost: "約¥1000", note: "提早出發" },
                    { time: "20:55", route: "KIX → TPE", cost: "-", note: "AirAsia 回程" }
                ],
                hint: "10:00 退房，行李可寄放飯店或梅田車站。最晚請於 17:55 抵達機場辦理報到手續。",
                buttons: [
                    { text: "梅田 → 關西機場導航", link: "https://www.google.com/maps/dir/?api=1&origin=大阪梅田駅&destination=関西国際空港&travelmode=transit" },
                    { text: "關西機場", link: "https://www.google.com/maps/search/?api=1&query=関西国際空港" }
                ]
            }
        ]
    }
];
