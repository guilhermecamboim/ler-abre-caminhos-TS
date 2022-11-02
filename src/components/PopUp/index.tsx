import { X } from "phosphor-react";
import { useState } from "react";
import { PopUpSuccess } from "./styles";

interface IPropsPopUp {
  message?: string;
  onClickX: any;
  visible: any;
}

export function PopUp({message, onClickX, visible}: IPropsPopUp){

  return (
    <PopUpSuccess visible={visible}>
      <p>{message}</p>
      <X size={18} onClick={() => {onClickX}}/>
    </PopUpSuccess>

  )
}