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
        day: 2, date: "03/29", weekday: "日", title: "梅田全日血拚與美食", tags: ["梅田商圈", "購物", "美食"],
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
                    }
                ],
                hint: "建議依據這份攻略鎖定 2~3 間百貨集中火力，買滿 5000 日圓記得拿實體護照去退稅！"
            },
            {
                type: "dining", title: "周邊熱門美食推薦", icon: "fa-utensils",
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
                    },
                    {
                        name: "きじ (木地) 大阪燒",
                        desc: "【晚餐】新梅田食道街的米其林推薦大阪燒，在地人也愛吃。",
                        link: "https://www.google.com/maps/search/?api=1&query=きじ+新梅田食道街+お好み焼き"
                    },
                    {
                        name: "龜壽司 總本店",
                        desc: "【晚餐備案】平價又新鮮的超人氣在地壽司老店。",
                        link: "https://www.google.com/maps/search/?api=1&query=亀寿司総本店+大阪"
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
                    { time: "07:30", route: "大阪 → 嵯峨嵐山", cost: "約¥1000", note: "JR或私鐵" }
                ],
                hint: "今日有兩個固定預約時間 (09:00 小火車 / 11:00 遊船)，早上請務必提早出發，預留迷路與轉車時間。",
                buttons: [
                    { text: "大阪 → 嵯峨嵐山導航", link: "https://www.google.com/maps/dir/?api=1&origin=大阪駅&destination=嵯峨嵐山駅&travelmode=transit" }
                ]
            },
            {
                type: "attraction", title: "景點", icon: "fa-camera",
                card: {
                    image: "https://images.unsplash.com/photo-1590403323067-154a1d41829e?q=80&w=600&auto=format&fit=crop",
                    title: "嵐山小火車 & 保津川遊船",
                    tags: ["🕒 09:00 小火車", "🕒 11:00 遊船", "⏱️ 總需半天"],
                    desc: "09:00 搭乘嵯峨野觀光小火車從嵯峨站出發。11:00 轉乘保津川遊船，享受約2小時的峽谷風光。下午漫步竹林小徑與渡月橋。",
                    link: "https://www.google.com/maps/dir/?api=1&origin=嵯峨野観光鉄道嵯峨駅&destination=渡月橋+嵐山&waypoints=亀岡乗船場&travelmode=walking"
                }
            }
        ]
    },
    {
        day: 4, date: "03/31", weekday: "二", title: "清水寺與祇園風情", tags: ["京都", "東山區"],
        sections: [
            {
                type: "attraction", title: "景點路線", icon: "fa-camera",
                list: [
                    {
                        name: "清水寺",
                        desc: "早上先走經典清水舞台。",
                        link: "https://www.google.com/maps/search/?api=1&query=清水寺+京都"
                    },
                    {
                        name: "清水坂 / 二年坂",
                        desc: "逛街、拍照，買伴手禮 (茶之菓)。",
                        link: "https://www.google.com/maps/search/?api=1&query=二年坂+産寧坂+京都"
                    },
                    {
                        name: "祇園 / 花見小路",
                        desc: "傍晚漫步，感受古都風情。",
                        link: "https://www.google.com/maps/search/?api=1&query=花見小路+祇園+京都"
                    }
                ],
                hint: "此區全程需大量步行，請穿著好走的運動鞋。",
                buttons: [
                    { text: "清水寺", link: "https://www.google.com/maps/search/?api=1&query=清水寺+京都" },
                    { text: "八坂神社", link: "https://www.google.com/maps/search/?api=1&query=八坂神社+京都" },
                    { text: "東山散步路線", link: "https://www.google.com/maps/dir/?api=1&origin=清水寺+京都&destination=八坂神社+京都&waypoints=二年坂+京都|花見小路+祇園&travelmode=walking" }
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
                    { time: "07:30", route: "大阪 → 伏見稻荷", cost: "約¥600", note: "京阪電車" },
                    { time: "11:00", route: "伏見 → 宇治", cost: "約¥300", note: "京阪電車" }
                ],
                buttons: [
                    { text: "大阪 → 伏見稻荷導航", link: "https://www.google.com/maps/dir/?api=1&origin=大阪駅&destination=伏見稲荷大社&travelmode=transit" },
                    { text: "伏見 → 宇治導航", link: "https://www.google.com/maps/dir/?api=1&origin=伏見稲荷大社&destination=平等院鳳凰堂+宇治&travelmode=transit" }
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
                type: "dining", title: "餐廳", icon: "fa-utensils",
                list: [
                    {
                        name: "宇治抹茶甜點",
                        desc: "中村藤吉或伊藤久右衛門。",
                        link: "https://www.google.com/maps/search/?api=1&query=中村藤吉本店+宇治"
                    }
                ]
            }
        ]
    },
    {
        day: 6, date: "04/02", weekday: "四", title: "金閣寺與最後補齊", tags: ["京都", "大阪"],
        sections: [
            {
                type: "attraction", title: "景點", icon: "fa-camera",
                list: [
                    {
                        name: "金閣寺 (鹿苑寺)",
                        desc: "欣賞閃耀的金箔建築與倒影。",
                        link: "https://www.google.com/maps/search/?api=1&query=金閣寺+鹿苑寺+京都"
                    },
                    {
                        name: "北野天滿宮",
                        desc: "學問之神，周邊逛逛。",
                        link: "https://www.google.com/maps/search/?api=1&query=北野天満宮+京都"
                    }
                ],
                buttons: [
                    { text: "金閣寺 → 北野天滿宮導航", link: "https://www.google.com/maps/dir/?api=1&origin=金閣寺+京都&destination=北野天満宮+京都&travelmode=walking" }
                ]
            },
            {
                type: "todo", title: "待辦", icon: "fa-clipboard-list",
                list: [
                    { name: "大阪市區最後補買藥妝、伴手禮 (馬力歐泡澡球)。" }
                ],
                hint: "買東西記得帶護照，預留30分鐘排隊退稅。"
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
