import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1545 } from "./fragment1545";
import type { FragmentToken1546 } from "./fragment1546";

export const FRAGMENT_1547 = gql(`
  fragment Fragment1547 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult1547 = ResultOf<typeof FRAGMENT_1547>;
type FragmentSelf1547 = NonNullable<FragmentResult1547>;

export type FragmentToken1547 =
  | FragmentSelf1547["__typename"]
  | FragmentSelf1547["typenameHint"] | FragmentToken1545 | FragmentToken1546;
