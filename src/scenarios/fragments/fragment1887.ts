import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1885 } from "./fragment1885";
import type { FragmentToken1886 } from "./fragment1886";

export const FRAGMENT_1887 = gql(`
  fragment Fragment1887 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult1887 = ResultOf<typeof FRAGMENT_1887>;
type FragmentSelf1887 = NonNullable<FragmentResult1887>;

export type FragmentToken1887 =
  | FragmentSelf1887["__typename"]
  | FragmentSelf1887["typenameHint"] | FragmentToken1885 | FragmentToken1886;
