import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { NezonModule } from "@n0xgg04/nezon";
import { FortuneHandler } from "./ping.handler";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    NezonModule.forRoot({
      token: process.env.MEZON_TOKEN ?? "",
      botId: process.env.MEZON_BOT_ID ?? "",
    }),
  ],
  providers: [FortuneHandler],
})
export class AppModule {}