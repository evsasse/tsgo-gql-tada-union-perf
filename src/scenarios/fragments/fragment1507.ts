import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1505 } from "./fragment1505";
import type { FragmentToken1506 } from "./fragment1506";

export const FRAGMENT_1507 = gql(`
  fragment Fragment1507 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult1507 = ResultOf<typeof FRAGMENT_1507>;
type FragmentSelf1507 = NonNullable<FragmentResult1507>;

export type FragmentToken1507 =
  | FragmentSelf1507["__typename"]
  | FragmentSelf1507["typenameHint"] | FragmentToken1505 | FragmentToken1506;
