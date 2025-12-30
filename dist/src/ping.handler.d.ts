import type { Nezon } from "@n0xgg04/nezon";
export declare class FortuneHandler {
    private tarotCards;
    private zodiacSigns;
    private zodiacPersonalities;
    private luckyStones;
    private luckyColors;
    onTarot([managedMessage]: Nezon.AutoContext): Promise<void>;
    onTuVi([managedMessage]: Nezon.AutoContext): Promise<void>;
    onLoveFortune([managedMessage]: Nezon.AutoContext): Promise<void>;
    onDailyFortune([managedMessage]: Nezon.AutoContext): Promise<void>;
    onRandomFortune([managedMessage]: Nezon.AutoContext): Promise<void>;
    onHelp([managedMessage]: Nezon.AutoContext): Promise<void>;
    onQuickHoroscope([managedMessage]: Nezon.AutoContext): Promise<void>;
}
