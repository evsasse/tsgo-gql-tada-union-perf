import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3210 } from "./fragment3210";
import type { FragmentToken3211 } from "./fragment3211";

export const FRAGMENT_3212 = gql(`
  fragment Fragment3212 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult3212 = ResultOf<typeof FRAGMENT_3212>;
type FragmentSelf3212 = NonNullable<FragmentResult3212>;

export type FragmentToken3212 =
  | FragmentSelf3212["__typename"]
  | FragmentSelf3212["typenameHint"] | FragmentToken3210 | FragmentToken3211;
