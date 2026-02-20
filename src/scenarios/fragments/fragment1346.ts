import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1344 } from "./fragment1344";
import type { FragmentToken1345 } from "./fragment1345";

export const FRAGMENT_1346 = gql(`
  fragment Fragment1346 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult1346 = ResultOf<typeof FRAGMENT_1346>;
type FragmentSelf1346 = NonNullable<FragmentResult1346>;

export type FragmentToken1346 =
  | FragmentSelf1346["__typename"]
  | FragmentSelf1346["typenameHint"] | FragmentToken1344 | FragmentToken1345;
