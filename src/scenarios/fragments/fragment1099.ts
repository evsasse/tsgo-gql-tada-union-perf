import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1097 } from "./fragment1097";
import type { FragmentToken1098 } from "./fragment1098";

export const FRAGMENT_1099 = gql(`
  fragment Fragment1099 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult1099 = ResultOf<typeof FRAGMENT_1099>;
type FragmentSelf1099 = NonNullable<FragmentResult1099>;

export type FragmentToken1099 =
  | FragmentSelf1099["__typename"]
  | FragmentSelf1099["typenameHint"] | FragmentToken1097 | FragmentToken1098;
