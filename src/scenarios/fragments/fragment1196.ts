import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1194 } from "./fragment1194";
import type { FragmentToken1195 } from "./fragment1195";

export const FRAGMENT_1196 = gql(`
  fragment Fragment1196 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult1196 = ResultOf<typeof FRAGMENT_1196>;
type FragmentSelf1196 = NonNullable<FragmentResult1196>;

export type FragmentToken1196 =
  | FragmentSelf1196["__typename"]
  | FragmentSelf1196["typenameHint"] | FragmentToken1194 | FragmentToken1195;
