import React from "react";
import { gender, occupation, skinTone } from "./player.constants";
import player from "./player.mock";

function Player() {

  return (
    <>
      {player.email}
      {gender.FEMALE}
      {skinTone.LIGHT}
      {occupation.IC1}
    </>
  );
}

export default Player;
