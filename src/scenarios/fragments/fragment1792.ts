import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1790 } from "./fragment1790";
import type { FragmentToken1791 } from "./fragment1791";

export const FRAGMENT_1792 = gql(`
  fragment Fragment1792 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult1792 = ResultOf<typeof FRAGMENT_1792>;
type FragmentSelf1792 = NonNullable<FragmentResult1792>;

export type FragmentToken1792 =
  | FragmentSelf1792["__typename"]
  | FragmentSelf1792["typenameHint"] | FragmentToken1790 | FragmentToken1791;
