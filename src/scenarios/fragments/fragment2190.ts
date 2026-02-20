import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2188 } from "./fragment2188";
import type { FragmentToken2189 } from "./fragment2189";

export const FRAGMENT_2190 = gql(`
  fragment Fragment2190 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult2190 = ResultOf<typeof FRAGMENT_2190>;
type FragmentSelf2190 = NonNullable<FragmentResult2190>;

export type FragmentToken2190 =
  | FragmentSelf2190["__typename"]
  | FragmentSelf2190["typenameHint"] | FragmentToken2188 | FragmentToken2189;
