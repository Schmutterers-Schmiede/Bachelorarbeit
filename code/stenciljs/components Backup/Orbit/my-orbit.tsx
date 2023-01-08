
import { Component, h, Element } from "@stencil/core";

@Component({
  tag: 'my-orbit',
  styleUrl: './my-orbit.scss',
  shadow: false
})



export class myOrbit{
  
  animRun:boolean = true;
  buttonText:string = 'STOP'
  
  @Element() orbitEl: HTMLElement;

  orbitButtonClickHandler(){
    this.animRun = !this.animRun;

    if(this.animRun) {this.buttonText = 'STOP'}
    else {this.buttonText = 'PLAY'}    

    this.orbitEl.querySelector('.orbit-button').textContent = this.buttonText
    this.orbitEl.querySelector('.orbit-container').classList.toggle('spin')
    
  }



  render(){
    return(
      <main class='orbit-main'>
        <h2 class='orbit-label'>Orbit</h2>
        <div class="orbit-container spin">
          <div class="orbit-sun"></div>
          <div class="orbit-planet"></div>
        </div>
        <button class='orbit-button' onClick={(this.orbitButtonClickHandler).bind(this)}>{this.buttonText}</button>
      </main>
    )
  }
}
