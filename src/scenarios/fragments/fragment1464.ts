import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1462 } from "./fragment1462";
import type { FragmentToken1463 } from "./fragment1463";

export const FRAGMENT_1464 = gql(`
  fragment Fragment1464 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult1464 = ResultOf<typeof FRAGMENT_1464>;
type FragmentSelf1464 = NonNullable<FragmentResult1464>;

export type FragmentToken1464 =
  | FragmentSelf1464["__typename"]
  | FragmentSelf1464["typenameHint"] | FragmentToken1462 | FragmentToken1463;
