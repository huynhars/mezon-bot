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
exports.ExampleEmbedHandlers = void 0;
const common_1 = require("@nestjs/common");
const nezon_1 = require("@n0xgg04/nezon");
let ExampleEmbedHandlers = class ExampleEmbedHandlers {
    async onImageDemo(args, [managedMessage]) {
        const imageUrl = args[0] || "https://picsum.photos/800/600";
        await managedMessage.reply(nezon_1.SmartMessage.text("Here are some example images!")
            .addImage(imageUrl, {
            filename: "example1.jpg",
            width: 800,
            height: 600,
        })
            .addImage("https://picsum.photos/400/300", {
            filename: "example2.jpg",
            width: 400,
            height: 300,
        })
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/demo/success/static")
            .setLabel("Confirm")
            .setStyle(nezon_1.ButtonStyle.Link)));
    }
    async onEmbedDemo([managedMessage]) {
        await managedMessage.reply(nezon_1.SmartMessage.text("").addEmbed(new nezon_1.EmbedBuilder()
            .setColor("#abcdef")
            .setTitle("Example Embed Title")
            .setThumbnail("https://example.com/example-thumbnail.jpg")
            .addField("Field 1", "Value 1", true)
            .addField("Field 2", "Value 2", true)
            .addField("Field 3", "Value 3", true)
            .setImage("https://example.com/example-image.jpg")
            .setFooter("Example footer text")));
    }
    async onFormDemo([managedMessage]) {
        await managedMessage.reply(nezon_1.SmartMessage.build()
            .addEmbed(new nezon_1.EmbedBuilder()
            .setColor("#E91E63")
            .setTitle("POLL CREATOR")
            .addTextField("Title", "title", {
            placeholder: "Input title here",
            defaultValue: "",
        })
            .addTextField("Option 1️⃣", "option_1", {
            placeholder: "Input option 1 here",
            defaultValue: "",
        })
            .addTextField("Option 2️⃣", "option_2", {
            placeholder: "Input option 2 here",
            defaultValue: "",
        })
            .addSelectField("Type", "type", [
            { label: "Single choice", value: "SINGLE" },
            { label: "Multiple choice", value: "MULTIPLE" },
        ], "SINGLE")
            .addTextField("Expired Time (hour) - Default: 168 hours (7 days)", "expired", {
            placeholder: "Input expired time here",
            defaultValue: 168,
            isNumber: true,
        })
            .setTimestamp()
            .setFooter("Powered by Mezon", "https://cdn.mezon.vn/1837043892743049216/1840654271217930240/1827994776956309500/857_0246x0w.webp"))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/poll/cancel")
            .setLabel("Cancel")
            .setStyle(nezon_1.ButtonStyle.Secondary))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/poll/add-option")
            .setLabel("Add Option")
            .setStyle(nezon_1.ButtonStyle.Primary))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/poll/create")
            .setLabel("Create")
            .setStyle(nezon_1.ButtonStyle.Success)));
    }
    async onQuiz([managedMessage]) {
        const choices = [
            "business strategy, human resource practices, organisational capabilities",
            "marketing strategy, human resource practices, organisational capabilities",
            "business strategy, human resource practices, organisational structure",
            "marketing strategy, human resource practices, organisational structure",
            "to supervise",
            "to stimulate",
            "to motivate",
            "all of the above",
        ];
        await managedMessage.reply(nezon_1.SmartMessage.build()
            .addEmbed(new nezon_1.EmbedBuilder()
            .setColor("#E91E63")
            .setTitle("[SPECIALIZED] The basic managerial skill(s) is(are)")
            .setDescriptionMarkdown(choices.map((choice, idx) => `${idx + 1} - ${choice}`), { after: "(Chọn đáp án đúng tương ứng phía bên dưới!)" }))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/quiz/answer/1")
            .setLabel("1")
            .setStyle(nezon_1.ButtonStyle.Primary))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/quiz/answer/2")
            .setLabel("2")
            .setStyle(nezon_1.ButtonStyle.Primary))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/quiz/answer/3")
            .setLabel("3")
            .setStyle(nezon_1.ButtonStyle.Primary))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/quiz/answer/4")
            .setLabel("4")
            .setStyle(nezon_1.ButtonStyle.Primary))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/quiz/answer/5")
            .setLabel("5")
            .setStyle(nezon_1.ButtonStyle.Primary))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/quiz/answer/6")
            .setLabel("6")
            .setStyle(nezon_1.ButtonStyle.Primary))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/quiz/answer/7")
            .setLabel("7")
            .setStyle(nezon_1.ButtonStyle.Primary))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/quiz/answer/8")
            .setLabel("8")
            .setStyle(nezon_1.ButtonStyle.Primary)));
    }
    async onSlots([managedMessage], utils) {
        const pool = [
            [
                "1.png",
                "2.png",
                "3.png",
                "4.png",
                "5.png",
                "6.png",
                "7.png",
                "8.png",
                "9.png",
                "10.png",
                "11.png",
                "12.png",
                "13.png",
                "14.png",
                "15.png",
                "10.png",
            ],
            [
                "1.png",
                "2.png",
                "3.png",
                "4.png",
                "5.png",
                "6.png",
                "7.png",
                "8.png",
                "9.png",
                "10.png",
                "11.png",
                "12.png",
                "13.png",
                "14.png",
                "15.png",
                "12.png",
            ],
            [
                "1.png",
                "2.png",
                "3.png",
                "4.png",
                "5.png",
                "6.png",
                "7.png",
                "8.png",
                "9.png",
                "10.png",
                "11.png",
                "12.png",
                "13.png",
                "14.png",
                "15.png",
                "3.png",
            ],
        ];
        const description = [
            "",
            "Jackpot: 1.337.517đ",
            "Bạn đã cược: 5.000đ",
            "Bạn thua: 5.000đ",
            "Jackpot mới: 1.342.017đ",
            "",
        ].join("\n");
        const animationAck = await managedMessage.reply(nezon_1.SmartMessage.text("").addEmbed(new nezon_1.EmbedBuilder()
            .setColor("#1F8B4C")
            .setTitle("🎰 Kết quả Slots 🎰")
            .setDescription(description)
            .addAnimatedImage({
            id: "slots",
            imageUrl: "https://cdn.mezon.ai/0/1834156727516270592/1805415525119955000/1751356942745_1slots.png",
            positionUrl: "https://cdn.mezon.ai/0/1834156727516270592/1827994776956309500/1751357108975_slots.json",
            pool,
            repeat: 3,
            duration: 0.35,
        })));
        if (!animationAck?.message_id || !animationAck?.channel_id) {
            return;
        }
        setTimeout(async () => {
            const animatedMessage = await utils.getManagedMessage(animationAck.message_id, animationAck.channel_id);
            if (!animatedMessage) {
                return;
            }
            await animatedMessage.update(nezon_1.SmartMessage.text("").addEmbed(new nezon_1.EmbedBuilder()
                .setColor("#1F8B4C")
                .setTitle("🎰 Kết quả Slots 🎰")
                .setDescription(description)
                .addAnimatedImage({
                id: "slots-result",
                imageUrl: "https://cdn.mezon.ai/0/1834156727516270592/1805415525119955000/1751356942745_1slots.png",
                positionUrl: "https://cdn.mezon.ai/0/1834156727516270592/1827994776956309500/1751357108975_slots.json",
                pool,
                repeat: 3,
                duration: 0.35,
                isResult: true,
                extra: {
                    jackpot: 1337517,
                },
            })));
        }, 1300);
    }
};
exports.ExampleEmbedHandlers = ExampleEmbedHandlers;
__decorate([
    (0, nezon_1.Command)("image"),
    __param(0, (0, nezon_1.Args)()),
    __param(1, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Array]),
    __metadata("design:returntype", Promise)
], ExampleEmbedHandlers.prototype, "onImageDemo", null);
__decorate([
    (0, nezon_1.Command)("embed"),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ExampleEmbedHandlers.prototype, "onEmbedDemo", null);
__decorate([
    (0, nezon_1.Command)("form"),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ExampleEmbedHandlers.prototype, "onFormDemo", null);
__decorate([
    (0, nezon_1.Command)("quiz"),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ExampleEmbedHandlers.prototype, "onQuiz", null);
__decorate([
    (0, nezon_1.Command)("slots"),
    __param(0, (0, nezon_1.AutoContext)()),
    __param(1, (0, nezon_1.NezonUtils)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Function]),
    __metadata("design:returntype", Promise)
], ExampleEmbedHandlers.prototype, "onSlots", null);
exports.ExampleEmbedHandlers = ExampleEmbedHandlers = __decorate([
    (0, common_1.Injectable)()
], ExampleEmbedHandlers);
//# sourceMappingURL=example-embed.handlers.js.map