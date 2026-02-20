import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1036 } from "./fragment1036";
import type { FragmentToken1037 } from "./fragment1037";

export const FRAGMENT_1038 = gql(`
  fragment Fragment1038 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult1038 = ResultOf<typeof FRAGMENT_1038>;
type FragmentSelf1038 = NonNullable<FragmentResult1038>;

export type FragmentToken1038 =
  | FragmentSelf1038["__typename"]
  | FragmentSelf1038["typenameHint"] | FragmentToken1036 | FragmentToken1037;
