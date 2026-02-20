import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1586 } from "./fragment1586";
import type { FragmentToken1587 } from "./fragment1587";

export const FRAGMENT_1588 = gql(`
  fragment Fragment1588 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult1588 = ResultOf<typeof FRAGMENT_1588>;
type FragmentSelf1588 = NonNullable<FragmentResult1588>;

export type FragmentToken1588 =
  | FragmentSelf1588["__typename"]
  | FragmentSelf1588["typenameHint"] | FragmentToken1586 | FragmentToken1587;
