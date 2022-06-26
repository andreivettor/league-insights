import { HttpModule } from "@nestjs/axios"
import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      headers: {
        "X-Riot-Token": "RGAPI-56f9354d-4a21-4080-98d5-2ee4dd8d3e1f",
      },
      baseURL: process.env.PLATFORM_URL,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
