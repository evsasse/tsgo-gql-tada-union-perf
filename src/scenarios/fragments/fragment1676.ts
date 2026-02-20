import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1674 } from "./fragment1674";
import type { FragmentToken1675 } from "./fragment1675";

export const FRAGMENT_1676 = gql(`
  fragment Fragment1676 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult1676 = ResultOf<typeof FRAGMENT_1676>;
type FragmentSelf1676 = NonNullable<FragmentResult1676>;

export type FragmentToken1676 =
  | FragmentSelf1676["__typename"]
  | FragmentSelf1676["typenameHint"] | FragmentToken1674 | FragmentToken1675;
