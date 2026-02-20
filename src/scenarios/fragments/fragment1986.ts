import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1984 } from "./fragment1984";
import type { FragmentToken1985 } from "./fragment1985";

export const FRAGMENT_1986 = gql(`
  fragment Fragment1986 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult1986 = ResultOf<typeof FRAGMENT_1986>;
type FragmentSelf1986 = NonNullable<FragmentResult1986>;

export type FragmentToken1986 =
  | FragmentSelf1986["__typename"]
  | FragmentSelf1986["typenameHint"] | FragmentToken1984 | FragmentToken1985;
