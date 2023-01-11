// Image
import introImage from "../../../assets/home/intro_image_00.png";
// Components
import { IconsWithInfo } from "../../../components/IconsWithInfo";
// Icons
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
// Styles
import { useTheme } from "styled-components";
import {
  IntroContentText,
  IntroContainer,
  IntroContent,
  IntroTitleText,
  IntroIconsWithInfoContainer,
} from "./styles";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitleText size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitleText>
            <IntroContentText size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </IntroContentText>
          </section>
          <IntroIconsWithInfoContainer>
            <IconsWithInfo
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <IconsWithInfo
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <IconsWithInfo
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <IconsWithInfo
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </IntroIconsWithInfoContainer>
        </div>

        <img src={introImage} />
      </IntroContent>
    </IntroContainer>
  );
}
