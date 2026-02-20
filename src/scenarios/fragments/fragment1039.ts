import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1037 } from "./fragment1037";
import type { FragmentToken1038 } from "./fragment1038";

export const FRAGMENT_1039 = gql(`
  fragment Fragment1039 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult1039 = ResultOf<typeof FRAGMENT_1039>;
type FragmentSelf1039 = NonNullable<FragmentResult1039>;

export type FragmentToken1039 =
  | FragmentSelf1039["__typename"]
  | FragmentSelf1039["typenameHint"] | FragmentToken1037 | FragmentToken1038;
