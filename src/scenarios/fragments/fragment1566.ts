import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1564 } from "./fragment1564";
import type { FragmentToken1565 } from "./fragment1565";

export const FRAGMENT_1566 = gql(`
  fragment Fragment1566 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult1566 = ResultOf<typeof FRAGMENT_1566>;
type FragmentSelf1566 = NonNullable<FragmentResult1566>;

export type FragmentToken1566 =
  | FragmentSelf1566["__typename"]
  | FragmentSelf1566["typenameHint"] | FragmentToken1564 | FragmentToken1565;
