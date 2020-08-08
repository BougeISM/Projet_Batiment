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
- Mise en place du squelette de l'aide
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
b_sol = new b_materiau(Block.Cactus);
b_mur = new b_materiau(Block.Cactus);
b_escalier = new b_materiau(Block.Glay);
b_vitre = new b_materiau(Block.GlassPane);
b_toit = new b_materiau(Block.ChiseledStoneBricks)

// l'ajout d'une chaine vide tranfrme le Number en String
info(b_mur.materiau+"");

/* 
	la suite est d'avoir un convertisseur coordonnées relatif/absolu
	Il fautdra aussi avoir un batiment qui peut stocker la mémoire du 
	point origine de la construction, si on veut la reprendre !
	Les bâtiments vont être au départ tous diriger vers le nord
	Allez mon gars, cela avance !
	
*/
