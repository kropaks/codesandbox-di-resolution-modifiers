import { Directive, Optional, Self } from "@angular/core";
import { LoggerService } from "./logger.service";

@Directive({
  selector: "[appParent]",
  //@Host in child directive needs this: providers: [LoggerService]
  //Commented out to show how @Host resolution modifier works
  // providers: [LoggerService]
})
export class ParentDirective {
  constructor(@Optional() @Self() private logger: LoggerService) {
    if (this.logger) {
      this.logger.prefix = "Parent Directive";
      //this.logger.log("parent directive");
    }
  }
}
