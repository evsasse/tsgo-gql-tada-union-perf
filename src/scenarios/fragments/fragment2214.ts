import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2212 } from "./fragment2212";
import type { FragmentToken2213 } from "./fragment2213";

export const FRAGMENT_2214 = gql(`
  fragment Fragment2214 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult2214 = ResultOf<typeof FRAGMENT_2214>;
type FragmentSelf2214 = NonNullable<FragmentResult2214>;

export type FragmentToken2214 =
  | FragmentSelf2214["__typename"]
  | FragmentSelf2214["typenameHint"] | FragmentToken2212 | FragmentToken2213;
