import background from '../assets/2-revelation.png';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/revelation.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/0-noFace_baths';

const text1 = "Je suis content que tu as signé le contrat, {{name}}. C'est comme ça que tu t'appelles maintenant, n'est-ce pas?\n" +
  "J'ai une mauvaise nouvelle. Tes parents ont mangé la nourriture du marché et ils ont été transformés en cochons!";

const text2= "Oh non! Comment les sauver?";

const text3 = "Si tu travailles dur, Yubaba pourra peut-être t'aider à les retransformer en humains.";

const text4 = " D'accord, c'est ce que je vais faire!";

function text1finish(){
  DialogManager.showDialog('{{name}} :', text2, text2finish,true)
}

function text2finish(){
  DialogManager.showDialog('Haku :', text3, text3finish,true)
}

function text3finish(){
  DialogManager.showDialog('{{name}} :', text4, ()=> {State.switchToState(nextNode)}, true)
}



export default function () {
  SoundManager.clearSound();
  SoundManager.setSound();
  SoundManager.activeSound(song);
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('Haku :', text1, text1finish,true);
}