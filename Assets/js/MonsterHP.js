﻿#pragma strict

var scaleX : float;
var nowHP : float;
var maxHP : float;

function Start () {
	nowHP = GetComponentInParent(monster).hp;
	maxHP = nowHP;
}

function Update () {
	nowHP = GetComponentInParent(monster).hp;
	var rate : float = nowHP / maxHP;
	if(rate < 0.3) {
		GetComponent(SpriteRenderer).color = Color.red;
	}
	else if(rate < 0.5) {
		GetComponent(SpriteRenderer).color = Color.yellow;
	}
	else {
		GetComponent(SpriteRenderer).color = Color.green;
	}
	transform.localScale.x = scaleX * rate;
}