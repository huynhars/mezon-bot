"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortuneHandler = void 0;
const common_1 = require("@nestjs/common");
const nezon_1 = require("@n0xgg04/nezon");
let FortuneHandler = class FortuneHandler {
    constructor() {
        this.tarotCards = [
            { name: "TheFool", meaning: "Sự ngây thơ, Khởi đầu mới, niềm tin", fortune: "Hãy mạnh dạn bước vào hành trình mới!" },
            { name: "The Empress", meaning: "Sự sung túc, nuôi dưỡng, sáng tạo", fortune: "Thời kỳ thịnh vượng đang đến!" },
            { name: "The Emperor", meaning: "Quyền lực, ổn định, cấu trúc", fortune: "Hãy nắm quyền kiểm soát cuộc sống của bạn!" },
            { name: "The Lovers", meaning: "Tình yêu, sự lựa chọn, hài hòa", fortune: "Một mối quan hệ quan trọng đang chờ đón bạn!" },
            { name: "The Chariot", meaning: "Chiến thắng, ý chí, tiến về phía trước", fortune: "Kiên trì sẽ dẫn đến thành công!" },
            { name: "Strength", meaning: "Sức mạnh nội tâm, lòng can đảm, kiên nhẫn", fortune: "Bạn mạnh mẽ hơn bạn nghĩ!" },
            { name: "The Hermit", meaning: "Suy ngẫm, tìm kiếm nội tâm, cô độc", fortune: "Hãy dành thời gian cho bản thân!" },
            { name: "Wheel of Fortune", meaning: "Vận may, chu kỳ, số phận", fortune: "Vận may đang thay đổi theo hướng tích cực!" },
            { name: "The Magician", meaning: "Sức mạnh, kỹ năng, sự sáng tạo", fortune: "Bạn có đủ khả năng để biến ước mơ thành hiện thực!" },
            { name: "The High Priestess", meaning: "Trực giác, bí ẩn, tiềm thức", fortune: "Hãy tin vào trực giác của bạn!" }
        ];
        this.zodiacSigns = [
            { name: "Bạch Dương", element: "🔥 Lửa", date: "21/3 - 19/4" },
            { name: "Kim Ngưu", element: "🌍 Đất", date: "20/4 - 20/5" },
            { name: "Song Tử", element: "💨 Khí", date: "21/5 - 21/6" },
            { name: "Cự Giải", element: "💧 Nước", date: "22/6 - 22/7" },
            { name: "Sư Tử", element: "🔥 Lửa", date: "23/7 - 22/8" },
            { name: "Xử Nữ", element: "🌍 Đất", date: "23/8 - 22/9" },
            { name: "Thiên Bình", element: "💨 Khí", date: "23/9 - 23/10" },
            { name: "Bọ Cạp", element: "💧 Nước", date: "24/10 - 22/11" },
            { name: "Nhân Mã", element: "🔥 Lửa", date: "23/11 - 21/12" },
            { name: "Ma Kết", element: "🌍 Đất", date: "22/12 - 19/1" },
            { name: "Bảo Bình", element: "💨 Khí", date: "20/1 - 18/2" },
            { name: "Song Ngư", element: "💧 Nước", date: "19/2 - 20/3" }
        ];
        this.zodiacPersonalities = [
            "Năng động, nhiệt tình", "Kiên định, thực tế", "Thông minh, linh hoạt",
            "Nhạy cảm, trực giác tốt", "Tự tin, sáng tạo", "Tỉ mỉ, cầu toàn",
            "Công bằng, hài hòa", "Mạnh mẽ, bí ẩn", "Lạc quan, phiêu lưu",
            "Tham vọng, kiên nhẫn", "Độc lập, sáng tạo", "Mơ mộng, nhân ái"
        ];
    }
    async onTarot([managedMessage]) {
        const randomCard = this.tarotCards[Math.floor(Math.random() * this.tarotCards.length)];
        const message = nezon_1.SmartMessage.text(`🔮 Lá bài Tarot của bạn: ${randomCard.name}\n` +
            `📖 Ý nghĩa: ${randomCard.meaning}\n` +
            `💫 Lời tiên tri: ${randomCard.fortune}\n\n` +
            `"Số phận không phải là điều chúng ta gặp, mà là điều chúng ta tạo ra"`);
        await managedMessage.reply(message);
    }
    async onTuVi([managedMessage]) {
        const randomSignIndex = Math.floor(Math.random() * this.zodiacSigns.length);
        const zodiacSign = this.zodiacSigns[randomSignIndex];
        const personality = this.zodiacPersonalities[randomSignIndex];
        const predictions = [
            "Công việc thuận lợi, có cơ hội thăng tiến",
            "Tài chính ổn định, có khoản thu nhập bất ngờ",
            "Tình cảm phát triển tốt đẹp",
            "Sức khỏe cần được chú ý nhiều hơn",
            "Gặp được quý nhân phù trợ",
            "Có chuyến đi xa mang lại nhiều trải nghiệm"
        ];
        const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
        const luckyNumber = Math.floor(Math.random() * 100) + 1;
        const luckyColor = ["Đỏ", "Vàng", "Xanh dương", "Xanh lá", "Tím", "Hồng"][Math.floor(Math.random()) * 6];
        const message = nezon_1.SmartMessage.text(`✨ Tử vi ${zodiacSign} hôm nay ✨\n\n` +
            `🏷️ Tính cách: ${personality}\n` +
            `🔮 Dự đoán: ${randomPrediction}\n` +
            `🎯 Con số may mắn: ${luckyNumber}\n` +
            `🌈 Màu sắc may mắn: ${luckyColor}\n\n` +
            `"Mỗi ngày là một trang mới, hãy viết nên câu chuyện của riêng bạn!"`);
        await managedMessage.reply(message);
    }
    async OnLoveFortune([managedMessage]) {
        const loveLevels = ["💔 Rất thấp", "❤️ Thấp", "❤️‍🔥 Trung bình", "💖 Khá cao", "💕 Rất cao", "💘 Xuất sắc"];
        const adviceList = [
            "Hãy mở lòng và trung thực với cảm xúc của mình",
            "Thời điểm tốt để bày tỏ tình cảm",
            "Cần kiên nhẫn và thấu hiểu đối phương",
            "Tập trung vào việc xây dựng sự tin tưởng",
            "Mối quan hiện tại đang phát triển rất tốt",
            "Sắp có cuộc gặp gỡ định mệnh"
        ];
        const randomLoveLevel = loveLevels[Math.floor(Math.random() * loveLevels.length)];
        const randomAdvice = adviceList[Math.floor(Math.random() * loveLevels.length)];
        const compatibility = Math.floor(Math.random() * 100) + 1;
        const meetingChance = Math.floor(Math.random() * 100) + 1;
        let compatibilityDesc = "";
        if (compatibility >= 80)
            compatibilityDesc = "Rất phù hợp! 🎉";
        else if (compatibility >= 60)
            compatibilityDesc = "Khá phù hợp! 😊";
        else if (compatibility >= 40)
            compatibilityDesc = "Tạm được! 🤔";
        else
            compatibilityDesc = "Cần cố gắng! 💪";
        const message = nezon_1.SmartMessage.text(`💖 Bói Tình Yêu 💖\n\n` +
            `📊 Mức độ tình yêu: ${randomLoveLevel}\n` +
            `💞 Độ tương hợp: ${compatibility}%\n` +
            `💌 Lời khuyên: ${randomAdvice}\n\n` +
            `"Tình yêu đích thực không phải là tìm người hoàn hảo, mà là học cách yêu thương một người không hoàn hảo một cách hoàn hảo"`);
        await managedMessage.reply(message);
    }
    async onDailyFortune([managedMessage]) {
        const today = new Date();
        const dayOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"][today.getDay()];
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const year = today.getFullYear();
        const luckyNumber = (day + month + year) % 100 || 7;
        let specialDay = "";
        if (day === 1)
            specialDay = "✨ Ngày đầu tháng - Khởi đầu mới!";
        else if (day === 15)
            specialDay = "🌕 Ngày rằm - Năng lượng mạnh mẽ!";
        else if (dayOfWeek === "Chủ nhật")
            specialDay = "☀️ Chủ Nhật - cuối tuần vui vẻ";
        const fortunes = [
            `Hôm nay là ngày may mắn! Mọi việc sẽ diễn ra thuận lợi.`,
            `Cơ hội vàng đang đến gần, hãy sẵn sàng nắm bắt!`,
            `Một ngày tuyệt vời để bắt đầu dự án mới hoặc học kỹ năng mới.`,
            `Tập trung vào các mối quan hệ cá nhân, tình cảm sẽ phát triển tốt.`,
            `Thời điểm tốt để giải quyết các vấn đề tồn đọng.`,
            `Chú ý đến sức khỏe và nghỉ ngơi đầy đủ để nạp năng lượng.`,
            `Thể hiện sự sáng tạo của bạn, ý tưởng độc đáo sẽ được đánh giá cao.`,
            `Giúp đỡ người khác sẽ mang lại may mắn và niềm vui cho bạn.`,
            `Tin tốt sẽ đến từ phương xa hoặc từ người thân.`,
            `Hãy tin tưởng vào quyết định của mình, trực giác đang rất chính xác.`
        ];
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        const moods = [
            { mood: "😊 Vui vẻ", desc: "Truyền năng lượng tích cực" },
            { mood: "💪 Mạnh mẽ", desc: "Đối mặt thử thách" },
            { mood: "🧘 Bình tĩnh", desc: "Giữ tâm trí an yên" },
            { mood: "🎯 Tập trung", desc: "Hoàn thành mục tiêu" },
            { mood: "✨ Lạc quan", desc: "Nhìn thấy cơ hội" },
            { mood: "🤗 Hào phóng", desc: "Chia sẻ với người khác" },
            { mood: "🌟 Sáng tạo", desc: "Tạo ra điều mới mẻ" }
        ];
        const randomMood = moods[Math.floor(Math.random() * moods.length)];
        const energyLevel = Math.floor(Math.random() * 100) + 1;
        let energyDesc = "";
        if (energyLevel >= 80)
            energyDesc = "💥 Rất cao - Sẵn sàng hành động!";
        else if (energyLevel >= 60)
            energyDesc = "⚡ Cao - Làm việc hiệu quả!";
        else if (energyLevel >= 40)
            energyDesc = "🌀 Trung bình - Ổn định!";
        else if (energyLevel >= 20)
            energyDesc = "🌊 Thấp - Cần nghỉ ngơi!";
        else
            energyDesc = "💤 Rất thấp - Nạp năng lượng!";
        const message = nezon_1.SmartMessage.text(`📅 ${dayOfWeek.toUpperCase()}, NGÀY ${day}/${month}/${year}** 📅\n\n` +
            `${specialDay ? `🎊 **NGÀY ĐẶC BIỆT: ${specialDay}\n\n` : ''}` +
            `🔮 VẬN MỆNH HÔM NAY:\n${randomFortune}\n\n` +
            `📊 CHỈ SỐ NĂNG LƯỢNG: ${energyLevel}%\n` +
            `⚡ Đánh giá: ${energyDesc}\n\n` +
            `😊 TÂM TRẠNG NÊN CÓ: ${randomMood.mood}\n` +
            `📝 Lý do: ${randomMood.desc}\n\n` +
            `🎯 CON SỐ MAY MẮN: ${luckyNumber}\n\n` +
            `💫 LỜI NHẮN TỪ VŨ TRỤ:\n` +
            `"Mỗi ngày mới là một trang giấy trắng, hãy viết nên câu chuyện tuyệt vời của riêng bạn!"*\n\n` +
            `📖 CÁC LỆNH KHÁC:**\n` +
            `• \`!tarot\` - Xem bài Tarot\n` +
            `• \`!tuvi\` - Xem tử vi cung hoàng đạo\n` +
            `• \`!boitinhyeu\` - Bói tình yêu\n` +
            `• \`!randomfortune\` - Bói ngẫu nhiên\n` +
            `• \`!helpfortune\` - Hướng dẫn sử dụng`);
        await managedMessage.reply(message);
    }
    async onRandomFortune([managedMessage]) {
        const fortunes = [
            "Hôm nay là ngày may mắn của bạn! Hãy tin vào điều đó.",
            "Một điều bất ngờ và tuyệt vời đang chờ đón bạn ở phía trước.",
            "Hãy chuẩn bị tinh thần cho một thay đổi lớn sắp đến.",
            "Cơ hội vàng đang đến gần, hãy sẵn sàng nắm bắt nó.",
            "Tin tốt sẽ đến với bạn sớm thôi, hãy kiên nhẫn chờ đợi.",
            "Hãy tin tưởng vào quyết định của mình, nó là chính xác.",
            "Thời điểm thích hợp để bắt đầu một dự án mới hoặc theo đuổi đam mê.",
            "Sự kiên nhẫn của bạn sẽ được đền đáp xứng đáng trong tương lai gần.",
            "Bạn sắp gặp gỡ một người mới sẽ thay đổi cuộc đời bạn theo hướng tích cực.",
            "Thành công đang ở ngay trước mắt, chỉ cần bạn với tay ra nắm lấy.",
            "Hãy lắng nghe trái tim mình, nó biết điều gì tốt nhất cho bạn.",
            "Một cánh cửa đóng lại sẽ có một cánh cửa khác mở ra.",
            "Đừng sợ thất bại, vì đó là bước đệm cho thành công.",
            "Hạnh phúc không ở đâu xa, mà ở ngay trong tầm tay bạn.",
            "Hãy sống trọn vẹn từng khoảnh khắc, vì thời gian không chờ đợi ai."
        ];
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        const luckyElements = [
            { element: "Lửa 🔥", desc: "Đam mê, năng lượng, chuyển đổi" },
            { element: "Nước💧", desc: "Cảm xúc, trực giác, chữa lành" },
            { element: "Khí 💨", desc: "Trí tuệ, giao tiếp, tự do" },
            { element: "Đất 🌍", desc: "Ổn định, thực tế, phát triển" }
        ];
        const moonPhases = [
            { phase: "Trăng non 🌑", desc: "Khởi đầu mới, ý định" },
            { phase: "Trăng lưỡi liềm 🌒", desc: "Tăng trưởng, hành động" },
            { phase: "Trăng khuyết 🌔", desc: "Phản ánh, điều chỉnh" },
            { phase: "Trăng tròn 🌕", desc: "Hoàn thành, tỏa sáng" },
            { phase: "Trăng bán nguyệt cuối 🌗", desc: "Tha thứ, nghỉ ngơi" },
            { phase: "Trăng khuyết dần 🌖", desc: "Biết ơn, ruồng bỏ" },
            { phase: "Trăng tàn 🌘", desc: "Hoàn thành, tỏa sáng" },
        ];
        const randomElement = luckyElements[Math.floor(Math.random() * luckyElements.length)];
        const randomMoonPhase = moonPhases[Math.floor(Math.random() * moonPhases.length)];
        const luckyTime = ["Sáng sớm", "Trưa", "Chiều tà", "Tối", "Nửa đêm"][Math.floor(Math.random() * 5)];
        const affirmation = [
            "Tôi xứng đáng với hạnh phúc và thành công",
            "Mọi điều tốt đẹp đang đến với tôi",
            "Tôi tin vào bản thân và khả năng của mình",
            "Tôi thu hút sự tích cực và may mắn",
            "Hôm nay sẽ là một ngày tuyệt vời",
            "Tôi mạnh mẽ, tôi có thể, tôi sẽ làm được"
        ][Math.floor(Math.random() * 6)];
        const message = nezon_1.SmartMessage.text(`🎲 BÓI NGẪU NHIÊN \n\n` +
            `🔮 LỜI TIÊN TRI: \n"${randomFortune}"\n\n` +
            `🌌 PHA MẶT TRĂNG: ${randomMoonPhase.phase}\n` +
            `📖 Ý nghĩa: ${randomMoonPhase.desc}\n\n` +
            `⚡ NGUYÊN TỐ MAY MẮN: ${randomElement.element}\n` +
            `📚 Đặc tính: ${randomElement.desc}\n\n` +
            `⏰ THỜI GIAN MAY MẮN: ${luckyTime}\n` +
            `💭 KHẲNG ĐỊNH TÍCH CỰC: ${affirmation}\n\n` +
            `✨ "Vận mệnh không định đoạt cuộc đời bạn, mà chính bạn mới là người vẽ nên con đường của mình"`);
        await managedMessage.reply(message);
    }
    async onQuickHoroscope([managedMessage]) {
        const randomSignIndex = Math.floor(Math.random() * this.zodiacSigns.length);
        const zodiacSign = this.zodiacSigns[randomSignIndex];
        const quickFortunes = [
            "⭐ Rất tốt - Mọi việc suôn sẻ",
            "👍 Tốt - Tiến triển tích cực",
            "↔️ Bình thường - Ổn định",
            "⚠️ Cẩn thận - Có chút trở ngại",
            "🌀 Biến động - Cần linh hoạt"
        ];
        const areas = [
            { name: "Công việc", emoji: "💼" },
            { name: "Tài chính", emoji: "💰" },
            { name: "Tình yêu", emoji: "❤️" },
            { name: "Sức khỏe", emoji: "🏥" },
            { name: "Gia đình", emoji: "👨‍👩‍👧‍👦" },
            { name: "Bạn bè", emoji: "👫" }
        ];
        let fortuneText = `✨ Tử vi hôm nay - ${zodiacSign.name.toUpperCase()} ✨\n\n`;
        fortuneText += `📅 Hôm nay: ${new Date().toLocaleDateString('vi-VN')}\n`;
        fortuneText += `⚡ Tổng quan: ${quickFortunes[Math.floor(Math.random() * quickFortunes.length)]}\n\n`;
        fortuneText += `📊 CHI TIẾT TỪNG MẶT:\n`;
        areas.forEach(areas => {
            const fortune = quickFortunes[Math.floor(Math.random() * quickFortunes.length)];
            fortuneText += `${areas.emoji} ${areas.name} ${fortune}\n`;
            fortuneText += `\n💡 LỜI KHUYÊN NHANH:\n`;
        });
        const quickAdvice = [
            "Hãy tin vào bản năng",
            "Kiên nhẫn là chìa khóa",
            "Mạnh dạn thể hiện bản thân",
            "Lắng nghe nhiều hơn",
            "Hành động quyết đoán"
        ][Math.floor(Math.random() * 5)];
        fortuneText += `"${quickAdvice}\n\n`;
        fortuneText += `🎯 SỐ MAY MẮN: ${Math.floor(Math.random() * 10) + 1}\n`;
        fortuneText += `"Mỗi ngày là một cơ hội mới để tỏa sáng!"`;
        await managedMessage.reply(nezon_1.SmartMessage.text(fortuneText));
    }
};
exports.FortuneHandler = FortuneHandler;
__decorate([
    (0, nezon_1.Command)({ name: "tarot", description: "Rút một lá bài Tarot xem vận mệnh" }),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FortuneHandler.prototype, "onTarot", null);
__decorate([
    (0, nezon_1.Command)({ name: "tuvi", description: "Xem tử vi theo cung hoàng đạo" }),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FortuneHandler.prototype, "onTuVi", null);
__decorate([
    (0, nezon_1.Command)({ name: "boitinhyeu", aliases: ["love", "tinhyeu"], description: "Bói tình yêu" }),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FortuneHandler.prototype, "OnLoveFortune", null);
__decorate([
    (0, nezon_1.Command)({ name: "boitinhyeu", aliases: ["daily", "hangngay"], description: "Xem bói vận mệnh hàng ngày" }),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FortuneHandler.prototype, "onDailyFortune", null);
__decorate([
    (0, nezon_1.Command)({ name: "randomfortune", aliases: ["random", "ngaunhien"], description: "Xem bói ngẫu nhiên" }),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FortuneHandler.prototype, "onRandomFortune", null);
__decorate([
    (0, nezon_1.Command)({ name: "tuvihomnay", aliases: ["tuvingaynay", "horoscope"], description: "Tử vi hôm nay" }),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FortuneHandler.prototype, "onQuickHoroscope", null);
exports.FortuneHandler = FortuneHandler = __decorate([
    (0, common_1.Injectable)()
], FortuneHandler);
//# sourceMappingURL=ping.handler.js.map