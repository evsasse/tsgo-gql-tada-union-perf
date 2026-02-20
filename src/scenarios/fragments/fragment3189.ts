import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3187 } from "./fragment3187";
import type { FragmentToken3188 } from "./fragment3188";

export const FRAGMENT_3189 = gql(`
  fragment Fragment3189 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult3189 = ResultOf<typeof FRAGMENT_3189>;
type FragmentSelf3189 = NonNullable<FragmentResult3189>;

export type FragmentToken3189 =
  | FragmentSelf3189["__typename"]
  | FragmentSelf3189["typenameHint"] | FragmentToken3187 | FragmentToken3188;
