import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1905 } from "./fragment1905";
import type { FragmentToken1906 } from "./fragment1906";

export const FRAGMENT_1907 = gql(`
  fragment Fragment1907 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult1907 = ResultOf<typeof FRAGMENT_1907>;
type FragmentSelf1907 = NonNullable<FragmentResult1907>;

export type FragmentToken1907 =
  | FragmentSelf1907["__typename"]
  | FragmentSelf1907["typenameHint"] | FragmentToken1905 | FragmentToken1906;
