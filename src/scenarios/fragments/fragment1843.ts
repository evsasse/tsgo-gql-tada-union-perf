import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1841 } from "./fragment1841";
import type { FragmentToken1842 } from "./fragment1842";

export const FRAGMENT_1843 = gql(`
  fragment Fragment1843 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult1843 = ResultOf<typeof FRAGMENT_1843>;
type FragmentSelf1843 = NonNullable<FragmentResult1843>;

export type FragmentToken1843 =
  | FragmentSelf1843["__typename"]
  | FragmentSelf1843["typenameHint"] | FragmentToken1841 | FragmentToken1842;
