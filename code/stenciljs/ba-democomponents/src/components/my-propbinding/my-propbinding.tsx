
import { Component, h, Element, Prop } from "@stencil/core";

@Component({
  tag: 'my-propbinding',
  styleUrl: './my-propbinding.scss',
  shadow: false
})

export class myPropBinding{

  componentWillLoad() {
    console.log("propbinding about to load");
  }
  componentDidLoad() {
    console.log("propbinding loaded");
  }

  @Element() moveEl: HTMLElement;
  @Prop() input: string

  render(){
    return(
      <main class='propbinding-main'>
        <h2 class='propbinding-label'>Prop bind.</h2>
        <p>{this.input}</p>
      </main>
    )
  }
}
