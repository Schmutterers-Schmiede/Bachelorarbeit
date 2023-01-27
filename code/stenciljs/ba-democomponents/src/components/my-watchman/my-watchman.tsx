
import { Component, h, Element, Watch, State } from "@stencil/core";

@Component({
  tag: 'my-watchman',
  styleUrl: './my-watchman.scss',
  
})



export class myWatchman{

  @State() text:string = 'Hello World'
  displayText:string

  componentWillLoad() {
    console.log("watchman about to load");
    this.displayText = this.text;
  }
  componentDidLoad() {
    console.log("watchman loaded");
  }



  @Element() watchEl: HTMLElement;
  
  
  @Watch('text')
  changeDisplayText(){
    this.displayText = this.text;
    console.log(this.displayText);    
  }

  changeText(event:Event) {
    this.text = (event.target as HTMLInputElement).value;    
  }
 

  render(){
    return(
      <main class='watchman-main'>
        <h2 class='watchman-label'>Watchman</h2>
        <div class="watchman-text-container">
          <p>{this.displayText}</p>
        </div>
        <input type="text" class='watchman-input' onInput={this.changeText.bind(this)} maxlength='15'/>
      </main>
    )
  }
}
 