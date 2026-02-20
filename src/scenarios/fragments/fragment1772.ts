import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1770 } from "./fragment1770";
import type { FragmentToken1771 } from "./fragment1771";

export const FRAGMENT_1772 = gql(`
  fragment Fragment1772 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult1772 = ResultOf<typeof FRAGMENT_1772>;
type FragmentSelf1772 = NonNullable<FragmentResult1772>;

export type FragmentToken1772 =
  | FragmentSelf1772["__typename"]
  | FragmentSelf1772["typenameHint"] | FragmentToken1770 | FragmentToken1771;
