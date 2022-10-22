
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
    if(this.cloak) this.camEl.querySelector('.mover-circle').classList.add('move')
    else this.camEl.querySelector('.mover-circle').classList.remove('move')
  }



  render(){
    return(
    <main>
      <h2>Cameleon</h2>
      <div id='circle-container'>
        <div class='circle'></div>
      </div>
      <button class='cloak-button' onClick={this.cloakButtonClickHandler.bind(this)}>Move</button>      
    </main>
  )}
}
