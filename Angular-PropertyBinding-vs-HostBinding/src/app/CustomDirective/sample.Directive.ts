import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[sampleDirective]'
})
export class SampleDirective{
@HostBinding('value') hostInput:string='Hi,There';

@HostListener('focus') logMessage(){
    console.log('log has been focused from directive');
    
}
  constructor(){}
}