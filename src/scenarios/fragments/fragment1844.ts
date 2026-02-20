import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1842 } from "./fragment1842";
import type { FragmentToken1843 } from "./fragment1843";

export const FRAGMENT_1844 = gql(`
  fragment Fragment1844 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult1844 = ResultOf<typeof FRAGMENT_1844>;
type FragmentSelf1844 = NonNullable<FragmentResult1844>;

export type FragmentToken1844 =
  | FragmentSelf1844["__typename"]
  | FragmentSelf1844["typenameHint"] | FragmentToken1842 | FragmentToken1843;
