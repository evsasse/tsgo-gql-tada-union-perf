import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1690 } from "./fragment1690";
import type { FragmentToken1691 } from "./fragment1691";

export const FRAGMENT_1692 = gql(`
  fragment Fragment1692 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult1692 = ResultOf<typeof FRAGMENT_1692>;
type FragmentSelf1692 = NonNullable<FragmentResult1692>;

export type FragmentToken1692 =
  | FragmentSelf1692["__typename"]
  | FragmentSelf1692["typenameHint"] | FragmentToken1690 | FragmentToken1691;
