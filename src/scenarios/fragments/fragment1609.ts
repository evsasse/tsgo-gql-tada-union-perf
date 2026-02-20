import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1607 } from "./fragment1607";
import type { FragmentToken1608 } from "./fragment1608";

export const FRAGMENT_1609 = gql(`
  fragment Fragment1609 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult1609 = ResultOf<typeof FRAGMENT_1609>;
type FragmentSelf1609 = NonNullable<FragmentResult1609>;

export type FragmentToken1609 =
  | FragmentSelf1609["__typename"]
  | FragmentSelf1609["typenameHint"] | FragmentToken1607 | FragmentToken1608;
