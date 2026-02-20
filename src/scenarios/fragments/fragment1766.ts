import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1764 } from "./fragment1764";
import type { FragmentToken1765 } from "./fragment1765";

export const FRAGMENT_1766 = gql(`
  fragment Fragment1766 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult1766 = ResultOf<typeof FRAGMENT_1766>;
type FragmentSelf1766 = NonNullable<FragmentResult1766>;

export type FragmentToken1766 =
  | FragmentSelf1766["__typename"]
  | FragmentSelf1766["typenameHint"] | FragmentToken1764 | FragmentToken1765;
