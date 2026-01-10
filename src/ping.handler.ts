import { Injectable } from "@nestjs/common";
import type { Nezon } from "@n0xgg04/nezon";
import { Command, AutoContext, SmartMessage } from "@n0xgg04/nezon";
import { describe } from "node:test";

@Injectable()
export class FortuneHandler {


  // Danh sách các lá bài Tarot
  private tarotCards = [
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
  ]

  // Cung Hoàng Đạo

  private zodiacSigns = [
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

  // Tính cách theo cung hoàng đạo
  private zodiacPersonalities = [
    "Năng động, nhiệt tình", "Kiên định, thực tế", "Thông minh, linh hoạt",
    "Nhạy cảm, trực giác tốt", "Tự tin, sáng tạo", "Tỉ mỉ, cầu toàn",
    "Công bằng, hài hòa", "Mạnh mẽ, bí ẩn", "Lạc quan, phiêu lưu",
    "Tham vọng, kiên nhẫn", "Độc lập, sáng tạo", "Mơ mộng, nhân ái"
  ];

  

  @Command({ name: "tarot", description: "Rút một lá bài Tarot xem vận mệnh" })
  async onTarot(@AutoContext() [managedMessage]: Nezon.AutoContext) {
    const randomCard = this.tarotCards[Math.floor(Math.random() * this.tarotCards.length)];

    const message = SmartMessage.text(
      `🔮 Lá bài Tarot của bạn: ${randomCard.name}\n` +
      `📖 Ý nghĩa: ${randomCard.meaning}\n` +
      `💫 Lời tiên tri: ${randomCard.fortune}\n\n` +
      `"Số phận không phải là điều chúng ta gặp, mà là điều chúng ta tạo ra"`
    )

    await managedMessage.reply(message)
  }

  private zodiacPool = [...this.zodiacSigns]

  @Command({ name: "tuvi", description: "Xem tử vi theo cung hoàng đạo" })
  async onTuVi(@AutoContext() [managedMessage]: Nezon.AutoContext) {
    const randomSignIndex = Math.floor(Math.random() * this.zodiacSigns.length);
    const zodiacSign = this.zodiacPool.splice(randomSignIndex, 1)[0];
    const personality = this.zodiacPersonalities[this.zodiacSigns.indexOf(zodiacSign)];

    // Tạo dự đoán ngẫu nhiên
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
    const message = SmartMessage.text(
      `✨ Tử vi ${zodiacSign.name} hôm nay ✨\n\n` +
      `🏷️ Tính cách: ${personality}\n` +
      `🔮 Dự đoán: ${randomPrediction}\n` +
      `🎯 Con số may mắn: ${luckyNumber}\n` +
      `🌈 Màu sắc may mắn: ${luckyColor}\n\n` +
      `"Mỗi ngày là một trang mới, hãy viết nên câu chuyện của riêng bạn!"`
    )

    await managedMessage.reply(message);
  }

  @Command({ name: "boitinhyeu", aliases: ["love", "tinhyeu"], description: "Bói tình yêu" })
  async OnLoveFortune(@AutoContext() [managedMessage]: Nezon.AutoContext) {
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

    // Xác định mức độ phù hợp
    let compatibilityDesc = "";
    if (compatibility >= 80) compatibilityDesc = "Rất phù hợp! 🎉";
    else if (compatibility >= 60) compatibilityDesc = "Khá phù hợp! 😊";
    else if (compatibility >= 40) compatibilityDesc = "Tạm được! 🤔";
    else compatibilityDesc = "Cần cố gắng! 💪"

    const message = SmartMessage.text(
      `💖 Bói Tình Yêu 💖\n\n` +
      `📊 Mức độ tình yêu: ${randomLoveLevel}\n` +
      `💞 Độ tương hợp: ${compatibility}%\n` +
      `💌 Lời khuyên: ${randomAdvice}\n\n` +
      `"Tình yêu đích thực không phải là tìm người hoàn hảo, mà là học cách yêu thương một người không hoàn hảo một cách hoàn hảo"`
    );

    await managedMessage.reply(message);
  }
  @Command({ name: "xemsomaymanhomnay", aliases: ["daily", "hangngay"], description: "Số may mắn hôm nay" })
  async onDailyFortune(@AutoContext() [managedMessage]: Nezon.AutoContext) {
    // Tạo các nút cho các loại bói khác nhau
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    // Số may mắn theo ngày
    const luckyNumber = (day + month + year) % 100 || 7;

    const luckyMessages = [
      "Hãy tin vào trực giác của bạn hôm nay ✨",
      "Một cơ hội nhỏ có thể mang lại điều lớn lao 🍀",
      "Nụ cười sẽ mang lại may mắn cho bạn 😊",
      "Hôm nay thích hợp để bắt đầu điều mới 🌱",
      "Giữ tâm thế tích cực, may mắn sẽ đến 💫"
    ];

    const message = SmartMessage.text(
      `🍀 SỐ MAY MẮN HÔM NAY 🍀\n\n` +
      `📅 ${today.toLocaleDateString("vi-VN")}\n` +
      `🎯 Con số may mắn: ${luckyNumber}\n\n` +
      `💬 Thông điệp:\n"${luckyMessages[Math.floor(Math.random() * luckyMessages.length)]}"`
    );

    await managedMessage.reply(message);
  }




  @Command({ name: "menh", description: "Xem bói theo mệnh & mặc gì hôm nay" })
  async onMenh(@AutoContext() [managedMessage]: Nezon.AutoContext) {
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

    const message = SmartMessage.text(
      `🔮 BÓI THEO MỆNH HÔM NAY 🔮\n\n` +
      `🧿 Mệnh: ${menh}\n` +
      `👕 Nên mặc: ${data.wear.join(", ")}\n` +
      `🚫 Tránh mặc: ${data.avoid.join(", ")}\n\n` +
      `💬 Lời khuyên: ${data.advice}`
    );

    await managedMessage.reply(message);
  }

 



  @Command({ name: "tuvihomnay", aliases: ["tuvingaynay", "horoscope"], description: "Tử vi hôm nay" })
  async onQuickHoroscope(@AutoContext() [managedMessage]: Nezon.AutoContext) {
    const randomSignIndex = Math.floor(Math.random() * this.zodiacSigns.length);
    const zodiacSign = this.zodiacSigns[randomSignIndex];

    const quickFortunes = [
      "⭐ Rất tốt - Mọi việc suôn sẻ",
      "👍 Tốt - Tiến triển tích cực",
      "↔️ Bình thường - Ổn định",
      "⚠️ Cẩn thận - Có chút trở ngại",
      "🌀 Biến động - Cần linh hoạt"
    ]

    const areas = [
      { name: "Công việc", emoji: "💼" },
      { name: "Tài chính", emoji: "💰" },
      { name: "Tình yêu", emoji: "❤️" },
      { name: "Sức khỏe", emoji: "🏥" },
      { name: "Gia đình", emoji: "👨‍👩‍👧‍👦" },
      { name: "Bạn bè", emoji: "👫" }
    ];

    let fortuneText = `✨ Tử vi hôm nay - ${zodiacSign.name.toUpperCase()} ✨\n\n`;

    fortuneText += `📅 Hôm nay: ${new Date().toLocaleDateString('vi-VN')}\n`
    fortuneText += `⚡ Tổng quan: ${quickFortunes[Math.floor(Math.random() * quickFortunes.length)]}\n\n`
    fortuneText += `📊 CHI TIẾT TỪNG MẶT:\n`

    areas.forEach(areas => {
      const fortune = quickFortunes[Math.floor(Math.random() * quickFortunes.length)];
      fortuneText += `${areas.emoji} ${areas.name} ${fortune}\n`;

      fortuneText += `\n💡 LỜI KHUYÊN NHANH:\n`;
    })

    const quickAdvice = [
      "Hãy tin vào bản năng",
      "Kiên nhẫn là chìa khóa",
      "Mạnh dạn thể hiện bản thân",
      "Lắng nghe nhiều hơn",
      "Hành động quyết đoán"
    ][Math.floor(Math.random() * 5)]

    fortuneText += `"${quickAdvice}\n\n`;
    fortuneText += `🎯 SỐ MAY MẮN: ${Math.floor(Math.random() * 10) + 1}\n`;
    fortuneText += `"Mỗi ngày là một cơ hội mới để tỏa sáng!"`;

    await managedMessage.reply(SmartMessage.text(fortuneText));

  }
}
