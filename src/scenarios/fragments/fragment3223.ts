import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3221 } from "./fragment3221";
import type { FragmentToken3222 } from "./fragment3222";

export const FRAGMENT_3223 = gql(`
  fragment Fragment3223 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult3223 = ResultOf<typeof FRAGMENT_3223>;
type FragmentSelf3223 = NonNullable<FragmentResult3223>;

export type FragmentToken3223 =
  | FragmentSelf3223["__typename"]
  | FragmentSelf3223["typenameHint"] | FragmentToken3221 | FragmentToken3222;
