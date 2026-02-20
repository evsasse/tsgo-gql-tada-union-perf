import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3342 } from "./fragment3342";
import type { FragmentToken3343 } from "./fragment3343";

export const FRAGMENT_3344 = gql(`
  fragment Fragment3344 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult3344 = ResultOf<typeof FRAGMENT_3344>;
type FragmentSelf3344 = NonNullable<FragmentResult3344>;

export type FragmentToken3344 =
  | FragmentSelf3344["__typename"]
  | FragmentSelf3344["typenameHint"] | FragmentToken3342 | FragmentToken3343;
