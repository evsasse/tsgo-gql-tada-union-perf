import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2302 } from "./fragment2302";
import type { FragmentToken2303 } from "./fragment2303";

export const FRAGMENT_2304 = gql(`
  fragment Fragment2304 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult2304 = ResultOf<typeof FRAGMENT_2304>;
type FragmentSelf2304 = NonNullable<FragmentResult2304>;

export type FragmentToken2304 =
  | FragmentSelf2304["__typename"]
  | FragmentSelf2304["typenameHint"] | FragmentToken2302 | FragmentToken2303;
