import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1989 } from "./fragment1989";
import type { FragmentToken1990 } from "./fragment1990";

export const FRAGMENT_1991 = gql(`
  fragment Fragment1991 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult1991 = ResultOf<typeof FRAGMENT_1991>;
type FragmentSelf1991 = NonNullable<FragmentResult1991>;

export type FragmentToken1991 =
  | FragmentSelf1991["__typename"]
  | FragmentSelf1991["typenameHint"] | FragmentToken1989 | FragmentToken1990;
