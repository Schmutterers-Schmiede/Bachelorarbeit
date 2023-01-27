
import { Component, h, Element} from "@stencil/core";

@Component({
  tag: 'my-child',
  styleUrl: './my-child.scss',
  shadow: false
})



export class myChild{
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
 