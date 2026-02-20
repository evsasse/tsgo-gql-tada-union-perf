import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1515 } from "./fragment1515";
import type { FragmentToken1516 } from "./fragment1516";

export const FRAGMENT_1517 = gql(`
  fragment Fragment1517 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult1517 = ResultOf<typeof FRAGMENT_1517>;
type FragmentSelf1517 = NonNullable<FragmentResult1517>;

export type FragmentToken1517 =
  | FragmentSelf1517["__typename"]
  | FragmentSelf1517["typenameHint"] | FragmentToken1515 | FragmentToken1516;
