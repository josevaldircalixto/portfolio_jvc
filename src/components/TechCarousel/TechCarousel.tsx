import type { PropsWithChildren } from "react";
import { Track, Viewport } from "./styles";

type Props = PropsWithChildren<{
  speedMs?: number; // tempo do loop completo (ms)
}>;

export default function TechCarousel({ children, speedMs = 18000 }: Props) {
  // Duplicamos os itens para um loop contínuo
  return (
    <Viewport>
      <Track $duration={speedMs}>
        {children}
        {children}
      </Track>
    </Viewport>
  );
}
