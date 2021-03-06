import background from '../assets/2-riddle.png';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/hardWork.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import goodAnswer from '../nodes/2-goodAnswer';
import wrongAnswer from '../nodes/0-stayWithHaku';
import finishText1 from "./1-playBaby";

const text1 = 'Bonjour, {{name}}. Je vois que tu te débrouilles pas mal dans ce monde.Je vais te donner une chance: si tu veux que tes parents redeviennent humains, alors répond bien à cette devinette:';

const text2 = 'Combien têtes d\'Ariel, sensei Hokage, as-tu vu dans tous les images?';

function selectedChoice1() {
  State.switchToState(goodAnswer);
}

function selectedChoice2() {
  State.switchToState(wrongAnswer);
}

function text1finish () {
  DialogManager.showDialog('Yubaba :', text2, text2finish);
}

function text2finish() {
  DialogManager.showChoices([
    { text: '6', cb: selectedChoice1 },
    { text: '9', cb: selectedChoice2 },
  ]);
}

export default function (){
  SoundManager.clearSound();
  SoundManager.activeSound(song);
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('Yubaba :', text1, text1finish,true);
}