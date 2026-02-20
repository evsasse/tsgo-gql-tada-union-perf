import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2350 } from "./fragment2350";
import type { FragmentToken2351 } from "./fragment2351";

export const FRAGMENT_2352 = gql(`
  fragment Fragment2352 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult2352 = ResultOf<typeof FRAGMENT_2352>;
type FragmentSelf2352 = NonNullable<FragmentResult2352>;

export type FragmentToken2352 =
  | FragmentSelf2352["__typename"]
  | FragmentSelf2352["typenameHint"] | FragmentToken2350 | FragmentToken2351;
