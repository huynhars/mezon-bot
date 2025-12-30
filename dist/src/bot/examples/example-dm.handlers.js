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
exports.ExampleDMHandlers = void 0;
const common_1 = require("@nestjs/common");
const nezon_1 = require("@n0xgg04/nezon");
let ExampleDMHandlers = class ExampleDMHandlers {
    async onDMDemo(args, managedMessage, dm) {
        const targetUserId = args[0];
        if (!targetUserId) {
            await managedMessage.reply(nezon_1.SmartMessage.text("Sử dụng: *dm <user_id>\n\nHoặc dùng *senddm để gửi DM cho người gửi tin nhắn này."));
            return;
        }
        try {
            await dm.send(targetUserId, nezon_1.SmartMessage.text("Đây là tin nhắn DM được gửi từ bot!"));
            await managedMessage.reply(nezon_1.SmartMessage.text(`✅ Đã gửi DM đến user ${targetUserId}`));
        }
        catch (error) {
            await managedMessage.reply(nezon_1.SmartMessage.text(`❌ Lỗi khi gửi DM: ${error.message}`));
        }
    }
    async onSendDMToSender(managedMessage, user) {
        try {
            await managedMessage.sendDM(nezon_1.SmartMessage.text("Đây là tin nhắn DM được gửi tự động cho bạn!"));
            await managedMessage.reply(nezon_1.SmartMessage.text(`✅ Đã gửi DM đến ${user?.username ?? user?.display_name ?? "bạn"}`));
        }
        catch (error) {
            await managedMessage.reply(nezon_1.SmartMessage.text(`❌ Lỗi khi gửi DM: ${error.message}`));
        }
    }
};
exports.ExampleDMHandlers = ExampleDMHandlers;
__decorate([
    (0, nezon_1.Command)("dm"),
    __param(0, (0, nezon_1.Args)()),
    __param(1, (0, nezon_1.AutoContext)("message")),
    __param(2, (0, nezon_1.AutoContext)("dm")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object, Object]),
    __metadata("design:returntype", Promise)
], ExampleDMHandlers.prototype, "onDMDemo", null);
__decorate([
    (0, nezon_1.Command)("senddm"),
    __param(0, (0, nezon_1.AutoContext)("message")),
    __param(1, (0, nezon_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExampleDMHandlers.prototype, "onSendDMToSender", null);
exports.ExampleDMHandlers = ExampleDMHandlers = __decorate([
    (0, common_1.Injectable)()
], ExampleDMHandlers);
//# sourceMappingURL=example-dm.handlers.js.map