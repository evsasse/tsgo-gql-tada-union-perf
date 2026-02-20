import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2473 } from "./fragment2473";
import type { FragmentToken2474 } from "./fragment2474";

export const FRAGMENT_2475 = gql(`
  fragment Fragment2475 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult2475 = ResultOf<typeof FRAGMENT_2475>;
type FragmentSelf2475 = NonNullable<FragmentResult2475>;

export type FragmentToken2475 =
  | FragmentSelf2475["__typename"]
  | FragmentSelf2475["typenameHint"] | FragmentToken2473 | FragmentToken2474;
