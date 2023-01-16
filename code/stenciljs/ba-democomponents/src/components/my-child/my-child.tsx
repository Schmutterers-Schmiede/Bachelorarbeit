
import { Component, h, Element, Listen, State} from "@stencil/core";

@Component({
  tag: 'my-child',
  styleUrl: './my-child.scss',
  shadow: false
})



export class myEventBinding{
  componentWillLoad() {
    console.log("child about to load");
  }
  componentDidLoad() {
    console.log("child loaded");
  }

  @Element() childEl: HTMLElement;

  render(){
    return(
      <main class='child-main'>
        <p>child</p>
      </main>
    )
  }
}
 