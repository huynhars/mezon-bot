import type { Nezon } from "@n0xgg04/nezon";
export declare class ExampleCommandHandlers {
    onPing(args: Nezon.Args, [managedMessage]: Nezon.AutoContext): Promise<void>;
    onFileDemo([managedMessage]: Nezon.AutoContext): Promise<void>;
    onPrompt(args: Nezon.Args, [managedMessage]: Nezon.AutoContext, user?: Nezon.User, content?: string): Promise<void>;
    onInspect(attachments: Nezon.Attachments, firstAttachment: Nezon.Attachment | undefined, mentions: Nezon.Mentions, firstMention: Nezon.Mention | undefined, managedMessage: Nezon.AutoContextType.Message): Promise<void>;
    onChannelDemo(channel: Nezon.AutoContextType.Channel): Promise<void>;
    onChannelTo(args: Nezon.Args, channel: Nezon.AutoContextType.Channel): Promise<void>;
}
