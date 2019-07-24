import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus='Server was not created';
serverUpdate='Test Server';
serverCreated=false;
@Input() public parentData;
@Output() public childEvent=new EventEmitter();
servers=['Test servers','Test server2']
  constructor() {
    setTimeout(()=>{this.allowNewServer=true},2000);
   }

  ngOnInit() {
  }
  changeServerStatus(){
    this.serverCreated=true;
    this.servers.push(this.serverUpdate);
    this.serverCreationStatus='Server is created '+ this.serverUpdate;
    
  }
  onUpdate(event:Event){
    this.serverUpdate=(<HTMLInputElement>event.target).value;
  }
  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
  }

}
