import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1299 } from "./fragment1299";
import type { FragmentToken1300 } from "./fragment1300";

export const FRAGMENT_1301 = gql(`
  fragment Fragment1301 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult1301 = ResultOf<typeof FRAGMENT_1301>;
type FragmentSelf1301 = NonNullable<FragmentResult1301>;

export type FragmentToken1301 =
  | FragmentSelf1301["__typename"]
  | FragmentSelf1301["typenameHint"] | FragmentToken1299 | FragmentToken1300;
