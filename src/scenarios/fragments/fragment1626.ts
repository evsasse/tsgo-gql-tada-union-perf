import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1624 } from "./fragment1624";
import type { FragmentToken1625 } from "./fragment1625";

export const FRAGMENT_1626 = gql(`
  fragment Fragment1626 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult1626 = ResultOf<typeof FRAGMENT_1626>;
type FragmentSelf1626 = NonNullable<FragmentResult1626>;

export type FragmentToken1626 =
  | FragmentSelf1626["__typename"]
  | FragmentSelf1626["typenameHint"] | FragmentToken1624 | FragmentToken1625;
