import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1606 } from "./fragment1606";
import type { FragmentToken1607 } from "./fragment1607";

export const FRAGMENT_1608 = gql(`
  fragment Fragment1608 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult1608 = ResultOf<typeof FRAGMENT_1608>;
type FragmentSelf1608 = NonNullable<FragmentResult1608>;

export type FragmentToken1608 =
  | FragmentSelf1608["__typename"]
  | FragmentSelf1608["typenameHint"] | FragmentToken1606 | FragmentToken1607;
