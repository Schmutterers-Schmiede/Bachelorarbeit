
import { Component, h, Element} from "@stencil/core";

@Component({
  tag: 'my-parent',
  styleUrl: './my-parent.scss',
  shadow: false
})



export class myEventBinding{

  

  componentWillLoad() {
    console.log("parent about to load");
  }
  componentDidLoad() {
    console.log("parent loaded");
  }

  @Element() nestEl: HTMLElement;  

  render(){
    return(
      <main class='parent-main'>
        <h2 class='parent-label'>Parent</h2>        
        <my-child></my-child>
      </main>
    )
  }
}
 