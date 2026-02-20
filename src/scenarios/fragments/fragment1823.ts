import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1821 } from "./fragment1821";
import type { FragmentToken1822 } from "./fragment1822";

export const FRAGMENT_1823 = gql(`
  fragment Fragment1823 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult1823 = ResultOf<typeof FRAGMENT_1823>;
type FragmentSelf1823 = NonNullable<FragmentResult1823>;

export type FragmentToken1823 =
  | FragmentSelf1823["__typename"]
  | FragmentSelf1823["typenameHint"] | FragmentToken1821 | FragmentToken1822;
