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
var ExampleComponentHandlers_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleComponentHandlers = void 0;
const common_1 = require("@nestjs/common");
const nezon_1 = require("@n0xgg04/nezon");
let ExampleComponentHandlers = ExampleComponentHandlers_1 = class ExampleComponentHandlers {
    constructor() {
        this.logger = new common_1.Logger(ExampleComponentHandlers_1.name);
    }
    async onButtonDemo(payload, [managedMessage]) {
        const referenceId = payload.message_id ?? managedMessage.id ?? "unknown";
        await managedMessage.reply(nezon_1.SmartMessage.text("Click the button to confirm.").addButton(new nezon_1.ButtonBuilder()
            .setCustomId(`/demo/success/${referenceId}`)
            .setLabel("Confirm")
            .setStyle(nezon_1.ButtonStyle.Success)));
    }
    async onClickDemo([managedMessage]) {
        await managedMessage.reply(nezon_1.SmartMessage.text("Click the buttons below to see onClick handlers in action!")
            .addButton(new nezon_1.ButtonBuilder()
            .setLabel("Button 1 (onClick)")
            .setStyle(nezon_1.ButtonStyle.Primary)
            .onClick(async (context) => {
            await context.message.reply(nezon_1.SmartMessage.text("Button 1 was clicked!"));
        }))
            .addButton(new nezon_1.ButtonBuilder()
            .setLabel("Button 2 (onClick)")
            .setStyle(nezon_1.ButtonStyle.Success)
            .onClick(async ({ channel, user, message }) => {
            await message.reply(nezon_1.SmartMessage.text(`Button 2 was clicked by ${user.display_name} in ${channel.name}!`));
        }))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId("/demo/success/onclick-static")
            .setLabel("Button 3 (setCustomId)")
            .setStyle(nezon_1.ButtonStyle.Secondary)));
    }
    async onUpdateDemo(payload, [managedMessage]) {
        const messageId = payload.message_id ?? managedMessage.id ?? "unknown";
        await managedMessage.reply(nezon_1.SmartMessage.text("Chọn một hành động:")
            .addImage("https://picsum.photos/800/600", {
            filename: "example.jpg",
        })
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId(`/update/${messageId}/cancel`)
            .setLabel("Hủy")
            .setStyle(nezon_1.ButtonStyle.Danger))
            .addButton(new nezon_1.ButtonBuilder()
            .setCustomId(`/update/${messageId}/success`)
            .setLabel("Thành công")
            .setStyle(nezon_1.ButtonStyle.Success)));
    }
    async onUpdateCancel(targetId, [managedMessage]) {
        await managedMessage.update(nezon_1.SmartMessage.text("Đã hủy"));
        if (targetId) {
            this.logger.verbose(`update cancel triggered for message ${targetId}`);
        }
    }
    async onUpdateSuccess(targetId, [managedMessage]) {
        await managedMessage.update(nezon_1.SmartMessage.text("Thành công"));
        if (targetId) {
            this.logger.verbose(`update success triggered for message ${targetId}`);
        }
    }
    async onDemoButtonClicked(payload, sourceId, client, targetMessage) {
        if (!payload?.channel_id || !payload?.message_id) {
            return;
        }
        try {
            const message = targetMessage ?? (await this.getMessageByIds(client, payload));
            if (!message) {
                return;
            }
            const resolvedSourceId = sourceId ?? payload.message_id;
            await message.reply({
                t: `Button acknowledged from ${payload.user_id} (source ${resolvedSourceId}).`,
            });
        }
        catch (error) {
            this.logger.error(`failed to handle demo button for message ${payload.message_id}`, error?.stack);
        }
    }
    async onUserAction([managedMessage], allParams, userId, action) {
        await managedMessage.reply(nezon_1.SmartMessage.text(`User ID: ${userId}\nAction: ${action}\nAll params: ${JSON.stringify(allParams)}`));
    }
    async onQuizAnswer(choice, payload, [managedMessage]) {
        const answer = choice ?? "unknown";
        await managedMessage.reply(nezon_1.SmartMessage.text(`Bạn đã chọn đáp án ${answer}\nUser: ${payload.user_id ?? "unknown"}`));
    }
    async getMessageByIds(client, payload) {
        try {
            const channel = await client.channels.fetch(payload.channel_id);
            return await channel.messages.fetch(payload.message_id);
        }
        catch {
            return undefined;
        }
    }
};
exports.ExampleComponentHandlers = ExampleComponentHandlers;
__decorate([
    (0, nezon_1.Command)("button"),
    __param(0, (0, nezon_1.ChannelMessagePayload)()),
    __param(1, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], ExampleComponentHandlers.prototype, "onButtonDemo", null);
__decorate([
    (0, nezon_1.Command)("onclick"),
    __param(0, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ExampleComponentHandlers.prototype, "onClickDemo", null);
__decorate([
    (0, nezon_1.Command)("update"),
    __param(0, (0, nezon_1.ChannelMessagePayload)()),
    __param(1, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], ExampleComponentHandlers.prototype, "onUpdateDemo", null);
__decorate([
    (0, nezon_1.Component)({ pattern: "/update/:message_id/cancel" }),
    __param(0, (0, nezon_1.ComponentParams)("message_id")),
    __param(1, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], ExampleComponentHandlers.prototype, "onUpdateCancel", null);
__decorate([
    (0, nezon_1.Component)({ pattern: "/update/:message_id/success" }),
    __param(0, (0, nezon_1.ComponentParams)("message_id")),
    __param(1, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], ExampleComponentHandlers.prototype, "onUpdateSuccess", null);
__decorate([
    (0, nezon_1.Component)({ pattern: "/demo/success/:source_id" }),
    __param(0, (0, nezon_1.ComponentPayload)()),
    __param(1, (0, nezon_1.ComponentParams)("source_id")),
    __param(2, (0, nezon_1.Client)()),
    __param(3, (0, nezon_1.ComponentTarget)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ExampleComponentHandlers.prototype, "onDemoButtonClicked", null);
__decorate([
    (0, nezon_1.Component)({ pattern: "/user/:user_id/:action" }),
    __param(0, (0, nezon_1.AutoContext)()),
    __param(1, (0, nezon_1.ComponentParams)()),
    __param(2, (0, nezon_1.ComponentParams)("user_id")),
    __param(3, (0, nezon_1.ComponentParams)("action")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object, String, String]),
    __metadata("design:returntype", Promise)
], ExampleComponentHandlers.prototype, "onUserAction", null);
__decorate([
    (0, nezon_1.Component)({ pattern: "/quiz/answer/:choice" }),
    __param(0, (0, nezon_1.ComponentParams)("choice")),
    __param(1, (0, nezon_1.ComponentPayload)()),
    __param(2, (0, nezon_1.AutoContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Array]),
    __metadata("design:returntype", Promise)
], ExampleComponentHandlers.prototype, "onQuizAnswer", null);
exports.ExampleComponentHandlers = ExampleComponentHandlers = ExampleComponentHandlers_1 = __decorate([
    (0, common_1.Injectable)()
], ExampleComponentHandlers);
//# sourceMappingURL=example-component.handlers.js.map