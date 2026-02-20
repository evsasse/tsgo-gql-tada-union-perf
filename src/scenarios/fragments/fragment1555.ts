import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1553 } from "./fragment1553";
import type { FragmentToken1554 } from "./fragment1554";

export const FRAGMENT_1555 = gql(`
  fragment Fragment1555 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult1555 = ResultOf<typeof FRAGMENT_1555>;
type FragmentSelf1555 = NonNullable<FragmentResult1555>;

export type FragmentToken1555 =
  | FragmentSelf1555["__typename"]
  | FragmentSelf1555["typenameHint"] | FragmentToken1553 | FragmentToken1554;
