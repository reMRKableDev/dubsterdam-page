import { keyframes } from "styled-components";
import { bounce, fadeInUp, fadeInDown, shake, merge } from "react-animations";

export const bounceAnimation = keyframes`${bounce}`;
export const fadeInUpAnimation = keyframes`${fadeInUp}`;
export const fadeInDownAnimation = keyframes`${fadeInDown}`;
export const shakeAnimation = keyframes`${shake}`;
export const fadeInUpShakeAnimation = keyframes`${merge(fadeInUp, shake)}`;
