import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1910 } from "./fragment1910";
import type { FragmentToken1911 } from "./fragment1911";

export const FRAGMENT_1912 = gql(`
  fragment Fragment1912 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult1912 = ResultOf<typeof FRAGMENT_1912>;
type FragmentSelf1912 = NonNullable<FragmentResult1912>;

export type FragmentToken1912 =
  | FragmentSelf1912["__typename"]
  | FragmentSelf1912["typenameHint"] | FragmentToken1910 | FragmentToken1911;
