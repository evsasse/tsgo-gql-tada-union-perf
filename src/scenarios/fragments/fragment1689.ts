import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1687 } from "./fragment1687";
import type { FragmentToken1688 } from "./fragment1688";

export const FRAGMENT_1689 = gql(`
  fragment Fragment1689 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult1689 = ResultOf<typeof FRAGMENT_1689>;
type FragmentSelf1689 = NonNullable<FragmentResult1689>;

export type FragmentToken1689 =
  | FragmentSelf1689["__typename"]
  | FragmentSelf1689["typenameHint"] | FragmentToken1687 | FragmentToken1688;
