import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1913 } from "./fragment1913";
import type { FragmentToken1914 } from "./fragment1914";

export const FRAGMENT_1915 = gql(`
  fragment Fragment1915 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult1915 = ResultOf<typeof FRAGMENT_1915>;
type FragmentSelf1915 = NonNullable<FragmentResult1915>;

export type FragmentToken1915 =
  | FragmentSelf1915["__typename"]
  | FragmentSelf1915["typenameHint"] | FragmentToken1913 | FragmentToken1914;
