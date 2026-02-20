import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3442 } from "./fragment3442";
import type { FragmentToken3443 } from "./fragment3443";

export const FRAGMENT_3444 = gql(`
  fragment Fragment3444 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult3444 = ResultOf<typeof FRAGMENT_3444>;
type FragmentSelf3444 = NonNullable<FragmentResult3444>;

export type FragmentToken3444 =
  | FragmentSelf3444["__typename"]
  | FragmentSelf3444["typenameHint"] | FragmentToken3442 | FragmentToken3443;
