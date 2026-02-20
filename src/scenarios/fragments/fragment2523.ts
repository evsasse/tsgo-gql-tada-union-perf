import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2521 } from "./fragment2521";
import type { FragmentToken2522 } from "./fragment2522";

export const FRAGMENT_2523 = gql(`
  fragment Fragment2523 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult2523 = ResultOf<typeof FRAGMENT_2523>;
type FragmentSelf2523 = NonNullable<FragmentResult2523>;

export type FragmentToken2523 =
  | FragmentSelf2523["__typename"]
  | FragmentSelf2523["typenameHint"] | FragmentToken2521 | FragmentToken2522;
