import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2209 } from "./fragment2209";
import type { FragmentToken2210 } from "./fragment2210";

export const FRAGMENT_2211 = gql(`
  fragment Fragment2211 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult2211 = ResultOf<typeof FRAGMENT_2211>;
type FragmentSelf2211 = NonNullable<FragmentResult2211>;

export type FragmentToken2211 =
  | FragmentSelf2211["__typename"]
  | FragmentSelf2211["typenameHint"] | FragmentToken2209 | FragmentToken2210;
