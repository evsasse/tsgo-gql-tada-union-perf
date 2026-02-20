import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1846 } from "./fragment1846";
import type { FragmentToken1847 } from "./fragment1847";

export const FRAGMENT_1848 = gql(`
  fragment Fragment1848 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult1848 = ResultOf<typeof FRAGMENT_1848>;
type FragmentSelf1848 = NonNullable<FragmentResult1848>;

export type FragmentToken1848 =
  | FragmentSelf1848["__typename"]
  | FragmentSelf1848["typenameHint"] | FragmentToken1846 | FragmentToken1847;
