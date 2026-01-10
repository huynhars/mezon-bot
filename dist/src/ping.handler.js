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
        this.zodiacPool = [...this.zodiacSigns];
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
        const zodiacSign = this.zodiacPool.splice(randomSignIndex, 1)[0];
        const personality = this.zodiacPersonalities[this.zodiacSigns.indexOf(zodiacSign)];
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
        const message = nezon_1.SmartMessage.text(`✨ Tử vi ${zodiacSign.name} hôm nay ✨\n\n` +
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
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const luckyNumber = (day + month + year) % 100 || 7;
        const luckyMessages = [
            "Hãy tin vào trực giác của bạn hôm nay ✨",
            "Một cơ hội nhỏ có thể mang lại điều lớn lao 🍀",
            "Nụ cười sẽ mang lại may mắn cho bạn 😊",
            "Hôm nay thích hợp để bắt đầu điều mới 🌱",
            "Giữ tâm thế tích cực, may mắn sẽ đến 💫"
        ];
        const message = nezon_1.SmartMessage.text(`🍀 SỐ MAY MẮN HÔM NAY 🍀\n\n` +
            `📅 ${today.toLocaleDateString("vi-VN")}\n` +
            `🎯 Con số may mắn: ${luckyNumber}\n\n` +
            `💬 Thông điệp:\n"${luckyMessages[Math.floor(Math.random() * luckyMessages.length)]}"`);
        await managedMessage.reply(message);
    }
    async onMenh([managedMessage]) {
        const menhs = {
            Kim: {
                wear: ["Trắng", "Xám", "Vàng nhạt"],
                avoid: ["Đỏ", "Hồng"],
                advice: "Thuận lợi cho công việc và tài chính"
            },
            Mộc: {
                wear: ["Xanh lá", "Nâu"],
                avoid: ["Trắng", "Xám"],
                advice: "Phù hợp khởi đầu mới"
            },
            Thủy: {
                wear: ["Xanh dương", "Đen"],
                avoid: ["Vàng", "Nâu"],
                advice: "Tốt cho giao tiếp và cảm xúc"
            },
            Hỏa: {
                wear: ["Đỏ", "Cam", "Hồng"],
                avoid: ["Đen", "Xanh dương"],
                advice: "Năng lượng cao, nên hành động"
            },
            Thổ: {
                wear: ["Vàng", "Nâu đất"],
                avoid: ["Xanh lá"],
                advice: "Ổn định, tránh quyết định vội"
            }
        };
        const keys = Object.keys(menhs);
        const menh = keys[Math.floor(Math.random() * keys.length)];
        const data = menhs[menh];
        const message = nezon_1.SmartMessage.text(`🔮 BÓI THEO MỆNH HÔM NAY 🔮\n\n` +
            `🧿 Mệnh: ${menh}\n` +
            `👕 Nên mặc: ${data.wear.join(", ")}\n` +
            `🚫 Tránh mặc: ${data.avoid.join(", ")}\n\n` +
            `💬 Lời khuyên: ${data.advice}`);
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
    (0, nezon_1.Command)({ name: "xemsomaymanhomnay", aliases: ["daily", "hangngay"], description: "Số may mắn hôm nay" }),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FortuneHandler.prototype, "onDailyFortune", null);
__decorate([
    (0, nezon_1.Command)({ name: "menh", description: "Xem bói theo mệnh & mặc gì hôm nay" }),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FortuneHandler.prototype, "onMenh", null);
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