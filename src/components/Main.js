import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Taikutsu from "../imgaes/taikutsu.svg";
import Haveto from "../imgaes/haveto.svg";
import SlideContent from "./page/SlideContent";

const Main = () => {
  return (
    <>
      <Box
        scrollSnapType="y mandatory"
        scrollb
        overflowY="auto"
        w="100%"
        h="100vh"
      >
        <SlideContent title="瞑想は世界一退屈な行為" svg={Taikutsu} />
        <SlideContent title="瞑想は呼吸に意識を向ける" svg={Taikutsu} />

        <SlideContent title="試しに瞑想をやってみた" svg={Taikutsu} />

        <SlideContent title="やらなきゃいけないことがある" svg={Haveto} />
        <SlideContent title="呼吸に意識をもどす" svg={Taikutsu} />
        <SlideContent title="横になって休みたい" svg={Taikutsu} />
        <SlideContent title="呼吸に意識をもどす" svg={Taikutsu} />
        <SlideContent title="見たいサイトがある" svg={Taikutsu} />
        <SlideContent title="呼吸に意識をもどす" svg={Taikutsu} />

        <SlideContent title="瞑想はこんなことを繰り返す" svg={Taikutsu} />

        <SlideContent title="ふと思い返してみる" svg={Taikutsu} />
        <SlideContent title="世の中に問題はたくさんある" svg={Taikutsu} />
        <SlideContent title="自分のこと、他人のこと" svg={Taikutsu} />
        <SlideContent title="人生に大切なことはいくつもある" svg={Taikutsu} />
        <SlideContent title="意識的にも、無意識的にも" svg={Taikutsu} />

        <SlideContent
          title="呼吸は生まれてから自然にできている"
          svg={Taikutsu}
        />
        <SlideContent title="生まれてから続く、当たり前な行為" svg={Taikutsu} />
        <SlideContent
          title="こんな自分の取るに足らないものに意識を向ける"
          svg={Taikutsu}
        />
        <SlideContent title="世界一退屈な時間" svg={Taikutsu} />
        <SlideContent title="世界一贅沢な時間" svg={Taikutsu} />
        <SlideContent title="それが瞑想なのかもしれない" svg={Taikutsu} />

        <SlideContent title="瞑想で達成したい目標はない" svg={Taikutsu} />
        <SlideContent
          title="退屈だから、いつもやる気にはならない"
          svg={Taikutsu}
        />
        <SlideContent title="でも、やった後は頭がじんわりする" svg={Taikutsu} />
        <SlideContent title="その程度で十分な気がする" svg={Taikutsu} />
        <SlideContent
          title="だって、瞑想は世界一退屈な行為だから"
          svg={Taikutsu}
        />
        <SlideContent title="おしまい" svg={Taikutsu} />
      </Box>
    </>
  );
};

export default Main;
