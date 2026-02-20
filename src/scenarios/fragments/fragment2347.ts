import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2345 } from "./fragment2345";
import type { FragmentToken2346 } from "./fragment2346";

export const FRAGMENT_2347 = gql(`
  fragment Fragment2347 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult2347 = ResultOf<typeof FRAGMENT_2347>;
type FragmentSelf2347 = NonNullable<FragmentResult2347>;

export type FragmentToken2347 =
  | FragmentSelf2347["__typename"]
  | FragmentSelf2347["typenameHint"] | FragmentToken2345 | FragmentToken2346;
