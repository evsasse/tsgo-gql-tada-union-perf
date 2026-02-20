import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1667 } from "./fragment1667";
import type { FragmentToken1668 } from "./fragment1668";

export const FRAGMENT_1669 = gql(`
  fragment Fragment1669 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult1669 = ResultOf<typeof FRAGMENT_1669>;
type FragmentSelf1669 = NonNullable<FragmentResult1669>;

export type FragmentToken1669 =
  | FragmentSelf1669["__typename"]
  | FragmentSelf1669["typenameHint"] | FragmentToken1667 | FragmentToken1668;
