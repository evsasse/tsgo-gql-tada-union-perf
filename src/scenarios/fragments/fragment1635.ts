import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1633 } from "./fragment1633";
import type { FragmentToken1634 } from "./fragment1634";

export const FRAGMENT_1635 = gql(`
  fragment Fragment1635 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult1635 = ResultOf<typeof FRAGMENT_1635>;
type FragmentSelf1635 = NonNullable<FragmentResult1635>;

export type FragmentToken1635 =
  | FragmentSelf1635["__typename"]
  | FragmentSelf1635["typenameHint"] | FragmentToken1633 | FragmentToken1634;
