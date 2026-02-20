import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1329 } from "./fragment1329";
import type { FragmentToken1330 } from "./fragment1330";

export const FRAGMENT_1331 = gql(`
  fragment Fragment1331 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult1331 = ResultOf<typeof FRAGMENT_1331>;
type FragmentSelf1331 = NonNullable<FragmentResult1331>;

export type FragmentToken1331 =
  | FragmentSelf1331["__typename"]
  | FragmentSelf1331["typenameHint"] | FragmentToken1329 | FragmentToken1330;
