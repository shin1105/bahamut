#pragma strict

var prefab : GameObject;

function SummonMonster () {
	Instantiate(prefab, GameObject.Find("e").transform.position, Quaternion.identity);
}

function Update () {

}