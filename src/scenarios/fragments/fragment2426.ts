import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2424 } from "./fragment2424";
import type { FragmentToken2425 } from "./fragment2425";

export const FRAGMENT_2426 = gql(`
  fragment Fragment2426 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult2426 = ResultOf<typeof FRAGMENT_2426>;
type FragmentSelf2426 = NonNullable<FragmentResult2426>;

export type FragmentToken2426 =
  | FragmentSelf2426["__typename"]
  | FragmentSelf2426["typenameHint"] | FragmentToken2424 | FragmentToken2425;
