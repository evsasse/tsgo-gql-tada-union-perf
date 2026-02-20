import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1886 } from "./fragment1886";
import type { FragmentToken1887 } from "./fragment1887";

export const FRAGMENT_1888 = gql(`
  fragment Fragment1888 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult1888 = ResultOf<typeof FRAGMENT_1888>;
type FragmentSelf1888 = NonNullable<FragmentResult1888>;

export type FragmentToken1888 =
  | FragmentSelf1888["__typename"]
  | FragmentSelf1888["typenameHint"] | FragmentToken1886 | FragmentToken1887;
