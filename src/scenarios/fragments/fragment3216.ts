import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3214 } from "./fragment3214";
import type { FragmentToken3215 } from "./fragment3215";

export const FRAGMENT_3216 = gql(`
  fragment Fragment3216 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult3216 = ResultOf<typeof FRAGMENT_3216>;
type FragmentSelf3216 = NonNullable<FragmentResult3216>;

export type FragmentToken3216 =
  | FragmentSelf3216["__typename"]
  | FragmentSelf3216["typenameHint"] | FragmentToken3214 | FragmentToken3215;
