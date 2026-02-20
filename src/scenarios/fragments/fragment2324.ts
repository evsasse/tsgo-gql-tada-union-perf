import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2322 } from "./fragment2322";
import type { FragmentToken2323 } from "./fragment2323";

export const FRAGMENT_2324 = gql(`
  fragment Fragment2324 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult2324 = ResultOf<typeof FRAGMENT_2324>;
type FragmentSelf2324 = NonNullable<FragmentResult2324>;

export type FragmentToken2324 =
  | FragmentSelf2324["__typename"]
  | FragmentSelf2324["typenameHint"] | FragmentToken2322 | FragmentToken2323;
