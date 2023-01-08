
import { Component, h, Element } from "@stencil/core";

@Component({
  tag: 'my-cameleon',
  styleUrl: './my-cameleon.scss',
  shadow: false
})



export class myCameleon{
  
  animRun:boolean = true;
  buttonText:string = 'STOP'
  
  @Element() camEl: HTMLElement;

  cloakButtonClickHandler(){
    this.animRun = !this.animRun;

    if(this.animRun) {this.buttonText = 'STOP'}
    else {this.buttonText = 'PLAY'}    

    this.camEl.querySelector('.cameleon-button').textContent = this.buttonText;
    this.camEl.querySelector('.cameleon-circle').classList.toggle('cloak')
  }



  render(){
    return(
    <main class='cameleon-main'>
      <h2 class='cameleon-label'>Cameleon</h2>
      <div id='cameleon-circle-container'>
        <div class='cameleon-circle cloak'></div>
      </div>
      <button class='cameleon-button' onClick={this.cloakButtonClickHandler.bind(this)}>{this.buttonText}</button>      
    </main>
  )}
}
