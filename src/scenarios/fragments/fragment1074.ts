import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1072 } from "./fragment1072";
import type { FragmentToken1073 } from "./fragment1073";

export const FRAGMENT_1074 = gql(`
  fragment Fragment1074 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult1074 = ResultOf<typeof FRAGMENT_1074>;
type FragmentSelf1074 = NonNullable<FragmentResult1074>;

export type FragmentToken1074 =
  | FragmentSelf1074["__typename"]
  | FragmentSelf1074["typenameHint"] | FragmentToken1072 | FragmentToken1073;
