import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3179 } from "./fragment3179";
import type { FragmentToken3180 } from "./fragment3180";

export const FRAGMENT_3181 = gql(`
  fragment Fragment3181 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult3181 = ResultOf<typeof FRAGMENT_3181>;
type FragmentSelf3181 = NonNullable<FragmentResult3181>;

export type FragmentToken3181 =
  | FragmentSelf3181["__typename"]
  | FragmentSelf3181["typenameHint"] | FragmentToken3179 | FragmentToken3180;
