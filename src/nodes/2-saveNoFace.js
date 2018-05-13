import background from '../assets/2-saveNoFace.png';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from './2-noFaceSaved';

const text1 = "{{name}} va chercher Yubaba pour la prevenir que Haku a été blessé, mais elle découvre avec horreur que Sans-visage se nourrit de tout ce qu'il croise.\n" +
  "{{name}} va devant Sans-visage et lui offre le reste du médicament qu'elle avait donné à Haku.\n" +
  "Sans-visage commence à expulser tout ce qu'il a ingurgité et reprend sa forme normale";


export default function () {
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('', text1, ()=> {State.switchToState(nextNode)}, true);
}