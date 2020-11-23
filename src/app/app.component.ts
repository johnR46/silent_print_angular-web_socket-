import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { WebsocketService } from "./websocket.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "web-print";

  urlPdfFormWeb: FormControl;
  constructor(private service: WebsocketService) {
    this.urlPdfFormWeb = new FormControl("");
  }

  onTestPrinter(): void {
    console.log(this.urlPdfFormWeb.value)
   this.service.printPDF(this.urlPdfFormWeb.value);
  }
  onsetDefaultUrl():void{
    this.urlPdfFormWeb.setValue("https://tcpdf.org/files/examples/example_002.pdf");
  }
}
