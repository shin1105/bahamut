#pragma strict

var speed : float = 5.0f;
var jumpForce : float = 18.0f;
function Start () {
	
}

function Update () {
	rigidbody2D.velocity =new Vector2(speed, rigidbody2D.velocity.y);
}