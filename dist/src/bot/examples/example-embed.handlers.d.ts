import type { Nezon, NezonUtilsService } from "@n0xgg04/nezon";
export declare class ExampleEmbedHandlers {
    onImageDemo(args: Nezon.Args, [managedMessage]: Nezon.AutoContext): Promise<void>;
    onEmbedDemo([managedMessage]: Nezon.AutoContext): Promise<void>;
    onFormDemo([managedMessage]: Nezon.AutoContext): Promise<void>;
    onQuiz([managedMessage]: Nezon.AutoContext): Promise<void>;
    onSlots([managedMessage]: Nezon.AutoContext, utils: NezonUtilsService): Promise<void>;
}
