import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1858 } from "./fragment1858";
import type { FragmentToken1859 } from "./fragment1859";

export const FRAGMENT_1860 = gql(`
  fragment Fragment1860 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult1860 = ResultOf<typeof FRAGMENT_1860>;
type FragmentSelf1860 = NonNullable<FragmentResult1860>;

export type FragmentToken1860 =
  | FragmentSelf1860["__typename"]
  | FragmentSelf1860["typenameHint"] | FragmentToken1858 | FragmentToken1859;
