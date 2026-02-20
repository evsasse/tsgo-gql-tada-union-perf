import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1847 } from "./fragment1847";
import type { FragmentToken1848 } from "./fragment1848";

export const FRAGMENT_1849 = gql(`
  fragment Fragment1849 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult1849 = ResultOf<typeof FRAGMENT_1849>;
type FragmentSelf1849 = NonNullable<FragmentResult1849>;

export type FragmentToken1849 =
  | FragmentSelf1849["__typename"]
  | FragmentSelf1849["typenameHint"] | FragmentToken1847 | FragmentToken1848;
