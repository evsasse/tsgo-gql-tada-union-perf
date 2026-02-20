import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1873 } from "./fragment1873";
import type { FragmentToken1874 } from "./fragment1874";

export const FRAGMENT_1875 = gql(`
  fragment Fragment1875 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult1875 = ResultOf<typeof FRAGMENT_1875>;
type FragmentSelf1875 = NonNullable<FragmentResult1875>;

export type FragmentToken1875 =
  | FragmentSelf1875["__typename"]
  | FragmentSelf1875["typenameHint"] | FragmentToken1873 | FragmentToken1874;
