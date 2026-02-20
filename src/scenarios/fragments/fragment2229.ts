import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2227 } from "./fragment2227";
import type { FragmentToken2228 } from "./fragment2228";

export const FRAGMENT_2229 = gql(`
  fragment Fragment2229 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult2229 = ResultOf<typeof FRAGMENT_2229>;
type FragmentSelf2229 = NonNullable<FragmentResult2229>;

export type FragmentToken2229 =
  | FragmentSelf2229["__typename"]
  | FragmentSelf2229["typenameHint"] | FragmentToken2227 | FragmentToken2228;
