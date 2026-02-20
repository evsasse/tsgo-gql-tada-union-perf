import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3393 } from "./fragment3393";
import type { FragmentToken3394 } from "./fragment3394";

export const FRAGMENT_3395 = gql(`
  fragment Fragment3395 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult3395 = ResultOf<typeof FRAGMENT_3395>;
type FragmentSelf3395 = NonNullable<FragmentResult3395>;

export type FragmentToken3395 =
  | FragmentSelf3395["__typename"]
  | FragmentSelf3395["typenameHint"] | FragmentToken3393 | FragmentToken3394;
