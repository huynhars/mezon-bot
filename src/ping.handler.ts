import { Injectable } from "@nestjs/common";
import type { Nezon } from "@n0xgg04/nezon";
import { Command, AutoContext, SmartMessage } from "@n0xgg04/nezon";

@Injectable()
export class FortuneHandler {
  // Danh sách các lá bài Tarot
  private tarotCards = [
    { name: "The Fool", meaning: "Sự ngây thơ, khởi đầu mới, niềm tin", fortune: "Hãy mạnh dạn bước vào hành trình mới!" },
    { name: "The Magician", meaning: "Sức mạnh, kỹ năng, sự sáng tạo", fortune: "Bạn có đủ khả năng để biến ước mơ thành hiện thực!" },
    { name: "The High Priestess", meaning: "Trực giác, bí ẩn, tiềm thức", fortune: "Hãy tin vào trực giác của bạn!" },
    { name: "The Empress", meaning: "Sự sung túc, nuôi dưỡng, sáng tạo", fortune: "Thời kỳ thịnh vượng đang đến!" },
    { name: "The Emperor", meaning: "Quyền lực, ổn định, cấu trúc", fortune: "Hãy nắm quyền kiểm soát cuộc sống của bạn!" },
    { name: "The Lovers", meaning: "Tình yêu, sự lựa chọn, hài hòa", fortune: "Một mối quan hệ quan trọng đang chờ đón bạn!" },
    { name: "The Chariot", meaning: "Chiến thắng, ý chí, tiến về phía trước", fortune: "Kiên trì sẽ dẫn đến thành công!" },
    { name: "Strength", meaning: "Sức mạnh nội tâm, lòng can đảm, kiên nhẫn", fortune: "Bạn mạnh mẽ hơn bạn nghĩ!" },
    { name: "The Hermit", meaning: "Suy ngẫm, tìm kiếm nội tâm, cô độc", fortune: "Hãy dành thời gian cho bản thân!" },
    { name: "Wheel of Fortune", meaning: "Vận may, chu kỳ, số phận", fortune: "Vận may đang thay đổi theo hướng tích cực!" },
    { name: "Justice", meaning: "Công lý, sự thật, cân bằng", fortune: "Mọi sự công bằng sẽ đến!" },
    { name: "The Hanged Man", meaning: "Hy sinh, buông bỏ, góc nhìn mới", fortune: "Đôi khi cần thay đổi quan điểm!" },
    { name: "Death", meaning: "Kết thúc, chuyển đổi, tái sinh", fortune: "Một chu kỳ kết thúc để bắt đầu chu kỳ mới!" },
    { name: "Temperance", meaning: "Điều độ, hài hòa, kiên nhẫn", fortune: "Giữ thăng bằng trong mọi việc!" },
    { name: "The Devil", meaning: "Cám dỗ, ràng buộc, vật chất", fortune: "Đừng để bị chi phối bởi dục vọng!" },
    { name: "The Tower", meaning: "Thay đổi đột ngột, thức tỉnh", fortune: "Biến cố có thể mang đến cơ hội!" },
    { name: "The Star", meaning: "Hy vọng, cảm hứng, hồi phục", fortune: "Hãy giữ vững niềm tin!" },
    { name: "The Moon", meaning: "Ảo tưởng, vô thức, bí ẩn", fortune: "Không phải mọi thứ đều như vẻ bề ngoài!" },
    { name: "The Sun", meaning: "Thành công, lạc quan, hạnh phúc", fortune: "Ánh sáng của thành công đang chiếu rọi!" },
    { name: "Judgement", meaning: "Đánh giá, thức tỉnh, quyết định", fortune: "Thời điểm để nhìn nhận lại bản thân!" },
    { name: "The World", meaning: "Hoàn thành, thành tựu, hài lòng", fortune: "Bạn đã đạt được mục tiêu quan trọng!" }
  ];

  // Cung hoàng đạo
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

  // Tính cách theo cung
  private zodiacPersonalities = [
    "Năng động, nhiệt tình, can đảm, bốc đồng",
    "Kiên định, thực tế, đáng tin cậy, cứng đầu",
    "Thông minh, linh hoạt, hài hước, hay thay đổi",
    "Nhạy cảm, trực giác tốt, gia đình là trên hết",
    "Tự tin, sáng tạo, hào phóng, thích thể hiện",
    "Tỉ mỉ, cầu toàn, khiêm tốn, hay lo lắng",
    "Công bằng, hài hòa, lịch sự, hay do dự",
    "Mạnh mẽ, bí ẩn, đam mê, hay ghen tuông",
    "Lạc quan, phiêu lưu, trung thực, thiếu kiên nhẫn",
    "Tham vọng, kiên nhẫn, kỷ luật, cứng nhắc",
    "Độc lập, sáng tạo, nhân đạo, lập dị",
    "Mơ mộng, nhân ái, nghệ sĩ, dễ bị tổn thương"
  ];

  // Đá quý may mắn
  private luckyStones = [
    "Hồng ngọc", "Kim cương", "Ngọc lục bảo", "Ngọc trai",
    "Hổ phách", "Sapphire", "Thạch anh tím", "Topaz",
    "Ngọc bích", "Thạch anh hồng", "Aquamarine", "Đá mặt trăng"
  ];

  // Màu sắc may mắn
  private luckyColors = ["Đỏ", "Vàng", "Xanh lá", "Xanh dương", "Tím", "Hồng", "Cam", "Trắng", "Đen", "Bạc"];

  @Command({ name: "tarot", description: "Rút một lá bài Tarot để xem vận mệnh" })
  async onTarot(@AutoContext() [managedMessage]: Nezon.AutoContext) {
    const randomCard = this.tarotCards[Math.floor(Math.random() * this.tarotCards.length)];
    const cardNumber = Math.floor(Math.random() * 22) + 1;
    
    const message = SmartMessage.text(
      `🎴LÁ BÀI TAROT CỦA BẠN** 🎴\n\n` +
      `Lá bài số ${cardNumber}: ${randomCard.name}\n` +
      `📖Ý nghĩa: ${randomCard.meaning}\n` +
      `🔮Lời tiên tri:** ${randomCard.fortune}\n\n` +
      `💫"Đôi khi, những lá bài tiết lộ điều trái tim đã biết từ lâu"`
    );

    await managedMessage.reply(message);
  }

  @Command({ name: "tuvi", description: "Xem tử vi theo cung hoàng đạo" })
  async onTuVi(@AutoContext() [managedMessage]: Nezon.AutoContext) {
    const randomSignIndex = Math.floor(Math.random() * this.zodiacSigns.length);
    const zodiacSign = this.zodiacSigns[randomSignIndex];
    const personality = this.zodiacPersonalities[randomSignIndex];
    
    // Tạo dự đoán ngẫu nhiên
    const predictions = [
      "Công việc thuận lợi, có cơ hội thăng tiến trong tháng tới",
      "Tài chính ổn định, có khoản thu nhập bất ngờ",
      "Tình cảm phát triển tốt đẹp, có thể gặp được người đặc biệt",
      "Sức khỏe cần được chú ý nhiều hơn, nên nghỉ ngơi đầy đủ",
      "Gặp được quý nhân phù trợ trong công việc",
      "Có chuyến đi xa mang lại nhiều trải nghiệm quý giá",
      "Thời điểm tốt để đầu tư vào bản thân",
      "Nên tham gia các hoạt động xã hội để mở rộng mối quan hệ",
      "Có tin vui từ người thân trong gia đình",
      "Dự án cá nhân sẽ đạt được kết quả tốt"
    ];
    
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    const luckyNumber = Math.floor(Math.random() * 100) + 1;
    const luckyColor = this.luckyColors[Math.floor(Math.random() * this.luckyColors.length)];
    const luckyStone = this.luckyStones[randomSignIndex];

    const message = SmartMessage.text(
      `✨ TỬ VI ${zodiacSign.name.toUpperCase()} ✨\n\n` +
      `📅 Khoảng thời gian: ${zodiacSign.date}\n` +
      `⚡ Nguyên tố: ${zodiacSign.element}\n` +
      `🏷️ Tính cách:** ${personality}\n\n` +
      `🔮 DỰ ĐOÁN THÁNG NÀY:\n${randomPrediction}\n\n` +
      `🎯 VẬN MAY:\n` +
      `• Con số may mắn: ${luckyNumber}\n` +
      `• Màu sắc may mắn: ${luckyColor}\n` +
      `• Đá quý may mắn: ${luckyStone}\n\n`
    );

    await managedMessage.reply(message);
  }

  @Command({ name: "boitinhyeu", aliases: ["love", "tinhyeu"], description: "Bói tình yêu" })
  async onLoveFortune(@AutoContext() [managedMessage]: Nezon.AutoContext) {
    const loveLevels = [
      { level: "💔 Rất thấp", desc: "Cần thời gian để phát triển" },
      { level: "❤️ Thấp", desc: "Đang trong giai đoạn khởi đầu" },
      { level: "❤️‍🔥 Trung bình", desc: "Ổn định và dần phát triển" },
      { level: "💖 Khá cao", desc: "Mối quan hệ tích cực" },
      { level: "💕 Rất cao", desc: "Rất mãnh liệt và sâu sắc" },
      { level: "💘 Xuất sắc", desc: "Tình yêu lý tưởng" }
    ];
    
    const adviceList = [
      "Hãy mở lòng và trung thực với cảm xúc của mình",
      "Thời điểm tốt để bày tỏ tình cảm với người ấy",
      "Cần kiên nhẫn và thấu hiểu đối phương hơn",
      "Tập trung vào việc xây dựng sự tin tưởng",
      "Mối quan hệ hiện tại đang phát triển rất tốt, hãy trân trọng",
      "Sắp có cuộc gặp gỡ định mệnh, hãy sẵn sàng",
      "Đừng ngại thể hiện sự quan tâm",
      "Giao tiếp cởi mở là chìa khóa cho hạnh phúc",
      "Hãy tạo ra những kỷ niệm đẹp bên nhau",
      "Tình yêu cần sự nuôi dưỡng mỗi ngày"
    ];
    
    const randomLove = loveLevels[Math.floor(Math.random() * loveLevels.length)];
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
    const compatibility = Math.floor(Math.random() * 100) + 1;
    const meetingChance = Math.floor(Math.random() * 100) + 1;
    
    // Xác định mức độ phù hợp
    let compatibilityDesc = "";
    if (compatibility >= 80) compatibilityDesc = "Rất phù hợp! 🎉";
    else if (compatibility >= 60) compatibilityDesc = "Khá phù hợp! 😊";
    else if (compatibility >= 40) compatibilityDesc = "Tạm được! 🤔";
    else compatibilityDesc = "Cần cố gắng! 💪";

    const message = SmartMessage.text(
      `💖 BÓI TÌNH YÊU 💖\n\n` +
      `📊 MỨC ĐỘ TÌNH CẢM: ${randomLove.level}\n` +
      `📈 Mô tả: ${randomLove.desc}\n\n` +
      `💞 ĐỘ TƯƠNG HỢP: ${compatibility}%\n` +
      `✨ Đánh giá: ${compatibilityDesc}\n\n` +
      `🤝 CƠ HỘI GẶP GỠ: ${meetingChance}%\n` +
      `💌 LỜI KHUYÊN: ${randomAdvice}\n\n` 
    );

    await managedMessage.reply(message);
  }

  @Command({ name: "dailyfortune", aliases: ["daily", "hangngay"], description: "Xem bói vận mệnh hàng ngày" })
  async onDailyFortune(@AutoContext() [managedMessage]: Nezon.AutoContext) {
    const today = new Date();
    const dayOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"][today.getDay()];
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    
    // Tạo số may mắn dựa trên ngày
    const luckyNumber = (day + month + year) % 100 || 7;
    
    // Xác định ngày đặc biệt
    let specialDay = "";
    if (day === 1) specialDay = "✨ Ngày đầu tháng - Khởi đầu mới!";
    else if (day === 15) specialDay = "🌕 Ngày rằm - Năng lượng mạnh mẽ!";
    else if (dayOfWeek === "Chủ Nhật") specialDay = "☀️ Chủ Nhật - Ngày của gia đình!";
    else if (dayOfWeek === "Thứ Sáu") specialDay = "🎉 Thứ Sáu - Cuối tuần vui vẻ!";
    
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
    
    // Đánh giá năng lượng
    let energyDesc = "";
    if (energyLevel >= 80) energyDesc = "💥 Rất cao - Sẵn sàng hành động!";
    else if (energyLevel >= 60) energyDesc = "⚡ Cao - Làm việc hiệu quả!";
    else if (energyLevel >= 40) energyDesc = "🌀 Trung bình - Ổn định!";
    else if (energyLevel >= 20) energyDesc = "🌊 Thấp - Cần nghỉ ngơi!";
    else energyDesc = "💤 Rất thấp - Nạp năng lượng!";

    const message = SmartMessage.text(
      `📅 ${dayOfWeek.toUpperCase()}, NGÀY ${day}/${month}/${year}** 📅\n\n` +
      `${specialDay ? `🎊 NGÀY ĐẶC BIỆT: ${specialDay}\n\n` : ''}` +
      `🔮 VẬN MỆNH HÔM NAY:\n${randomFortune}\n\n` +
      `📊 CHỈ SỐ NĂNG LƯỢNG: ${energyLevel}%\n` +
      `⚡ **Đánh giá:** ${energyDesc}\n\n` +
      `😊 **TÂM TRẠNG NÊN CÓ:** ${randomMood.mood}\n` +
      `📝 **Lý do:** ${randomMood.desc}\n\n` +
      `🎯 **CON SỐ MAY MẮN:** ${luckyNumber}\n\n` +
      `💫 **LỜI NHẮN TỪ VŨ TRỤ:**\n` +
      `*"Mỗi ngày mới là một trang giấy trắng, hãy viết nên câu chuyện tuyệt vời của riêng bạn!"*\n\n` +
      `📖 **CÁC LỆNH KHÁC:**\n` +
      `• \`!tarot\` - Xem bài Tarot\n` +
      `• \`!tuvi\` - Xem tử vi cung hoàng đạo\n` +
      `• \`!boitinhyeu\` - Bói tình yêu\n` +
      `• \`!randomfortune\` - Bói ngẫu nhiên\n` +
      `• \`!helpfortune\` - Hướng dẫn sử dụng`
    );

    await managedMessage.reply(message);
  }

  @Command({ name: "randomfortune", aliases: ["random", "ngaunhien"], description: "Xem bói ngẫu nhiên" })
  async onRandomFortune(@AutoContext() [managedMessage]: Nezon.AutoContext) {
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
      { element: "Nước 💧", desc: "Cảm xúc, trực giác, chữa lành" },
      { element: "Khí 💨", desc: "Trí tuệ, giao tiếp, tự do" },
      { element: "Đất 🌍", desc: "Ổn định, thực tế, phát triển" }
    ];
    
    const moonPhases = [
      { phase: "Trăng non 🌑", desc: "Khởi đầu mới, ý định" },
      { phase: "Trăng lưỡi liềm 🌒", desc: "Tăng trưởng, hành động" },
      { phase: "Trăng bán nguyệt 🌓", desc: "Quyết định, thách thức" },
      { phase: "Trăng khuyết 🌔", desc: "Phản ánh, điều chỉnh" },
      { phase: "Trăng tròn 🌕", desc: "Hoàn thành, tỏa sáng" },
      { phase: "Trăng khuyết dần 🌖", desc: "Biết ơn, buông bỏ" },
      { phase: "Trăng bán nguyệt cuối 🌗", desc: "Tha thứ, nghỉ ngơi" },
      { phase: "Trăng tàn 🌘", desc: "Buông bỏ, giải phóng" }
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

    const message = SmartMessage.text(
      `🎲 BÓI NGẪU NHIÊN 🎲\n\n` +
      `🔮 LỜI TIÊN TRI:\n"${randomFortune}"\n\n` +
      `🌌 PHA MẶT TRĂNG: ${randomMoonPhase.phase}\n` +
      `📖 Ý nghĩa: ${randomMoonPhase.desc}\n\n` +
      `⚡ NGUYÊN TỐ MAY MẮN: ${randomElement.element}\n` +
      `📚 Đặc tính: ${randomElement.desc}\n\n` +
      `⏰ THỜI GIAN MAY MẮN: ${luckyTime}\n` +
      `💭 KHẲNG ĐỊNH TÍCH CỰC: "${affirmation}"\n\n` +
      `✨ "Vận mệnh không định đoạt cuộc đời bạn, mà chính bạn mới là người vẽ nên con đường của mình"`
    );

    await managedMessage.reply(message);
  }

  @Command({ name: "helpfortune", aliases: ["helpboi", "huongdan"], description: "Hướng dẫn sử dụng bot bói toán" })
  async onHelp(@AutoContext() [managedMessage]: Nezon.AutoContext) {
    const message = SmartMessage.text(
      `🔮 HƯỚNG DẪN SỬ DỤNG BOT BÓI TOÁN 🔮\n\n` +
      `✨ Tất cả các kết quả chỉ mang tính chất giải trí và tham khảo!** ✨\n\n` +
      `📖 CÁC LỆNH CÓ SẴN:\n\n` +
      `🎴 \`!tarot\` - Rút một lá bài Tarot ngẫu nhiên\n` +
      `   • Ý nghĩa và lời tiên tri từ lá bài*\n\n` +
      `✨ \`!tuvi\` - Xem tử vi theo cung hoàng đạo\n` +
      `   • *Dự đoán, con số may mắn, màu sắc và đá quý*\n\n` +
      `💖 \`!boitinhyeu\` - Bói tình yêu và duyên phận\n` +
      `   • Cũng có thể dùng \`!love\` hoặc \`!tinhyeu\`*\n` +
      `   • Độ tương hợp và lời khuyên tình cảm*\n\n` +
      `📅 \`!dailyfortune\` - Xem bói vận mệnh hàng ngày\n` +
      `   • Cũng có thể dùng \`!daily\` hoặc \`!hangngay\`*\n` +
      `   • Vận mệnh, năng lượng, tâm trạng nên có*\n\n` +
      `🎲 \`!randomfortune\`- Xem bói ngẫu nhiên\n` +
      `   • Cũng có thể dùng \`!random\` hoặc \`!ngaunhien\`*\n` +
      `   • Lời tiên tri, nguyên tố, pha mặt trăng*\n\n` +
      `❓ \`!helpfortune\` - Hiển thị hướng dẫn này\n` +
      `   • Cũng có thể dùng \`!helpboi\` hoặc \`!huongdan\`*\n\n` +
      `💫 LƯU Ý QUAN TRỌNG:\n` +
      `• Đây chỉ là trò chơi giải trí\n` +
      `• Không thay thế cho lời khuyên chuyên môn\n` +
      `• Hãy giữ tinh thần lạc quan và vui vẻ!\n\n` +
      `🌟 "Tương lai không phải để đoán trước, mà để tạo ra. Hãy là kiến trúc sư của chính số phận mình!" 🌟`
    );

    await managedMessage.reply(message);
  }

  @Command({ name: "tuvingay", aliases: ["tuvingaynay", "horoscope"], description: "Tử vi nhanh trong ngày" })
  async onQuickHoroscope(@AutoContext() [managedMessage]: Nezon.AutoContext) {
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
    
    let fortuneText = `✨ TỬ VI NHANH - ${zodiacSign.name.toUpperCase()}** ✨\n\n`;
    fortuneText += `📅 Hôm nay: ${new Date().toLocaleDateString('vi-VN')}\n`;
    fortuneText += `⚡ Tổng quan: ${quickFortunes[Math.floor(Math.random() * quickFortunes.length)]}\n\n`;
    
    fortuneText += `📊 CHI TIẾT TỪNG MẶT:\n`;
    
    areas.forEach(area => {
      const fortune = quickFortunes[Math.floor(Math.random() * quickFortunes.length)];
      fortuneText += `${area.emoji} **${area.name}:** ${fortune}\n`;
    });
    
    fortuneText += `\n💡 **LỜI KHUYÊN NHANH:**\n`;
    const quickAdvice = [
      "Hãy tin vào bản năng",
      "Kiên nhẫn là chìa khóa",
      "Mạnh dạn thể hiện bản thân",
      "Lắng nghe nhiều hơn",
      "Hành động quyết đoán"
    ][Math.floor(Math.random() * 5)];
    
    fortuneText += `"${quickAdvice}"\n\n`;
    fortuneText += `🎯 SỐ MAY MẮN: ${Math.floor(Math.random() * 10) + 1}\n`;
    fortuneText += `🌈 MÀU NÊN DÙNG: ${this.luckyColors[Math.floor(Math.random() * this.luckyColors.length)]}\n\n`;
    fortuneText += `"Mỗi ngày là một cơ hội mới để tỏa sáng!"`;

    await managedMessage.reply(SmartMessage.text(fortuneText));
  }
}
