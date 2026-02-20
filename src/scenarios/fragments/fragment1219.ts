import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1217 } from "./fragment1217";
import type { FragmentToken1218 } from "./fragment1218";

export const FRAGMENT_1219 = gql(`
  fragment Fragment1219 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult1219 = ResultOf<typeof FRAGMENT_1219>;
type FragmentSelf1219 = NonNullable<FragmentResult1219>;

export type FragmentToken1219 =
  | FragmentSelf1219["__typename"]
  | FragmentSelf1219["typenameHint"] | FragmentToken1217 | FragmentToken1218;
