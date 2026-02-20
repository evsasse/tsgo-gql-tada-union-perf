import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1622 } from "./fragment1622";
import type { FragmentToken1623 } from "./fragment1623";

export const FRAGMENT_1624 = gql(`
  fragment Fragment1624 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult1624 = ResultOf<typeof FRAGMENT_1624>;
type FragmentSelf1624 = NonNullable<FragmentResult1624>;

export type FragmentToken1624 =
  | FragmentSelf1624["__typename"]
  | FragmentSelf1624["typenameHint"] | FragmentToken1622 | FragmentToken1623;
