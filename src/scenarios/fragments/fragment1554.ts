import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1552 } from "./fragment1552";
import type { FragmentToken1553 } from "./fragment1553";

export const FRAGMENT_1554 = gql(`
  fragment Fragment1554 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult1554 = ResultOf<typeof FRAGMENT_1554>;
type FragmentSelf1554 = NonNullable<FragmentResult1554>;

export type FragmentToken1554 =
  | FragmentSelf1554["__typename"]
  | FragmentSelf1554["typenameHint"] | FragmentToken1552 | FragmentToken1553;
