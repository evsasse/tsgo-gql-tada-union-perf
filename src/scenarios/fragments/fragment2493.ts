import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2491 } from "./fragment2491";
import type { FragmentToken2492 } from "./fragment2492";

export const FRAGMENT_2493 = gql(`
  fragment Fragment2493 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult2493 = ResultOf<typeof FRAGMENT_2493>;
type FragmentSelf2493 = NonNullable<FragmentResult2493>;

export type FragmentToken2493 =
  | FragmentSelf2493["__typename"]
  | FragmentSelf2493["typenameHint"] | FragmentToken2491 | FragmentToken2492;
