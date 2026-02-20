import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2811 } from "./fragment2811";
import type { FragmentToken2812 } from "./fragment2812";

export const FRAGMENT_2813 = gql(`
  fragment Fragment2813 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult2813 = ResultOf<typeof FRAGMENT_2813>;
type FragmentSelf2813 = NonNullable<FragmentResult2813>;

export type FragmentToken2813 =
  | FragmentSelf2813["__typename"]
  | FragmentSelf2813["typenameHint"] | FragmentToken2811 | FragmentToken2812;
