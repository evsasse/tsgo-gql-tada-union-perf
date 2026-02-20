import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1787 } from "./fragment1787";
import type { FragmentToken1788 } from "./fragment1788";

export const FRAGMENT_1789 = gql(`
  fragment Fragment1789 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult1789 = ResultOf<typeof FRAGMENT_1789>;
type FragmentSelf1789 = NonNullable<FragmentResult1789>;

export type FragmentToken1789 =
  | FragmentSelf1789["__typename"]
  | FragmentSelf1789["typenameHint"] | FragmentToken1787 | FragmentToken1788;
