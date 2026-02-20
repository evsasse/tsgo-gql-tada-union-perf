import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1759 } from "./fragment1759";
import type { FragmentToken1760 } from "./fragment1760";

export const FRAGMENT_1761 = gql(`
  fragment Fragment1761 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult1761 = ResultOf<typeof FRAGMENT_1761>;
type FragmentSelf1761 = NonNullable<FragmentResult1761>;

export type FragmentToken1761 =
  | FragmentSelf1761["__typename"]
  | FragmentSelf1761["typenameHint"] | FragmentToken1759 | FragmentToken1760;
