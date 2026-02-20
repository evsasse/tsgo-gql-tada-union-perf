import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1320 } from "./fragment1320";
import type { FragmentToken1321 } from "./fragment1321";

export const FRAGMENT_1322 = gql(`
  fragment Fragment1322 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult1322 = ResultOf<typeof FRAGMENT_1322>;
type FragmentSelf1322 = NonNullable<FragmentResult1322>;

export type FragmentToken1322 =
  | FragmentSelf1322["__typename"]
  | FragmentSelf1322["typenameHint"] | FragmentToken1320 | FragmentToken1321;
