import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1796 } from "./fragment1796";
import type { FragmentToken1797 } from "./fragment1797";

export const FRAGMENT_1798 = gql(`
  fragment Fragment1798 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult1798 = ResultOf<typeof FRAGMENT_1798>;
type FragmentSelf1798 = NonNullable<FragmentResult1798>;

export type FragmentToken1798 =
  | FragmentSelf1798["__typename"]
  | FragmentSelf1798["typenameHint"] | FragmentToken1796 | FragmentToken1797;
