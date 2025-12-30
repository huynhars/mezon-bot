import type { Nezon } from "@n0xgg04/nezon";
export declare class ExampleComponentHandlers {
    private readonly logger;
    onButtonDemo(payload: Nezon.ChannelMessage, [managedMessage]: Nezon.AutoContext): Promise<void>;
    onClickDemo([managedMessage]: Nezon.AutoContext): Promise<void>;
    onUpdateDemo(payload: Nezon.ChannelMessage, [managedMessage]: Nezon.AutoContext): Promise<void>;
    onUpdateCancel(targetId: string | undefined, [managedMessage]: Nezon.AutoContext): Promise<void>;
    onUpdateSuccess(targetId: string | undefined, [managedMessage]: Nezon.AutoContext): Promise<void>;
    onDemoButtonClicked(payload: Nezon.ComponentPayload, sourceId: string | undefined, client: Nezon.Client, targetMessage?: Nezon.Message): Promise<void>;
    onUserAction([managedMessage]: Nezon.AutoContext, allParams: Record<string, string> | string[], userId: string, action: string): Promise<void>;
    onQuizAnswer(choice: string | undefined, payload: Nezon.ComponentPayload, [managedMessage]: Nezon.AutoContext): Promise<void>;
    private getMessageByIds;
}
