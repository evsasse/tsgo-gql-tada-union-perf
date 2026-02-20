import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1981 } from "./fragment1981";
import type { FragmentToken1982 } from "./fragment1982";

export const FRAGMENT_1983 = gql(`
  fragment Fragment1983 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult1983 = ResultOf<typeof FRAGMENT_1983>;
type FragmentSelf1983 = NonNullable<FragmentResult1983>;

export type FragmentToken1983 =
  | FragmentSelf1983["__typename"]
  | FragmentSelf1983["typenameHint"] | FragmentToken1981 | FragmentToken1982;
