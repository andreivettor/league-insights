import { HttpService } from "@nestjs/axios"
import { Injectable } from "@nestjs/common"
import { AxiosResponse } from "axios"
import { Observable } from "rxjs"
import { SummonerData } from "./types"

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getSummonerByName({
    summonerName,
  }: {
    summonerName: string
  }): Observable<AxiosResponse<any, any>> {
    const response = this.httpService.get(
      `/lol/summoner/v4/summoners/by-name/${summonerName}`
    )

    return response
  }
}
