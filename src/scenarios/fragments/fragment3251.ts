import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3249 } from "./fragment3249";
import type { FragmentToken3250 } from "./fragment3250";

export const FRAGMENT_3251 = gql(`
  fragment Fragment3251 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult3251 = ResultOf<typeof FRAGMENT_3251>;
type FragmentSelf3251 = NonNullable<FragmentResult3251>;

export type FragmentToken3251 =
  | FragmentSelf3251["__typename"]
  | FragmentSelf3251["typenameHint"] | FragmentToken3249 | FragmentToken3250;
