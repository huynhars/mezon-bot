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
exports.ExampleCommandHandlers = void 0;
const common_1 = require("@nestjs/common");
const nezon_1 = require("@n0xgg04/nezon");
let ExampleCommandHandlers = class ExampleCommandHandlers {
    async onPing(args, [managedMessage]) {
        const suffix = args.length ? args.join(" ") : "pong";
        await managedMessage.reply(nezon_1.SmartMessage.system(suffix));
    }
    async onFileDemo([managedMessage]) {
        await managedMessage.reply(nezon_1.SmartMessage.text("Here is a file attachment!").addFile("https://cdn.mezon.ai/1779484504377790464/1840658523503988736/1838769001518338000/1762397837280_apps.apple.com_main.zip", "apps.apple.com-main.zip", "application/x-zip-compressed", { size: 3215230 }));
    }
    async onPrompt(args, [managedMessage], user, content) {
        const userText = args.length ? args.join(" ") : "";
        const userId = user?.id ?? "unknown";
        await managedMessage.reply(nezon_1.SmartMessage.text(`User ID: ${userId}\nTin nhắn: ${content ?? userText}`));
    }
    async onInspect(attachments, firstAttachment, mentions, firstMention, managedMessage) {
        const attachmentLines = attachments.length
            ? attachments
                .map((file, index) => {
                const label = file.filename ?? file.url ?? "unknown";
                return `${index + 1}. ${label}`;
            })
                .join("\n")
            : "Không có file đính kèm";
        const mentionLabels = mentions.length
            ? mentions
                .map((item) => item.username ?? item.user_id ?? "unknown")
                .join(", ")
            : "Không có mention";
        const summary = [
            `Tổng số file: ${attachments.length}`,
            `File đầu tiên: ${firstAttachment?.filename ?? firstAttachment?.url ?? "không có"}`,
            `Tổng số mention: ${mentions.length}`,
            `Mention đầu tiên: ${firstMention?.username ?? firstMention?.user_id ?? "không có"}`,
            "",
            "Danh sách file:",
            attachmentLines,
            "",
            `Mentions: ${mentionLabels}`,
        ].join("\n");
        await managedMessage.reply(nezon_1.SmartMessage.text(summary));
    }
    async onChannelDemo(channel) {
        if (!channel) {
            return;
        }
        await channel.send(nezon_1.SmartMessage.text("Tin nhắn này được gửi trực tiếp vào channel hiện tại!"));
    }
    async onChannelTo(args, channel) {
        if (!channel) {
            return;
        }
        const [targetChannelId] = args;
        if (!targetChannelId) {
            await channel.send(nezon_1.SmartMessage.text("Sử dụng: *channel-to <channel_id> để gửi tới channel khác"));
            return;
        }
        await channel
            .find(targetChannelId)
            .send(nezon_1.SmartMessage.text(`Xin chào channel ${targetChannelId}! Đây là tin nhắn được gửi bằng ChannelHelper.`));
    }
};
exports.ExampleCommandHandlers = ExampleCommandHandlers;
__decorate([
    (0, nezon_1.Command)({ name: "ping", aliases: ["pong"] }),
    __param(0, (0, nezon_1.Args)()),
    __param(1, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Array]),
    __metadata("design:returntype", Promise)
], ExampleCommandHandlers.prototype, "onPing", null);
__decorate([
    (0, nezon_1.Command)("file"),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ExampleCommandHandlers.prototype, "onFileDemo", null);
__decorate([
    (0, nezon_1.Command)("prompt"),
    __param(0, (0, nezon_1.Args)()),
    __param(1, (0, nezon_1.AutoContext)()),
    __param(2, (0, nezon_1.User)()),
    __param(3, (0, nezon_1.MessageContent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Array, Object, String]),
    __metadata("design:returntype", Promise)
], ExampleCommandHandlers.prototype, "onPrompt", null);
__decorate([
    (0, nezon_1.Command)("inspect"),
    __param(0, (0, nezon_1.Attachments)()),
    __param(1, (0, nezon_1.Attachments)(0)),
    __param(2, (0, nezon_1.Mentions)()),
    __param(3, (0, nezon_1.Mentions)(0)),
    __param(4, (0, nezon_1.AutoContext)("message")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object, Array, Object, Object]),
    __metadata("design:returntype", Promise)
], ExampleCommandHandlers.prototype, "onInspect", null);
__decorate([
    (0, nezon_1.Command)("channel-demo"),
    __param(0, (0, nezon_1.AutoContext)("channel")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExampleCommandHandlers.prototype, "onChannelDemo", null);
__decorate([
    (0, nezon_1.Command)("channel-to"),
    __param(0, (0, nezon_1.Args)()),
    __param(1, (0, nezon_1.AutoContext)("channel")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ExampleCommandHandlers.prototype, "onChannelTo", null);
exports.ExampleCommandHandlers = ExampleCommandHandlers = __decorate([
    (0, common_1.Injectable)()
], ExampleCommandHandlers);
//# sourceMappingURL=example-command.handlers.js.map