import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3031 } from "./fragment3031";
import type { FragmentToken3032 } from "./fragment3032";

export const FRAGMENT_3033 = gql(`
  fragment Fragment3033 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult3033 = ResultOf<typeof FRAGMENT_3033>;
type FragmentSelf3033 = NonNullable<FragmentResult3033>;

export type FragmentToken3033 =
  | FragmentSelf3033["__typename"]
  | FragmentSelf3033["typenameHint"] | FragmentToken3031 | FragmentToken3032;
