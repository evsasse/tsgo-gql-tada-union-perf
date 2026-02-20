import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3578 } from "./fragment3578";
import type { FragmentToken3579 } from "./fragment3579";

export const FRAGMENT_3580 = gql(`
  fragment Fragment3580 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult3580 = ResultOf<typeof FRAGMENT_3580>;
type FragmentSelf3580 = NonNullable<FragmentResult3580>;

export type FragmentToken3580 =
  | FragmentSelf3580["__typename"]
  | FragmentSelf3580["typenameHint"] | FragmentToken3578 | FragmentToken3579;
