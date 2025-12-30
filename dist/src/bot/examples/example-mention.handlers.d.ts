import type { Nezon } from "@n0xgg04/nezon";
export declare class ExampleMentionHandlers {
    mentionDemo([managedMessage]: Nezon.AutoContext, firstMention?: Nezon.Mention): Promise<void>;
    multiMention([managedMessage]: Nezon.AutoContext, mentions: Nezon.Mentions): Promise<void>;
    mentionRole(args: Nezon.Args, [managedMessage]: Nezon.AutoContext): Promise<void>;
}
