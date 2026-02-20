import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1578 } from "./fragment1578";
import type { FragmentToken1579 } from "./fragment1579";

export const FRAGMENT_1580 = gql(`
  fragment Fragment1580 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult1580 = ResultOf<typeof FRAGMENT_1580>;
type FragmentSelf1580 = NonNullable<FragmentResult1580>;

export type FragmentToken1580 =
  | FragmentSelf1580["__typename"]
  | FragmentSelf1580["typenameHint"] | FragmentToken1578 | FragmentToken1579;
