import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1906 } from "./fragment1906";
import type { FragmentToken1907 } from "./fragment1907";

export const FRAGMENT_1908 = gql(`
  fragment Fragment1908 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult1908 = ResultOf<typeof FRAGMENT_1908>;
type FragmentSelf1908 = NonNullable<FragmentResult1908>;

export type FragmentToken1908 =
  | FragmentSelf1908["__typename"]
  | FragmentSelf1908["typenameHint"] | FragmentToken1906 | FragmentToken1907;
