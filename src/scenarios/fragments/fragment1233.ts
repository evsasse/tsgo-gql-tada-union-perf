import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1231 } from "./fragment1231";
import type { FragmentToken1232 } from "./fragment1232";

export const FRAGMENT_1233 = gql(`
  fragment Fragment1233 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult1233 = ResultOf<typeof FRAGMENT_1233>;
type FragmentSelf1233 = NonNullable<FragmentResult1233>;

export type FragmentToken1233 =
  | FragmentSelf1233["__typename"]
  | FragmentSelf1233["typenameHint"] | FragmentToken1231 | FragmentToken1232;
