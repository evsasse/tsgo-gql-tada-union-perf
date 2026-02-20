import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1870 } from "./fragment1870";
import type { FragmentToken1871 } from "./fragment1871";

export const FRAGMENT_1872 = gql(`
  fragment Fragment1872 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult1872 = ResultOf<typeof FRAGMENT_1872>;
type FragmentSelf1872 = NonNullable<FragmentResult1872>;

export type FragmentToken1872 =
  | FragmentSelf1872["__typename"]
  | FragmentSelf1872["typenameHint"] | FragmentToken1870 | FragmentToken1871;
