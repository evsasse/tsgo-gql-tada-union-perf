import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1590 } from "./fragment1590";
import type { FragmentToken1591 } from "./fragment1591";

export const FRAGMENT_1592 = gql(`
  fragment Fragment1592 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult1592 = ResultOf<typeof FRAGMENT_1592>;
type FragmentSelf1592 = NonNullable<FragmentResult1592>;

export type FragmentToken1592 =
  | FragmentSelf1592["__typename"]
  | FragmentSelf1592["typenameHint"] | FragmentToken1590 | FragmentToken1591;
