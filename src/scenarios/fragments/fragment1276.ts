import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1274 } from "./fragment1274";
import type { FragmentToken1275 } from "./fragment1275";

export const FRAGMENT_1276 = gql(`
  fragment Fragment1276 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult1276 = ResultOf<typeof FRAGMENT_1276>;
type FragmentSelf1276 = NonNullable<FragmentResult1276>;

export type FragmentToken1276 =
  | FragmentSelf1276["__typename"]
  | FragmentSelf1276["typenameHint"] | FragmentToken1274 | FragmentToken1275;
