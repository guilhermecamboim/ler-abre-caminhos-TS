import { ImgHTMLAttributes } from 'react';
import * as S from './styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> { 
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props}: AvatarProps ) {

  return (
    <S.ImageAvatar 
      hasBorder={hasBorder}
      {...props} 
    />
  )
}