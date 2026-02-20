import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1541 } from "./fragment1541";
import type { FragmentToken1542 } from "./fragment1542";

export const FRAGMENT_1543 = gql(`
  fragment Fragment1543 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult1543 = ResultOf<typeof FRAGMENT_1543>;
type FragmentSelf1543 = NonNullable<FragmentResult1543>;

export type FragmentToken1543 =
  | FragmentSelf1543["__typename"]
  | FragmentSelf1543["typenameHint"] | FragmentToken1541 | FragmentToken1542;
