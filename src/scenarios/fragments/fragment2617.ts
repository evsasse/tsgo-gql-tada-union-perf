import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2615 } from "./fragment2615";
import type { FragmentToken2616 } from "./fragment2616";

export const FRAGMENT_2617 = gql(`
  fragment Fragment2617 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult2617 = ResultOf<typeof FRAGMENT_2617>;
type FragmentSelf2617 = NonNullable<FragmentResult2617>;

export type FragmentToken2617 =
  | FragmentSelf2617["__typename"]
  | FragmentSelf2617["typenameHint"] | FragmentToken2615 | FragmentToken2616;
