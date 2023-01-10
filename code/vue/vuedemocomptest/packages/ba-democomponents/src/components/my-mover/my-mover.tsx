
import { Component, h, Element } from "@stencil/core";

@Component({
  tag: 'my-mover',
  styleUrl: './my-mover.scss',
  shadow: false
})



export class myMover{

  componentWillLoad() {
    console.log("mover about to load");
  }
  componentDidLoad() {
    console.log("mover loaded");
  }


  
  animRun:boolean = false;
  buttonText:string = 'PLAY'
  
  @Element() moveEl: HTMLElement;

  moveButtonClickHandler(){
    this.animRun = !this.animRun;

    if(this.animRun) {this.buttonText = 'STOP'}
    else {this.buttonText = 'PLAY'}    

    this.moveEl.querySelector('.mover-button').textContent = this.buttonText;
    this.moveEl.querySelector('.mover-circle').classList.toggle('move')
    
  }



  render(){
    return(
    <main class='mover-main'>
      <h2 class='mover-label'>Mover</h2>
      <div id='mover-circle-container'>
        <div class='mover-circle'></div>
      </div>
      <button class='mover-button' onClick={this.moveButtonClickHandler.bind(this)}>{this.buttonText}</button>
    </main>

  )}
}
