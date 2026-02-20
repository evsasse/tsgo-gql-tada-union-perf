import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3351 } from "./fragment3351";
import type { FragmentToken3352 } from "./fragment3352";

export const FRAGMENT_3353 = gql(`
  fragment Fragment3353 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult3353 = ResultOf<typeof FRAGMENT_3353>;
type FragmentSelf3353 = NonNullable<FragmentResult3353>;

export type FragmentToken3353 =
  | FragmentSelf3353["__typename"]
  | FragmentSelf3353["typenameHint"] | FragmentToken3351 | FragmentToken3352;
