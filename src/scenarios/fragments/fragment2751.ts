import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2749 } from "./fragment2749";
import type { FragmentToken2750 } from "./fragment2750";

export const FRAGMENT_2751 = gql(`
  fragment Fragment2751 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult2751 = ResultOf<typeof FRAGMENT_2751>;
type FragmentSelf2751 = NonNullable<FragmentResult2751>;

export type FragmentToken2751 =
  | FragmentSelf2751["__typename"]
  | FragmentSelf2751["typenameHint"] | FragmentToken2749 | FragmentToken2750;
