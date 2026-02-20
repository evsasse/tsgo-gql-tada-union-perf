import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2812 } from "./fragment2812";
import type { FragmentToken2813 } from "./fragment2813";

export const FRAGMENT_2814 = gql(`
  fragment Fragment2814 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult2814 = ResultOf<typeof FRAGMENT_2814>;
type FragmentSelf2814 = NonNullable<FragmentResult2814>;

export type FragmentToken2814 =
  | FragmentSelf2814["__typename"]
  | FragmentSelf2814["typenameHint"] | FragmentToken2812 | FragmentToken2813;
