import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1902 } from "./fragment1902";
import type { FragmentToken1903 } from "./fragment1903";

export const FRAGMENT_1904 = gql(`
  fragment Fragment1904 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult1904 = ResultOf<typeof FRAGMENT_1904>;
type FragmentSelf1904 = NonNullable<FragmentResult1904>;

export type FragmentToken1904 =
  | FragmentSelf1904["__typename"]
  | FragmentSelf1904["typenameHint"] | FragmentToken1902 | FragmentToken1903;
