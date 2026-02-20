import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1877 } from "./fragment1877";
import type { FragmentToken1878 } from "./fragment1878";

export const FRAGMENT_1879 = gql(`
  fragment Fragment1879 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult1879 = ResultOf<typeof FRAGMENT_1879>;
type FragmentSelf1879 = NonNullable<FragmentResult1879>;

export type FragmentToken1879 =
  | FragmentSelf1879["__typename"]
  | FragmentSelf1879["typenameHint"] | FragmentToken1877 | FragmentToken1878;
