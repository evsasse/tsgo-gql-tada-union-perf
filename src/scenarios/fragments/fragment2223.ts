import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2221 } from "./fragment2221";
import type { FragmentToken2222 } from "./fragment2222";

export const FRAGMENT_2223 = gql(`
  fragment Fragment2223 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult2223 = ResultOf<typeof FRAGMENT_2223>;
type FragmentSelf2223 = NonNullable<FragmentResult2223>;

export type FragmentToken2223 =
  | FragmentSelf2223["__typename"]
  | FragmentSelf2223["typenameHint"] | FragmentToken2221 | FragmentToken2222;
