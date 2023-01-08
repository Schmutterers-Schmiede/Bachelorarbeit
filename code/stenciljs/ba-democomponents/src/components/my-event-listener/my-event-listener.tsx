
import { Component, h, Element, Listen, Prop, State} from "@stencil/core";

@Component({
  tag: 'my-event-listener',
  styleUrl: './my-event-listener.scss',
  shadow: false
})



export class myEventBinding{

  @State() secret:number;

  componentWillLoad() {
    console.log("event-listener about to load");
  }
  componentDidLoad() {
    console.log("event-listener loaded");
  }

  @Element() moveEl: HTMLElement;

  @Listen('secretRevealed', {target: 'body'})
  secretRevealedHandler(event: CustomEvent<number>){
    // console.log(event.detail);
    
    this.secret = event.detail  
  }

  

  render(){
    return(
      <main class='event-listener-main'>
        <h2 class='event-listener-label'>Event Listener</h2>
        secret = {this.secret}
      </main>
    )
  }
}
 