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
var ExampleEventHandlers_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleEventHandlers = void 0;
const common_1 = require("@nestjs/common");
const nezon_1 = require("@n0xgg04/nezon");
const nezon_2 = require("@n0xgg04/nezon");
let ExampleEventHandlers = ExampleEventHandlers_1 = class ExampleEventHandlers {
    constructor() {
        this.logger = new common_1.Logger(ExampleEventHandlers_1.name);
    }
    async logChannelMessage(message, messageId, content, channel, channelId, user, username) {
        const channelLabel = channelId ?? channel?.id ?? message.channel_id ?? "unknown";
        const author = username ??
            user?.username ??
            message.username ??
            message.display_name ??
            message.sender_id ??
            "unknown";
        this.logger.verbose(`message ${messageId ?? message.message_id ?? "unknown"} received from ${author} in channel ${channelLabel}: ${content}`);
    }
    async onVoice(event, dm) {
        await dm.send(event.user_id, nezon_1.SmartMessage.text("Đã join"));
    }
    async onTokenSend(event, dm) {
        await dm.send(event.sender_id, nezon_1.SmartMessage.text(`Bạn đã gửi ${event.amount} token đến ${event.transaction_id}`));
        this.logger.verbose(`token send received: ${event.amount}`);
    }
};
exports.ExampleEventHandlers = ExampleEventHandlers;
__decorate([
    (0, nezon_1.On)(nezon_2.Nezon.Events.ChannelMessage),
    __param(0, (0, nezon_1.ChannelMessagePayload)()),
    __param(1, (0, nezon_1.ChannelMessagePayload)("message_id")),
    __param(2, (0, nezon_1.MessageContent)()),
    __param(3, (0, nezon_1.Channel)()),
    __param(4, (0, nezon_1.Channel)("id")),
    __param(5, (0, nezon_1.User)()),
    __param(6, (0, nezon_1.User)("avartar")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object, String, Object, String]),
    __metadata("design:returntype", Promise)
], ExampleEventHandlers.prototype, "logChannelMessage", null);
__decorate([
    (0, nezon_1.On)(nezon_2.Nezon.Events.VoiceJoinedEvent),
    __param(0, (0, nezon_1.EventPayload)()),
    __param(1, (0, nezon_1.AutoContext)("dm")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExampleEventHandlers.prototype, "onVoice", null);
__decorate([
    (0, nezon_1.On)(nezon_2.Nezon.Events.TokenSend),
    __param(0, (0, nezon_1.EventPayload)()),
    __param(1, (0, nezon_1.AutoContext)("dm")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExampleEventHandlers.prototype, "onTokenSend", null);
exports.ExampleEventHandlers = ExampleEventHandlers = ExampleEventHandlers_1 = __decorate([
    (0, common_1.Injectable)()
], ExampleEventHandlers);
//# sourceMappingURL=example-event.handlers.js.map