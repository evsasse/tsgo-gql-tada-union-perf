import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1830 } from "./fragment1830";
import type { FragmentToken1831 } from "./fragment1831";

export const FRAGMENT_1832 = gql(`
  fragment Fragment1832 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult1832 = ResultOf<typeof FRAGMENT_1832>;
type FragmentSelf1832 = NonNullable<FragmentResult1832>;

export type FragmentToken1832 =
  | FragmentSelf1832["__typename"]
  | FragmentSelf1832["typenameHint"] | FragmentToken1830 | FragmentToken1831;
