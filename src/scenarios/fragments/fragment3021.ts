import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3019 } from "./fragment3019";
import type { FragmentToken3020 } from "./fragment3020";

export const FRAGMENT_3021 = gql(`
  fragment Fragment3021 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult3021 = ResultOf<typeof FRAGMENT_3021>;
type FragmentSelf3021 = NonNullable<FragmentResult3021>;

export type FragmentToken3021 =
  | FragmentSelf3021["__typename"]
  | FragmentSelf3021["typenameHint"] | FragmentToken3019 | FragmentToken3020;
