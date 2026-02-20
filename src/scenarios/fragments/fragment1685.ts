import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1683 } from "./fragment1683";
import type { FragmentToken1684 } from "./fragment1684";

export const FRAGMENT_1685 = gql(`
  fragment Fragment1685 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult1685 = ResultOf<typeof FRAGMENT_1685>;
type FragmentSelf1685 = NonNullable<FragmentResult1685>;

export type FragmentToken1685 =
  | FragmentSelf1685["__typename"]
  | FragmentSelf1685["typenameHint"] | FragmentToken1683 | FragmentToken1684;
