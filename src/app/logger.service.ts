import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  prefix = "default";

  constructor() {}

  log(message: string) {
    console.log(`${this.prefix} ${message}`);
  }
}
