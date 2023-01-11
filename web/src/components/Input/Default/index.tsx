import { forwardRef, InputHTMLAttributes } from "react";
import { ContentText } from "../../Typography";
import {
  InputStyleContainer,
  InputWrapper,
  InputStyled,
  RightText,
} from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
  hasError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, hasError, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <ContentText size="s">{error}</ContentText>}
      </InputWrapper>
    );
  }
);
