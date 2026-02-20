import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1669 } from "./fragment1669";
import type { FragmentToken1670 } from "./fragment1670";

export const FRAGMENT_1671 = gql(`
  fragment Fragment1671 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult1671 = ResultOf<typeof FRAGMENT_1671>;
type FragmentSelf1671 = NonNullable<FragmentResult1671>;

export type FragmentToken1671 =
  | FragmentSelf1671["__typename"]
  | FragmentSelf1671["typenameHint"] | FragmentToken1669 | FragmentToken1670;
