import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2220 } from "./fragment2220";
import type { FragmentToken2221 } from "./fragment2221";

export const FRAGMENT_2222 = gql(`
  fragment Fragment2222 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult2222 = ResultOf<typeof FRAGMENT_2222>;
type FragmentSelf2222 = NonNullable<FragmentResult2222>;

export type FragmentToken2222 =
  | FragmentSelf2222["__typename"]
  | FragmentSelf2222["typenameHint"] | FragmentToken2220 | FragmentToken2221;
