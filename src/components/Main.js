import { Box } from "@chakra-ui/react";
import React from "react";
import SlideContent from "./page/SlideContent";
import Taikutsu from "../imgaes/taikutsu.svg";
import Macflog from "../imgaes/macflog.svg";
import Sleep from "../imgaes/sleep.svg";
import Spflog from "../imgaes/spflog.svg";
import Kangaeru from "../imgaes/kanngaeru.svg";
import Aseru from "../imgaes/aseru.svg";
import Sight from "../imgaes/sight.svg";
import Meditation from "../imgaes/meditation.svg";
import Doudemoii from "../imgaes/doudemoii.svg";
import Omoiukabu from "../imgaes/omoiukabu.svg";
import Umaretekara from "../imgaes/umaretekara.svg";
import Aruku from "../imgaes/aruku.svg";
import Zeitaku from "../imgaes/zeitaku.svg";
import Zeitaku2 from "../imgaes/zeitaku2.svg";
import Focus from "../imgaes/focus.svg";
import Tameshini from "../imgaes/tameshini.svg";
import Yononaka from "../imgaes/yononaka.svg";
import JibunTanin from "../imgaes/jibuntanin.svg";
import House from "../imgaes/house.svg";
import Oshimai from "../imgaes/oshimai.svg";
import Muishiki from "../imgaes/muishiki.svg";

const Main = () => {
  return (
    <>
      <Box
        scrollSnapType="y mandatory"
        scrollb
        overflowY="auto"
        w="100%"
        h="100vh"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <SlideContent title="瞑想は世界一退屈な行為" svg={Taikutsu} />
        <SlideContent
          title="瞑想は呼吸に意識を向ける"
          svg={Sight}
          imgWidth="40%"
        />
        <SlideContent
          title="試しに瞑想をやってみた"
          svg={Tameshini}
          imgWidth="30%"
        />

        <SlideContent
          title="そういえば、やらなきゃいけないことがある"
          svg={Macflog}
        />
        <SlideContent
          title="呼吸に意識をもどす"
          svg={Meditation}
          imgWidth="30%"
        />
        <SlideContent title="気になる動画がある" svg={Spflog} />
        <SlideContent
          title="呼吸に意識をもどす"
          svg={Meditation}
          imgWidth="20%"
        />
        <SlideContent title="横になって休みたい" svg={Sleep} />
        <SlideContent
          title="呼吸に意識をもどす"
          svg={Meditation}
          imgWidth="10%"
        />

        <SlideContent title="瞑想はこんなことを繰り返す" svg={Aseru} />
        <SlideContent
          title="自分にとって一番どうでもいいことだから"
          svg={Doudemoii}
          imgWidth="60%"
        />
        <SlideContent
          title="いろいろなことが思い浮かぶ"
          svg={Omoiukabu}
          imgWidth="60%"
        />

        <SlideContent
          title="でも、ふと思い返してみる"
          svg={Kangaeru}
          imgWidth="40%"
        />
        <SlideContent
          title="世の中に問題はたくさんある"
          svg={Yononaka}
          imgWidth="40%"
        />
        <SlideContent title="自分のこと、他人のこと" svg={JibunTanin} />
        <SlideContent
          title="人生に大切なことはいくつもある"
          svg={House}
          imgWidth="40%"
        />
        <SlideContent title="意識的にも、無意識的にも" svg={Muishiki} />
        <SlideContent
          title="呼吸は生まれてから自然にできている"
          svg={Umaretekara}
          imgWidth="30%"
        />
        <SlideContent
          title="知らぬ間に続く、当たり前な行為"
          svg={Aruku}
          imgWidth="40%"
        />
        <SlideContent
          title="こんな自分の些細なことに意識を向ける"
          svg={Focus}
        />
        <SlideContent title="世界一退屈な時間" svg={Zeitaku} />
        <SlideContent title="世界一贅沢な時間" svg={Zeitaku2} />
        <SlideContent title="それが瞑想なのかもしれない" svg={Taikutsu} />

        <SlideContent title="おしまい" svg={Oshimai} />
      </Box>
    </>
  );
};

export default Main;
