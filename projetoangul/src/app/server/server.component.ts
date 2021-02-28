import { Component } from '@angular/core';

@Component
({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent
{
    status: boolean = true;
    vazio: boolean = false;
    servername: string = '';
    username: string = 'João'

    showsecret: boolean = false;
    log = [];

    constructor()
    {
        
    }
    
    ngOnInit()
    {}
    
    
    lightswitch()
    {
        setTimeout(() => {this.status = !this.status},2000)
    }
    upservername(event: any)
    {
        this.servername = event.target.value;
    }
    upusername(event: any)
    {
        this.username = event.target.value;
        if ( this.username != "" )
        {
            this.vazio = false;
        }else
        {
            this.vazio = true;
        }
    }
    delete()
    {
        this.username = "";
        this.vazio = true;
    }
    ontoggle()
    {
        this.showsecret = !this.showsecret;
        this.log.push(new Date());
    }
}