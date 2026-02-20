import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1199 } from "./fragment1199";
import type { FragmentToken1200 } from "./fragment1200";

export const FRAGMENT_1201 = gql(`
  fragment Fragment1201 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult1201 = ResultOf<typeof FRAGMENT_1201>;
type FragmentSelf1201 = NonNullable<FragmentResult1201>;

export type FragmentToken1201 =
  | FragmentSelf1201["__typename"]
  | FragmentSelf1201["typenameHint"] | FragmentToken1199 | FragmentToken1200;
