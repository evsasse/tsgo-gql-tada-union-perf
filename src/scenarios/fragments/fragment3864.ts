import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3862 } from "./fragment3862";
import type { FragmentToken3863 } from "./fragment3863";

export const FRAGMENT_3864 = gql(`
  fragment Fragment3864 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult3864 = ResultOf<typeof FRAGMENT_3864>;
type FragmentSelf3864 = NonNullable<FragmentResult3864>;

export type FragmentToken3864 =
  | FragmentSelf3864["__typename"]
  | FragmentSelf3864["typenameHint"] | FragmentToken3862 | FragmentToken3863;
