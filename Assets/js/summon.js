#pragma strict

var prefab : GameObject;

function SummonMonster () {
	if(GameObject.Find("Energy").GetComponent(Energy).SpendEnergy(1)) { 
	Instantiate(prefab, GameObject.Find("Mymonborn").transform.position, Quaternion.identity);
	}
}