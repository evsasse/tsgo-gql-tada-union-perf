import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1585 } from "./fragment1585";
import type { FragmentToken1586 } from "./fragment1586";

export const FRAGMENT_1587 = gql(`
  fragment Fragment1587 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult1587 = ResultOf<typeof FRAGMENT_1587>;
type FragmentSelf1587 = NonNullable<FragmentResult1587>;

export type FragmentToken1587 =
  | FragmentSelf1587["__typename"]
  | FragmentSelf1587["typenameHint"] | FragmentToken1585 | FragmentToken1586;
