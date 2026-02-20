import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1979 } from "./fragment1979";
import type { FragmentToken1980 } from "./fragment1980";

export const FRAGMENT_1981 = gql(`
  fragment Fragment1981 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult1981 = ResultOf<typeof FRAGMENT_1981>;
type FragmentSelf1981 = NonNullable<FragmentResult1981>;

export type FragmentToken1981 =
  | FragmentSelf1981["__typename"]
  | FragmentSelf1981["typenameHint"] | FragmentToken1979 | FragmentToken1980;
