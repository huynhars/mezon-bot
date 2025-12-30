import { Nezon } from "@n0xgg04/nezon";
export declare class ExampleEventHandlers {
    private readonly logger;
    logChannelMessage(message: Nezon.ChannelMessage, messageId: string | undefined, content: string, channel: Nezon.Channel | undefined, channelId: string | undefined, user: Nezon.User | undefined, username: string | undefined): Promise<void>;
    onVoice(event: Nezon.VoiceJoinedPayload, dm: Nezon.AutoContextType.DM): Promise<void>;
    onTokenSend(event: Nezon.TokenSendPayload, dm: Nezon.AutoContextType.DM): Promise<void>;
}
