import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1859 } from "./fragment1859";
import type { FragmentToken1860 } from "./fragment1860";

export const FRAGMENT_1861 = gql(`
  fragment Fragment1861 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult1861 = ResultOf<typeof FRAGMENT_1861>;
type FragmentSelf1861 = NonNullable<FragmentResult1861>;

export type FragmentToken1861 =
  | FragmentSelf1861["__typename"]
  | FragmentSelf1861["typenameHint"] | FragmentToken1859 | FragmentToken1860;
