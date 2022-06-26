import { HttpService } from "@nestjs/axios"
import { Controller, Get } from "@nestjs/common"
import { firstValueFrom } from "rxjs"
import { SummonerData } from "./types"

@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService) {}

  @Get("/")
  async getSummonerByName(): Promise<SummonerData> {
    const response = await firstValueFrom(
      this.httpService.get<SummonerData>(
        `/lol/summoner/v4/summoners/by-name/Kheyas`
      )
    )

    return response.data
  }
}
