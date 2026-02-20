import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1738 } from "./fragment1738";
import type { FragmentToken1739 } from "./fragment1739";

export const FRAGMENT_1740 = gql(`
  fragment Fragment1740 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult1740 = ResultOf<typeof FRAGMENT_1740>;
type FragmentSelf1740 = NonNullable<FragmentResult1740>;

export type FragmentToken1740 =
  | FragmentSelf1740["__typename"]
  | FragmentSelf1740["typenameHint"] | FragmentToken1738 | FragmentToken1739;
