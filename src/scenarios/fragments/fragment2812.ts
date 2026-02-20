import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2810 } from "./fragment2810";
import type { FragmentToken2811 } from "./fragment2811";

export const FRAGMENT_2812 = gql(`
  fragment Fragment2812 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult2812 = ResultOf<typeof FRAGMENT_2812>;
type FragmentSelf2812 = NonNullable<FragmentResult2812>;

export type FragmentToken2812 =
  | FragmentSelf2812["__typename"]
  | FragmentSelf2812["typenameHint"] | FragmentToken2810 | FragmentToken2811;
