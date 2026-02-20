import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1630 } from "./fragment1630";
import type { FragmentToken1631 } from "./fragment1631";

export const FRAGMENT_1632 = gql(`
  fragment Fragment1632 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult1632 = ResultOf<typeof FRAGMENT_1632>;
type FragmentSelf1632 = NonNullable<FragmentResult1632>;

export type FragmentToken1632 =
  | FragmentSelf1632["__typename"]
  | FragmentSelf1632["typenameHint"] | FragmentToken1630 | FragmentToken1631;
