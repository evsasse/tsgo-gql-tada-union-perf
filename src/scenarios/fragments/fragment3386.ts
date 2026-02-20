import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3384 } from "./fragment3384";
import type { FragmentToken3385 } from "./fragment3385";

export const FRAGMENT_3386 = gql(`
  fragment Fragment3386 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult3386 = ResultOf<typeof FRAGMENT_3386>;
type FragmentSelf3386 = NonNullable<FragmentResult3386>;

export type FragmentToken3386 =
  | FragmentSelf3386["__typename"]
  | FragmentSelf3386["typenameHint"] | FragmentToken3384 | FragmentToken3385;
