import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2323 } from "./fragment2323";
import type { FragmentToken2324 } from "./fragment2324";

export const FRAGMENT_2325 = gql(`
  fragment Fragment2325 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult2325 = ResultOf<typeof FRAGMENT_2325>;
type FragmentSelf2325 = NonNullable<FragmentResult2325>;

export type FragmentToken2325 =
  | FragmentSelf2325["__typename"]
  | FragmentSelf2325["typenameHint"] | FragmentToken2323 | FragmentToken2324;
