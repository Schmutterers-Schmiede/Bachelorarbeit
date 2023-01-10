
import { Component, h, Element, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'my-event-emitter',
  styleUrl: './my-event-emitter.scss',
  shadow: false
})



export class myEventBinding{

  secret:number = 42;

  componentWillLoad() {
    console.log("event-emitter about to load");
  }
  componentDidLoad() {
    console.log("event-emitter loaded");
  }



  @Element() moveEl: HTMLElement;
  
  @Event() secretRevealed: EventEmitter<number> 
  eventFiringHandler(secret: number) {
    this.secretRevealed.emit(secret)
  }

  render(){
    return(
      <main class='event-emitter-main'>
        <h2 class='event-emitter-label'>Event Emitter</h2>
        <p>secret = {this.secret}</p>
        <button class='event-emitter-button' onClick={this.eventFiringHandler.bind(this, this.secret)}>EMIT</button>
      </main>
    )
  }
}
 