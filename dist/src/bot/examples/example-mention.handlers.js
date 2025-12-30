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
exports.ExampleMentionHandlers = void 0;
const common_1 = require("@nestjs/common");
const nezon_1 = require("@n0xgg04/nezon");
let ExampleMentionHandlers = class ExampleMentionHandlers {
    async mentionDemo([managedMessage], firstMention) {
        if (!firstMention?.user_id) {
            await managedMessage.reply(nezon_1.SmartMessage.text("Hãy mention 1 người bạn để bot chào họ bằng placeholder nhé!"));
            return;
        }
        await managedMessage.reply(nezon_1.SmartMessage.text("Bot gửi lời chào tới {{target_user}}  👋").addMention({
            target_user: firstMention.user_id,
        }));
    }
    async multiMention([managedMessage], mentions) {
        if (!mentions.length) {
            await managedMessage.reply(nezon_1.SmartMessage.text("Hãy mention vài người bạn rồi thử lại `*multi-mention` nhé!"));
            return;
        }
        const placeholderMap = mentions.reduce((acc, mention, index) => {
            const userId = mention.user_id;
            if (userId) {
                acc[`user_${index + 1}`] = {
                    user_id: userId,
                    username: mention.username ?? undefined,
                };
            }
            return acc;
        }, {});
        if (!Object.keys(placeholderMap).length) {
            await managedMessage.reply(nezon_1.SmartMessage.text("Không tìm thấy user_id trong danh sách mentions."));
            return;
        }
        const sentence = Object.keys(placeholderMap)
            .map((key) => `{{${key}}}`)
            .join(", ");
        await managedMessage.reply(nezon_1.SmartMessage.text(`Xin chào ${sentence}!`).addMention(placeholderMap));
    }
    async mentionRole(args, [managedMessage]) {
        const [roleKey] = args;
        if (!roleKey) {
            await managedMessage.reply(nezon_1.SmartMessage.text("Nhập tên role hoặc id: `*mention-role Support` hoặc `*mention-role id:1840...`"));
            return;
        }
        const trimmed = roleKey.trim();
        const isId = trimmed.toLowerCase().startsWith("id:");
        const payload = isId
            ? trimmed.slice(3).trim()
            : trimmed.replace(/^@+/, "").trim();
        if (!payload) {
            await managedMessage.reply(nezon_1.SmartMessage.text("Role không hợp lệ. Vui lòng nhập `id:ROLE_ID` hoặc tên role hợp lệ."));
            return;
        }
        const roleTarget = isId ? { role_id: payload } : { role_name: payload };
        await managedMessage.reply(nezon_1.SmartMessage.text("Ping {{target_role}} để cập nhật tiến độ!").addMention({
            target_role: roleTarget,
        }));
    }
};
exports.ExampleMentionHandlers = ExampleMentionHandlers;
__decorate([
    (0, nezon_1.Command)("mention-demo"),
    __param(0, (0, nezon_1.AutoContext)()),
    __param(1, (0, nezon_1.Mentions)(0)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ExampleMentionHandlers.prototype, "mentionDemo", null);
__decorate([
    (0, nezon_1.Command)("multi-mention"),
    __param(0, (0, nezon_1.AutoContext)()),
    __param(1, (0, nezon_1.Mentions)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Array]),
    __metadata("design:returntype", Promise)
], ExampleMentionHandlers.prototype, "multiMention", null);
__decorate([
    (0, nezon_1.Command)("mention-role"),
    __param(0, (0, nezon_1.Args)()),
    __param(1, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Array]),
    __metadata("design:returntype", Promise)
], ExampleMentionHandlers.prototype, "mentionRole", null);
exports.ExampleMentionHandlers = ExampleMentionHandlers = __decorate([
    (0, common_1.Injectable)()
], ExampleMentionHandlers);
//# sourceMappingURL=example-mention.handlers.js.map