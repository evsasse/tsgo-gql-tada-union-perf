import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1924 } from "./fragment1924";
import type { FragmentToken1925 } from "./fragment1925";

export const FRAGMENT_1926 = gql(`
  fragment Fragment1926 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult1926 = ResultOf<typeof FRAGMENT_1926>;
type FragmentSelf1926 = NonNullable<FragmentResult1926>;

export type FragmentToken1926 =
  | FragmentSelf1926["__typename"]
  | FragmentSelf1926["typenameHint"] | FragmentToken1924 | FragmentToken1925;
