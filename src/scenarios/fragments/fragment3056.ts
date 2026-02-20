import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3054 } from "./fragment3054";
import type { FragmentToken3055 } from "./fragment3055";

export const FRAGMENT_3056 = gql(`
  fragment Fragment3056 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult3056 = ResultOf<typeof FRAGMENT_3056>;
type FragmentSelf3056 = NonNullable<FragmentResult3056>;

export type FragmentToken3056 =
  | FragmentSelf3056["__typename"]
  | FragmentSelf3056["typenameHint"] | FragmentToken3054 | FragmentToken3055;
