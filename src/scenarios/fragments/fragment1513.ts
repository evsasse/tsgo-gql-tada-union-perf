import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1511 } from "./fragment1511";
import type { FragmentToken1512 } from "./fragment1512";

export const FRAGMENT_1513 = gql(`
  fragment Fragment1513 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult1513 = ResultOf<typeof FRAGMENT_1513>;
type FragmentSelf1513 = NonNullable<FragmentResult1513>;

export type FragmentToken1513 =
  | FragmentSelf1513["__typename"]
  | FragmentSelf1513["typenameHint"] | FragmentToken1511 | FragmentToken1512;
