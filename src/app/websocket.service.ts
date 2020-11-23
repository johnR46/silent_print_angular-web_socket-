import { Injectable } from "@angular/core";
import { webSocket } from "rxjs/webSocket";
export const WS_ENDPOINT = "ws://127.0.0.1:12212/printer";

@Injectable({
  providedIn: "root",
})
export class WebsocketService {
  subject = webSocket(WS_ENDPOINT);
  constructor() {}
  printPDF(vale: string): void {
    this.subject.next({
      type: "INVOICE",
      url: vale,
    });

    this.subject.subscribe(
      (msg) => console.log("message after print: " + msg), // Called whenever there is a message from the server.
      (err) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log("complete") // Called when connection is closed (for whatever reason).
    );
  }
}
