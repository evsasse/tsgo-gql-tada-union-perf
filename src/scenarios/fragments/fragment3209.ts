import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3207 } from "./fragment3207";
import type { FragmentToken3208 } from "./fragment3208";

export const FRAGMENT_3209 = gql(`
  fragment Fragment3209 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult3209 = ResultOf<typeof FRAGMENT_3209>;
type FragmentSelf3209 = NonNullable<FragmentResult3209>;

export type FragmentToken3209 =
  | FragmentSelf3209["__typename"]
  | FragmentSelf3209["typenameHint"] | FragmentToken3207 | FragmentToken3208;
