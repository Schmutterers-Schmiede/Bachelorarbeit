import {Component, Method, Element, Prop, h} from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.scss'
}) 
export class myModal{

  buttons = ['OK', 'Cancel'];

  showOptions: boolean = false;

  @Element() modalEl: HTMLElement;

  @Prop() title: string 
  @Prop() content: string

  @Method() open()  {this.modalEl.style.display = 'block'}
  @Method() close() {this.modalEl.style.display = 'none'}
  showOptionsHandler(){this.showOptions = true;}

  render(){
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.content}</p>
        <hr/>
        <button class='modalButton' onClick={this.showOptionsHandler.bind(this)}>Show options</button>
        <hr/>
        {this.buttons.map(btn => (
          <button class='modalButton'>{btn}</button>
        ))}
        
      </div>
    )
  }
}