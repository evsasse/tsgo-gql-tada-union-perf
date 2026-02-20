import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1813 } from "./fragment1813";
import type { FragmentToken1814 } from "./fragment1814";

export const FRAGMENT_1815 = gql(`
  fragment Fragment1815 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult1815 = ResultOf<typeof FRAGMENT_1815>;
type FragmentSelf1815 = NonNullable<FragmentResult1815>;

export type FragmentToken1815 =
  | FragmentSelf1815["__typename"]
  | FragmentSelf1815["typenameHint"] | FragmentToken1813 | FragmentToken1814;
