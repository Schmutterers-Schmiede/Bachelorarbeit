
import { Component, h, Method, Element } from "@stencil/core";

@Component({
  tag: 'my-mover',
  styleUrl: './my-mover.scss',
  shadow: false
})



export class myMover{
  
  move:boolean = false;
  
  @Element() moveEl: HTMLElement;

  moveButtonClickHandler(){
    this.move = !this.move;
    if(this.move) this.moveEl.querySelector('.mover-circle').classList.add('move')
    else this.moveEl.querySelector('.mover-circle').classList.remove('move')
  }



  render(){
    return(
    <main>
      <h2>Mover</h2>
      <div id='mover-circle-container'>
        <div class='mover-circle'></div>
      </div>
      <button class='mover-button' onClick={this.moveButtonClickHandler.bind(this)}>Move</button>
    </main>

  )}
}
