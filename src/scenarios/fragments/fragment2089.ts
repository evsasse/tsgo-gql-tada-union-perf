import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2087 } from "./fragment2087";
import type { FragmentToken2088 } from "./fragment2088";

export const FRAGMENT_2089 = gql(`
  fragment Fragment2089 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult2089 = ResultOf<typeof FRAGMENT_2089>;
type FragmentSelf2089 = NonNullable<FragmentResult2089>;

export type FragmentToken2089 =
  | FragmentSelf2089["__typename"]
  | FragmentSelf2089["typenameHint"] | FragmentToken2087 | FragmentToken2088;
