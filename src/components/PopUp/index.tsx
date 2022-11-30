import { X } from "phosphor-react";
import { useState } from "react";
import { PopUpSuccess } from "./styles";

interface IPropsPopUp {
  message: string;
  open?: boolean;
}

export function PopUp({message, open}: IPropsPopUp){

  return (
    <>
    {open ? 
      <PopUpSuccess visible={open}>
      <p>{message}</p>
      <X size={18}/>
      </PopUpSuccess>
      :
      <></>
    }
    </>

  )
}