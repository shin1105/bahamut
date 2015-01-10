#pragma strict

var enemySpawnPoint : GameObject;
var prefab : GameObject [];

function Start () {
	for(var i=0;i<5;i++) {
		Instantiate(prefab[Random.Range(0, 3)], enemySpawnPoint.transform.position, Quaternion.identity);
		yield WaitForSeconds(.3);
	}

	yield WaitForSeconds(3);

	for(i=0;i<10;i++) {
		Instantiate(prefab[Random.Range(0, 3)], enemySpawnPoint.transform.position, Quaternion.identity);	
		yield WaitForSeconds(.3);
	}
}

function SpawnMonster (startIndex : int, endIndex : int, amt : int, wait : float){
	for(var i=0;i<amt;i++) {
		Instantiate(prefab[Random.Range(startIndex, endIndex)], enemySpawnPoint.transform.position, Quaternion.identity);	
		yield WaitForSeconds(wait);
	}
}