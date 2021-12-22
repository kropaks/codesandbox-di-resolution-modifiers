import { Component, Optional, Self, SkipSelf } from "@angular/core";
import { LoggerService } from "./logger.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [LoggerService]
})
export class AppComponent {
  constructor(
    @Self() private logger: LoggerService,
    @SkipSelf() private parentLogger: LoggerService
  ) {
    if (this.logger) {
      this.logger.prefix = "AppComponent";
      this.logger.log("constructor init...");
    }

    if (this.parentLogger) {
      this.parentLogger.log("constructor init...");
    }
  }
  title = "Angular CLI Template";
}
