import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Scenerio_1
  imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw2FYCfmZFpJiiKMZtXAG2rW&ust=1750249449163000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCgvLe5-I0DFQAAAAAdAAAAABAE';
  image= 'E:\Angular-Projects\practice_Set_2\src\assets\images\image-optimisation-scaled.jpg';
  // Scenerio_2
  isButtonDisabled = true;
    // Scenerio_3
  CurrentPlaceHolder='Enter your Name';
      // Scenerio_4

  currentID='unique';
}
