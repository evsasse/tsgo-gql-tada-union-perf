import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1637 } from "./fragment1637";
import type { FragmentToken1638 } from "./fragment1638";

export const FRAGMENT_1639 = gql(`
  fragment Fragment1639 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult1639 = ResultOf<typeof FRAGMENT_1639>;
type FragmentSelf1639 = NonNullable<FragmentResult1639>;

export type FragmentToken1639 =
  | FragmentSelf1639["__typename"]
  | FragmentSelf1639["typenameHint"] | FragmentToken1637 | FragmentToken1638;
