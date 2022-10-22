
import { Component, h, Element } from "@stencil/core";

@Component({
  tag: 'my-cameleon',
  styleUrl: './my-cameleon.scss',
  shadow: false
})



export class myMover{
  
  cloak:boolean = false;
  
  @Element() camEl: HTMLElement;

  cloakButtonClickHandler(){
    this.cloak = !this.cloak;
    if(this.cloak) this.camEl.querySelector('.cameleon-circle').classList.add('cloak')
    else this.camEl.querySelector('.cameleon-circle').classList.remove('cloak')
  }



  render(){
    return(
    <main class='cameleon-main'>
      <h2 class='cameleon-label'>Cameleon</h2>
      <div id='cameleon-circle-container'>
        <div class='cameleon-circle'></div>
      </div>
      <button class='cameleon-button' onClick={this.cloakButtonClickHandler.bind(this)}>Cloak</button>      
    </main>
  )}
}
