/**
Author : Berrand BOUGÉ sm
Contact : bertrand.bouge@formateurs-microsoft.com
CreateTime : 2020/08/08
ModifyTime : 2020/08/08
Description : Ce programme vise à construire de manière 
automatique des batiements qui vont recevoir les 
descrptions des différents chapitres de cours

Version 0.1 2020/08/08
- Creation du fichier
- Creation d'une fonction de contrôle : Info
- Creation d'une class b_materiau (cela deviendra un tabelau par la suite...)
- Création d'une convertisseur Poisiton Absolue, position relative pour revenir 
  à un point donné. (en fait, je crois que j'ai ré-écrit la fonction world()...
  Mais, bon, c'était intéressant ;-)
-

Version 0.2 2020/08/12
- Création d'un point origine, visuel, avec l'aide du programme de magilisau 
  pour marquer le sol de l'origine
  
**/

function info(texte:String){
	/* Cette fonction renvoie le texte passé en varaible */
    player.say("Le texte est : "+texte);
}

class b_materiau {
	/* Cette classe définit les matériaux grace à leur code dans minecraft*/ 
	constructor(var1:Number){
		this.materiau=var1;
	}
    materiau:Number;
}

/* Définition des blocs de référence */
let b_sol = new b_materiau(Block.Cactus);
let b_mur = new b_materiau(Block.Cactus);
let b_escalier = new b_materiau(Block.Clay);
let b_vitre = new b_materiau(Block.GlassPane);
let b_toit = new b_materiau(Block.ChiseledStoneBricks)

// l'ajout d'une chaine vide tranfrme le Number en String
info(b_mur.materiau + "");

// Renvoie l'opposée d'une position
function pos_Opp(p_Ref:Position){
    let pos_Opp:Position;
    let x_Opp=-p_Ref.getValue(Axis.X);
    let y_Opp=-p_Ref.getValue(Axis.Y);
    let z_Opp=-p_Ref.getValue(Axis.Z);
    return(pos(x_Opp,y_Opp,z_Opp));
}

// modifier une position p_Abs absolue en position
// relative par rapport à p_Ref
function pos_Abs_To_Rel(p_Abs:Position,p_Ref:Position){
    let p_Rel = positions.add(p_Abs,pos_Opp(p_Ref));
    return(p_Rel);
}
let p=pos(4,64,26);
let p1=pos_Abs_To_Rel(p,player.position());
player.teleport(p1);

function setOrigine(){
    builder.teleport_to(player.position());
    builder.set_origin();
    retourOrigine(0);
    info("Init done" + builder.position());
}

function info(t){
    player.say("Info message : " + t + " " );
}


player.on_chat("origine",setOrigine)	
	
/* 
	Il fautdra aussi avoir un batiment qui peut stocker la mémoire du 
	point origine de la construction, si on veut la reprendre !
	Les bâtiments vont être au départ tous diriger vers le nord
	Allez mon gars, cela avance !
	
*/
