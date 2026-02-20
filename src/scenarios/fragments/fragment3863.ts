import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3861 } from "./fragment3861";
import type { FragmentToken3862 } from "./fragment3862";

export const FRAGMENT_3863 = gql(`
  fragment Fragment3863 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult3863 = ResultOf<typeof FRAGMENT_3863>;
type FragmentSelf3863 = NonNullable<FragmentResult3863>;

export type FragmentToken3863 =
  | FragmentSelf3863["__typename"]
  | FragmentSelf3863["typenameHint"] | FragmentToken3861 | FragmentToken3862;
