import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1324 } from "./fragment1324";
import type { FragmentToken1325 } from "./fragment1325";

export const FRAGMENT_1326 = gql(`
  fragment Fragment1326 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult1326 = ResultOf<typeof FRAGMENT_1326>;
type FragmentSelf1326 = NonNullable<FragmentResult1326>;

export type FragmentToken1326 =
  | FragmentSelf1326["__typename"]
  | FragmentSelf1326["typenameHint"] | FragmentToken1324 | FragmentToken1325;
