const itineraryData = [
    {
        day: 1, date: "03/28", weekday: "六", title: "出發 → 抵達大阪", tags: ["機場", "大阪市"],
        sections: [
            {
                type: "transport", title: "✈️ 航班資訊", icon: "fa-plane",
                table: [
                    { time: "13:40", route: "桃園機場 T1 出發", cost: "-", note: "樂桃航空 MM026 起飛" },
                    { time: "17:05", route: "關西機場 KIX T2 抵達", cost: "-", note: "MM026 / 訂位：G6JZEV" }
                ],
                collapsible: {
                    title: "🧳 行李規定（去程 MM026）",
                    content: `
                        <div class="space-y-3 text-xs text-gray-600">
                            <div class="flex items-start gap-2">
                                <span class="text-lg">🎒</span>
                                <div><b class="text-gray-800">個人物品</b>（1件）<br>必須置於前方座位下方。</div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg">💼</span>
                                <div><b class="text-gray-800">手提行李</b>（1件）<br>尺寸上限 50×40×25 公分（長+寬+高≤115cm）</div>
                            </div>
                            <div class="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                                <b class="text-amber-700">⚠️ 個人物品＋手提行李合計重量不得超過 7 公斤</b>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg">🧳</span>
                                <div><b class="text-gray-800">托運行李</b>（1件 / 人）<br>重量上限 20 公斤，尺寸長+寬+高≤203 公分</div>
                            </div>
                        </div>
                    `
                },
                hint: "13:40 起飛，建議 11:10 前抵達桃園 T1 完成報到。17:05 落地後辦理入境＋領行李約需 1 小時。"
            },
            {
                type: "transport", title: "機場 → 飯店（利木津巴士）", icon: "fa-train-tram",
                table: [
                    { time: "~18:30", route: "KIX T2 1號月台 → ホテル阪急レスパイア大阪", cost: "依售票機", note: "機場利木津巴士" },
                    { time: "~19:30", route: "ホテル阪急レスパイア → 關西旅店", cost: "-", note: "步行約 10 分" }
                ],
                collapsible: {
                    title: "🚌 詳細搭車與步行路線 (實體票留念)",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">🎫 1. 購票 (實體票紀念)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">在 T2 到達大廳外「自動售票機」購票。機器會吐出厚質紙本票券，上車時司機會撕走存根聯，剩下的部分記得收好做紀念！(建議準備千元鈔票)</p>

                        <h4 class="font-bold text-[#4A6E8C] mb-1">🚎 2. 搭車與下車</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">在 T2 巴士乘車處 <b>1號月台</b> 搭乘機場利木津巴士，直達梅田免搬行李轉車。<br>請於「<b>ホテル阪急レスパイア大阪（ヨドバシ梅田タワー）</b>」站下車。</p>

                        <h4 class="font-bold text-[#4A6E8C] mb-1">🚶 3. 步行至飯店 (M14出口)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">下車後往南走，找地下街入口 (Whity Umeda)，沿「谷町線/東梅田」指標走，從 <b>M14 出口</b> 上樓，步行 3-5 分鐘即達關西旅店。<br><span class="text-orange-500">※ 地下街像迷宮，初次也可在地面直接用 Google Maps 導航。</span></p>
                    `
                },
                buttons: [
                    { text: "利木津巴士資訊", link: "https://www.kate.co.jp/tcn/" },
                    { text: "ホテル阪急レスパイア 地圖", link: "https://maps.app.goo.gl/N3JAEYFiZPrYEbFc7" },
                    { text: "巴士站 → 關西旅店 步行路線", link: "https://maps.app.goo.gl/Xu9ZtsgGFVpu1b269" }
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
                        desc: "藥妝、零食、伴手禮、生活雜貨一次掃貨，深夜也有開，適合逛街收尾。買滿 ¥5,000 可護照退稅。<br><br>🛒 <b>必買清單</b><br>・SALONIA 無線離子夾（⚠️ 電池須拆下放隨身行李）<br>・Kewpie 丘比蛋黃醬",
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
                type: "attraction", title: "🌇 梅田スカイビル 夕陽＆夜景", icon: "fa-binoculars",
                table: [
                    { time: "17:00", route: "梅田各百貨 → 梅田スカイビル", cost: "-", note: "步行約 10–12 分，往大阪站西北方向" },
                    { time: "17:00–18:00", route: "空中庭園展望台（39F / 40F）", cost: "¥1,500／人", note: "39F 室內 + 40F 露天 Sky Walk" },
                    { time: "~18:00", route: "日落觀賞（最佳時刻）", cost: "-", note: "3/29 日落約 18:00，黃金光線" },
                    { time: "~18:30", route: "離開スカイビル", cost: "-", note: "欣賞完初夜景後步行返回旅店" }
                ],
                collapsible: {
                    title: "🏢 展望台詳細資訊",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">📍 交通方式</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">從梅田各大百貨或 Grand Front 往西北步行約 10–12 分即達。亦可從 JR 大阪駅穿越地下通道，沿「スカイビル」指標走。</p>

                        <h4 class="font-bold text-[#4A6E8C] mb-1">🌇 樓層說明</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600"><b>39F 室內展望台：</b>全景落地玻璃窗，傍晚轉涼時可在室內賞景。<br><b>40F 空中庭園（Sky Walk）：</b>約 100 公尺周長的露天環形走廊，360° 視野無遮蔽，腳下透明地板設計，刺激感十足。</p>

                        <h4 class="font-bold text-[#4A6E8C] mb-1">📷 3/29 拍攝建議</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">日落前在<b>西側</b>可拍大阪灣剪影；18:00 前後轉到<b>東側</b>捕捉梅田高樓群亮燈初期——夕陽餘光＋霓虹燈並存的「魔幻時刻」約持續 20 分鐘，最為好看。手機開「日落模式」，露天風大記得壓穩。</p>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-xs text-gray-700">
                            <strong class="text-amber-700">⏰ 票務資訊：</strong>門票 ¥1,500／人，現場購票即可，無需預約。營業時間 9:30–22:30（最終入場 22:00）。
                        </div>
                    `
                },
                hint: "3/29 日落約 18:00，17:30 前抵達可卡到最佳黃金光線。露天 40F 風大，薄外套記得帶！",
                buttons: [
                    { text: "梅田スカイビル 地圖", link: "https://www.google.com/maps/search/?api=1&query=梅田スカイビル+空中庭園展望台+大阪" }
                ]
            },
            {
                type: "transport", title: "19:00 放包 → 心齋橋出發", icon: "fa-train-tram",
                table: [
                    { time: "18:30", route: "スカイビル → 關西旅店", cost: "-", note: "步行約10分，放下採買戰利品" },
                    { time: "19:00", route: "東梅田駅 → 梅田駅（御堂筋線）", cost: "-", note: "站內轉乘，步行2分" },
                    { time: "19:10", route: "梅田駅 → 心斎橋駅", cost: "約¥230", note: "御堂筋線，約7分" }
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
                type: "attraction", title: "📸 打卡推薦", icon: "fa-camera-retro",
                list: [
                    {
                        name: "【熱門】法善寺横丁",
                        desc: "青苔覆蓋的水掛不動明王＋石板小路昏黃燈光，入口在道頓堀麵包超人劇場旁，巷寬僅 2 公尺，夜間 20:00 後氣氛最濃厚。",
                        link: "https://www.google.com/maps/search/?api=1&query=法善寺横丁+大阪"
                    },
                    {
                        name: "【熱門】道頓堀運河夜景倒影",
                        desc: "站在大黒橋往戎橋方向拍攝，霓虹燈完整倒映在運河水面，黃金時間 20:00–21:00。建議用手機夜間模式並靠橋欄穩定機身。",
                        link: "https://www.google.com/maps/search/?api=1&query=大黒橋+道頓堀+大阪"
                    },
                    {
                        name: "【小眾】堀江（南堀江）街區",
                        desc: "大阪最有設計感的街區，獨立選物店、彩繪外牆、個性咖啡廳林立，整條南堀江通都適合漫步拍照。從心齋橋站搭長堀鶴見緑地線一站到「西大橋」即達。",
                        link: "https://www.google.com/maps/search/?api=1&query=南堀江+大阪"
                    },
                    {
                        name: "【小眾】千日前道具屋筋",
                        desc: "整排廚具、食品模型、燈籠專賣街，日本生活感超強，拍出來很有質感。離法善寺横丁步行 3 分鐘。",
                        link: "https://www.google.com/maps/search/?api=1&query=千日前道具屋筋+大阪"
                    }
                ]
            },
            {
                type: "dining", title: "道頓堀晚餐推薦", icon: "fa-utensils",
                list: [
                    {
                        name: "大阪燒 千房 千日前本店",
                        desc: "【晚餐首選】創業 1973 年的大阪燒老舖，千日前本店是發源地，料多實在、醬料層次豐富。距道頓堀步行 3 分鐘，有空就過去！",
                        link: "https://maps.app.goo.gl/zete2pYgNTqen5yV7"
                    },
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
                type: "transport", title: "🗺️ 小火車抵達後 → 前往乘船場", icon: "fa-route",
                collapsible: {
                    title: "三種接駁路線（トロッコ亀岡駅 → 保津川乘船場）",
                    content: `
                        <p class="text-[11px] text-gray-500 mb-3">嵯峨野小火車終點「トロッコ亀岡駅」距保津川乘船場約 2.5km，以下三種方式皆可抵達。</p>

                        <div class="space-y-4">

                            <div class="rounded-lg border border-amber-200 bg-amber-50 p-3">
                                <div class="flex items-center gap-2 mb-1.5">
                                    <span class="bg-amber-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0">① 推薦</span>
                                    <span class="font-bold text-gray-800 text-sm">京馬車</span>
                                    <span class="text-[11px] text-gray-500 ml-auto shrink-0">約25分・¥1,200／人</span>
                                </div>
                                <p class="text-xs text-gray-600 leading-relaxed mb-2">從亀岡站旁乘坐馬拉觀光馬車，穿越田野風光直達乘船場，最省力也最有氣氛，強烈推薦。每小時 :35 發車（09:35–14:35），需在 <b>トロッコ嵯峨駅</b>（出發站）事先購票。</p>
                                <div class="flex flex-wrap gap-2">
                                    <a href="https://www.kyobasha.jp/ticket/" target="_blank" class="bg-amber-500 text-white px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 active:scale-95 transition-transform">
                                        <i class="fa-solid fa-ticket text-[9px]"></i> 官網票務資訊
                                    </a>
                                    <a href="https://www.google.com/maps/search/?api=1&query=京馬車+亀岡+嵯峨野観光鉄道" target="_blank" class="bg-white text-gray-600 border border-gray-200 px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 active:scale-95 transition-transform">
                                        <i class="fa-solid fa-map-location-dot text-[9px]"></i> 乘車處地圖
                                    </a>
                                </div>
                            </div>

                            <div class="rounded-lg border border-blue-200 bg-blue-50 p-3">
                                <div class="flex items-center gap-2 mb-1.5">
                                    <span class="bg-[#4A6E8C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0">②</span>
                                    <span class="font-bold text-gray-800 text-sm">步行 + JR山陰本線 + 步行</span>
                                    <span class="text-[11px] text-gray-500 ml-auto shrink-0">約25分・¥150</span>
                                </div>
                                <ol class="text-xs text-gray-600 leading-relaxed space-y-1 list-decimal list-inside mb-2">
                                    <li><b>トロッコ亀岡駅 → 馬堀駅（JR）</b>：步行約10分（約500m，往西北方向）</li>
                                    <li><b>馬堀駅 → 亀岡駅</b>：JR山陰本線，1站約3分，¥150</li>
                                    <li><b>亀岡駅 → 保津川乘船場</b>：步行約10分（往南方向）</li>
                                </ol>
                                <a href="https://www.google.com/maps/dir/?api=1&origin=トロッコ亀岡駅,亀岡市,京都府&destination=保津川下り乗船場,亀岡市,京都府&travelmode=transit" target="_blank" class="bg-[#4A6E8C] text-white px-2.5 py-1 rounded-full text-[10px] font-medium inline-flex items-center gap-1 active:scale-95 transition-transform">
                                    <i class="fa-solid fa-diamond-turn-right text-[9px]"></i> 完整路線導航
                                </a>
                            </div>

                            <div class="rounded-lg border border-green-200 bg-green-50 p-3">
                                <div class="flex items-center gap-2 mb-1.5">
                                    <span class="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0">③</span>
                                    <span class="font-bold text-gray-800 text-sm">京阪京都交通巴士 39系統</span>
                                    <span class="text-[11px] text-gray-500 ml-auto shrink-0">約16分・¥350</span>
                                </div>
                                <p class="text-xs text-gray-600 leading-relaxed mb-2">從「トロッコ亀岡駅」巴士站搭乘直行39系統，終點「保津川下り乗船場前」下車，班次配合トロッコ列車時刻運行，是最輕鬆快速的選擇。</p>
                                <div class="flex flex-wrap gap-2">
                                    <a href="https://www.keihankyotokotsu.jp/single/detail.php?id=271" target="_blank" class="bg-green-600 text-white px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 active:scale-95 transition-transform">
                                        <i class="fa-solid fa-bus text-[9px]"></i> 巴士路線資訊
                                    </a>
                                    <a href="https://www.keihankyotokotsu.jp/bustimetable/timetable.php?stop_cd=2050&no=1" target="_blank" class="bg-white text-gray-600 border border-gray-200 px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 active:scale-95 transition-transform">
                                        <i class="fa-solid fa-clock text-[9px]"></i> 時刻表
                                    </a>
                                </div>
                            </div>

                        </div>
                    `
                },
                hint: "出發前務必確認當日保津川是否正常運航（天候或水位異常時會停駛），行前請點下方連結查看即時狀況。",
                buttons: [
                    { text: "確認保津川當日運航狀況", link: "https://www.hozugawakudari.jp/operation_info" }
                ]
            },
            {
                type: "attraction", title: "景點導覽", icon: "fa-camera",
                cards: [
                    {
                        image: "https://static.gltjp.com/glt/data/article/21000/20457/20231002_120723_31e01505_w1920.webp",
                        title: "嵯峨野嵐山小火車",
                        desc: "09:00 出發，沿峽谷行駛約25分鐘，春季可欣賞嫩綠山景。",
                        link: "https://www.google.com/maps/search/?api=1&query=嵯峨野観光鉄道+嵯峨駅"
                    },
                    {
                        image: "https://image.kkday.com/v2/image/get/c_fit%2Cq_55%2Ct_webp%2Cw_960/s1.kkday.com/product_39329/20211001010329_KPUSU/jpg",
                        title: "保津川漂流（遊船）",
                        desc: "11:00 於亀岡乘船，穿越保津川峽谷約2小時，抵達嵐山。",
                        link: "https://www.google.com/maps/search/?api=1&query=保津川下り+亀岡乗船場"
                    },
                    {
                        image: "https://static.gltjp.com/glt/data/article/21000/20457/20260116_224236_7fd8f4c6_w1920.webp",
                        title: "渡月橋",
                        desc: "嵐山最具代表性的地標，橫跨桂川，春季兩岸山景如畫。",
                        link: "https://www.google.com/maps/search/?api=1&query=渡月橋+嵐山"
                    },
                    {
                        image: "https://static.gltjp.com/glt/data/article/21000/20457/20231002_120328_0d1557f9_w1920.webp",
                        title: "嵐山竹林小徑",
                        desc: "高聳翠竹形成天然拱廊，晨間人少時最美，建議早上前往。",
                        link: "https://www.google.com/maps/search/?api=1&query=嵐山竹林+京都"
                    },
                    {
                        image: "https://www.e-japannavi.com/syuyu/kyoto/kyoto_sai_images/tenryuji_img700465_01.jpg",
                        title: "天龍寺",
                        desc: "世界遺產禪寺，曹源池庭園以借景嵐山聞名，入場 ¥500。",
                        link: "https://www.google.com/maps/search/?api=1&query=天龍寺+嵐山"
                    },
                    {
                        image: "https://img.poibank.com/oxiQM_warpLK3OaZTpe6TNOkhVQ=/W3siZm9ybWF0IjoianBnIn0seyJrZXkiOiJzdWdnZXN0aW9uLzI2NzA2MDQ1LzM3NjgzNDYvMTY3ODI3NjA0MTk4NSJ9LHsicmVzaXplIjp7IndpZHRoIjoiMTUwNSJ9fV0=",
                        title: "嵐山公園",
                        desc: "免費開放的丘陵公園與渡月橋旁桂川中洲，登上龜山地區可俯瞰保津川峽谷全景，春季河灘散步、賞山景的好去處。",
                        link: "https://www.google.com/maps/search/?api=1&query=嵐山公園+京都"
                    },
                    {
                        image: "https://i0.wp.com/arashiyama-sendou.com/wp-content/uploads/2023/06/4-1-1.jpg?resize=1024%2C768&ssl=1",
                        title: "嵐電嵐山駅 花の間",
                        desc: "嵐電嵐山站著名的花卉裝飾廁所「花の間」，是IG必拍打卡點。",
                        link: "https://www.google.com/maps/search/?api=1&query=嵐電嵐山駅+京都"
                    },
                    {
                        image: "https://caede-kyoto-asia.com/wp/wp-content/uploads/2020/04/02-22.jpg",
                        title: "野宮神社",
                        desc: "竹林小徑入口的古老神社，供奉縁結與學業，境內有黑木鳥居。",
                        link: "https://www.google.com/maps/search/?api=1&query=野宮神社+嵐山"
                    }
                ]
            },
            {
                type: "attraction", title: "📸 打卡推薦", icon: "fa-camera-retro",
                list: [
                    {
                        name: "【小眾】常寂光寺（Jojakko-ji）",
                        desc: "苔蘚石階＋竹林圍繞，比竹林小徑幽靜 10 倍，人潮極少。入場 ¥500。從野宮神社往西步行約 8 分鐘。春天光線從縫隙灑下，最適合人像拍攝。",
                        link: "https://www.google.com/maps/search/?api=1&query=常寂光寺+嵐山+京都"
                    },
                    {
                        name: "【小眾】祇王寺（Gio-ji）",
                        desc: "整片苔蘚庭院，春天光線均勻柔美、無強烈陰影，是業配感最低的夢幻場景。入場 ¥300，遊客極少。從常寂光寺步行 5 分鐘。",
                        link: "https://www.google.com/maps/search/?api=1&query=祇王寺+嵐山+京都"
                    },
                    {
                        name: "【熱門】% Arabica 嵐山（拍攝角度）",
                        desc: "白色方形建築正面＋背後嵐山山景，建議從門口外退後 3 步拍全景。早上 10:00 前人潮少、光線從東照入最理想。",
                        link: "https://www.google.com/maps/search/?api=1&query=%25+Arabica+Kyoto+Arashiyama"
                    },
                    {
                        name: "【小眾】天龍寺 雲龍圖（法堂）",
                        desc: "8 公尺天花板巨龍壁畫，仰拍特別震撼，需加購法堂參觀券 ¥500。通常週末開放，平日請先確認。",
                        link: "https://www.google.com/maps/search/?api=1&query=天龍寺+法堂+雲龍図+京都"
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
        day: 4, date: "03/31", weekday: "二", title: "☔ 雨天大阪 — 海遊館 × 心齋橋", tags: ["大阪", "室内", "雨天備案"],
        sections: [
            {
                type: "transport", title: "交通（梅田 → 大阪港）", icon: "fa-train-tram",
                table: [
                    { time: "09:00", route: "梅田 → 本町", cost: "-", note: "地下鐵御堂筋線，約6分" },
                    { time: "09:10", route: "本町 → 大阪港", cost: "約¥280", note: "地下鐵中央線，約18分" }
                ],
                hint: "今日下雨，全日室内行程，無需早起！09:00 出發輕鬆前往大阪港。",
                buttons: [
                    { text: "梅田 → 海遊館導航", link: "https://www.google.com/maps/dir/?api=1&origin=梅田駅+大阪&destination=海遊館+大阪港&travelmode=transit" }
                ]
            },
            {
                type: "attraction", title: "🐋 海遊館（Kaiyukan）", icon: "fa-fish",
                table: [
                    { time: "09:30", route: "開館入場", cost: "¥2,400（成人）", note: "建議事先線上購票省時" },
                    { time: "09:30–13:00", route: "螺旋參觀路線（8F→1F）", cost: "-", note: "鯨鯊、蝠鱝、企鵝、水母…建議留 3 小時" },
                    { time: "~13:00", route: "天保山マーケットプレース", cost: "-", note: "海遊館旁商場，午餐＋休息" }
                ],
                collapsible: {
                    title: "🐠 海遊館看點 & 拍攝攻略",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">主要展區亮點</h4>
                        <div class="space-y-2 text-xs text-gray-600 mb-3">
                            <p>🦈 <b>太平洋水槽</b>（8F 至 1F 螺旋下沉）：全球最大級鯨鯊水槽，蝠鱝與鯊魚同游。光線昏暗，手機建議開夜拍模式，靜待魚游近才按快門。</p>
                            <p>🐧 <b>南極大陸</b>：企鵝在玻璃旁游泳，最佳角度是趴下從側邊玻璃仰拍。</p>
                            <p>🪼 <b>水母展區</b>：各色水母背光展示，關閃光燈、靠近玻璃可拍出夢幻感。</p>
                            <p>🦦 <b>海瀬（Sea Otter）</b>：餵食時超可愛，出發前確認當日餵食時間表。</p>
                            <p>🐬 <b>日本海溝 / 深海魚</b>：螢光魚＋奇怪深海生物，可以嚇嚇同行友人。</p>
                        </div>
                        <div class="bg-blue-50 border border-blue-100 rounded-lg p-2.5 text-xs text-gray-700">
                            <strong class="text-[#4A6E8C]">💡 Tips：</strong>雨天人潮較多，建議 09:15 在門口排隊，比開館早 15 分鐘到。鯨鯊水槽選 2F 正面位，構圖最壯觀。
                        </div>
                    `
                },
                buttons: [
                    { text: "海遊館門票購買", link: "https://www.kaiyukan.com/" },
                    { text: "海遊館 地圖", link: "https://www.google.com/maps/search/?api=1&query=海遊館+大阪港" }
                ]
            },
            {
                type: "transport", title: "交通（大阪港 → 心齋橋）", icon: "fa-train-tram",
                table: [
                    { time: "13:30", route: "大阪港 → 本町", cost: "-", note: "地下鐵中央線，約18分" },
                    { time: "13:50", route: "本町 → 心齋橋", cost: "約¥280", note: "地下鐵御堂筋線，約3分" }
                ]
            },
            {
                type: "attraction", title: "🏬 心齋橋 × 難波 室内探索", icon: "fa-bag-shopping",
                list: [
                    {
                        name: "心齋橋筋商店街（全蓋頂拱廊）",
                        desc: "大阪最長有蓋商店街，雨天購物首選！藥妝補買、伴手禮、流行服飾一次解決，南北走一圈約 1-2 小時完全不淋雨。",
                        link: "https://www.google.com/maps/search/?api=1&query=心斎橋筋商店街+大阪"
                    },
                    {
                        name: "美国村（アメリカ村）",
                        desc: "復古潮流小舖、二手衣、飾品，年輕文化聖地，巷弄裡有許多室内個性小店。",
                        link: "https://www.google.com/maps/search/?api=1&query=アメリカ村+大阪"
                    },
                    {
                        name: "難波 CITY / なんばパークス",
                        desc: "高島屋進駐的大型商場，食品伴手禮、精品退稅最方便，雨天完全室内移動。",
                        link: "https://www.google.com/maps/search/?api=1&query=なんばパークス+大阪"
                    }
                ],
                hint: "心齋橋筋拱廊全程有屋頂，雨天也不怕！藥妝推薦：マツモトキヨシ、コスモス、ドン・キホーテ（激安）。",
                buttons: [
                    { text: "心齋橋筋商店街 地圖", link: "https://www.google.com/maps/search/?api=1&query=心斎橋筋商店街+大阪" },
                    { text: "なんばパークス 地圖", link: "https://www.google.com/maps/search/?api=1&query=なんばパークス+大阪" }
                ]
            },
            {
                type: "dining", title: "餐廳推薦", icon: "fa-utensils",
                list: [
                    {
                        name: "【午餐】天保山マーケットプレース 美食廣場",
                        desc: "海遊館旁商場內多種選擇：拉麵、定食、咖哩。雨天不用外出，直接在館內解決。",
                        link: "https://www.google.com/maps/search/?api=1&query=天保山マーケットプレース+大阪"
                    },
                    {
                        name: "【下午茶】Pablo チーズタルト（心齋橋）",
                        desc: "大阪名物半熟起司塔，現烤出爐外酥內流心。心齋橋筋店有限定口味，現場排隊約10分鐘。",
                        link: "https://www.google.com/maps/search/?api=1&query=パブロ+心斎橋+チーズタルト"
                    },
                    {
                        name: "【晚餐】道頓堀 — たこ焼き or 串カツ",
                        desc: "難波逛完後繞道頓堀吃晚餐，章魚燒、串炸、或金龍拉麵。雨天道頓堀氣氛也很熱鬧。",
                        link: "https://www.google.com/maps/search/?api=1&query=道頓堀+大阪+晩ご飯"
                    }
                ]
            },
            {
                type: "todo", title: "雨天待辦清單", icon: "fa-clipboard-list",
                list: [
                    { name: "補買藥妝（松本清 / コスモス / ドン・キホーテ）" },
                    { name: "確認 ICOCA 餘額，在售票機加值至足夠金額" },
                    { name: "整理今日戰利品，預留行李空間給後續購物" }
                ],
                hint: "今天步行量最少，是輕鬆的雨天節奏。若雨勢漸停，傍晚可考慮步行至梅田再逛一圈。"
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
                    { time: "07:45", route: "淀屋橋 → 丹波橋（プレミアムカー）", cost: "乗車券¥400＋指定席¥500", note: "京阪特急 プレミアムカー，約25分" },
                    { time: "~08:10", route: "丹波橋 → 伏見稻荷", cost: "（含於乗車券）", note: "京阪普通，約5分" },
                    { time: "11:00", route: "伏見稻荷 → 中書島", cost: "約¥200", note: "京阪本線，約10分" },
                    { time: "11:15", route: "中書島 → 宇治", cost: "約¥200", note: "京阪宇治線，約20分" },
                    { time: "下午", route: "宇治 → 大阪梅田", cost: "約¥500", note: "京阪宇治線→京阪本線→地下鐵" }
                ],
                collapsible: {
                    title: "🚆 第五天完整交通路線",
                    content: `
                        <div class="bg-[#EAF2F8] border border-[#BCE0FD] rounded-xl p-3 mb-4">
                            <h4 class="font-bold text-[#4A6E8C] mb-2 flex items-center gap-1.5"><i class="fa-solid fa-star text-yellow-500"></i> プレミアムカー（Premium Car）</h4>
                            <div class="space-y-1.5 text-xs text-gray-700">
                                <p><b>車廂：</b>特急列車 <b>6 號車</b>（從京都端起算）— 全席指定，2＋1 寬幅座椅配置</p>
                                <p><b>設備：</b>大型摺疊桌、電源插座（每座）、免費 Wi-Fi</p>
                                <p><b>費用：</b>乗車券 ¥400 ＋ プレミアムカー指定席券 <b>¥500</b>（合計 ¥900）</p>
                                <p><b>注意：</b>伏見稲荷駅 <span class="text-red-600 font-bold">不停特急</span>，需在 <b>丹波橋駅</b> 下車轉乘普通車（約5分）至伏見稲荷駅</p>
                            </div>
                            <div class="mt-2.5 pt-2 border-t border-[#BCE0FD] space-y-1 text-xs text-gray-600">
                                <p class="font-bold text-[#4A6E8C]">🎫 購票方式</p>
                                <p>① <b>網路預約</b>（推薦）：官網免費註冊「プレミアムカークラブ」，可選座，發車前1分鐘截止</p>
                                <p>② <b>月台券售機</b>：特急停靠站月台設有キャッシュレス券売機，可刷 IC 卡 / QR 碼付款</p>
                                <p>③ <b>車内購票</b>：有空席時可向車掌購買，出發前3分鐘截止</p>
                                <p class="text-gray-400">※ 開售時間：乘車日 <b>14 天前</b> 上午 10:00 起</p>
                            </div>
                        </div>
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">1️⃣ 梅田 → 伏見稻荷 (約45分)</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">
                            <b>梅田駅</b>（地下鐵御堂筋線）→ <b>淀屋橋駅</b> 換乘 <b>京阪特急 プレミアムカー（6號車）</b>，
                            至 <b>丹波橋駅</b> 下車，轉乘普通車（同月台）2 站到 <b>伏見稲荷駅</b>，出站步行 3 分鐘到大社入口。<br>
                            <span class="text-gray-400">※ 乘車券刷 ICOCA，另購プレミアムカー券 ¥500。</span>
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
                hint: "今日最早出發（07:30），建議前晚準備好 ICOCA 餘額、預先在官網訂好 プレミアムカー（¥500）。伏見稻荷人潮很多，08:30 前抵達才能拍到空鳥居。",
                buttons: [
                    { text: "プレミアムカー 購票・預約", link: "https://www.keihan.co.jp/traffic/premiumcar/ticket/" },
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
                type: "attraction", title: "📸 打卡推薦", icon: "fa-camera-retro",
                list: [
                    {
                        name: "【熱門】千本鳥居 晨間空景",
                        desc: "08:30 前抵達，陽光從鳥居縫隙斜射成光束感。拍攝技巧：蹲低並廣角向前構圖到消失點，人像放中心讓鳥居形成隧道前景。",
                        link: "https://www.google.com/maps/search/?api=1&query=伏見稲荷大社+千本鳥居"
                    },
                    {
                        name: "【小眾】Vermillion Cafe（近稻荷）",
                        desc: "紅狐主題外觀咖啡廳，窗邊座位可取景附近鳥居，適合拍咖啡×鳥居的組合。距伏見稻荷出口步行約 3 分鐘。",
                        link: "https://www.google.com/maps/search/?api=1&query=Vermillion+Cafe+伏見稲荷"
                    },
                    {
                        name: "【熱門】平等院 鳳凰堂倒影",
                        desc: "阿字池倒映鳳凰堂，是最夢幻的對稱構圖。早上光線由東照射、水面平靜，建議 10:00 前拍攝，下午逆光效果差。",
                        link: "https://www.google.com/maps/search/?api=1&query=平等院鳳凰堂+宇治"
                    },
                    {
                        name: "【小眾】宇治上神社",
                        desc: "世界遺產，苔蘚鋪道＋木造拜殿，遊客遠少於平等院，意境靜謐。從平等院步行約 10 分鐘過宇治川即達。",
                        link: "https://www.google.com/maps/search/?api=1&query=宇治上神社+宇治"
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
        day: 6, date: "04/02", weekday: "四", title: "清水寺 × 金閣寺", tags: ["京都", "東山區", "大阪"],
        sections: [
            {
                type: "transport", title: "交通", icon: "fa-train-tram",
                table: [
                    { time: "08:30", route: "大阪梅田 → 京都駅", cost: "約¥570", note: "JR新快速，約30分" },
                    { time: "09:10", route: "京都駅 → 清水道", cost: "約¥230", note: "市バス206號 或 100號，約15分" },
                    { time: "12:30", route: "祇園四条 → 烏丸御池", cost: "約¥220", note: "地下鐵東西線，約3分" },
                    { time: "12:40", route: "烏丸御池 → 今出川", cost: "約¥220", note: "地下鐵烏丸線，約8分（轉乘）" },
                    { time: "13:10", route: "今出川 → 金閣寺道", cost: "約¥230", note: "市バス102號，約20分" },
                    { time: "~15:30", route: "北野白梅町 → 京都駅 → 大阪梅田", cost: "約¥800", note: "市バス50號→JR新快速" }
                ],
                collapsible: {
                    title: "🗺️ 清水寺（朝）→ 金閣寺（午後）完整路線",
                    content: `
                        <h4 class="font-bold text-[#4A6E8C] mt-2 mb-1">1️⃣ 梅田 → 清水寺（約40分）</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">大阪駅搭 <b>JR新快速</b> 約 28 分到京都駅，再於 <b>D1 月台</b>搭 <b>市バス 206號</b>（東山廻り）或 <b>100號</b>，約 15 分在「<b>清水道</b>」下車，步行 10 分鐘上坡即達清水寺。</p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">2️⃣ 清水寺 → 祇園 → 金閣寺（約40分）</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">清水坂往北步行 → 八坂神社 → 四条通 → 步行至「<b>祇園四条駅</b>」搭地下鐵東西線到「<b>烏丸御池</b>」，換乘烏丸線至「<b>今出川駅</b>」，再搭市バス <b>102號</b> 約 20 分到「<b>金閣寺道</b>」。</p>
                        <h4 class="font-bold text-[#4A6E8C] mb-1">3️⃣ 金閣寺 → 北野天滿宮 → 回大阪</h4>
                        <p class="mb-3 text-xs leading-relaxed text-gray-600">金閣寺步行 20 分（或搭2站市バス）到北野天滿宮，再步行 7 分到「<b>北野白梅町駅</b>」搭市バス 50號回京都駅，JR新快速返大阪梅田。</p>
                        <div class="bg-green-50 border border-green-100 rounded-lg p-2.5 text-xs text-gray-700">
                            <strong class="text-green-700">💡 建議：</strong>15:30 前離開京都，回大阪還有 2 小時可退稅購物。
                        </div>
                    `
                },
                hint: "今日是京都最後一天，上午清水寺、下午金閣寺！早出發（08:30）才能趕完兩個景點。步行量大（約 15,000 步），請穿好走的鞋。",
                buttons: [
                    { text: "大阪 → 清水寺導航", link: "https://www.google.com/maps/dir/?api=1&origin=大阪駅&destination=清水寺+京都&travelmode=transit" },
                    { text: "清水寺 → 金閣寺導航", link: "https://www.google.com/maps/dir/?api=1&origin=清水寺+京都&destination=金閣寺+鹿苑寺+京都&travelmode=transit" }
                ]
            },
            {
                type: "attraction", title: "🍃 清水寺 × 東山（上午）", icon: "fa-torii-gate",
                list: [
                    {
                        name: "清水寺",
                        desc: "早上先走經典清水舞台，趁遊客較少時拍空景。建議 09:30 前到達。入場 ¥400。",
                        link: "https://www.google.com/maps/search/?api=1&query=清水寺+京都"
                    },
                    {
                        name: "清水坂 / 二年坂 / 三年坂",
                        desc: "逛街、拍照，買伴手禮（茶之菓、京都限定零食）。三年坂傳說跌倒不吉，小心石板路。",
                        link: "https://www.google.com/maps/search/?api=1&query=二年坂+産寧坂+京都"
                    },
                    {
                        name: "八坂神社 → 祇園四条",
                        desc: "朱紅神社免費參觀，走花見小路感受古都風情後步行至祇園四条駅搭車前往金閣寺。",
                        link: "https://www.google.com/maps/search/?api=1&query=八坂神社+京都"
                    }
                ],
                buttons: [
                    { text: "清水寺", link: "https://www.google.com/maps/search/?api=1&query=清水寺+京都" },
                    { text: "東山散步路線", link: "https://www.google.com/maps/dir/?api=1&origin=清水寺+京都&destination=八坂神社+京都&waypoints=二年坂+京都|花見小路+祇園&travelmode=walking" }
                ]
            },
            {
                type: "attraction", title: "📸 東山打卡推薦", icon: "fa-camera-retro",
                list: [
                    {
                        name: "【熱門】八坂の塔 × 二年坂交叉口",
                        desc: "京都最經典構圖：石板路前景＋五重塔後景。站在二年坂往北拍，黃昏光線最暖，但今天上午也很美。",
                        link: "https://www.google.com/maps/search/?api=1&query=八坂の塔+法観寺+京都"
                    },
                    {
                        name: "【熱門】石塀小路（Ishibei-koji）",
                        desc: "狹窄石板小徑＋暖色燈籠，位於高台寺旁，全程約 200 公尺，是全京都最有氛圍的巷子。",
                        link: "https://www.google.com/maps/search/?api=1&query=石塀小路+京都"
                    },
                    {
                        name: "【小眾】圓山公園 枝垂れ桜",
                        desc: "京都最大垂枝桜，4 月初滿開，免費入園。上午光線充足，是拍桜的黃金時段。",
                        link: "https://www.google.com/maps/search/?api=1&query=円山公園+枝垂れ桜+京都"
                    }
                ]
            },
            {
                type: "attraction", title: "景點（下午）", icon: "fa-camera",
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
                type: "attraction", title: "📸 打卡推薦", icon: "fa-camera-retro",
                list: [
                    {
                        name: "【熱門】龍安寺 石庭（Ryoanji）",
                        desc: "15 顆石、白砂枯山水，極簡美學，構圖只需讓砂紋延伸到畫面邊緣即可。入場 ¥600。從金閣寺搭市バス 59 號，一站即達。",
                        link: "https://www.google.com/maps/search/?api=1&query=龍安寺+石庭+京都"
                    },
                    {
                        name: "【熱門】仁和寺 五重塔（Ninnaji）",
                        desc: "皇室御用寺廟，御室桜（矮桜）4 月初盛開，五重塔＋桜花前景是絕佳構圖。入場 ¥500。從龍安寺步行約 15 分鐘。",
                        link: "https://www.google.com/maps/search/?api=1&query=仁和寺+五重塔+京都"
                    },
                    {
                        name: "【小眾】さらさ西陣（Sarasa Nishijin Cafe）",
                        desc: "舊公共澡堂改建的咖啡廳，內部磁磚裝飾牆極具特色，無最低消費，是京都 IG 密度最高的隱藏咖啡廳之一。從北野天滿宮步行約 12 分鐘。",
                        link: "https://www.google.com/maps/search/?api=1&query=さらさ西陣+カフェ+京都"
                    },
                    {
                        name: "【小眾】上七軒（Kamishichiken）",
                        desc: "京都最古老的花街，比祇園少 90% 觀光客，傳統格子町家＋石板路，傍晚偶可遇到舞妓出勤，可自由拍攝建築。從北野天滿宮步行 5 分鐘。",
                        link: "https://www.google.com/maps/search/?api=1&query=上七軒+京都"
                    }
                ]
            },
            {
                type: "dining", title: "餐廳推薦", icon: "fa-utensils",
                list: [
                    {
                        name: "【午餐】錦市場 — 京の台所",
                        desc: "清水坂往北步行約 15 分鐘。400 年歷史的室内市場小巷，串燒、玉子燒、京都豆腐小吃，邊走邊吃解決午餐，吃完搭地下鐵前往金閣寺。",
                        link: "https://www.google.com/maps/search/?api=1&query=錦市場+京都"
                    },
                    {
                        name: "【午後茶】金閣寺周邊 茶屋",
                        desc: "金閣寺參觀完後，附近有傳統茶屋提供抹茶甜點組合，適合逛完坐下來歇腿。",
                        link: "https://www.google.com/maps/search/?api=1&query=金閣寺+周辺+抹茶+茶屋+京都"
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
                card: {
                    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=600&auto=format&fit=crop",
                    title: "焼肉力丸 梅田お初天神店",
                    tags: ["🕒 11:30 已預訂", "👥 2名", "⏱️ 120分"],
                    desc: `
                        <div class="space-y-1.5">
                            <div class="flex justify-between text-xs">
                                <span class="text-gray-400">套餐</span>
                                <span class="font-medium text-gray-700">お初天神限定 和牛コース</span>
                            </div>
                            <div class="flex justify-between text-xs">
                                <span class="text-gray-400">飲料</span>
                                <span class="font-medium text-gray-700">軟飲無限暢飲（120分制）</span>
                            </div>
                            <div class="flex justify-between text-xs">
                                <span class="text-gray-400">費用</span>
                                <span class="font-medium text-gray-700">¥5,808／人（含稅）</span>
                            </div>
                            <div class="flex justify-between text-xs">
                                <span class="text-gray-400">訂位人</span>
                                <span class="font-medium text-gray-700">楊 チェンエン（2名）</span>
                            </div>
                            <div class="flex justify-between text-xs">
                                <span class="text-gray-400">店家電話</span>
                                <a href="tel:+81663127971" class="font-medium text-[#4A6E8C] underline">+81-6-6312-7971</a>
                            </div>
                        </div>
                    `,
                    link: "https://www.google.com/maps/search/?api=1&query=焼肉力丸+梅田お初天神店+大阪"
                }
            },
            {
                type: "attraction", title: "📸 打卡推薦（燒肉前 & 候機前）", icon: "fa-camera-retro",
                list: [
                    {
                        name: "【熱門】梅田スカイビル 空中庭園展望台",
                        desc: "39 層樓全露天展望台，360° 俯瞰大阪市景，早上晴天能見度最高。開門 09:30，入場 ¥1,500。燒肉 11:30 前剛好可以去一趟，從旅店步行約 10 分鐘。",
                        link: "https://www.google.com/maps/search/?api=1&query=梅田スカイビル+空中庭園展望台+大阪"
                    },
                    {
                        name: "【小眾】北浜レトロビルヂング",
                        desc: "大正時代維多利亞式磚紅建築咖啡廳，外牆正面構圖＋花窗是 IG 名片。午餐後前往關西機場途中可順路（地下鐵御堂筋線淀屋橋站步行 5 分）。",
                        link: "https://www.google.com/maps/search/?api=1&query=北浜レトロビルヂング+大阪"
                    }
                ],
                hint: "退房後行李寄放飯店，輕裝去スカイビル再回來取行李出發機場，動線最順。"
            },
            {
                type: "transport", title: "✈️ 回程航班資訊", icon: "fa-plane",
                table: [
                    { time: "17:55", route: "KIX T1 報到截止", cost: "-", note: "起飛前 3 小時（最晚）" },
                    { time: "20:55", route: "KIX T1 出發", cost: "-", note: "AirAsia X D7379 / 訂位：LDCE6G" },
                    { time: "22:55", route: "桃園機場 T1 抵達", cost: "-", note: "到家！" }
                ],
                collapsible: {
                    title: "🧳 行李規定（回程 D7379）",
                    content: `
                        <div class="space-y-3 text-xs text-gray-600">
                            <div class="flex items-start gap-2">
                                <span class="text-lg">🎒</span>
                                <div><b class="text-gray-800">個人物品</b>（1件）<br>尺寸上限 40×30×10 公分，必須置於前方座位下方。</div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg">💼</span>
                                <div><b class="text-gray-800">手提行李</b>（1件）<br>尺寸上限 56×36×23 公分</div>
                            </div>
                            <div class="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                                <b class="text-amber-700">⚠️ 個人物品＋手提行李合計重量不得超過 7 公斤</b>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg">🧳</span>
                                <div><b class="text-gray-800">托運行李</b>（1件 / 人）<br>重量上限 20 公斤，尺寸長+寬+高≤319 公分（81×119×119cm）</div>
                            </div>
                        </div>
                    `
                },
                hint: "10:00 退房，行李可寄放飯店。請於 17:55 前抵達 KIX T1 完成報到（注意是 T1，非去程的 T2）。",
                buttons: [
                    { text: "梅田 → 關西機場導航", link: "https://www.google.com/maps/dir/?api=1&origin=大阪梅田駅&destination=関西国際空港&travelmode=transit" },
                    { text: "關西機場 T1 地圖", link: "https://www.google.com/maps/search/?api=1&query=関西国際空港+第1ターミナル" }
                ]
            }
        ]
    }
];
