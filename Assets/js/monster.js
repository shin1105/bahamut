#pragma strict

var hp : int = 100;
var atk : int = 2;
var award : int = 0;
var speed : float = 8.0f;
var opponent : GameObject;
var isAttacking : boolean = false;

function Update () {

	if(hp <= 0) {
		if(gameObject.tag == "EnemyMon") {
			GameObject.Find("Energy").SendMessage("AddEnergy", award);
		}
		Destroy(gameObject);
	}
	else {
	
		if(opponent == null)
			isAttacking = false;
		else
			opponent.SendMessage("Damage", atk);
		if(isAttacking == false)
			rigidbody2D.velocity =new Vector2(speed, 0);
		else
		rigidbody2D.velocity =new Vector2(0, 0);
	}
}

function Damage (atk : int) {
	hp -= atk;
}


function OnTriggerStay2D (other : Collider2D) {
	if(
		(other.tag == "EnemyMon" && transform.tag == "MyMon") ||
		(other.tag == "MyMon" && transform.tag == "EnemyMon") ||
		(other.tag == "EnemyTower" && transform.tag == "MyMon") ||
		(other.tag == "MyTower" && transform.tag == "EnemyMon")
	) {
		isAttacking = true;
		opponent = other.gameObject;
	}
}
