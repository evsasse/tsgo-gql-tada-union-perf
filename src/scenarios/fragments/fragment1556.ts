import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1554 } from "./fragment1554";
import type { FragmentToken1555 } from "./fragment1555";

export const FRAGMENT_1556 = gql(`
  fragment Fragment1556 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult1556 = ResultOf<typeof FRAGMENT_1556>;
type FragmentSelf1556 = NonNullable<FragmentResult1556>;

export type FragmentToken1556 =
  | FragmentSelf1556["__typename"]
  | FragmentSelf1556["typenameHint"] | FragmentToken1554 | FragmentToken1555;
