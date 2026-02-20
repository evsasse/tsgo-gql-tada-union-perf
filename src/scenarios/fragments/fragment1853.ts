import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1851 } from "./fragment1851";
import type { FragmentToken1852 } from "./fragment1852";

export const FRAGMENT_1853 = gql(`
  fragment Fragment1853 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult1853 = ResultOf<typeof FRAGMENT_1853>;
type FragmentSelf1853 = NonNullable<FragmentResult1853>;

export type FragmentToken1853 =
  | FragmentSelf1853["__typename"]
  | FragmentSelf1853["typenameHint"] | FragmentToken1851 | FragmentToken1852;
