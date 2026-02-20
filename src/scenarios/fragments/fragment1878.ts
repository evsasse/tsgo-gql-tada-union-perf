import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1876 } from "./fragment1876";
import type { FragmentToken1877 } from "./fragment1877";

export const FRAGMENT_1878 = gql(`
  fragment Fragment1878 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult1878 = ResultOf<typeof FRAGMENT_1878>;
type FragmentSelf1878 = NonNullable<FragmentResult1878>;

export type FragmentToken1878 =
  | FragmentSelf1878["__typename"]
  | FragmentSelf1878["typenameHint"] | FragmentToken1876 | FragmentToken1877;
