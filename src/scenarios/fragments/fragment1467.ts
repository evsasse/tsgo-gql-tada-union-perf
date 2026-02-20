import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1465 } from "./fragment1465";
import type { FragmentToken1466 } from "./fragment1466";

export const FRAGMENT_1467 = gql(`
  fragment Fragment1467 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult1467 = ResultOf<typeof FRAGMENT_1467>;
type FragmentSelf1467 = NonNullable<FragmentResult1467>;

export type FragmentToken1467 =
  | FragmentSelf1467["__typename"]
  | FragmentSelf1467["typenameHint"] | FragmentToken1465 | FragmentToken1466;
