import type { Nezon } from "@n0xgg04/nezon";
export declare class FortuneHandler {
    private tarotCards;
    private zodiacSigns;
    private zodiacPersonalities;
    onTarot([managedMessage]: Nezon.AutoContext): Promise<void>;
    private zodiacPool;
    onTuVi([managedMessage]: Nezon.AutoContext): Promise<void>;
    OnLoveFortune([managedMessage]: Nezon.AutoContext): Promise<void>;
    onDailyFortune([managedMessage]: Nezon.AutoContext): Promise<void>;
    onMenh([managedMessage]: Nezon.AutoContext): Promise<void>;
    onQuickHoroscope([managedMessage]: Nezon.AutoContext): Promise<void>;
}
