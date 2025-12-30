import type { Nezon } from "@n0xgg04/nezon";
export declare class ExampleDMHandlers {
    onDMDemo(args: Nezon.Args, managedMessage: Nezon.AutoContextType.Message, dm: Nezon.AutoContextType.DM): Promise<void>;
    onSendDMToSender(managedMessage: Nezon.AutoContextType.Message, user?: Nezon.User): Promise<void>;
}
