import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1848 } from "./fragment1848";
import type { FragmentToken1849 } from "./fragment1849";

export const FRAGMENT_1850 = gql(`
  fragment Fragment1850 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult1850 = ResultOf<typeof FRAGMENT_1850>;
type FragmentSelf1850 = NonNullable<FragmentResult1850>;

export type FragmentToken1850 =
  | FragmentSelf1850["__typename"]
  | FragmentSelf1850["typenameHint"] | FragmentToken1848 | FragmentToken1849;
