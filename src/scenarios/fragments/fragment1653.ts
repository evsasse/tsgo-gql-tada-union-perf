import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1651 } from "./fragment1651";
import type { FragmentToken1652 } from "./fragment1652";

export const FRAGMENT_1653 = gql(`
  fragment Fragment1653 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult1653 = ResultOf<typeof FRAGMENT_1653>;
type FragmentSelf1653 = NonNullable<FragmentResult1653>;

export type FragmentToken1653 =
  | FragmentSelf1653["__typename"]
  | FragmentSelf1653["typenameHint"] | FragmentToken1651 | FragmentToken1652;
